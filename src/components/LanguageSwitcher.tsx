import { motion } from 'framer-motion';
import { useLocaleStore } from '../store/localeStore';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
    const { locale, setLocale } = useLocaleStore();

    return (
        <div className={styles.switcher}>
            <motion.button
                className={`${styles.btn} ${locale === 'en' ? styles.active : ''}`}
                onClick={() => setLocale('en')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                EN
            </motion.button>
            <motion.button
                className={`${styles.btn} ${locale === 'ru' ? styles.active : ''}`}
                onClick={() => setLocale('ru')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                RU
            </motion.button>
        </div>
    );
}
