'use client'

import { Header } from '@/components/Header';
import '../globals.css';
import SearchBar from '@/components/SearchBar';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Loading } from '@/components/ui/loading';
import { Footer } from '@/components/Footer';
import { useMedicine } from '@/contexts/MedicineContext';
import { normalizeString } from '@/utils/normalizeString';

interface Medicine {
  nome: string;
}

export default function FindMedicinePage() {
  const { setSelectedMedicine } = useMedicine();
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [filteredMedicines, setFilteredMedicines] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
    fetch('https://api-bulaja.onrender.com/api/medicines')
      .then(response => response.json())
      .then(data => {
        setMedicines(data);
        setFilteredMedicines(data);
        setLoading(false); 
      })
      .catch(error => {
        console.error('Erro ao buscar os dados da API:', error);
        setLoading(false); 
      });
  }, []);

  const handleSearch = (query: string) => {
    const normalizedQuery = normalizeString(query);
    const filtered = medicines.filter(med => normalizeString(med.nome).includes(normalizedQuery));
    setFilteredMedicines(filtered);
  }; 
  
  const handleMedicineClick = (med: any) => {
    setSelectedMedicine(med);
  };


  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow">
        <div className="container mx-auto px-4">
          <Header />
          <SearchBar onSearch={handleSearch} />
          <div>
            <h2 className='text-center mt-12 font-bold text-2xl'>Medicamentos mais procurados</h2>
            <div>
              <div className='flex flex-wrap justify-center gap-4 mt-6'>
                {loading ? (
                  <Loading className='loading-component'/>
                ) : (
                  filteredMedicines.length > 0 ? (
                    filteredMedicines.map((med) => (
                      <Link href={`/remedio/${normalizeString(med.nome)}`} key={med.nome} >
                        <div className='bg-gray-200 p-4 rounded-md' onClick={() => handleMedicineClick(med)}>
                          <h3 className='text-center font-bold'>{med.nome}</h3>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p>Não foi encontrado nenhum remédio.</p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
