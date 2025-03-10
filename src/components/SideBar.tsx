import { useRouter } from "next/router";
import { useState } from "react";
import { FaHome, FaUser, FaGithub, FaFilePdf, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div className={`h-screen fixed top-0 left-0 bg-gray-900 text-white flex flex-col z-50 transition-all duration-300 ${isOpen ? "w-64" : "w-16"}`}>
      <button className="p-4 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <nav className="flex flex-col gap-4 mt-4">
        <a onClick={() => router.push("/")} className="flex items-center p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
          <FaHome size={20} /> {isOpen && <span className="ml-3">Início</span>}
        </a>
        <a onClick={() => router.push("/sobre")} className="flex items-center p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
          <FaUser size={20} /> {isOpen && <span className="ml-3">Sobre</span>}
        </a>
        <a onClick={() => router.push("/repos")} className="flex items-center p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
          <FaGithub size={20} /> {isOpen && <span className="ml-3">Repositórios</span>}
        </a>
        <a
          href="/curriculo.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-3 hover:bg-gray-700 rounded-lg cursor-pointer"
        >
          <FaFilePdf size={20} /> {isOpen && <span className="ml-3">Currículo</span>}
        </a>
        <a href="#contato" className="flex items-center p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
          <FaWhatsapp size={20} /> {isOpen && <span className="ml-3">Contato</span>}
        </a>
      </nav>
    </div>
  );
}
