
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";
import "./App.css";

const skills = [
  "Excel", "Power BI", "Salesforce", "SAP", "HTML5",
  "CSS3", "JavaScript", "React", "Scrum", "Kanban",
];

const experiences = [
  {
    period: "JUNHO DE 2025 — ATUAL",
    location: "São Paulo – SP",
    role: "Assistente Comercial II",
    company: "Claro Brasil",
    type: "Backoffice · Operações Comerciais",
    description:
      "Atuação na área comercial, prestando suporte às equipes e contribuindo para a organização e acompanhamento da jornada de vendas.",
    responsibilities: [
      "Suporte às equipes comerciais no acompanhamento de demandas e processos relacionados à jornada de vendas.",
      "Acompanhamento e organização de informações e documentos, garantindo maior controle das atividades.",
      "Utilização de sistemas e ferramentas internas para registro, consulta e atualização de informações.",
      "Interface com equipes de Backoffice e liderança para tratativa e resolução de demandas operacionais.",
      "Apoio no acompanhamento de processos comerciais, contribuindo para a eficiência operacional e cumprimento das atividades.",
      "Elaboração e acompanhamento de relatórios diários de vendas, apoiando a gestão no monitoramento de resultados.",
      "Acompanhamento de KPIs comerciais e indicadores de qualidade do canal, contribuindo para análise de desempenho e melhoria de processos.",
      "Análise e acompanhamento de informações para identificação de pendências e oportunidades de melhoria nos processos.",
    ],
    tags: [
      "Backoffice",
      "Operações comerciais",
      "Relatórios diários",
      "KPIs",
      "Indicadores",
      "Salesforce",
      "Power BI",
      "Excel",
    ],
    current: true,
  },
  {
    period: "MAIO DE 2023 — MARÇO DE 2025",
    location: "São Paulo – SP",
    role: "Jovem Aprendiz Administrativo",
    company: "Claro Brasil",
    type: "Administrativo · Comercial",
    description:
      "Suporte às operações administrativas e comerciais, com atuação na organização e controle de documentos e contratos por meio de GED. Apoio às rotinas de estoque e processos de devolução utilizando SAP, elaboração de relatórios e controles operacionais. Participação nas atividades de pré-venda e pós-venda, auxiliando no acompanhamento de solicitações, faturas, chips e notas fiscais.",
    tags: [
      "SAP",
      "Gestão documental",
      "GED",
      "Controle de estoque",
      "Relatórios",
      "Processos administrativos",
      "Pré-venda e pós-venda",
    ],
    current: false,
  },
];

const highlights = [
  {
    number: "01",
    title: "Análise de dados",
    detail: "Indicadores e resultados",
    side: "left",
    description:
      "Mateus valoriza o uso de dados para compreender cenários e acompanhar resultados. Em sua rotina profissional, tem contato com relatórios, indicadores comerciais e ferramentas como Excel e Power BI, utilizando informações para apoiar análises e decisões.",
  },
  {
    number: "02",
    title: "Visão comercial",
    detail: "Estratégia e oportunidades",
    side: "left",
    description:
      "A experiência de Mateus na área comercial permitiu desenvolver uma visão ampla dos processos de vendas, das necessidades das equipes e das oportunidades de negócio. Ele busca conectar organização, informação e estratégia para contribuir com os resultados.",
  },
  {
    number: "03",
    title: "Evolução constante",
    detail: "Aprendizado e tecnologia",
    side: "left",
    description:
      "Mateus acredita no aprendizado contínuo como parte da construção de sua carreira. Mantém interesse em novas ferramentas, estuda tecnologia e procura transformar cada experiência profissional e acadêmica em uma oportunidade de evolução.",
  },
  {
    number: "04",
    title: "Backoffice",
    detail: "Experiência operacional",
    side: "right",
    description:
      "Mateus atua no suporte operacional e comercial, acompanhando demandas, organizando informações e apoiando equipes ao longo dos processos de vendas. Sua vivência envolve sistemas corporativos, relatórios, tratativas operacionais e contato com diferentes áreas.",
  },
  {
    number: "05",
    title: "Tecnologia",
    detail: "ADS e desenvolvimento",
    side: "right",
    description:
      "Estudante de Análise e Desenvolvimento de Sistemas, Mateus tem grande interesse pelo universo da tecnologia. Dedica-se a aprender lógica de programação, HTML, CSS e JavaScript, explorando o desenvolvimento web e construindo seu caminho com o objetivo de atuar como desenvolvedor Front-end.",
  },
  {
    number: "06",
    title: "Resultados",
    detail: "Processos e performance",
    side: "right",
    description:
      "Mateus acompanha indicadores, relatórios e informações da operação para ajudar a identificar pendências, observar a performance e dar visibilidade aos resultados. Seu foco está em contribuir com processos mais organizados e decisões apoiadas por dados.",
  },
];

