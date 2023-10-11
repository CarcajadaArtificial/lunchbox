import { ComponentChildren } from 'preact';
import Button from '../components/Button/index.tsx';
import Dialog from '../components/Dialog/index.tsx';
import { useDialog } from '../src/hooks.ts';
import { IconX } from '../deps.ts';

interface iXDialog {
  children: ComponentChildren;
}

export default function (props: Partial<iXDialog>) {
  const { isDialogOpen, toggleDiaglog } = useDialog();

  return (
    <>
      <Button class='mb-1.5' OnExtendedClick={toggleDiaglog}>
        Test
      </Button>
      <Dialog open={isDialogOpen}>
        <div class='flex flex-row-reverse'>
          <Button compact type='invisible' OnExtendedClick={toggleDiaglog}>
            <IconX />
          </Button>
        </div>
        {props.children}
      </Dialog>
    </>
  );
}
