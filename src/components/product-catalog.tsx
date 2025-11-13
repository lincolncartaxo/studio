"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/product-card";
import { products } from '@/lib/products';
import { Wheat, Pill, GlassWater, Search, X, Grid3x3, List } from 'lucide-react';
import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  { value: 'grains', label: 'Grãos Orgânicos', icon: Wheat },
  { value: 'supplements', label: 'Suplementos', icon: Pill },
  { value: 'juices', label: 'Sucos & Shakes', icon: GlassWater },
];

type SortOption = 'newest' | 'price-asc' | 'price-desc' | 'name';
type ViewMode = 'grid' | 'list';

const sortOptions = [
  { value: 'newest', label: 'Mais Recentes' },
  { value: 'price-asc', label: 'Preço: Menor para Maior' },
  { value: 'price-desc', label: 'Preço: Maior para Menor' },
  { value: 'name', label: 'Nome: A-Z' },
];

export default function ProductCatalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('grains');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [displayedCount, setDisplayedCount] = useState(12);

  const productsPerPage = 12;

  // Filtrar produtos
  const filteredProducts = useMemo(() => {
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

  // Ordenar produtos
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    
    switch(sortBy) {
      case 'price-asc':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return sorted.sort((a, b) => b.price - a.price);
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
      case 'newest':
      default:
        return sorted;
    }
  }, [filteredProducts, sortBy]);

  // Paginar produtos
  const paginatedProducts = useMemo(() => {
    return sortedProducts.slice(0, displayedCount);
  }, [sortedProducts, displayedCount]);

  const hasMoreProducts = displayedCount < sortedProducts.length;

  const clearSearch = () => {
    setSearchQuery('');
    setDisplayedCount(productsPerPage);
  };

  const handleLoadMore = () => {
    setDisplayedCount(prev => prev + productsPerPage);
  };

  // Contar produtos por categoria
  const getCategoryCount = (categoryValue: string) => {
    return products.filter(p => p.category === categoryValue).length;
  };

  return (
    <section id="products" className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Nossos Produtos</h2>
          <p className="text-lg text-muted-foreground mt-2">Descubra nossa seleção de produtos naturais.</p>
        </div>
        
        {/* Barra de Pesquisa e Controles */}
        <div className="mb-8 space-y-4">
          {/* Pesquisa */}
          <div className="max-w-md mx-auto md:mx-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setDisplayedCount(productsPerPage);
                }}
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

          {/* Ordenação e Modo de Visualização */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            <div className="flex gap-2">
              {/* Ordenação */}
              <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                <SelectTrigger className="w-full md:w-64">
                  <SelectValue placeholder="Ordenar por..." />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Toggle Grid/Lista */}
            <div className="flex gap-2 border rounded-lg p-1 bg-muted">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="gap-2"
              >
                <Grid3x3 className="h-4 w-4" />
                <span className="hidden sm:inline">Grid</span>
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="gap-2"
              >
                <List className="h-4 w-4" />
                <span className="hidden sm:inline">Lista</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Categorias e Produtos */}
        <Tabs value={selectedCategory} onValueChange={(value) => {
          setSelectedCategory(value);
          setDisplayedCount(productsPerPage);
        }} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {categories.map(({ value, label, icon: Icon }) => (
              <TabsTrigger key={value} value={value} className="flex gap-2 items-center">
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{label}</span>
                <span className="text-xs text-muted-foreground ml-1">
                  ({getCategoryCount(value)})
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Conteúdo das Abas */}
          {searchQuery.trim() ? (
            <TabsContent value={selectedCategory} className="mt-0">
              {paginatedProducts.length === 0 ? (
                <div className="text-center py-12">
                  <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                  <p className="text-lg font-semibold mb-2">Nenhum produto encontrado</p>
                  <p className="text-muted-foreground">
                    Não encontramos produtos que correspondam a "{searchQuery}"
                  </p>
                  <Button
                    variant="outline"
                    onClick={clearSearch}
                    className="mt-4"
                  >
                    Limpar pesquisa
                  </Button>
                </div>
              ) : (
                <>
                  {/* Grid ou Lista de Produtos */}
                  <div className={
                    viewMode === 'grid'
                      ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8'
                      : 'space-y-4'
                  }>
                    {paginatedProducts.map((product) => (
                      <ProductCard 
                        key={product.id} 
                        product={product}
                        viewMode={viewMode}
                      />
                    ))}
                  </div>

                  {/* Botão Carregar Mais */}
                  {hasMoreProducts && (
                    <div className="text-center mt-8">
                      <Button 
                        onClick={handleLoadMore} 
                        variant="outline"
                        size="lg"
                      >
                        Carregar Mais ({paginatedProducts.length} de {sortedProducts.length})
                      </Button>
                    </div>
                  )}
                </>
              )}
            </TabsContent>
          ) : (
            categories.map(({ value }) => (
              <TabsContent key={value} value={value} className="mt-0">
                {paginatedProducts.length === 0 ? (
                  <div className="text-center py-12">
                    <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                    <p className="text-lg font-semibold mb-2">Nenhum produto encontrado</p>
                    <p className="text-muted-foreground">
                      Não há produtos nesta categoria
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Grid ou Lista de Produtos */}
                    <div className={
                      viewMode === 'grid'
                        ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8'
                        : 'space-y-4'
                    }>
                      {paginatedProducts.map((product) => (
                        <ProductCard 
                          key={product.id} 
                          product={product}
                          viewMode={viewMode}
                        />
                      ))}
                    </div>

                    {/* Botão Carregar Mais */}
                    {hasMoreProducts && (
                      <div className="text-center mt-8">
                        <Button 
                          onClick={handleLoadMore} 
                          variant="outline"
                          size="lg"
                        >
                          Carregar Mais ({paginatedProducts.length} de {sortedProducts.length})
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </TabsContent>
            ))
          )}
        </Tabs>
      </div>
    </section>
  );
}
