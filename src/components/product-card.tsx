"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Product } from '@/lib/products';
import { useCart } from '@/contexts/cart-context';
import { ShoppingCart, Plus } from 'lucide-react';
import { useState } from 'react';

type ProductCardProps = {
  product: Product;
};

function formatUnit(unit: string): string {
  const unitMap: Record<string, string> = {
    kg: 'kg',
    g: 'g',
    un: 'un',
    ml: 'ml',
    l: 'L',
  };
  return unitMap[unit] || unit;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(product.unit === 'un' ? 1 : 0.5);
  const [open, setOpen] = useState(false);

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const handleAddToCart = () => {
    if (quantity > 0 && quantity >= 0.01) {
      addItem(product, quantity);
      setOpen(false);
      setQuantity(product.unit === 'un' ? 1 : 0.5);
    }
  };

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
      <CardFooter className="p-4 flex flex-col gap-3">
        <div className="flex justify-between items-center w-full">
          <div>
            <p className="text-2xl font-bold text-primary">{formatPrice(product.price)}</p>
            <p className="text-sm text-muted-foreground">/{formatUnit(product.unit)}</p>
          </div>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Adicionar ao Carrinho
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{product.name}</DialogTitle>
              <DialogDescription>{product.description}</DialogDescription>
            </DialogHeader>
            <div className="py-4 space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="quantity">Quantidade</Label>
                <span className="text-sm text-muted-foreground">
                  Preço: {formatPrice(product.price)}/{formatUnit(product.unit)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  id="quantity"
                  type="number"
                  step="0.01"
                  min="0.01"
                  value={quantity}
                  onChange={(e) => {
                    const value = parseFloat(e.target.value) || 0.01;
                    setQuantity(Math.max(0.01, value));
                  }}
                  className="flex-1"
                />
                <span className="text-sm text-muted-foreground min-w-[3rem]">
                  {formatUnit(product.unit)}
                </span>
              </div>
              <div className="pt-2 border-t">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Subtotal:</span>
                  <span className="text-xl font-bold text-primary">
                    {formatPrice(product.price * quantity)}
                  </span>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={handleAddToCart} className="bg-accent hover:bg-accent/90">
                <Plus className="mr-2 h-4 w-4" />
                Adicionar ao Carrinho
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
