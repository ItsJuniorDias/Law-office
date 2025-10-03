// src/components/Header.jsx
import logo from "../../assets/logo.svg";
import bgHeader from "../../assets/body-header.png";
import { ChevronDown } from "lucide-react"; // usando lucide-react para ícone

export default function Header() {
  return (
    <div
      className="relative w-full h-[912px] bg-center bg-cover"
      style={{ backgroundImage: `url(${bgHeader})` }}
    >
      {/* Overlay preto na section inteira */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Header fixo com blur */}
      <header className="fixed top-0 left-0 w-full z-50 h-20 bg-black/20 backdrop-blur-md">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-6 h-full text-white">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Navegação */}
          <nav className="flex items-center space-x-8 text-sm">
            <a href="#" className="font-semibold">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              Áreas de atuação
            </a>
            <a href="#" className="hover:text-gray-300">
              Sobre nós
            </a>
          </nav>

          {/* Botão */}
          <button className="ml-6 px-4 py-2 bg-white text-black rounded-md shadow hover:bg-gray-100 transition">
            Solicitar contato
          </button>
        </div>
      </header>

      <section className="relative w-full h-[912px] bg-center bg-cover flex flex-col">
        {/* Conteúdo */}
        <div className="gap-8 relative flex flex-col items-center justify-center text-center text-white h-full px-6">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-10 w-auto" />

          {/* Texto principal */}
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Seu direito e a sua tranquilidade <br />
            Jurídica é a nossa Missão
          </h1>

          {/* Subtexto */}
          <p className="mt-6 text-lg text-gray-200">
            Fale com um dos nossos advogados →
          </p>

          {/* Ícone mouse scroll */}
          <div className="absolute bottom-64 flex justify-center">
            <ChevronDown className="w-12 h-12 animate-bounce" />
          </div>
        </div>
      </section>
    </div>
  );
}
