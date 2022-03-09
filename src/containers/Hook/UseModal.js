import { useCallback, useState } from "react";

const useModal = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const showModal = useCallback(() => setState(() => true), []);
  const hiddenModal = useCallback(() => setState(() => false), []);

  return [state, showModal, hiddenModal];
};
export default useModal;
