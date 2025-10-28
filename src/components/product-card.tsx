import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Product } from '@/lib/products';
import { WHATSAPP_NUMBER } from '@/lib/products';
import { ShoppingCart } from 'lucide-react';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const whatsappMessage = `Olá! Tenho interesse em comprar o produto ${product.name}.`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Card className="w-full overflow-hidden flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="aspect-[3/2] relative">
          <Image
            src={product.image.imageUrl}
            alt={product.description}
            fill
            className="object-cover"
            data-ai-hint={product.image.imageHint}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-xl font-headline mb-2">{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center">
        <p className="text-2xl font-bold text-primary">{formatPrice(product.price)}</p>
        <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Comprar
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
