export const SectionAboutUs = () => {
  return (
   <div className="flex flex-col mt-16 bg-gradient-to-b from-[#67C3F3] to-[#5A98F2] shadow-lg py-12 rounded-xl">
    <div className="flex flex-col w-full">
      <h3 className="text-4xl font-bold text-center text-white">Sobre</h3>
      <div className="w-full flex justify-center">
        <div className="bg-white w-8 mt-2 h-0.5"></div>
      </div>
      <div>
        <p className="text-2xl text-center mt-6 text-white box-border w-full max-w-5xl mx-auto px-8">&quot;Facilitando a pesquisa e o acesso à bula de remédios de maneira rápida e eficaz. No BulaJá temos um acervo de todos os remédios legalizados no Brasil prontos para sua consulta.&quot;</p>
      </div>
    </div>
   </div>
  );
};