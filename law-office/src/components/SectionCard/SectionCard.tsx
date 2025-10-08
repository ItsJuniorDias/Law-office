export default function SectionCard() {
  return (
    <section className="w-full flex justify-center items-center py-12 bg-white overflow-hidden">
      <div className="w-full max-w-[1100px] bg-[#0c1725] flex flex-col md:flex-row items-center justify-around rounded-xl shadow-lg py-10 px-6 md:px-8 gap-8 md:gap-0">
        {/* Bloco 1 */}
        <div className="flex items-center space-x-2 text-white">
          <span className="text-5xl font-bold text-yellow-500">+100</span>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-semibold"></span>
            <span className="text-sm">Clientes atendidos</span>
          </div>
        </div>

        {/* Divisor */}
        <div className="hidden md:block w-[1px] h-20 bg-gray-400"></div>

        {/* Bloco 2 */}
        <div className="flex items-center space-x-2 text-white">
          <span className="text-5xl font-bold text-yellow-500">+7</span>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-semibold">ANOS</span>
            <span className="text-sm">de Experiência</span>
          </div>
        </div>

        {/* Divisor */}
        <div className="hidden md:block w-[1px] h-20 bg-gray-400"></div>

        {/* Bloco 3 */}
        <div className="flex items-center space-x-2 text-white">
          <span className="text-5xl font-bold text-yellow-500">+250</span>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-semibold"></span>
            <span className="text-sm">Cases defendidos</span>
          </div>
        </div>
      </div>
    </section>
  );
}
