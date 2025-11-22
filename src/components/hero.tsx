import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const heroImage = getImage('hero-image');
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center">
      <Image
        src="/fachada_loja.jpeg"
        alt="Fachada da Loja Greenlyfe"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="relative z-10 p-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 drop-shadow-lg">
          Seu Bem Estar, <span className="text-primary">Nossa Natureza</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-md">
          Encontre os melhores produtos naturais para seu bem-estar. Qualidade e sabor que transformam sua rotina.
        </p>
        <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <a href="#products">Ver Produtos</a>
        </Button>
      </div>
    </section>
  );
}
