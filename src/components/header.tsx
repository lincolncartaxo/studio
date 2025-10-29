export default function Header() {
  return (
    <header className="py-4 px-4 md:px-6 bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src="/logo.png" alt="Logotipo Greenlyfe" className="h-12 w-auto" />
        </a>
        <nav className="hidden md:flex gap-6">
          <a href="#products" className="text-foreground/80 hover:text-foreground transition-colors">Produtos</a>
          <a href="#ai-assistant" className="text-foreground/80 hover:text-foreground transition-colors">Assistente IA</a>
        </nav>
      </div>
    </header>
  );
}
