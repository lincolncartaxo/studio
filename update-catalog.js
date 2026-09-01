const fs = require('fs');
const file = '/home/node/.openclaw/workspace/greenlyfe-site/src/components/product-catalog.tsx';
let content = fs.readFileSync(file, 'utf8');

// replace icons import
content = content.replace(/import { Wheat, Pill, GlassWater, Search, X, Grid3x3, List } from 'lucide-react';/g, "import { CupSoda, BatteryCharging, Coffee, Apple, Pizza, Utensils, Wine, GlassWater, Search, X, Grid3x3, List } from 'lucide-react';");

// replace categories array
const newCategories = `const categories = [
  { value: 'sucos-naturais', label: 'Sucos Naturais', icon: GlassWater },
  { value: 'sucos-funcionais', label: 'Funcionais', icon: CupSoda },
  { value: 'vitaminas-energeticos', label: 'Vitaminas', icon: BatteryCharging },
  { value: 'shakes-proteicos', label: 'Shakes', icon: Coffee },
  { value: 'acai', label: 'Açaí', icon: Apple },
  { value: 'salgados', label: 'Salgados', icon: Pizza },
  { value: 'refeicoes', label: 'Refeições', icon: Utensils },
  { value: 'bebidas', label: 'Bebidas', icon: Wine },
];`;
content = content.replace(/const categories = \[[\s\S]*?\];/, newCategories);

// change default selected category
content = content.replace(/useState\('grains'\)/, "useState('sucos-naturais')");

// change TabsList grid classes
content = content.replace(/className="grid w-full grid-cols-3 mb-8"/, 'className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mb-8 h-auto"');

// Fix TabsTrigger styling so it wraps correctly
content = content.replace(/className="flex gap-2 items-center"/, 'className="flex flex-col md:flex-row gap-2 items-center py-2 h-auto"');

fs.writeFileSync(file, content);
console.log('done');
