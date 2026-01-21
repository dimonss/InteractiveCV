import { motion } from 'framer-motion';
import { useLocaleStore } from '../../store/localeStore';
import { content } from '../../data/content';
import styles from './About.module.css';

export default function About() {
    const { locale } = useLocaleStore();
    const t = content[locale];

    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {t.about.title}
                </motion.h2>

                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className={styles.description}>{t.about.description}</p>
                </motion.div>

                <motion.div
                    className={styles.stats}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>5+</span>
                        <span className={styles.statLabel}>{locale === 'en' ? 'Years Experience' : 'Лет опыта'}</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>3</span>
                        <span className={styles.statLabel}>{locale === 'en' ? 'Companies' : 'Компании'}</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>5</span>
                        <span className={styles.statLabel}>{locale === 'en' ? 'Team Members Led' : 'Членов команды'}</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
