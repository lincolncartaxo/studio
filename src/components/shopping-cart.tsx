"use client";

import { useCart } from '@/contexts/cart-context';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart as ShoppingCartIcon, Minus, Plus, Trash2, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { WHATSAPP_NUMBER } from '@/lib/products';

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

export default function ShoppingCart() {
  const { items, updateQuantity, removeItem, getTotalPrice } = useCart();

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const formatQuantity = (quantity: number) => {
    return quantity % 1 === 0 ? quantity.toString() : quantity.toFixed(2);
  };

  const sendToWhatsApp = () => {
    if (items.length === 0) return;

    let message = '🛒 *Pedido - Greenlyfe*\n\n';
    items.forEach((item, index) => {
      const subtotal = item.product.price * item.quantity;
      message += `${index + 1}. *${item.product.name}*\n`;
      message += `   Quantidade: ${formatQuantity(item.quantity)} ${formatUnit(item.product.unit)}\n`;
      message += `   Preço unitário: ${formatPrice(item.product.price)}/${formatUnit(item.product.unit)}\n`;
      message += `   Subtotal: ${formatPrice(subtotal)}\n\n`;
    });

    message += `💰 *Total Geral: ${formatPrice(getTotalPrice())}*\n\n`;
    message += 'Por favor, confirme este pedido! 😊';

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCartIcon className="h-5 w-5" />
          {items.length > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
              {items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Carrinho de Compras</SheetTitle>
          <SheetDescription>
            {items.length === 0
              ? 'Seu carrinho está vazio'
              : `${items.length} ${items.length === 1 ? 'item' : 'itens'} no carrinho`}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <ShoppingCartIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Adicione produtos ao carrinho para começar</p>
            </div>
          ) : (
            <>
              {items.map((item) => {
                const subtotal = item.product.price * item.quantity;
                return (
                  <div key={item.product.id} className="space-y-4">
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.product.image.imageUrl}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold">{item.product.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {formatPrice(item.product.price)}/{formatUnit(item.product.unit)}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => {
                              const step = item.product.unit === 'un' ? 1 : 0.1;
                              const newQuantity = Math.max(0, item.quantity - step);
                              updateQuantity(item.product.id, newQuantity);
                            }}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <Input
                            type="number"
                            step={item.product.unit === 'un' ? 1 : 0.01}
                            min="0"
                            value={item.quantity}
                            onChange={(e) => {
                              const value = parseFloat(e.target.value) || 0;
                              updateQuantity(item.product.id, value);
                            }}
                            className="w-20 h-8 text-center"
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => {
                              const step = item.product.unit === 'un' ? 1 : 0.1;
                              updateQuantity(item.product.id, item.quantity + step);
                            }}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                          <span className="text-sm text-muted-foreground ml-2">
                            {formatUnit(item.product.unit)}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 ml-auto text-destructive"
                            onClick={() => removeItem(item.product.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="text-sm font-semibold mt-2">
                          Subtotal: {formatPrice(subtotal)}
                        </p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                );
              })}

              <div className="pt-4 space-y-4 border-t">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>{formatPrice(getTotalPrice())}</span>
                </div>
                <Button
                  className="w-full"
                  size="lg"
                  onClick={sendToWhatsApp}
                  disabled={items.length === 0}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Enviar Pedido para WhatsApp
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
