import Link from 'next/link';
import Logo from '../../../public/logo.png'
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-[#67C3F3] to-[#5A98F2] shadow-lg flex justify-center items-center mt-24 py-16'>
      <div className='flex flex-col justify-center gap-4'>
        <Link className='flex justify-center' href="/">
          <Image src={Logo} alt="Logo" width={70} height={40} />
        </Link>
        <div className='px-6 w-full flex flex-col justify-center'>
          <p className='text-white text-center'>BulaJá simplifica a complexidade de bulas em uma leitura fácil e rápida ajudando na busca de remédios de acordo com as suas necessidades médicas!</p>
          <span className='text-white text-center mt-4'>BulaJá 2024. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
};