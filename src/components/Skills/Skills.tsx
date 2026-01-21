import { motion } from 'framer-motion';
import { useLocaleStore } from '../../store/localeStore';
import { content } from '../../data/content';
import styles from './Skills.module.css';

export default function Skills() {
    const { locale } = useLocaleStore();
    const t = content[locale];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className={styles.skills}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {t.skills.title}
                </motion.h2>

                <motion.div
                    className={styles.categories}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {t.skills.categories.map((category, index) => (
                        <motion.div
                            key={index}
                            className={styles.category}
                            variants={itemVariants}
                        >
                            <h3 className={styles.categoryName}>{category.name}</h3>
                            <div className={styles.tags}>
                                {category.items.map((item, i) => (
                                    <motion.span
                                        key={i}
                                        className={styles.tag}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
