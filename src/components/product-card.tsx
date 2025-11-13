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
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/lib/products';
import { useCart } from '@/contexts/cart-context';
import { ShoppingCart, Plus, Star } from 'lucide-react';
import { useState } from 'react';

type ProductCardProps = {
  product: Product;
  viewMode?: 'grid' | 'list';
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

// Função auxiliar para determinar badges
function getProductBadges(product: Product): Array<{ label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }> {
  const badges: Array<{ label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }> = [];
  
  // Exemplo: produtos com ID que começa com 'v' são "Novos"
  if (product.id.startsWith('v')) {
    badges.push({ label: 'Novo', variant: 'default' });
  }
  
  // Exemplo: produtos com preço < 20 são "Promoção"
  if (product.price < 20) {
    badges.push({ label: 'Promoção', variant: 'secondary' });
  }
  
  return badges;
}

export default function ProductCard({ product, viewMode = 'grid' }: ProductCardProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(product.unit === 'un' ? 1 : 0.5);
  const [open, setOpen] = useState(false);
  const badges = getProductBadges(product);

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

  // Modo Lista
  if (viewMode === 'list') {
    return (
      <Card className="w-full overflow-hidden flex flex-row transition-all hover:shadow-lg">
        {/* Imagem */}
        <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 relative">
          <Image
            src={product.image.imageUrl}
            alt={product.description}
            fill
            className="object-cover"
            data-ai-hint={product.image.imageHint}
            sizes="(max-width: 640px) 128px, 160px"
          />
          {/* Badges sobre a imagem */}
          {badges.length > 0 && (
            <div className="absolute top-2 left-2 flex gap-1 flex-wrap">
              {badges.map((badge, idx) => (
                <Badge key={idx} variant={badge.variant} className="text-xs">
                  {badge.label}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Conteúdo */}
        <div className="flex-1 flex flex-col p-4">
          <div className="flex-1">
            <CardTitle className="text-lg font-headline mb-1">{product.name}</CardTitle>
            <CardDescription className="line-clamp-2">{product.description}</CardDescription>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <div>
              <p className="text-xl font-bold text-primary">{formatPrice(product.price)}</p>
              <p className="text-sm text-muted-foreground">/{formatUnit(product.unit)}</p>
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">Adicionar</span>
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
          </div>
        </div>
      </Card>
    );
  }

  // Modo Grid (padrão)
  return (
    <Card className="w-full overflow-hidden flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0 relative">
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
        
        {/* Badges */}
        {badges.length > 0 && (
          <div className="absolute top-2 right-2 flex gap-1 flex-wrap justify-end">
            {badges.map((badge, idx) => (
              <Badge key={idx} variant={badge.variant}>
                {badge.label}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>

      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-xl font-headline mb-2">{product.name}</CardTitle>
        <CardDescription className="line-clamp-2">{product.description}</CardDescription>
        
        {/* Rating (placeholder) */}
        <div className="flex items-center gap-1 mt-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-3 h-3 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">(12)</span>
        </div>
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
