import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TabsMedicine(props: TabsMedicine) {
  return (
    <div className="bg-white">
      <Tabs defaultValue="description">
        <TabsList className="bg-[#458FF6] text-white py-8 w-full">
          <TabsTrigger className="text-lg" value="description">Descrição</TabsTrigger>
          <TabsTrigger className="text-lg" value="treatment">Tratamento</TabsTrigger>
          <TabsTrigger className="text-lg" value="side-effects">Efeitos Colaterais</TabsTrigger>
          <TabsTrigger className="text-lg" value="precautions">Preocações</TabsTrigger>
          <TabsTrigger className="text-lg" value="images">Imagens</TabsTrigger> 
        </TabsList>
        <TabsContent className="mt-5" value="description">{props.descricao}</TabsContent>
        <TabsContent className="mt-5" value="treatment">{props.tratamento}</TabsContent>
        <TabsContent className="mt-5" value="side-effects">{props.efeitosColaterais}</TabsContent>
        <TabsContent className="mt-5" value="precautions">{props.precaucoes}</TabsContent>
        <TabsContent className="mt-5" value="images">Teste 5</TabsContent>
      </Tabs>
    </div>
  );
}