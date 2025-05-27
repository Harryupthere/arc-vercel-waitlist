import React, { useEffect } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const AlertPopup = ({ type = 'success', message = '', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // auto-close after 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  const isSuccess = type === 'success';

  return (
    <div className={`fixed top-5 right-5 z-50 text-white backdrop-blur-md bg-white/10 border px-4 py-3 rounded-xl flex items-center gap-3 shadow-lg ${
      isSuccess ? 'border-green-500' : 'border-red-500'
    }`}>
      {isSuccess ? (
        <CheckCircle size={22} className="text-green-400" />
      ) : (
        <XCircle size={22} className="text-red-400" />
      )}
      <span className="text-sm">{message}</span>
    </div>
  );
};

export default AlertPopup;
