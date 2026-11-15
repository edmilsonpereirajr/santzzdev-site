import ScrollReveal from "@/components/ScrollReveal";
import {
  siCss,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siNextdotjs,
  siReact,
  siSupabase,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

const technologies = [
  { name: "HTML", icon: siHtml5 },
  { name: "CSS", icon: siCss },
  { name: "JavaScript", icon: siJavascript },
  { name: "TypeScript", icon: siTypescript },
  { name: "React", icon: siReact },
  { name: "Next.js", icon: siNextdotjs },
  { name: "Tailwind CSS", icon: siTailwindcss },
  { name: "Git", icon: siGit },
  { name: "GitHub", icon: siGithub },
  { name: "Supabase", icon: siSupabase },
];

export default function Technologies() {
  return (
    <ScrollReveal>
      <section className="technologies section" id="tecnologias">
        <div className="section-heading">
          <p className="eyebrow">Ferramentas e tecnologias</p>

          <h2>
            Construindo com
            <br />
            <span>tecnologia.</span>
          </h2>

          <p className="section-description">
            Tecnologias que utilizo nos meus estudos e projetos de
            desenvolvimento.
          </p>
        </div>

        <div className="technology-list">
          {technologies.map((tech) => (
            <span key={tech.name}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill={`#${tech.icon.hex}`}
                aria-hidden="true"
                style={{ flexShrink: 0 }}
              >
                <path d={tech.icon.path} />
              </svg>

              {tech.name}
            </span>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
