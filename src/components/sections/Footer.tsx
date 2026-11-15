import CookieSettingsButton from "@/components/CookieSettingsButton";

export default function Footer() {
  return (
    <footer className="site-footer">
      <a
        className="brand"
        href="#"
        aria-label="SantzzDev, voltar ao início"
      >
        Santzz<span>Dev</span>
        <span className="brand-dot">.</span>
      </a>

      <p>Ideias que ganham forma.</p>
          <nav aria-label="Navegação do rodapé">
           <a href="#portfolio">Portfólio</a>
            <a href="#servicos">Serviços</a>
         <a href="#sobre">Sobre mim</a>
        <a href="#contato">Contato</a>
        <a href="/privacidade">Privacidade</a>
    </nav>
          <CookieSettingsButton />
      <span>
        © {new Date().getFullYear()} SantzzDev. Todos os direitos reservados.
      </span>
    </footer>
  );
}
