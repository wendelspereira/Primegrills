import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./Modal.module.scss"

export const Modal = props => {

    const { state, close, customStyle, arrasto = true } = props
    return (
        <AnimatePresence>
            {state && (
                <>
                    {/* Escurecimento e clariamento do fundo */}
                    {/* <Link href={href}> */}
                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                delay: 0.3,
                            }
                        }}
                        exit={{
                            opacity: 0,
                            transition: {
                                delay: 0.3
                            }
                        }}
                        className={styles.modalBackdrop}
                        onClick={close}
                    />
                    {/* </Link> */}

                    {/* Movimento de abertura e fechamento do modal */}
                    <motion.div
                        initial={{
                            scale: 0
                        }}
                        animate={{
                            scale: 1,
                            transition: {
                                duration: 0.3,
                                delay: 0.3
                            }
                        }}
                        exit={{
                            scale: 0,
                            transition: {
                                delay: 0.3
                            }
                        }}
                        className={styles.modalContentWrapper}
                        style={{ ...customStyle }}
                    >
                        {/* Movimento de arrasto horizontal */}
                        {arrasto && <motion.div
                            initial={{
                                x: 20,
                                opacity: 0
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                transition: {
                                    delay: 0.3,
                                    duration: 0.15
                                }
                            }}
                            exit={{
                                x: 20,
                                opacity: 0,
                                transition: {
                                    duration: 0.15
                                }
                            }}
                            style={{ width: "100%", height: "100%" }}
                        >
                            {props.children}

                        </motion.div>}
                        {!arrasto && props.children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

