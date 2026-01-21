import { motion } from 'framer-motion';
import { useLocaleStore } from '../../store/localeStore';
import { content } from '../../data/content';
import styles from './Experience.module.css';
import mbank from '../../assets/images/mbank_logo.png';
import beeline from '../../assets/images/BeeLine_logo.png';
import kstu from '../../assets/images/KGUSTA.png';

const logoMap: Record<string, string> = {
    'mbank_logo.png': mbank,
    'BeeLine_logo.png': beeline,
    'KGUSTA.png': kstu,
};

export default function Experience() {
    const { locale } = useLocaleStore();
    const t = content[locale];

    return (
        <section id="experience" className={styles.experience}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {t.experience.title}
                </motion.h2>

                <div className={styles.timeline}>
                    {t.experience.items.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.item}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className={styles.dot} />
                            <div className={styles.card}>
                                <div className={styles.header}>
                                    {item.logo && (
                                        <div className={styles.logoWrapper}>
                                            <img src={logoMap[item.logo]} alt={item.company} className={styles.logo} />
                                        </div>
                                    )}
                                    <div className={styles.headerText}>
                                        <span className={styles.date}>{item.date}</span>
                                        <h3 className={styles.company}>{item.company}</h3>
                                        <span className={styles.role}>{item.role}</span>
                                    </div>
                                </div>
                                <p className={styles.description}>{item.description}</p>
                                {item.achievements && (
                                    <ul className={styles.achievements}>
                                        {item.achievements.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
