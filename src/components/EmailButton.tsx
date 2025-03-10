import React from "react";
import { FaEnvelope } from "react-icons/fa";

interface EmailButtonProps {
  email: string;
  subject: string;
  body: string;
}

const EmailButton: React.FC<EmailButtonProps> = ({ email, subject, body }) => {
  const handleClick = () => {
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="flex gap-2 items-center text-white px-4 py-2 rounded-lg hover:bg-third transition"
    >
      <FaEnvelope size={20} />
      E-mail
    </button>
  );
};

export default EmailButton;
