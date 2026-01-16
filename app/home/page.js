export default function HomePage(){
    return(
    // Container principal da página (Fundo Bege)
    <div className="min-h-screen bg-[#e3dcd0] flex flex-col">
      
      {/* ================= HEADER ================= */}
      <header className="w-full h-[62px] bg-[#5c120c] flex items-center justify-between px-6 text-white shadow-md shrink-0">
        
        {/* Logo */}
        <div className="text-lg font-medium">
          Logo da empresa
        </div>

        {/* Informações do Usuário */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-normal">Olá, Thales Magalhaes</span>
          
          {/* Ícone Calendário */}
          <button className="p-1 hover:bg-white/10 rounded transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
          </button>

          {/* Avatar */}
          <div className="w-8 h-8 bg-white text-[#5c120c] rounded-full flex items-center justify-center font-bold text-sm">
            T
          </div>
        </div>
      </header>


      {/* ================= CONTEÚDO PRINCIPAL (Card Branco) ================= */}
      <main className="flex-1 flex items-center justify-center p-8">
        
        <div className="bg-white w-full max-w-5xl rounded shadow-lg overflow-hidden">
          
          {/* --- Título e Localização --- */}
          <div className="relative flex items-center justify-center p-6 border-b border-gray-300">
            <h2 className="text-2xl font-bold text-black">
              Procure por uma arena
            </h2>

            {/* Seletor de Localização */}
            <div className="absolute right-6 flex items-center gap-2 text-blue-900 font-semibold cursor-pointer hover:opacity-80">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              <span>Granja-CE</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>

          {/* --- Área de Busca e Resultados --- */}
          <div className="p-8 pb-16">
            
            {/* Input de Pesquisa */}
            <div className="relative mb-8 max-w-3xl mx-auto">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#9CA3AF" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Pesquise uma arena" 
                className="w-full bg-gray-200 text-gray-700 py-3 pl-10 pr-4 rounded-md outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              />
            </div>

            {/* Lista de Cards */}
            <div className="max-w-3xl mx-auto space-y-4">
              
              {/* Card 1: Arena G7 */}
              <div className="flex items-center justify-between bg-white border border-yellow-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <div className="flex items-center gap-4">
                  {/* Logo Placeholder */}
                  <div className="w-16 h-16 rounded-full bg-[#0b1d3d] flex items-center justify-center border text-white font-bold text-xs text-center leading-tight shrink-0">
                    <span className="text-orange-500 text-lg">G7</span><br/>ARENA
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-black group-hover:text-blue-900 transition-colors">Arena G7</h3>
                    <p className="text-sm text-gray-500 mt-1 max-w-lg line-clamp-2">
                      A Arena G7 é o espaço ideal para quem busca lazer, esporte e momentos de diversão com amigos e família. Localizada...
                    </p>
                  </div>
                </div>
                <div className="text-gray-400 group-hover:text-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </div>

            </div>

          </div>

          {/* Divisor do Rodapé do Card */}
          <div className="border-t border-gray-300 mx-6"></div>
          <div className="h-8"></div> 

        </div>
      </main>
    </div>
    
  );
    
}