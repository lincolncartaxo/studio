import type { ImagePlaceholder } from './placeholder-images';
import { getImage } from './images';

export type CategoryType = 'sucos-naturais' | 'sucos-funcionais' | 'vitaminas-energeticos' | 'shakes-proteicos' | 'acai' | 'salgados' | 'refeicoes' | 'bebidas';

export type Product = {
  id: string;
  name: string;
  category: CategoryType;
  description: string;
  price: number;
  unit: 'un' | 'ml';
  image: ImagePlaceholder;
};

export const products: Product[] = [
  { id: 'suco-acerola', name: 'Suco de Acerola', category: 'sucos-naturais', description: 'Feito na hora', price: 8.00, unit: 'un', image: getImage('juice') },
  { id: 'suco-maracuja', name: 'Suco de Maracujá', category: 'sucos-naturais', description: 'Feito na hora', price: 8.00, unit: 'un', image: getImage('juice') },
  { id: 'suco-tangerina', name: 'Suco de Tangerina', category: 'sucos-naturais', description: 'Feito na hora', price: 8.00, unit: 'un', image: getImage('juice') },
  { id: 'suco-morango', name: 'Suco de Morango', category: 'sucos-naturais', description: 'Feito na hora', price: 8.00, unit: 'un', image: getImage('juice') },
  { id: 'suco-cupuacu', name: 'Suco de Cupuaçu', category: 'sucos-naturais', description: 'Feito na hora', price: 8.00, unit: 'un', image: getImage('juice') },
  { id: 'suco-caja', name: 'Suco de Cajá', category: 'sucos-naturais', description: 'Feito na hora', price: 8.00, unit: 'un', image: getImage('juice') },
  { id: 'suco-abacaxi', name: 'Suco de Abacaxi', category: 'sucos-naturais', description: 'Feito na hora', price: 8.00, unit: 'un', image: getImage('juice') },
  { id: 'suco-graviola', name: 'Suco de Graviola', category: 'sucos-naturais', description: 'Feito na hora', price: 8.00, unit: 'un', image: getImage('juice') },

  { id: 'func-citrico', name: 'Cítrico Refrescante', category: 'sucos-funcionais', description: 'Morango + Tangerina', price: 11.00, unit: 'un', image: getImage('detox-shake') },
  { id: 'func-amarelas', name: 'Frutas Amarelas', category: 'sucos-funcionais', description: 'Manga + Maracujá + Pêssego + Cajá', price: 11.00, unit: 'un', image: getImage('detox-shake') },
  { id: 'func-relax', name: 'Relax', category: 'sucos-funcionais', description: 'Morango + Maracujá', price: 11.00, unit: 'un', image: getImage('detox-shake') },
  { id: 'func-energetico', name: 'Energético Natural', category: 'sucos-funcionais', description: 'Manga + Morango + Gengibre', price: 11.00, unit: 'un', image: getImage('energy-smoothie') },
  { id: 'func-pre-treino', name: 'Pré-Treino', category: 'sucos-funcionais', description: 'Uva + Acerola + Beterraba + Morango', price: 11.00, unit: 'un', image: getImage('energy-smoothie') },
  { id: 'func-detox', name: 'Detox Green', category: 'sucos-funcionais', description: 'Abacaxi + Hortelã + Couve + Gengibre + Limão', price: 11.00, unit: 'un', image: getImage('green-juice') },
  { id: 'func-vermelhas', name: 'Frutas Vermelhas', category: 'sucos-funcionais', description: 'Morango + Uva + Amora + Mirtilo', price: 11.00, unit: 'un', image: getImage('detox-shake') },

  { id: 'vit-acai', name: 'Açaí Simples', category: 'vitaminas-energeticos', description: 'Vitamina de Açaí', price: 16.00, unit: 'un', image: getImage('energy-smoothie') },
  { id: 'vit-guara', name: 'Guara Citro', category: 'vitaminas-energeticos', description: 'Guaraná Cítrico', price: 16.00, unit: 'un', image: getImage('energy-smoothie') },
  { id: 'vit-cupuacu', name: 'Cupuaçu com leite e banana', category: 'vitaminas-energeticos', description: 'Cupuaçu, leite, banana', price: 16.00, unit: 'un', image: getImage('energy-smoothie') },
  { id: 'vit-banana', name: 'Banana, leite, farinha láctea, aveia', category: 'vitaminas-energeticos', description: 'Vitamina tradicional', price: 16.00, unit: 'un', image: getImage('energy-smoothie') },
  { id: 'vit-guaracai', name: 'Guaraçaí Power', category: 'vitaminas-energeticos', description: 'Limão, xarope, pó de guaraná, catuaba', price: 18.00, unit: 'un', image: getImage('energy-smoothie') },
  { id: 'vit-acaipower', name: 'Açaí Power', category: 'vitaminas-energeticos', description: 'Açaí, banana, farinha de castanha, farinha de amendoim, leite desnatado e xarope de Guaraná', price: 18.00, unit: 'un', image: getImage('energy-smoothie') },
  { id: 'vit-guaradoim', name: 'Guaradoim', category: 'vitaminas-energeticos', description: 'Banana, xarope, amendoim, limão, farinha de castanha, leite desnatado e pó de guaraná', price: 18.00, unit: 'un', image: getImage('energy-smoothie') },
  { id: 'vit-amazonas', name: 'Suco do Amazonas', category: 'vitaminas-energeticos', description: 'Banana, amendoim, farinha de castanha, leite desnatado, xarope, marapuama, catuaba e pó de guaraná', price: 18.00, unit: 'un', image: getImage('energy-smoothie') },

  { id: 'shake-cookies', name: 'Cookies Protein', category: 'shakes-proteicos', description: 'Leite desnatado, whey de cookies, pasta de amendoim sabor cookies, banana e gelo', price: 25.00, unit: 'un', image: getImage('protein-powder') },
  { id: 'shake-morango', name: 'Morango Protein', category: 'shakes-proteicos', description: 'Morango, banana, leite desnatado, whey de morango, farinha de castanha e gelo', price: 25.00, unit: 'un', image: getImage('protein-powder') },
  { id: 'shake-acai', name: 'Açaí Protein', category: 'shakes-proteicos', description: 'Açaí, banana, farinha láctea, aveia, leite desnatado, whey de baunilha, farinha de castanha e gelo', price: 25.00, unit: 'un', image: getImage('protein-powder') },
  { id: 'shake-cappuccino', name: 'Shake de Cappuccino', category: 'shakes-proteicos', description: 'Café, leite desnatado, banana, pasta de amendoim de doce de leite, canela, whey de baunilha', price: 25.00, unit: 'un', image: getImage('protein-powder') },
  { id: 'shake-chocolate', name: 'Shake de Chocolate', category: 'shakes-proteicos', description: 'Leite desnatado, chocolate meio amargo, banana, whey de chocolate', price: 25.00, unit: 'un', image: getImage('protein-powder') },

  { id: 'acai-300', name: 'Açaí na Tigela (Pequena)', category: 'acai', description: 'Açaí, banana, granola, leite em pó, amendoim, farinha de castanha, farinha láctea, mel ou leite condensado - 300ml', price: 25.00, unit: 'un', image: getImage('bowl') },
  { id: 'acai-500', name: 'Açaí na Tigela (Grande)', category: 'acai', description: 'Açaí, banana, granola, leite em pó, amendoim, farinha de castanha, farinha láctea, mel ou leite condensado - 500ml', price: 30.00, unit: 'un', image: getImage('bowl') },

  { id: 'salgado-pastel', name: 'Pastel Chica Preta', category: 'salgados', description: 'Pastel de diferentes sabores', price: 16.00, unit: 'un', image: getImage('snack') },
  { id: 'salgado-empada-carne', name: 'Empada de Carne de Sol', category: 'salgados', description: 'Com macaxeira', price: 12.90, unit: 'un', image: getImage('snack') },
  { id: 'salgado-empada-frango', name: 'Empada de Batata Doce com Frango', category: 'salgados', description: 'Massa de batata doce com frango', price: 11.90, unit: 'un', image: getImage('snack') },
  { id: 'salgado-coxao', name: 'Coxão de Frango', category: 'salgados', description: 'Massa de macaxeira com recheio de frango', price: 14.00, unit: 'un', image: getImage('snack') },

  { id: 'ref-strogonoff', name: 'Strogonoff de Frango', category: 'refeicoes', description: 'Acompanhado de arroz branco e batata inglesa rústica - 320g', price: 28.00, unit: 'un', image: getImage('meal') },
  { id: 'ref-sobrecoxa-agridoce', name: 'Sobrecoxa Agridoce', category: 'refeicoes', description: 'Acompanhada de arroz com cenoura e ervilha - 250g', price: 25.90, unit: 'un', image: getImage('meal') },
  { id: 'ref-risoto', name: 'Risoto de Frango', category: 'refeicoes', description: 'Feito com arroz integral, legumes e cubinhos de frango - 350g', price: 25.90, unit: 'un', image: getImage('meal') },
  { id: 'ref-carne-panela', name: 'Carne de Panela', category: 'refeicoes', description: 'Com arroz, feijão carioca e farofa - 390g', price: 32.50, unit: 'un', image: getImage('meal') },
  { id: 'ref-escondidinho', name: 'Escondidinho Gratinado', category: 'refeicoes', description: 'Escondidinho gratinado de macaxeira com carne de sol - 400g', price: 25.90, unit: 'un', image: getImage('meal') },
  { id: 'ref-parmegiana', name: 'Parmegiana de Frango', category: 'refeicoes', description: 'Filé à Parmegiana com espaguete ao molho de tomate - 350g', price: 25.90, unit: 'un', image: getImage('meal') },
  { id: 'ref-sobrecoxa-laranja', name: 'Sobrecoxa Desossada', category: 'refeicoes', description: 'Ao molho de laranja com purê de batata doce e arroz multigrãos - 350g', price: 25.90, unit: 'un', image: getImage('meal') },
  { id: 'ref-nhoque', name: 'Nhoque de Manjericão', category: 'refeicoes', description: 'À bolonhesa com queijo - 350g', price: 25.90, unit: 'un', image: getImage('meal') },
  { id: 'ref-isca', name: 'Isca de Carne Acebolada', category: 'refeicoes', description: 'Com arroz de cenoura e feijão caseiro - 400g', price: 29.90, unit: 'un', image: getImage('meal') },

  { id: 'beb-sopa', name: 'Sopa Canja de Galinha', category: 'bebidas', description: 'Com legumes - 450g', price: 24.90, unit: 'un', image: getImage('meal') },
  { id: 'beb-monster', name: 'Monster Energy 473ml', category: 'bebidas', description: 'Energético', price: 14.00, unit: 'un', image: getImage('bottle') },
  { id: 'beb-redbull', name: 'Red Bull 250ml', category: 'bebidas', description: 'Energético', price: 12.00, unit: 'un', image: getImage('bottle') },
  { id: 'beb-cocazero', name: 'Coca Cola Zero 350ml', category: 'bebidas', description: 'Refrigerante', price: 6.00, unit: 'un', image: getImage('bottle') },
  { id: 'beb-yopro', name: 'YoPro 250ml', category: 'bebidas', description: 'Bebida láctea proteica', price: 12.00, unit: 'un', image: getImage('bottle') },
  { id: 'beb-powerade', name: 'Powerade 500ml', category: 'bebidas', description: 'Isotônico', price: 12.00, unit: 'un', image: getImage('bottle') },
  { id: 'beb-plant', name: 'Plant Power Jungle 500ml', category: 'bebidas', description: 'Energético natural', price: 12.50, unit: 'un', image: getImage('bottle') },
  { id: 'beb-awe', name: 'Awe Energy 355ml', category: 'bebidas', description: 'Energético', price: 18.99, unit: 'un', image: getImage('bottle') },
  { id: 'beb-pre200', name: 'Dose de Pré-Treino 200mg', category: 'bebidas', description: '200mg de cafeína', price: 6.00, unit: 'un', image: getImage('bottle') },
  { id: 'beb-pre400', name: 'Dose de Pré-Treino 400mg', category: 'bebidas', description: '400mg de cafeína', price: 7.50, unit: 'un', image: getImage('bottle') },
  { id: 'beb-aguasemgas', name: 'Água sem Gás 500ml', category: 'bebidas', description: 'Água mineral', price: 4.00, unit: 'un', image: getImage('bottle') },
  { id: 'beb-aguacomgas', name: 'Água com Gás 500ml', category: 'bebidas', description: 'Água mineral gaseificada', price: 5.00, unit: 'un', image: getImage('bottle') },
  { id: 'beb-h2o', name: 'H2O Limoneto 500ml', category: 'bebidas', description: 'Refrigerante de limão', price: 8.00, unit: 'un', image: getImage('bottle') },
  { id: 'beb-cappuccino', name: 'Cappuccino Power Whey', category: 'bebidas', description: '3 Corações 15g de Proteína (260ml)', price: 12.00, unit: 'un', image: getImage('bottle') }
];

export const WHATSAPP_NUMBER = '5583987722871';