'use client';

import Image from 'next/image';
import { slugify } from '@/utils/formatUrl';
import Post1 from '../../../../public/post1.png'
import Post2 from '../../../../public/post2.png'
import '../../globals.css'
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';


const posts = [
  {
    title: "Disease detection, check up in the laboratory",
    image: Post1,
    description: "In this case, the role of the health laboratory is very important to do a disease detection...",
    content: "Conteúdo dinâmico do meu post sobre detecção de doenças."
  },
  {
    title: "Herbal medicines that are safe for consumption",
    image: Post2,
    description: "Herbal medicine is very widely used at this time because of its very good for your health...",
    content: "Conteúdo dinâmico do meu post sobre medicamentos herbais."
  },
];


const PostPage = ({ params }: { params: { title: string } }) => {
  const post = posts.find(p => slugify(p.title) === params.title);

  if (!post) {
    return <div>Post não encontrado</div>;
  }

  return (
    <div className="bg-white">
      <div className='container'>
        <Header />
        <div className='bg-blue-300 py-4 pb-8 rounded-md'>
          <h2 className='text-center text-4xl font-bold my-6'>{post.title}</h2>
          <div className='mt-6 flex justify-center'>
            <Image src={post.image} alt={post.title} />
          </div>
          <div className='flex flex-col gap-2 text-center mt-4'>
            <p className='font-normal text-lg'>{post.description}</p>
          </div>
          <div className='mt-6 flex justify-center'>
            <p>{post.content}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostPage;
