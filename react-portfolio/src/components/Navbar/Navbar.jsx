import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../util.js';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const mobileVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.wrapper}>
      <nav className={styles.navbar}>
        <a href="#hero" className={styles.brand}>
          <div className={styles.brandGlow} />
          Tendü
        </a>

        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <motion.a href={link.href} whileHover={{ y: -3 }} onClick={closeMenu}>
                {link.label}
                <motion.span className={styles.linkUnderline} layoutId="nav-underline" />
              </motion.a>
            </li>
          ))}
        </ul>

        <button type="button" className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle navigation">
          <img src={getImageUrl(isOpen ? 'nav/closeIcon.png' : 'nav/menuIcon.png')} alt="" />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div className={styles.mobileMenu} initial="hidden" animate="visible" exit="exit" variants={mobileVariants}>
            {navLinks.map((link) => (
              <motion.a key={link.href} href={link.href} whileHover={{ x: 4 }} onClick={closeMenu}>
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

