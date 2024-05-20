import { Service } from "../Service";
import Remedio from '../../../public/remedio.png'
import Lupa from '../../../public/lupa.png'

export const SectionOurService = () => {
  return (
   <div className="flex flex-col mt-16 bg-blue-100 rounded-lg shadow-lg py-12">
    <div className="flex flex-col w-full">
      <h3 className="text-4xl font-bold text-center">Nossos Serviços</h3>
      <div className="w-full flex justify-center">
        <div className="bg-black w-16 mt-2 h-0.5"></div>
      </div>
      <div>
        <p className="text-center mt-4 text-gray-500">Disponibilizamos serviços de busca e localização de remédios, ajuste às suas necessidades médica e escolha o serviço de acordo com a sua saúde!</p>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-around mx-4 md:mx-16 mt-8 gap-4 lg:gap-0 items-center">
      <Service title="Procure seu remédio" description="Procure em nosso banco os remédios que você possui dúvidas sobre para entender melhor seus beneficios e maleficios." image={Lupa} />
      <Service title="Filtre suas pesquisas" description="Faça filtros que permite que você encontre os remédios que você pode tomar dependendo da sua condição." image={Remedio}/>
    </div>
   </div>
  );
};