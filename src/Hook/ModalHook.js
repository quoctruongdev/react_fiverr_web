import { useState, useCallback } from "react";
const useModal = () => {
  const [type, setType] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback((value) => {
    setOpen(true);
    setType(value);
  }, []);
  const handleClose = useCallback(() => setOpen(false), []);

  return {
    type,
    open,
    handleOpen,
    handleClose,
  };
};

export default useModal;
