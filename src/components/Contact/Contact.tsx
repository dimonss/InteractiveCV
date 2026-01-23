import { motion } from 'framer-motion';
import { Github, Linkedin, Send, Instagram, Mail, Phone, MapPin, type LucideProps } from 'lucide-react';
import { useLocaleStore } from '../../store/localeStore';
import { content, socialLinks } from '../../data/content';
import styles from './Contact.module.css';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
    github: Github,
    linkedin: Linkedin,
    send: Send,
    instagram: Instagram,
};

export default function Contact() {
    const { locale } = useLocaleStore();
    const t = content[locale];

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {t.contact.title}
                </motion.h2>

                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {t.contact.subtitle}
                </motion.p>

                <motion.div
                    className={styles.info}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <a href={`mailto:${t.personal.email}`} className={styles.infoItem}>
                        <Mail size={24} />
                        <span>{t.personal.email}</span>
                    </a>
                    <a href={`tel:${t.personal.phone2}`} className={styles.infoItem}>
                        <Phone size={24} />
                        <span>{t.personal.phone2}</span>
                    </a>
                    <div className={styles.infoItem}>
                        <MapPin size={24} />
                        <span>{t.personal.location}</span>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.socials}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {socialLinks.map((link, index) => {
                        const Icon = iconMap[link.icon];
                        return (
                            <motion.a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                title={link.name}
                            >
                                <Icon size={24} />
                                <span>{link.name}</span>
                            </motion.a>
                        );
                    })}
                </motion.div>

                <motion.footer
                    className={styles.footer}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <p>© {new Date().getFullYear()} {t.personal.name}. All rights reserved.</p>
                </motion.footer>
            </div>
        </section>
    );
}
