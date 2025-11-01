import type { ImagePlaceholder } from './placeholder-images';
import { getImage } from './images';

export type Product = {
  id: string;
  name: string;
  category: 'grains' | 'supplements' | 'juices';
  description: string;
  price: number;
  unit: 'kg' | 'g' | 'un' | 'ml' | 'l'; // unidade de medida
  image: ImagePlaceholder;
};

export const products: Product[] = [
  {
    id: 'quinoa',
    name: 'Quinoa Orgânica',
    category: 'grains',
    description: 'Grãos de quinoa orgânica, ricos em proteínas e fibras. Perfeito para uma refeição saudável e completa.',
    price: 25.50,
    unit: 'kg',
    image: getImage('quinoa-grain'),
  },
  {
    id: 'chia',
    name: 'Sementes de Chia',
    category: 'grains',
    description: 'Sementes de chia ricas em ômega-3, fibras e antioxidantes. Ideal para adicionar em iogurtes e smoothies.',
    price: 15.00,
    unit: 'kg',
    image: getImage('chia-seeds'),
  },
  {
    id: 'oats',
    name: 'Aveia em Flocos',
    category: 'grains',
    description: 'Aveia orgânica em flocos, fonte de energia de liberação lenta e fibras solúveis.',
    price: 12.90,
    unit: 'kg',
    image: getImage('oats'),
  },
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
];

export const WHATSAPP_NUMBER = '5583987848625';
