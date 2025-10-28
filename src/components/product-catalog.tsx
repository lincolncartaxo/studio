"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/product-card";
import { products } from '@/lib/products';
import { Wheat, Pill, GlassWater } from 'lucide-react';

const categories = [
  { value: 'grains', label: 'Grãos Orgânicos', icon: Wheat },
  { value: 'supplements', label: 'Suplementos', icon: Pill },
  { value: 'juices', label: 'Sucos & Shakes', icon: GlassWater },
];

export default function ProductCatalog() {
  return (
    <section id="products" className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Nossos Produtos</h2>
          <p className="text-lg text-muted-foreground mt-2">Descubra nossa seleção de produtos naturais.</p>
        </div>
        <Tabs defaultValue="grains" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {categories.map(({ value, label, icon: Icon }) => (
              <TabsTrigger key={value} value={value} className="flex gap-2 items-center">
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map(({ value }) => (
            <TabsContent key={value} value={value}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products
                  .filter((product) => product.category === value)
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
