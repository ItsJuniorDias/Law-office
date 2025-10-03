import logoGold from "../../assets/logo-gold.svg";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0c1725] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo e contato */}
        <div>
          <img src={logoGold} alt="Lemes Advocacia" className="h-12 mb-6" />
          <div className="flex items-start gap-3 mb-4">
            <Phone className="w-5 h-5 text-yellow-500" />
            <div>
              <p className="font-semibold">Contato</p>
              <p className="text-sm">17 99755-8800</p>
            </div>
          </div>
          <div className="flex items-start gap-3 mb-4">
            <Mail className="w-5 h-5 text-yellow-500" />
            <div>
              <p className="font-semibold">E-mail</p>
              <p className="text-sm">lemessadvocacia@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-yellow-500" />
            <div>
              <p className="font-semibold">Endereço</p>
              <p className="text-sm">Av. Lorem Ipsum, 52 - LP, Lorem Ipsum</p>
            </div>
          </div>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="font-semibold mb-4">Navegação</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-yellow-500">
                Home
              </a>
            </li>
            <li>
              <a href="#areas" className="hover:text-yellow-500">
                Áreas de Atuação
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-500">
                Sobre nós
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-500">
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Ajuda */}
        <div>
          <h3 className="font-semibold mb-4">Ajuda</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-yellow-500">
                Suporte ao Cliente
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Termos & Condições
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Política e Privacidade
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">
            Inscreva-se na nossa Newsletter
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            Últimas atualizações, pesquisas, notícias e opiniões dos nossos
            profissionais
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-2 rounded-l-md text-black focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gray-300 text-black font-semibold rounded-r-md hover:bg-gray-400 transition"
            >
              Inscrever
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
        TODOS OS DIREITOS RESERVADOS ©
      </div>
    </footer>
  );
}
