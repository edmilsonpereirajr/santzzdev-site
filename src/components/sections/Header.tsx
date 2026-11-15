import ArrowIcon from "@/components/ArrowIcon";
import MobileNavigation from "@/app/MobileNavigation";

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#" aria-label="SantzzDev, página inicial">
        Santzz<span>Dev</span>
        <span className="brand-dot">.</span>
      </a>

      <MobileNavigation />

      <nav className="navigation" aria-label="Navegação principal">
        <a href="#portfolio">Portfólio</a>
        <a href="#servicos">Serviços</a>
        <a href="#sobre">Sobre mim</a>
        <a href="#processo">Processo</a>
        <a href="#contato">Contato</a>
      </nav>

      <a className="header-cta" href="#contato">
        Vamos conversar <ArrowIcon />
      </a>
    </header>
  );
}
