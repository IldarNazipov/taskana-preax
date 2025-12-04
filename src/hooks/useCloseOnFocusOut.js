import { useEffect } from 'react';

export const useCloseOnFocusOut = (ref, isOpen, onClose) => {
  useEffect(() => {
    if (!isOpen) return;

    const element = ref.current;

    const handleFocusOut = (e) => {
      if (element && !element.contains(e.relatedTarget)) {
        onClose();
      }
    };

    document.addEventListener('focusout', handleFocusOut);

    return () => document.removeEventListener('focusout', handleFocusOut);
  }, [ref, isOpen, onClose]);
};
