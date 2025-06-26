import { useEffect } from 'preact/hooks';

const DIRECTIONS = [
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
];
type Direction = typeof DIRECTIONS[number];

const SHAKE_CLASSES = [
  'shake_up',
  'shake_down',
  'shake_left',
  'shake_right',
  'shake',
] as const;
type ShakeClass = typeof SHAKE_CLASSES[number];

function overlaps(aMin: number, aMax: number, bMin: number, bMax: number) {
  return !(aMax < bMin || aMin > bMax);
}

function findCandidate(
  current: HTMLElement,
  direction: Direction,
  candidates: HTMLElement[],
  padding: number = 0,
): HTMLElement | null {
  const currentRect = current.getBoundingClientRect();
  const paddedY = {
    min: currentRect.top - padding,
    max: currentRect.bottom + padding,
  };
  const paddedX = {
    min: currentRect.left - padding,
    max: currentRect.right + padding,
  };

  type Entry = { el: HTMLElement; distance: number };
  const entries: Entry[] = [];

  for (const el of candidates) {
    if (el === current) continue;
    const rect = el.getBoundingClientRect();
    let distance = Infinity;
    let ok = false;

    switch (direction) {
      case 'ArrowRight':
        ok = rect.left > currentRect.right &&
          overlaps(rect.top, rect.bottom, paddedY.min, paddedY.max);
        if (ok) distance = rect.left - currentRect.right;
        break;
      case 'ArrowLeft':
        ok = rect.right < currentRect.left &&
          overlaps(rect.top, rect.bottom, paddedY.min, paddedY.max);
        if (ok) distance = currentRect.left - rect.right;
        break;
      case 'ArrowDown':
        ok = rect.top > currentRect.bottom &&
          overlaps(rect.left, rect.right, paddedX.min, paddedX.max);
        if (ok) distance = rect.top - currentRect.bottom;
        break;
      case 'ArrowUp':
        ok = rect.bottom < currentRect.top &&
          overlaps(rect.left, rect.right, paddedX.min, paddedX.max);
        if (ok) distance = currentRect.top - rect.bottom;
        break;
    }

    if (ok) entries.push({ el, distance });
  }

  if (entries.length === 0) return null;

  // pick the entry with the smallest distance
  let best = entries[0];
  for (const e of entries) {
    if (e.distance < best.distance) best = e;
  }

  return best.el;
}

function resetShake(el: HTMLElement, exclude?: ShakeClass) {
  SHAKE_CLASSES.forEach((cls) => {
    if (cls !== exclude && el.classList.contains(cls)) {
      el.classList.remove(cls);
    }
  });
}

function handleKeyDown(this: HTMLElement, e: KeyboardEvent) {
  const { key } = e;

  if (key === 'Enter') {
    resetShake(this);
    void this.offsetWidth;
    this.classList.add('shake');
    return;
  }

  if (key === 'Esc') this.blur();

  if (!DIRECTIONS.includes(key)) return;

  e.preventDefault();
  resetShake(this);

  const tabbedElements = Array.from(
    document.querySelectorAll<HTMLElement>('[tabindex="0"]'),
  );
  const candidate = findCandidate(this, key, tabbedElements, 100);

  if (candidate) {
    this.removeEventListener('keydown', handleKeyDown);
    candidate.focus();
    return;
  }

  const dir = key.replace('Arrow', '').toLowerCase();
  const shakeClass = `shake_${dir}` as ShakeClass;

  this.classList.add(shakeClass);
}

/**
 * Attach the `handleKeyDown()` listener when an element is focused.
 */
function handleFocusIn(e: FocusEvent) {
  const t = e.target;
  if (t instanceof HTMLElement && t.tabIndex === 0) {
    t.addEventListener('keydown', handleKeyDown);
  }
}

/**
 * Remove the `handleKeyDown()` listener when an element is focused.
 */
function handleFocusOut(e: FocusEvent) {
  const t = e.target;
  if (t instanceof HTMLElement && t.tabIndex === 0) {
    t.removeEventListener('keydown', handleKeyDown);
    resetShake(t);
  }
}

export default function () {
  document.addEventListener('focusin', handleFocusIn);
  document.addEventListener('focusout', handleFocusOut);
}
