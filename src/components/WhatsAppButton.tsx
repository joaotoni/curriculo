import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message }) => {
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button onClick={handleClick} className='flex gap-2 items-center px-4 py-2 rounded-lg hover:bg-third transition'>
      <FaWhatsapp size={20} />
      WhatsApp
    </button>
  );
};

export default WhatsAppButton;