const certificates = [
  { title: "Assistente Administrativo", file: "/cursos/ASSITENTE%20ADMINSTRATIVO.pdf" },
  { title: "Comunicação Empresarial", file: "/cursos/COMUNICAÇÃO-EMPRESARIAL.pdf" },
  { title: "Contabilidade Básica", file: "/cursos/CONTABILIDADE-basic.pdf" },
  { title: "Contabilidade Comercial", file: "/cursos/CONTABILIDADE-COMERCIAL.pdf" },
  { title: "Contabilidade Empresarial", file: "/cursos/CONTABILIDADE-EMPRESARIAL.pdf" },
  { title: "Desenvolvimento Profissional", file: "/cursos/DESENVOLVIMENTO-PROFISSIONAL.pdf" },
  { title: "Educação Financeira", file: "/cursos/EDUCAÇÃO-FINANCEIRA.pdf" },
  { title: "Estratégia de Negócios", file: "/cursos/ESTRATEGIA-NEGOCIOS.pdf" },
  { title: "Introdução ao Excel", file: "/cursos/intro-excel.pdf" },
  { title: "Introdução ao Power BI", file: "/cursos/intro-POWERBI.pdf" },
  { title: "PowerPoint Avançado", file: "/cursos/power-avanced.pdf" },
  { title: "PowerPoint Básico", file: "/cursos/power-basic.pdf" },
  { title: "Word Avançado", file: "/cursos/word-avanced.pdf" },
  { title: "Word Básico", file: "/cursos/word-basic.pdf" },
];

