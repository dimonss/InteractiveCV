import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useThemeStore();

    return (
        <motion.button
            className={styles.toggle}
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.3 }}
            >
                {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
            </motion.div>
        </motion.button>
    );
}
