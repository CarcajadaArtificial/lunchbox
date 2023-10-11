import { useState } from 'preact/hooks';

export const useDialog = () => {
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

  const toggleDiaglog = () => setDialogOpen(!isDialogOpen);

  return {
    isDialogOpen,
    setDialogOpen,
    toggleDiaglog,
  };
};