const achievements = [
  {
    image: "/imagens/conquistas/Reconhecimento-1.png",
    title: "Reconhecimento profissional",
    description: "Registro de uma conquista da minha trajetória na Claro.",
  },
  {
    image: "/imagens/conquistas/Reconhecimento-2.png",
    title: "Destaque profissional",
    description: "Reconhecimento pelo trabalho e dedicação.",
  },
  {
    image: "/imagens/conquistas/Reconhecimento-3.png",
    title: "Conquista na Claro",
    description: "Um momento importante da minha evolução profissional.",
  },
  {
    image: "/imagens/conquistas/palco-1.jpeg",
    title: "Momento no palco",
    description: "Participação em evento e reconhecimento profissional.",
  },
  {
    image: "/imagens/conquistas/palco-2.jpg",
    title: "Evento corporativo",
    description: "Registro de uma experiência marcante na empresa.",
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ParticleField() {
  return (
    <div className="particle-field" aria-hidden="true">
      {Array.from({ length: 65 }, (_, index) => (
        <span
          className="particle"
          key={index}
          style={{
            "--x": `${(index * 37) % 100}%`,
            "--y": `${(index * 61) % 100}%`,
            "--delay": `${(index % 11) * -0.9}s`,
            "--duration": `${6 + (index % 8)}s`,
            "--size": `${2 + (index % 3)}px`,
          }}
        />
      ))}
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#inicio");

  const links = [
    ["Início", "#inicio"],
    ["Sobre mim", "#sobre"],
    ["Experiência", "#experiencia"],
    ["Formação", "#formacao"],
    ["Conquistas", "#conquistas"],
    ["Contato", "#contato"],
  ];

  return (
    <header className="site-header">
      <nav className="navbar container">
        <a
          className="nav-status"
          href="#inicio"
          onClick={() => setActiveLink("#inicio")}
          aria-label="Voltar ao início"
        >
          <span className="status-dot" />
          MATEUS SANTOS
          <span className="nav-brand-divider">/</span>
          <span className="nav-brand-subtitle">PORTFÓLIO</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map(([label, href], index) => (
            <motion.a
              key={href}
              href={href}
              className={activeLink === href ? "active" : ""}
              aria-current={activeLink === href ? "page" : undefined}
              onClick={() => {
                setActiveLink(href);
                setMenuOpen(false);
              }}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06, duration: 0.35 }}
              whileHover={{ y: -3, scale: 1.04 }}
              whileTap={{ scale: 0.94 }}
            >
              {label}
            </motion.a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function HeroSection() {
  const [selectedHighlight, setSelectedHighlight] = useState(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const rotateX = useSpring(mouseY, { stiffness: 180, damping: 22 });
  const rotateY = useSpring(mouseX, { stiffness: 180, damping: 22 });
  const glowX = useSpring(cursorX, { stiffness: 160, damping: 24 });
  const glowY = useSpring(cursorY, { stiffness: 160, damping: 24 });

  function handlePointerMove(event) {
    if (event.pointerType === "touch") return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    mouseX.set((x - 0.5) * 18);
    mouseY.set((0.5 - y) * 18);
    cursorX.set((x - 0.5) * 150);
    cursorY.set((y - 0.5) * 190);
  }

  function resetPointer() {
    mouseX.set(0);
    mouseY.set(0);
    cursorX.set(0);
    cursorY.set(0);
  }

  return (
    <section className="hero-section" id="inicio">
      <ParticleField />
      <div className="hero-grid-lines" aria-hidden="true" />

      <div className="hero-content container">
        <div className="hero-copy">
          <Reveal>
            <div className="hero-eyebrow">
              <span className="eyebrow-line" />
              PORTFÓLIO PROFISSIONAL
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="hero-intro">Olá, eu sou</p>
            <h1>
              Mateus
              <span>Santos.</span>
            </h1>
            <h2>
              Negócios, dados
              <br />
              <span>& tecnologia.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="hero-description">
              Assistente Comercial II, estudante de Análise e Desenvolvimento
              de Sistemas e profissional em constante evolução. Conecto visão
              de negócios, análise de dados e tecnologia para transformar
              desafios em oportunidades.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="hero-actions">
              <a className="button-primary" href="#contato">
                Vamos conversar <span>↗</span>
              </a>
              <a className="button-secondary" href="#sobre">
                Conheça minha trajetória
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="hero-bottom-note">
              <span className="note-line" />
              <span>EM CONSTANTE CONSTRUÇÃO</span>
            </div>
          </Reveal>
        </div>

        <div className="hero-visual">
          <div className="hero-side-tags left-tags">
            {highlights.filter((item) => item.side === "left").map((item, index) => (
              <motion.button
                type="button"
                className="hero-tag"
                key={item.number}
                onClick={() => setSelectedHighlight(item)}
                aria-label={`Saiba mais sobre ${item.title}`}
                initial={{ opacity: 0, x: -22 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.5 + index * 0.12,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.07,
                  x: 7,
                  transition: { duration: 0.2 },
                }}
              >
                <span>{item.number}</span>
                <div>
                  <strong>{item.title}</strong>
                  <small>{item.detail}</small>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.div
            className="portrait-stage"
            onPointerMove={handlePointerMove}
            onPointerLeave={resetPointer}
            style={{
              rotateX,
              rotateY,
              transformPerspective: 1000,
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div
              className="portrait-cursor-glow"
              style={{ x: glowX, y: glowY }}
            />
            <div className="portrait-orbit orbit-one" />
            <div className="portrait-orbit orbit-two" />
            <div className="portrait-glow" />

            <div className="portrait-frame">
              <img
                src="/imagens/mateus.jpg"
                alt="Foto de Mateus Santos"
                className="portrait-image"
              />
            </div>

            <div className="portrait-corner corner-tl" />
            <div className="portrait-corner corner-br" />

            <div className="portrait-caption">
              <span className="caption-dot" />
              <span>FOCO • EVOLUÇÃO • RESULTADO</span>
            </div>
          </motion.div>

          <div className="hero-side-tags right-tags">
            {highlights.filter((item) => item.side === "right").map((item, index) => (
              <motion.button
                type="button"
                className="hero-tag"
                key={item.number}
                onClick={() => setSelectedHighlight(item)}
                aria-label={`Saiba mais sobre ${item.title}`}
                initial={{ opacity: 0, x: 22 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.62 + index * 0.12,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.07,
                  x: -7,
                  transition: { duration: 0.2 },
                }}
              >
                <span>{item.number}</span>
                <div>
                  <strong>{item.title}</strong>
                  <small>{item.detail}</small>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span />
        ROLE PARA EXPLORAR
      </div>

      <AnimatePresence>
        {selectedHighlight && (
          <motion.div
            className="highlight-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedHighlight(null)}
          >
            <motion.section
              className="highlight-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="highlight-modal-title"
              initial={{ opacity: 0, y: 22, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="highlight-modal-close"
                type="button"
                onClick={() => setSelectedHighlight(null)}
                aria-label="Fechar explicação"
              >
                ×
              </button>
              <span className="highlight-modal-index">{selectedHighlight.number} / PERFIL PROFISSIONAL</span>
              <h2 id="highlight-modal-title">{selectedHighlight.title}</h2>
              <span className="highlight-modal-detail">{selectedHighlight.detail}</span>
              <p>{selectedHighlight.description}</p>
              <div className="highlight-modal-footer">MATEUS SANTOS <span>•</span> PORTFÓLIO</div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <div className="section-heading">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>
        {title} <span>{accent}</span>
      </h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function AboutSection() {
  return (
    <section className="section about-section" id="sobre">
      <div className="container">
        <SectionHeading
          eyebrow="01 / SOBRE MIM"
          title="Muito além"
          accent="do cargo."
          description="Minha trajetória une experiência prática, visão de negócios e vontade constante de aprender."
        />

        <div className="about-layout">
          <Reveal className="about-main-card">
            <span className="card-index">QUEM SOU</span>
            <h3>
              Construindo minha
              <span> próxima versão.</span>
            </h3>
            <p>
              Minha trajetória profissional começou na Claro Brasil, onde
              desenvolvi experiência em rotinas administrativas e comerciais.
              Com o tempo, ampliei minha atuação para operações comerciais e
              atividades de Backoffice, acompanhando processos, indicadores e
              demandas relacionadas ao mercado corporativo.
            </p>
            <p>
              Atualmente, curso Análise e Desenvolvimento de Sistemas e busco
              aproximar cada vez mais minha experiência de negócios do universo
              da tecnologia, dos dados e do desenvolvimento de soluções.
            </p>
            <div className="about-signature">
              <span className="signature-line" />
              <span>APRENDER. APLICAR. EVOLUIR.</span>
            </div>
          </Reveal>

          <div className="about-side">
            <Reveal className="focus-card" delay={0.1}>
              <span className="focus-icon">⌁</span>
              <div>
                <small>MINHA FORMAÇÃO</small>
                <h3>Tecnologia & Dados</h3>
                <p>
                  Estudos em ADS e desenvolvimento de conhecimentos em
                  programação, análise de dados e ferramentas digitais.
                </p>
              </div>
            </Reveal>

            <Reveal className="focus-card" delay={0.2}>
              <span className="focus-icon">↗</span>
              <div>
                <small>MINHA VIVÊNCIA PROFISSIONAL</small>
                <h3>Operações & Negócios</h3>
                <p>
                  Experiência em Backoffice, suporte às equipes comerciais,
                  acompanhamento de indicadores e melhoria de processos
                  operacionais.
                </p>
              </div>
            </Reveal>

            <Reveal className="skills-panel" delay={0.3}>
              <div className="skills-panel-heading">
                <div>
                  <span className="skills-label">MEU REPERTÓRIO</span>
                  <h3>Conhecimentos & Ferramentas</h3>
                </div>
                <span className="skills-count">10</span>
              </div>
              <p className="skills-description">
                Tecnologias, sistemas e metodologias que fazem parte da minha
                evolução profissional e dos meus estudos.
              </p>
              <div className="skills-list">
                {skills.map((skill) => (
                  <span className="skill-chip" key={skill}>{skill}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="section experience-section" id="experiencia">
      <div className="container">
        <SectionHeading
          eyebrow="02 / TRAJETÓRIA PROFISSIONAL"
          title="Experiência"
          accent="na prática."
          description="Uma trajetória construída com aprendizado, responsabilidade e atuação em processos administrativos e operações comerciais."
        />

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <Reveal
              className="experience-card"
              delay={index * 0.12}
              key={experience.role}
            >
              <div className="experience-topline">
                <span className="experience-period">{experience.period}</span>
                {experience.current && (
                  <span className="current-label">CARGO ATUAL</span>
                )}
              </div>

              <div className="experience-content">
                <div className="experience-company-mark">claro</div>
                <div className="experience-info">
                  <span className="experience-type">{experience.type}</span>
                  <h3>{experience.role}</h3>
                  <h4>{experience.company}</h4>

                  {experience.location && (
                    <p className="experience-location">
                      📍 {experience.location}
                    </p>
                  )}

                  <p>{experience.description}</p>

                  {experience.responsibilities && (
                    <ul className="experience-responsibilities">
                      {experience.responsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                  )}

                  <div className="experience-tags">
                    {experience.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  const [certificateIndex, setCertificateIndex] = useState(null);
  const selectedCertificate = certificateIndex === null ? null : certificates[certificateIndex];

  function showPreviousCertificate() {
    setCertificateIndex((current) => (current - 1 + certificates.length) % certificates.length);
  }

  function showNextCertificate() {
    setCertificateIndex((current) => (current + 1) % certificates.length);
  }

  return (
    <section className="section education-section" id="formacao">
      <div className="container">
        <SectionHeading
          eyebrow="03 / FORMAÇÃO"
          title="Conhecimento"
          accent="em evolução."
          description="Minha formação acadêmica e os aprendizados que acompanham minha jornada."
        />

        <div className="education-grid">
          <Reveal className="education-card featured-education">
            <span className="education-number">01</span>
            <span className="education-status">EM ANDAMENTO</span>
            <div className="education-icon">⌘</div>
            <span className="education-level">ENSINO SUPERIOR</span>
            <h3>Análise e Desenvolvimento de Sistemas</h3>
            <p>Universidade Cruzeiro do Sul</p>
            <span className="education-period">2026 — ATUAL</span>
          </Reveal>

          <Reveal className="education-card certifications-card" delay={0.12}>
            <button
              className="certifications-card-action"
              type="button"
              onClick={() => setCertificateIndex(0)}
              aria-label="Abrir os 14 certificados e cursos"
            >
              <span className="education-number">02</span>
              <div className="education-icon">✳</div>
              <span className="education-level">DESENVOLVIMENTO CONTÍNUO</span>
              <h3>Certificações & Cursos</h3>
              <p>Aprendizado complementar em diferentes áreas.</p>
              <span className="education-period">14 CERTIFICAÇÕES</span>
              <span className="certifications-open-hint">CLIQUE PARA EXPLORAR <span>↗</span></span>
            </button>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="certificates-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCertificateIndex(null)}
          >
            <motion.section
              className="certificates-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="certificate-modal-title"
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="certificates-modal-header">
                <div>
                  <span className="certificates-modal-eyebrow">ACERVO DE FORMAÇÃO</span>
                  <h2 id="certificate-modal-title">{selectedCertificate.title}</h2>
                  <p>Certificado {certificateIndex + 1} de {certificates.length}</p>
                </div>
                <button
                  className="certificates-modal-close"
                  type="button"
                  onClick={() => setCertificateIndex(null)}
                  aria-label="Fechar certificados"
                >
                  ×
                </button>
              </div>

              <div className="certificate-document-wrap">
                <iframe
                  key={selectedCertificate.file}
                  className="certificate-document"
                  src={`${selectedCertificate.file}#toolbar=1&navpanes=0&view=FitH`}
                  title={`Certificado: ${selectedCertificate.title}`}
                />
              </div>

              <div className="certificates-modal-controls">
                <button type="button" className="certificate-nav-button" onClick={showPreviousCertificate}>
                  <span>←</span> ANTERIOR
                </button>
                <span className="certificate-counter">{String(certificateIndex + 1).padStart(2, "0")} <i>/</i> {String(certificates.length).padStart(2, "0")}</span>
                <button type="button" className="certificate-nav-button next" onClick={showNextCertificate}>
                  PRÓXIMO <span>→</span>
                </button>
              </div>
              <a className="certificate-open-link" href={selectedCertificate.file} target="_blank" rel="noreferrer">
                Se o documento não aparecer, abra o PDF em uma nova aba ↗
              </a>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function AchievementsSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="section achievements-section" id="conquistas">
      <div className="container">
        <SectionHeading
          eyebrow="04 / RECONHECIMENTOS & CONQUISTAS"
          title="Momentos que"
          accent="marcam."
          description="Registros de experiências, eventos e reconhecimentos que fazem parte da minha trajetória profissional."
        />

        <div className="achievement-grid">
          {achievements.map((item, index) => (
            <Reveal
              className="achievement-card"
              delay={index * 0.07}
              key={item.image}
            >
              <button
                className="achievement-image-wrap"
                onClick={() => setSelectedImage(item)}
                aria-label={`Ampliar imagem: ${item.title}`}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="achievement-zoom">↗</span>
              </button>
              <div className="achievement-copy">
                <span>REGISTRO {String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Fechar imagem"
            >
              ×
            </button>
            <motion.img
              src={selectedImage.image}
              alt={selectedImage.title}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="section contact-section" id="contato">
      <div className="container">
        <Reveal className="contact-card">
          <span className="section-eyebrow">05 / CONTATO</span>
          <h2>
            Vamos construir
            <br />
            <span>algo juntos?</span>
          </h2>
          <p>
            Estou aberto a conexões, oportunidades profissionais e conversas
            sobre negócios, dados e tecnologia.
          </p>

          <div className="contact-actions">
            <a className="button-primary" href="mailto:contato.mtssnts@gmail.com">
              Enviar um e-mail ↗
            </a>
            <a
              className="button-secondary"
              href="https://wa.me/5511994020969"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>

          <div className="contact-links">
            <a
              className="contact-social-button linkedin-button"
              href="https://www.linkedin.com/in/mateus-dos-santos-b16b5b253/"
              target="_blank"
              rel="noreferrer"
              aria-label="Acessar perfil de Mateus no LinkedIn"
            >
              <span className="contact-social-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18H5.67V9.42h2.67ZM7 8.25a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1ZM18.34 18h-2.67v-4.17c0-1-.02-2.28-1.39-2.28-1.39 0-1.6 1.08-1.6 2.2V18h-2.67V9.42h2.56v1.17h.04a2.81 2.81 0 0 1 2.53-1.39c2.7 0 3.2 1.78 3.2 4.09Z" />
                </svg>
              </span>

              <span className="contact-social-copy">
                <strong>LinkedIn</strong>
                <small>Conectar profissionalmente</small>
              </span>

              <span className="contact-social-arrow" aria-hidden="true">↗</span>
            </a>

            <a
              className="contact-social-button github-button"
              href="https://github.com/mateussnts007"
              target="_blank"
              rel="noreferrer"
              aria-label="Acessar GitHub de Mateus"
            >
              <span className="contact-social-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.62 5.23-5.11 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.64.76.53A11.1 11.1 0 0 0 12 .9Z" />
                </svg>
              </span>

              <span className="contact-social-copy">
                <strong>GitHub</strong>
                <small>Explorar projetos e códigos</small>
              </span>

              <span className="contact-social-arrow" aria-hidden="true">↗</span>
            </a>

            <a
              className="contact-email-link"
              href="mailto:contato.mtssnts@gmail.com"
            >
              
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <span>© {new Date().getFullYear()} Mateus Santos</span>
        <span>DESENVOLVIDO COM PROPÓSITO E EVOLUÇÃO.</span>
        <a href="#inicio">VOLTAR AO TOPO ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
