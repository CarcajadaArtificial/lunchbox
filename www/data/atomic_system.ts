import docJson from "./doc.json" with { type: "json" };
import { periodt } from "@carcajada/periodt";
import clr from "lunchbox/particles/clr.ts";

export const particles = [
  { symbol: "α", name: "area", color: clr.panel.bg_50 },
  { symbol: "β", name: "btn", color: clr.brand.bg_60 },
  { symbol: "γ", name: "clr", color: clr.brand.bg_60 },
  { symbol: "δ", name: "focus", color: clr.error.bg_50 },
  { symbol: "ε", name: "input", color: clr.neutral.bg_25 },
  { symbol: "ζ", name: "layout", color: clr.neutral.bg_10 },
  { symbol: "ψ", name: "text", color: clr.neutral.bg_25 },
];

export const atoms = [
  { symbol: "As", name: "Aside.Sticky", group: "A" },
  { symbol: "X", name: "KatexStyles", group: "X" },
  { symbol: "K", name: "Kbd", group: "K" },
  { symbol: "L", name: "Link", group: "L" },
  { symbol: "Ns", name: "Nav.Sticky", group: "N" },
  { symbol: "P", name: "Prose", group: "R" },
  { symbol: "S", name: "Separator", group: "S" },

  { symbol: "Cc", name: "Code.Content", group: "C" },
  { symbol: "Ci", name: "Code.Inline", group: "C" },

  { symbol: "Dt", name: "Details.Container", group: "D" },
  { symbol: "Ds", name: "Details.Sumary", group: "D" },

  { symbol: "Ul", name: "List.UL", group: "T" },
  { symbol: "Ol", name: "List.OL", group: "T" },

  { symbol: "B", name: "Body", group: "P" },
  { symbol: "M", name: "Main", group: "P" },
  { symbol: "H", name: "Header", group: "P" },
  { symbol: "F", name: "Footer", group: "P" },

  { symbol: "Bb", name: "Button.Brand", group: "B" },
  { symbol: "Bp", name: "Button.Panel", group: "B" },
  { symbol: "Bg", name: "Button.Page", group: "B" },
  { symbol: "Be", name: "Button.Error", group: "B" },

  { symbol: "H0", name: "H0", group: "H" },
  { symbol: "H1", name: "H1", group: "H" },
  { symbol: "H2", name: "H2", group: "H" },
  { symbol: "H3", name: "H3", group: "H" },

  { symbol: "Ib", name: "Input.Submit", group: "I" },
  { symbol: "Ic", name: "Input.Container", group: "I" },
  { symbol: "Ie", name: "Input.Error", group: "I" },
  { symbol: "If", name: "Input.Fieldset", group: "I" },
  { symbol: "Ig", name: "Input.Legend", group: "I" },
  { symbol: "Ii", name: "Input.Field", group: "I" },
  { symbol: "Ik", name: "Input.Check", group: "I" },
  { symbol: "Il", name: "Input.Label", group: "I" },
  { symbol: "Ir", name: "Input.Radio", group: "I" },
  { symbol: "Is", name: "Input.Select", group: "I" },
  { symbol: "It", name: "Input.Textarea", group: "I" },
  { symbol: "Ix", name: "Input.Text", group: "I" },
];

export const atomGroupColors: Record<string, string> = {
  "A": clr.brand.bg_60,
  "X": clr.error.bg_50,
  "K": clr.panel.bg,
  "L": clr.panel.bg,
  "N": clr.error.bg_50,
  "R": clr.error.bg_50,
  "S": clr.error.bg_50,
  "C": clr.brand.bg_30,
  "D": clr.neutral.bg_10,
  "T": clr.panel.bg,
  "P": clr.error.bg_50,
  "B": clr.brand.bg_60,
  "H": clr.neutral.bg_25,
  "I": clr.panel.bg_50,
};

export const periodicTable = periodt<
  { symbol: string; name: string; group: string }
>(
  atoms,
  (atom) => atom.group,
  () => ({ symbol: "", name: "", group: "" }),
);

const moduleDocs = docJson.nodes.filter((node) => node.kind === "moduleDoc");

export const particleDocs = moduleDocs.find((doc) =>
  doc.location.filename.includes("particles.ts")
)?.jsDoc?.doc;
export const atomDocs = moduleDocs.find((doc) =>
  doc.location.filename.includes("atoms.ts")
)?.jsDoc?.doc;
export const moleculeDocs = moduleDocs.find((doc) =>
  doc.location.filename.includes("molecules.ts")
)?.jsDoc?.doc;
