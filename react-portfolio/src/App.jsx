import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import styles from './App.module.css';
import Navbar from './components/Navbar.jsx';
import { getImageUrl } from './util.js';

const heroHeadline = ['Crafting', 'smooth', 'experiences'];

const services = [
  {
    title: 'Product Thinking',
    description:
      'Translating complex requirements into accessible journeys that users love and businesses trust.',
    icon: 'about/cursorIcon.png',
  },
  {
    title: 'API Integrations',
    description:
      'Designing resilient client layers that feel instant, even when the data sources are anything but.',
    icon: 'about/serverIcon.png',
  },
  {
    title: 'Systems & UI',
    description:
      'Building component systems that scale gracefully across devices, themes, and teams.',
    icon: 'about/uiIcon.png',
  },
];

const skills = [
  {
    name: 'React & Hooks',
    description: 'Composing motion-rich interfaces with clean architectural seams.',
    icon: 'skills/react.png',
  },
  {
    name: 'Node & GraphQL',
    description: 'Shipping reliable backends that power immersive products.',
    icon: 'skills/graphql.png',
  },
  {
    name: 'MongoDB',
    description: 'Designing schemas for flexibility, performance, and analytics.',
    icon: 'skills/mongodb.png',
  },
  {
    name: 'Figma',
    description: 'Bridging visuals and implementation without breaking flow.',
    icon: 'skills/figma.png',
  },
];

const projects = [
  {
    name: 'Immersive Portfolio',
    description:
      'A responsive storytelling canvas with parallax scroll, realtime presence, and polished micro-interactions.',
    image: 'project/project.png',
  },
  {
    name: 'Team Insights Dashboard',
    description:
      'Analytics suite that turns live product metrics into actionable narratives for every stakeholder.',
    image: 'project/project.png',
  },
  {
    name: 'Creator Toolkit',
    description:
      'Design system powering content templates with adaptive layouts and instant previews.',
    image: 'project/project.png',
  },
];

const experience = [
  {
    company: 'Microsoft',
    role: 'Frontend Engineer',
    period: '2023 — Present',
    logo: 'history/microsoft.png',
  },
  {
    company: 'Netflix',
    role: 'UI Engineer',
    period: '2021 — 2023',
    logo: 'history/netflix.png',
  },
  {
    company: 'Google',
    role: 'Software Engineer',
    period: '2018 — 2021',
    logo: 'history/google.png',
  },
];

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:tendu@example.com',
    icon: 'contact/emailIcon.png',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/yourhandle',
    icon: 'contact/githubIcon.png',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourhandle',
    icon: 'contact/linkedinIcon.png',
  },
];

const wordVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15 + 0.4,
      type: 'spring',
      stiffness: 120,
      damping: 14,
    },
  }),
};

const fadeInUp = {
  hidden: { opacity: 0, y: 48 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
      delay: custom * 0.15,
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export default function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <main className={styles.main}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Tendü | Crafted with care and motion.</span>
      </footer>
    </div>
  );
}

function SectionHeading({ kicker, title, description }) {
  return (
    <div className={styles.sectionHeading}>
      {kicker && <motion.span initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeInUp} className={styles.sectionKicker}>{kicker}</motion.span>}
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeInUp}>
        {title}
      </motion.h2>
      {description && (
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeInUp}>
          {description}
        </motion.p>
      )}
    </div>
  );
}

SectionHeading.propTypes = {
  kicker: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

function HeroSection() {
  return (
    <section className={`${styles.section} ${styles.hero}`} id="hero">
      <motion.div
        className={styles.heroContent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={staggerContainer}
      >
        <motion.span className={styles.heroKicker} variants={fadeInUp}>
          Tendü Yılmaz
        </motion.span>
        <motion.h1 variants={fadeInUp}>
          Designing and shipping
          <br />
          {heroHeadline.map((word, index) => (
            <motion.span key={word} custom={index} variants={wordVariants} className={styles.heroHighlight}>
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p variants={fadeInUp}>
          I craft responsive, animation-led product experiences that feel effortless on every device. From design
          systems to data-heavy dashboards, I help teams ship fast without sacrificing polish.
        </motion.p>
        <motion.a
          href="#projects"
          className={styles.primaryCta}
          variants={fadeInUp}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          Explore my work
        </motion.a>
      </motion.div>
      <motion.div
        className={styles.heroImageWrapper}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <div className={styles.heroGlow} />
        <motion.img
          src={getImageUrl('hero/heroImage.png')}
          alt="Illustration of Tendü at work"
          loading="lazy"
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 120, damping: 12 }}
        />
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className={styles.section} id="about">
      <SectionHeading kicker="About" title="Blending craft with impact" description="I love shipping thoughtful details that help people move faster." />
      <motion.div className={styles.cardGrid} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        {services.map((service, index) => (
          <motion.article key={service.title} className={styles.card} variants={fadeInUp} custom={index} whileHover={{ translateY: -8 }}>
            <img src={getImageUrl(service.icon)} alt="" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className={styles.section} id="skills">
      <SectionHeading kicker="Skills" title="Tools I use to bring ideas alive" />
      <motion.div className={styles.skillList} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
        {skills.map((skill, index) => (
          <motion.div key={skill.name} className={styles.skillCard} variants={fadeInUp} custom={index} whileHover={{ scale: 1.03 }}>
            <img src={getImageUrl(skill.icon)} alt="" />
            <div>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className={styles.section} id="projects">
      <SectionHeading kicker="Case Studies" title="Recent projects" description="A snapshot of the end-to-end journeys I have shipped recently." />
      <motion.div className={styles.projectGrid} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
        {projects.map((project, index) => (
          <motion.article key={project.name} className={styles.projectCard} variants={fadeInUp} custom={index} whileHover={{ translateY: -10 }}>
            <img src={getImageUrl(project.image)} alt="" />
            <div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className={styles.section} id="experience">
      <SectionHeading kicker="Experience" title="Where I have built" />
      <motion.ul className={styles.timeline} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
        {experience.map((item, index) => (
          <motion.li key={item.company} className={styles.timelineItem} variants={fadeInUp} custom={index}>
            <span className={styles.timelineBullet} />
            <img src={getImageUrl(item.logo)} alt={item.company} />
            <div>
              <h3>{item.company}</h3>
              <p>{item.role}</p>
              <span>{item.period}</span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

function ContactSection() {
  return (
    <section className={`${styles.section} ${styles.contact}`} id="contact">
      <SectionHeading kicker="Connect" title="Let’s build something memorable" description="Open to collaborations, product audits, and speaking about motion design systems." />
      <motion.div className={styles.contactCard} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}>
        <p>
          Drop a message and let me know how I can help. I usually respond within a day.
        </p>
        <div className={styles.contactActions}>
          <a href="mailto:tendu@example.com" className={styles.primaryCta}>
            Say hi
          </a>
          <div className={styles.contactLinks}>
            {contactLinks.map((link) => (
              <motion.a key={link.label} href={link.href} target="_blank" rel="noreferrer" whileHover={{ y: -3 }}>
                <img src={getImageUrl(link.icon)} alt={link.label} />
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
 