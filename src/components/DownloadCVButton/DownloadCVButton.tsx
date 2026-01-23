import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { useLocaleStore } from '../../store/localeStore';
import styles from './DownloadCVButton.module.css';

export default function DownloadCVButton() {
    const { locale } = useLocaleStore();
    const [isHovered, setIsHovered] = useState(false);

    const buttonText = locale === 'ru' ? 'Скачать CV' : 'Download CV';

    return (
        <div className={styles.wrapper}>
            {/* Animated border SVG - outside button */}
            <svg className={styles.borderSvg} viewBox="0 0 200 60" preserveAspectRatio="none">
                <motion.rect
                    x="1"
                    y="1"
                    width="198"
                    height="58"
                    rx="29"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray="500"
                    initial={{ strokeDashoffset: 500 }}
                    animate={{ strokeDashoffset: isHovered ? 0 : 500 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="50%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                </defs>
            </svg>

            <motion.a
                href="/cv?showDownloadButton"
                className={styles.button}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Animated background gradient */}
                <motion.div
                    className={styles.gradientBg}
                    animate={{
                        backgroundPosition: isHovered ? ['0% 50%', '100% 50%', '0% 50%'] : '0% 50%',
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />

                {/* Glow effect */}
                <motion.div
                    className={styles.glow}
                    animate={{
                        opacity: isHovered ? [0.5, 1, 0.5] : 0.3,
                        scale: isHovered ? [1, 1.2, 1] : 1,
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />

                {/* Star dots */}
                {isHovered && (
                    <>
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className={styles.starDot}
                                initial={{
                                    opacity: 0,
                                    scale: 0,
                                    x: 0,
                                    y: 0
                                }}
                                animate={{
                                    opacity: [0, 1, 0],
                                    scale: [0, 1.5, 0],
                                    x: (Math.random() - 0.5) * 120,
                                    y: (Math.random() - 0.5) * 50
                                }}
                                transition={{
                                    duration: 1,
                                    delay: i * 0.08,
                                    repeat: Infinity,
                                    repeatDelay: 0.3
                                }}
                                style={{
                                    left: `${10 + i * 10}%`,
                                    top: '50%'
                                }}
                            />
                        ))}
                    </>
                )}

                {/* Content */}
                <span className={styles.content}>
                    <motion.span
                        className={styles.iconWrapper}
                        animate={{
                            rotate: isHovered ? [0, -10, 10, 0] : 0,
                            y: isHovered ? [0, -3, 0] : 0
                        }}
                        transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0, repeatDelay: 0.5 }}
                    >
                        <Download size={20} />
                    </motion.span>

                    <span className={styles.text}>{buttonText}</span>

                    <motion.span
                        className={styles.arrow}
                        animate={{
                            x: isHovered ? [0, 5, 0] : 0,
                            opacity: isHovered ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <ArrowRight size={18} />
                    </motion.span>
                </span>

                {/* Shine effect */}
                <motion.div
                    className={styles.shine}
                    animate={{
                        x: isHovered ? ['0%', '200%'] : '-100%',
                    }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                />
            </motion.a>
        </div>
    );
}

