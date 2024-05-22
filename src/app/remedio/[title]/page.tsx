'use client'
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import TabsMedicine from '@/components/TabsMedicine/TabsMedicine';
import '../../globals.css';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';
import { useMedicine } from '@/contexts/MedicineContext';
import { normalizeString } from '@/utils/normalizeString';

export default function MedicinePage({ params }: { params: { title: string } }) {
  const { selectedMedicine } = useMedicine();

  useEffect(() => {
    if (!selectedMedicine || normalizeString(selectedMedicine.nome) !== params.title) {
      notFound();
    }
  }, [selectedMedicine, params.title]);

  if (!selectedMedicine) {
    return null;
  }

  const medicine = selectedMedicine;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow">
        <div className="container mx-auto px-4">
          <Header />
          <h2 className='text-center text-4xl font-bold mt-12'>{medicine.nome.charAt(0).toUpperCase() + medicine.nome.slice(1).toLowerCase()}</h2>
          <div className='flex flex-col gap-2 mt-4'>
            <p className='font-bold'>Nome Genérico: <span className='font-normal'>{medicine.nomeGenerico}</span></p>
            <p className='font-bold'>Forma de dosagem: <span className='font-normal'>{medicine.formaDeDosagem}</span></p>
            <p className='font-bold'>Remédios Relacionados: <span className='font-normal'>{medicine.remediosRelacionados.join(', ')}</span></p>
          </div>
          <div className='mt-6'>
            <TabsMedicine 
              descricao={medicine.descricao} 
              efeitosColaterais={medicine.efeitosColaterais} 
              precaucoes={medicine.precaucoes} 
              tratamento={medicine.tratamento} 
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
