import { Leaf, Phone, Mail, Instagram, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary/50 py-12 px-4 md:px-6 mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-secondary-foreground">
        <div className="flex flex-col items-start gap-4">
          <a href="#" className="flex items-center gap-2">
            <img src="/logo.png" alt="Logotipo Greenlyfe" className="h-12 w-auto" />
          </a>
          <p className="text-sm">
            Sua loja de produtos naturais para uma vida mais saudável.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Contato</h3>
          <a href="https://wa.me/5583987848625" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span>+55 (83) 98784-8625</span>
          </a>
          <a href="mailto:greenlyfesaude@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            <span>greenlyfesaude@gmail.com</span>
          </a>
          <a href="https://maps.app.goo.gl/NXwafXEdpRdj4KKw5" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <MapPin className="w-4 h-4" /> 
            <span>Av. Gov. Flávio Ribeiro Coutinho, 500, Loja 237 - Jardim Oceania, João Pessoa - PB, 58037-005</span>
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Siga-nos</h3>
          <a href="https://www.instagram.com/greenlyfesaude" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Instagram className="w-4 h-4" />
            <span>@greenlyfesaude</span>
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-secondary-foreground/20 text-center text-sm text-secondary-foreground/80">
        <p>&copy; {new Date().getFullYear()} Greenlyfe Store. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
