import { useEffect } from 'react';

export const useCloseOnClickOutside = (ref, isOpen, onClose) => {
  useEffect(() => {
    if (!isOpen) return;

    const element = ref.current;

    const handleClickOutside = (e) => {
      if (element && !element.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, isOpen, onClose]);
};
