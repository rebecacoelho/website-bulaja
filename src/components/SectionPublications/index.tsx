import Pic1 from '../../../public/post1.png'
import Pic2 from '../../../public/post2.png'
import { SeePost } from "../SeePost";

export const SectionPublications = () => {
  return (
   <div className="flex flex-col mt-16">
    <div className="flex flex-col w-full">
      <h3 className="text-4xl font-bold text-center">Veja nossas últimas publicações</h3>
      <div className="w-full flex justify-center">
        <div className="bg-black w-16 mt-2 h-0.5"></div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-around mx-4 md:mx-16 mt-8 gap-4 lg:gap-0 items-center">
      <SeePost title="Disease detection, check up in the laboratory" description="In this case, the role of the health laboratory is very important to do a disease detection..." image={Pic1} />
      <SeePost title="Herbal medicines that are safe for consumption" description="Herbal medicine is very widely used at this time because of its very good for your health..." image={Pic2} />
    </div>
   </div>
  );
};