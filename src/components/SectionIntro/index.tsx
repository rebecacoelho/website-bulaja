import Image from "next/image";
import Link from "next/link";
import SectionPic from '../../../public/sectionPic.png'

export const SectionIntro = () => {
  return (
   <div className="flex gap-8 mt-12">
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-5xl font-bold">Uma bula online de fácil entedimento</h2>
        </div>
        <div>
          <p className="text-gray-500 text-lg md:text-xl lg:text-2xl">O BulaJá vem com um objetivo claro de capacitar você a tomar decisões informadas sobre sua saúde, com o acesso imediato a informações detalhadas sobre qualquer medicamento, tudo em um só lugar e de forma fácil de entender.</p>
        </div>
      </div>
      <div className="lg:mt-0 mt-6">
      <Link className="bg-[#458FF6] px-6 py-4 rounded-2xl text-white hover:bg-blue-600 hover:text-white" href='/encontre-seu-remedio'>
        Procure seu remédio
      </Link>
      </div>
    </div>
    <div>
      <Image src={SectionPic} alt=""/>
    </div>
   </div>
  );
};