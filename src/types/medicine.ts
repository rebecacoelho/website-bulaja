interface Medicine {
  id: number;
  nome: string;
  nomeGenerico: string;
  formaDeDosagem: string;
  remediosRelacionados: string[];
  descricao: string;
  efeitosColaterais: string;
  tratamento: string;
  precaucoes: string;
}

interface TabsMedicine {
  descricao: string;
  efeitosColaterais: string;
  tratamento: string;
  precaucoes: string;
}