import CookieSettingsButton from "@/components/CookieSettingsButton";
import SocialIcon from "@/components/SocialIcon";
import { EMAIL, GITHUB_URL, INSTAGRAM_URL } from "@/data/links";

export default function Footer() {
  return (
    <footer className="site-footer">
      <a className="brand" href="#" aria-label="SantzzDev, voltar ao início">
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

      <nav className="social-links" aria-label="Redes e contato">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram da SantzzDev (abre em nova aba)"
          title="Instagram"
        >
          <SocialIcon type="instagram" />
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub de Edmilson (abre em nova aba)"
          title="GitHub"
        >
          <SocialIcon type="github" />
        </a>
        <a href={`mailto:${EMAIL}`} aria-label="Enviar e-mail" title="E-mail">
          <SocialIcon type="mail" />
        </a>
      </nav>

      <CookieSettingsButton />

      <span>
        © {new Date().getFullYear()} SantzzDev. Todos os direitos reservados.
      </span>
    </footer>
  );
}
