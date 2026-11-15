import CookieSettingsButton from "@/components/CookieSettingsButton";
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

      <nav aria-label="Redes e contato">
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={`mailto:${EMAIL}`}>E-mail</a>
      </nav>

      <CookieSettingsButton />

      <span>
        © {new Date().getFullYear()} SantzzDev. Todos os direitos reservados.
      </span>
    </footer>
  );
}
