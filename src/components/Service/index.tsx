import Image from "next/image";

export const Service = (props: any) => {
  return (
   <div className="flex max-w-96 bg-white rounded-xl py-10 px-8">
    <div className="flex flex-col gap-6">
      <Image src={props.image} alt=""/>
      <span className="text-xl font-bold">{props.title}</span>
      <div>
        <p className="text-gray-500">{props.description}</p>
      </div>
    </div>
   </div>
  );
};