import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Mail, Phone } from 'lucide-react';
import { useLocaleStore } from '../../store/localeStore';
import { content } from '../../data/content';
import styles from './Hero.module.css';
import photo from '../../assets/images/I.jpg';

export default function Hero() {
    const { locale } = useLocaleStore();
    const t = content[locale];
    const [typedText, setTypedText] = useState('');
    const fullText = t.personal.subtitle;

    useEffect(() => {
        setTypedText('');
        let i = 0;
        const interval = setInterval(() => {
            if (i < fullText.length) {
                setTypedText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
            }
        }, 50);
        return () => clearInterval(interval);
    }, [fullText]);

    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <motion.div
                    className={styles.photoWrapper}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.photoGlow} />
                    <img src={photo} alt={t.personal.name} className={styles.photo} />
                </motion.div>

                <motion.h1
                    className={styles.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {t.personal.name.split('').map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 + i * 0.03 }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    {t.personal.title}
                </motion.h2>

                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    {typedText}
                    <span className={styles.cursor}>|</span>
                </motion.p>

                <motion.div
                    className={styles.info}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                >
                    <div className={styles.infoItem}>
                        <MapPin size={16} />
                        <span>{t.personal.location}</span>
                    </div>
                    <div className={styles.infoItem}>
                        <Mail size={16} />
                        <a href={`mailto:${t.personal.email}`}>{t.personal.email}</a>
                    </div>
                    <div className={styles.infoItem}>
                        <Phone size={16} />
                        <a href={`tel:${t.personal.phone1}`}>{t.personal.phone1}</a>
                    </div>
                </motion.div>

                <motion.button
                    className={styles.scrollBtn}
                    onClick={scrollToAbout}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    whileHover={{ scale: 1.1 }}
                >
                    <ChevronDown size={28} className={styles.scrollIcon} />
                </motion.button>
            </div>
        </section>
    );
}
