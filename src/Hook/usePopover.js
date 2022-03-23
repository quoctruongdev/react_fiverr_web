import { useState, useCallback } from "react";

const usePopover = () => {
  const [openPopover, setOpenPopover] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopperClick = useCallback((event) => {
    setAnchorEl(event?.currentTarget);
    setOpenPopover((previousOpen) => !previousOpen);
  }, []);
  const handleClickAway = useCallback(() => {
    setOpenPopover(false);
  }, []);

  return {
    openPopover,
    anchorEl,
    handlePopperClick,
    handleClickAway,
  };
};
export default usePopover;
