"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/product-card";
import { products } from '@/lib/products';
import { Wheat, Pill, GlassWater, Search, X } from 'lucide-react';
import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';

const categories = [
  { value: 'grains', label: 'Grãos Orgânicos', icon: Wheat },
  { value: 'supplements', label: 'Suplementos', icon: Pill },
  { value: 'juices', label: 'Sucos & Shakes', icon: GlassWater },
];

export default function ProductCatalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('grains');

  const filteredProducts = useMemo(() => {
    // Se há uma pesquisa ativa, buscar em todas as categorias
    const productsToSearch = searchQuery.trim() 
      ? products 
      : products.filter((product) => product.category === selectedCategory);
    
    if (!searchQuery.trim()) {
      return productsToSearch;
    }

    const query = searchQuery.toLowerCase().trim();
    return productsToSearch.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
  }, [searchQuery, selectedCategory]);

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <section id="products" className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Nossos Produtos</h2>
          <p className="text-lg text-muted-foreground mt-2">Descubra nossa seleção de produtos naturais.</p>
        </div>
        
        {/* Barra de Pesquisa */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10 bg-white"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
                onClick={clearSearch}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {categories.map(({ value, label, icon: Icon }) => (
              <TabsTrigger key={value} value={value} className="flex gap-2 items-center">
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {/* Se há pesquisa ativa, mostrar resultados em uma única aba, senão mostrar por categoria */}
          {searchQuery.trim() ? (
            <TabsContent value={selectedCategory} className="mt-0">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                  <p className="text-lg font-semibold mb-2">Nenhum produto encontrado</p>
                  <p className="text-muted-foreground">
                    {searchQuery
                      ? `Não encontramos produtos que correspondam a "${searchQuery}"`
                      : 'Não há produtos nesta categoria'}
                  </p>
                  {searchQuery && (
                    <Button
                      variant="outline"
                      onClick={clearSearch}
                      className="mt-4"
                    >
                      Limpar pesquisa
                    </Button>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </TabsContent>
          ) : (
            categories.map(({ value }) => (
              <TabsContent key={value} value={value}>
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-12">
                    <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                    <p className="text-lg font-semibold mb-2">Nenhum produto encontrado</p>
                    <p className="text-muted-foreground">
                      {searchQuery
                        ? `Não encontramos produtos que correspondam a "${searchQuery}"`
                        : 'Não há produtos nesta categoria'}
                    </p>
                    {searchQuery && (
                      <Button
                        variant="outline"
                        onClick={clearSearch}
                        className="mt-4"
                      >
                        Limpar pesquisa
                      </Button>
                    )}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                )}
              </TabsContent>
            ))
          )}
        </Tabs>
      </div>
    </section>
  );
}
