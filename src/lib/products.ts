import type { ImagePlaceholder } from './placeholder-images';
import { getImage } from './images';

export type Product = {
  id: string;
  name: string;
  category: 'grains' | 'supplements' | 'juices' | 'nuts' | 'oils' | 'flours';
  description: string;
  price: number;
  unit: 'kg' | 'g' | 'un' | 'ml' | 'l';
  image: ImagePlaceholder;
};

export const products: Product[] = [
  // Grãos e Sementes
  {
    id: 'quinoa',
    name: 'Quinoa Orgânica',
    category: 'grains',
    description: 'Grãos de quinoa orgânica, ricos em proteínas e fibras. Perfeito para uma refeição saudável e completa.',
    price: 25.50,
    unit: 'g',
    image: getImage('quinoa-grain'),
  },
  {
    id: 'chia',
    name: 'Sementes de Chia',
    category: 'grains',
    description: 'Sementes de chia ricas em ômega-3, fibras e antioxidantes. Ideal para adicionar em iogurtes e smoothies.',
    price: 15.00,
    unit: 'g',
    image: getImage('chia-seeds'),
  },
  {
    id: 'oats',
    name: 'Aveia em Flocos',
    category: 'grains',
    description: 'Aveia orgânica em flocos, fonte de energia de liberação lenta e fibras solúveis.',
    price: 12.90,
    unit: 'g',
    image: getImage('oats'),
  },
  {
    id: 'linhaça-dourada',
    name: 'Linhaça Dourada',
    category: 'grains',
    description: 'Sementes de linhaça dourada, excelente fonte de fibras e ômega-3.',
    price: 8.50,
    unit: 'g',
    image: getImage('flax-seeds'),
  },
  {
    id: 'amaranto',
    name: 'Grão de Amaranto',
    category: 'grains',
    description: 'Grão de amaranto sem glúten, rico em proteínas e aminoácidos essenciais.',
    price: 18.75,
    unit: 'g',
    image: getImage('amaranth'),
  },
  {
    id: 'trigo-sarraceno',
    name: 'Trigo Sarraceno',
    category: 'grains',
    description: 'Trigo sarraceno orgânico, ideal para dietas sem glúten e rico em nutrientes.',
    price: 22.00,
    unit: 'g',
    image: getImage('buckwheat'),
  },

  // Suplementos
  {
    id: 'protein',
    name: 'Proteína Vegana',
    category: 'supplements',
    description: 'Mix de proteínas vegetais (ervilha, arroz e chia) para recuperação muscular e aporte proteico.',
    price: 99.90,
    unit: 'un',
    image: getImage('protein-powder'),
  },
  {
    id: 'vitamin-d',
    name: 'Vitamina D3',
    category: 'supplements',
    description: 'Cápsulas de Vitamina D3 para saúde óssea e fortalecimento do sistema imunológico.',
    price: 45.00,
    unit: 'un',
    image: getImage('vitamin-d'),
  },
  {
    id: 'omega-3',
    name: 'Ômega 3',
    category: 'supplements',
    description: 'Suplemento de ômega 3 de óleo de peixe, essencial para a saúde do cérebro e coração.',
    price: 65.00,
    unit: 'un',
    image: getImage('omega-3'),
  },
  {
    id: 'spirulina',
    name: 'Spirulina em Pó',
    category: 'supplements',
    description: 'Spirulina orgânica em pó, superalimento rico em proteínas, vitaminas e minerais.',
    price: 55.00,
    unit: 'g',
    image: getImage('spirulina'),
  },
  {
    id: 'colageno',
    name: 'Colágeno Hidrolisado',
    category: 'supplements',
    description: 'Colágeno hidrolisado para saúde da pele, cabelos e articulações.',
    price: 75.00,
    unit: 'g',
    image: getImage('collagen'),
  },
  {
    id: 'probiotico',
    name: 'Probiótico 30 Bilhões',
    category: 'supplements',
    description: 'Cápsulas de probiótico com 30 bilhões de UFC para saúde intestinal.',
    price: 89.90,
    unit: 'un',
    image: getImage('probiotic'),
  },

  // Sucos e Bebidas
  {
    id: 'green-juice',
    name: 'Suco Verde Detox',
    category: 'juices',
    description: 'Suco prensado a frio com couve, espinafre, maçã, pepino e limão. Revitalizante e nutritivo.',
    price: 18.00,
    unit: 'ml',
    image: getImage('green-juice'),
  },
  {
    id: 'berry-shake',
    name: 'Shake de Frutas Vermelhas',
    category: 'juices',
    description: 'Shake antioxidante com morango, mirtilo, amora e banana. Uma explosão de sabor e saúde.',
    price: 22.00,
    unit: 'ml',
    image: getImage('detox-shake'),
  },
  {
    id: 'energy-smoothie',
    name: 'Smoothie Energético',
    category: 'juices',
    description: 'Smoothie tropical com manga, abacaxi e maracujá. Perfeito para um boost de energia.',
    price: 20.00,
    unit: 'ml',
    image: getImage('energy-smoothie'),
  },
  {
    id: 'suco-laranja-cenoura',
    name: 'Suco de Laranja com Cenoura',
    category: 'juices',
    description: 'Suco natural de laranja com cenoura, rico em vitamina A e C.',
    price: 15.00,
    unit: 'ml',
    image: getImage('orange-carrot-juice'),
  },
  {
    id: 'shot-detox',
    name: 'Shot Detox de Gengibre',
    category: 'juices',
    description: 'Shot concentrado de gengibre e limão para imunidade e digestão.',
    price: 12.00,
    unit: 'ml',
    image: getImage('ginger-shot'),
  },
  {
    id: 'agua-coco',
    name: 'Água de Coco Natural',
    category: 'juices',
    description: 'Água de coco 100% natural, isotônico natural rico em eletrólitos.',
    price: 10.00,
    unit: 'ml',
    image: getImage('coconut-water'),
  },

  // Castanhas e Oleaginosas
  {
    id: 'castanha-para',
    name: 'Castanha do Pará',
    category: 'nuts',
    description: 'Castanha do Pará orgânica, uma das melhores fontes naturais de selênio.',
    price: 35.00,
    unit: 'g',
    image: getImage('brazil-nuts'),
  },
  {
    id: 'amendoas',
    name: 'Amêndoas Cruas',
    category: 'nuts',
    description: 'Amêndoas cruas e sem sal, ricas em vitamina E e gorduras boas.',
    price: 28.50,
    unit: 'g',
    image: getImage('almonds'),
  },
  {
    id: 'nozes',
    name: 'Nozes Pecan',
    category: 'nuts',
    description: 'Nozes pecan selecionadas, perfeitas para lanches e receitas.',
    price: 42.00,
    unit: 'g',
    image: getImage('pecan-nuts'),
  },
  {
    id: 'castanha-caju',
    name: 'Castanha de Caju',
    category: 'nuts',
    description: 'Castanha de caju torrada sem sal, fonte de zinco e magnésio.',
    price: 25.00,
    unit: 'g',
    image: getImage('cashew-nuts'),
  },

  // Óleos e Manteigas
  {
    id: 'azeite-extra-virgem',
    name: 'Azeite Extra Virgem',
    category: 'oils',
    description: 'Azeite extra virgem prensado a frio, ideal para saladas e finalizações.',
    price: 45.00,
    unit: 'ml',
    image: getImage('olive-oil'),
  },
  {
    id: 'oleo-coco',
    name: 'Óleo de Coco Extra Virgem',
    category: 'oils',
    description: 'Óleo de coco extra virgem orgânico, versátil para culinária e cuidados pessoais.',
    price: 38.00,
    unit: 'ml',
    image: getImage('coconut-oil'),
  },
  {
    id: 'manteiga-amendoim',
    name: 'Manteiga de Amendoim Natural',
    category: 'oils',
    description: 'Manteiga de amendoim 100% natural, sem açúcar ou conservantes.',
    price: 22.00,
    unit: 'g',
    image: getImage('peanut-butter'),
  },

  // Farinhas e Bases
  {
    id: 'farinha-amendoa',
    name: 'Farinha de Amêndoa',
    category: 'flours',
    description: 'Farinha de amêndoa fina, ideal para receitas low-carb e sem glúten.',
    price: 32.00,
    unit: 'g',
    image: getImage('almond-flour'),
  },
  {
    id: 'farinha-coco',
    name: 'Farinha de Coco',
    category: 'flours',
    description: 'Farinha de coco orgânica, rica em fibras e pobre em carboidratos.',
    price: 28.50,
    unit: 'g',
    image: getImage('coconut-flour'),
  },
  {
    id: 'farinha-aveia',
    name: 'Farinha de Aveia',
    category: 'flours',
    description: 'Farinha de aveia integral, perfeita para panquecas e bolos saudáveis.',
    price: 15.00,
    unit: 'g',
    image: getImage('oat-flour'),
  }
];

export const WHATSAPP_NUMBER = '5583987848625';
