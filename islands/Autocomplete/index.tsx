//     _       _                          _     _
//    /_\ _  _| |_ ___  __ ___ _ __  _ __| |___| |_ ___
//   / _ \ || |  _/ _ \/ _/ _ \ '  \| '_ \ / -_)  _/ -_)
//  /_/ \_\_,_|\__\___/\__\___/_|_|_| .__/_\___|\__\___|
//                                  |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Autocomplete
 * *Organism*
 *
 * This module contains the render function for the `<Autocomplete />` island.
 *
 * @module
 */
import { useRef, useState } from 'preact/hooks';
import setup, { type iAutocomplete } from './setup.ts';
import Chip from '../../components/Chip/index.tsx';
import Input from '../../components/Input/index.tsx';
import Text from '../../components/Text/index.tsx';
import { handleKeyboard, Key } from '../../src/handlers.ts';

/**
 * -----------------------------------------------------------------------------------------------------
 * `<Autocomplete />`
 * -----------------------------------------------------------------------------------------------------
 * The Autocomplete component provides a text input with suggestions dropdown based on user input.
 * It allows selecting from predefined options and handles keyboard events for selection and navigation.
 *
 * @prop {string[]} initialValues
 *  Initial set of options available for selection.
 *
 * @prop {Function} onSubmit
 *  Callback function triggered when an option is selected or the enter key is pressed.
 *
 * -----------------------------------------------------------------------------------------------------
 */
export default function (props: Partial<iAutocomplete>) {
  const { c, fwd, fref, initialValues, onSubmit, ...p } = setup(props);
  const [options, setOptions] = useState<string[]>(initialValues);
  const [matchingOptions, setMatchingOptions] = useState<string[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const inputReference = useRef<HTMLInputElement>(null);

  /**
   * ---------------------------------------------------------------------------------------------------
   * handleSelectOption
   * ---------------------------------------------------------------------------------------------------
   * This function handles the event when a user selects an option from the suggestion's menu.
   */
  function handleSelectOption(ev: Event) {
    const inputElement = inputReference.current!;
    inputElement.value =
      (ev.currentTarget as HTMLDivElement).attributes.getNamedItem(
        'data-name',
      )!.value;
    inputElement.focus();
    setMatchingOptions([]);
  }

  /**
   * ---------------------------------------------------------------------------------------------------
   * inputKeyboardHandlers
   * ---------------------------------------------------------------------------------------------------
   * This constant stores all the keyboard events of the automcomplete's input element.
   */
  const inputKeyboardHandlers = handleKeyboard([
    {
      keys: [Key.Enter],
      except: [],
      cb: (ev) => {
        const inputElement = ev.currentTarget as HTMLInputElement;
        onSubmit(inputElement.value);
        if (options.includes(inputElement.value)) {
          setOptions([inputElement.value, ...options]);
        }
        setMatchingOptions([]);
        setSelectedOptions([inputElement.value, ...selectedOptions]);
        inputElement.value = '';
      },
    },
    {
      keys: [Key.Escape],
      except: [],
      cb: () => setMatchingOptions([]),
    },
    {
      keys: [],
      except: [Key.Escape, Key.Enter],
      cb: (ev) =>
        setMatchingOptions(
          options.filter((option) =>
            RegExp((ev.currentTarget as HTMLInputElement).value)
              .test(option) && !selectedOptions.includes(option)
          ),
        ),
    },
  ]);

  /**
   * ---------------------------------------------------------------------------------------------------
   * optionKeyboardHandler
   * ---------------------------------------------------------------------------------------------------
   * This constant stores all the keyboard events of the automcomplete's input element.
   */
  const optionKeyboardHandler = handleKeyboard([
    {
      keys: [Key.Enter],
      except: [],
      cb: handleSelectOption,
    },
    {
      keys: [Key.Left],
      except: [],
      cb: () => inputReference.current!.focus(),
    },
  ]);

  return (
    <div class={c.wrapper} {...fwd.wrapper}>
      <Input
        onKeyUp={inputKeyboardHandlers}
        label={'Add tag'}
        type='text'
        fref={inputReference}
        autofocus
        class={c.autocomplete}
        {...p}
      />
      <div class={c.relativeContainer} {...fwd.relativeContainer}>
        <div
          class={c.menuWrapper}
          {...fwd.menuWrapper}
        >
          {matchingOptions.map((option) => (
            <div
              tabindex={0}
              class={c.menuOption}
              onKeyUp={optionKeyboardHandler}
              onClick={handleSelectOption}
              data-name={option}
              {...fwd.menuOption}
            >
              <Text class={c.menuOptionText} {...fwd.menuOptionText} noMargins>
                {option}
              </Text>
            </div>
          ))}
        </div>
      </div>
      <div class={c.selectionsWrapper} {...fwd.selectionsWrapper}>
        {selectedOptions.map((option) => (
          <Chip
            class={c.selectedOption}
            {...fwd.selectedOption}
            content={option}
          />
        ))}
      </div>
    </div>
  );
}
