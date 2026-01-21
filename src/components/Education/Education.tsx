import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { useLocaleStore } from '../../store/localeStore';
import { content } from '../../data/content';
import styles from './Education.module.css';

export default function Education() {
    const { locale } = useLocaleStore();
    const t = content[locale];

    return (
        <section id="education" className={styles.education}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {t.education.title}
                </motion.h2>

                <div className={styles.grid}>
                    {t.education.items.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className={styles.icon}>
                                <GraduationCap size={32} />
                            </div>
                            <span className={styles.date}>{item.date}</span>
                            <h3 className={styles.degree}>{item.degree}</h3>
                            <h4 className={styles.field}>{item.field}</h4>
                            <p className={styles.institution}>{item.institution}</p>
                            <p className={styles.description}>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
