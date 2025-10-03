// src/components/Header.jsx
import { useState } from "react";
import logo from "../../assets/logo.svg";
import bgHeader from "../../assets/body-header.png";
import { ChevronDown, Menu, X } from "lucide-react"; // ícones

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const phoneNumber = "5517997558800"; // coloque seu número com DDI e DDD
  const message = "Olá, gostaria de mais informações!";

  const handleContact = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank"); // abre em uma nova aba
  };

  return (
    <div
      className="relative w-full min-h-[912px] bg-center bg-cover overflow-x-hidden"
      style={{ backgroundImage: `url(${bgHeader})` }}
    >
      {/* Overlay preto na section inteira */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Header fixo com blur */}
      <header className="fixed top-0 left-0 w-full z-50 h-20 bg-black/20 backdrop-blur-md">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-6 h-full text-white">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-8 text-sm">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#areas" className="hover:text-gray-300">
              Áreas de atuação
            </a>
            <a href="#about" className="hover:text-gray-300">
              Sobre nós
            </a>
            <button
              onClick={() => handleContact()}
              className="ml-6 px-4 py-2 font-medium bg-white text-black rounded-md shadow hover:bg-gray-100 transition"
            >
              Solicitar contato
            </button>
          </nav>

          {/* Botão menu mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <div className="md:hidden fixed top-20 left-0 w-full bg-black/90 backdrop-blur-lg text-white flex flex-col items-center py-6 space-y-4 z-40">
            <a href="#" className="font-semibold">
              Home
            </a>
            <a href="#areas" className="hover:text-gray-300">
              Áreas de atuação
            </a>
            <a href="#about" className="hover:text-gray-300">
              Sobre nós
            </a>
            <button className="px-4 py-2 bg-white text-black rounded-md shadow hover:bg-gray-100 transition">
              Solicitar contato
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative w-full min-h-[912px] flex flex-col">
        <div className="gap-6 relative flex flex-col items-center justify-center text-center text-white min-h-[912px] px-4">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-10 w-auto" />

          {/* Texto principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Seu direito e a sua tranquilidade <br className="hidden sm:block" />
            Jurídica é a nossa Missão
          </h1>

          {/* Subtexto */}
          <p className="mt-4 text-base sm:text-lg text-gray-200">
            Fale com um dos nossos advogados →
          </p>

          {/* Ícone mouse scroll */}
          <a
            href="#areas"
            className="absolute bottom-20 sm:bottom-28 flex justify-center cursor-pointer"
          >
            <ChevronDown className="w-10 h-10 sm:w-12 sm:h-12 animate-bounce text-white" />
          </a>
        </div>
      </section>
    </div>
  );
}
