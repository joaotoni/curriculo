import { useRouter } from "next/router";
import { useState } from "react";
import { FaHome, FaUser, FaGithub, FaFilePdf, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-fifthy text-white p-2 rounded-full shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <FaBars size={24} />
      </button>

      <div className={`hidden md:flex h-screen fixed top-0 left-0 z-10 bg-fifthy text-white flex-col transition-all duration-300 ${isOpen ? "w-64" : "w-16"}`}>
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
          <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 hover:bg-third rounded-lg cursor-pointer">
            <FaFilePdf size={20} /> {isOpen && <span className="ml-3">Currículo</span>}
          </a>
          <a href="#contato" className="flex items-center p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
            <FaWhatsapp size={20} /> {isOpen && <span className="ml-3">Contato</span>}
          </a>
        </nav>
      </div>

      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-fifthy bg-opacity-90 flex flex-col items-center justify-center text-white z-50">
          <button className="absolute top-4 right-4 text-white text-3xl" onClick={() => setIsOpen(false)}>
            <FaTimes />
          </button>

          <nav className="flex flex-col gap-6 text-lg pb-20">
            <a onClick={() => { router.push("/"); setIsOpen(false); }} className="cursor-pointer">
              <FaHome className="inline mr-2" /> Início
            </a>
            <a onClick={() => { router.push("/sobre"); setIsOpen(false); }} className="cursor-pointer">
              <FaUser className="inline mr-2" /> Sobre
            </a>
            <a onClick={() => { router.push("/repos"); setIsOpen(false); }} className="cursor-pointer">
              <FaGithub className="inline mr-2" /> Repositórios
            </a>
            <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <FaFilePdf className="inline mr-2" /> Currículo
            </a>
            <a href="#contato" className="cursor-pointer">
              <FaWhatsapp className="inline mr-2" /> Contato
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
