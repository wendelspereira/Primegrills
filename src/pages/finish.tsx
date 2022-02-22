import BtnBack from "../components/BtnBack/index";
import { Modal } from "../components/Modal/index"
import { FinishContext, deliveryInfoData } from "../contexts/FinishContext";
import styles from "../styles/pages/Finish.module.scss";
import React, { useRef, useState, useContext } from "react";
import { DeliveryDataForm } from "../components/DeliveryDataForm"
import { cellphone } from "../components/Input/masks"
import { AnimatePresence, motion } from "framer-motion";
import { ProductContext } from "../contexts/ProductContext";
import router from "next/router";

export default function Finish() {
    const { reset } = useContext(ProductContext)
    const { sendFinishData } = useContext(FinishContext)
    const [deliveryInfoData, setDeliveryInfoData] = useState(null)
    const [buyStatus, setOrderDispatched] = useState({ status: "", finishBuy: false })
    const [modalDeliveryInfoState, setStateModalDeliveryInfo] = useState(false)


    const nameRef = useRef<HTMLInputElement>();
    const deliveryRef = useRef<HTMLInputElement>();
    const withdrawRef = useRef<HTMLInputElement>();
    const cellphoneRef = useRef<HTMLInputElement>();

    const handleDeliveryInfo = (data: deliveryInfoData) => {
        setDeliveryInfoData({ ...data })
    }
    const closeModalDeliveryInfo = () => {
        setStateModalDeliveryInfo(false)
    }

    const openModalDeliveryInfo = () => {
        setStateModalDeliveryInfo(true)
    }

    const handleDeliveryMethods = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === "delivery") {
            openModalDeliveryInfo()
        } else if (e.target.id === "withdraw") {   // Caso a opção 'withdraw' seja selecionada após o endereço ser preenchido, ele é apagado. 
            setDeliveryInfoData(null)
        }
    }

    const handleSubmit = async (e: any) => {
        e.target.disabled = true
        e.preventDefault()
        const name = nameRef.current.value
        const deliveryMethod = deliveryRef.current.id
        const deliveryInfo = deliveryInfoData
        const cellphone = cellphoneRef.current.value
        const response = await sendFinishData({
            name,
            deliveryMethod,
            deliveryInfo,
            cellphone,
        })

        if (response.status === 200) {
            reset() //Apaga cookies e lista de pedidos
            setOrderDispatched({ status: "success", finishBuy: true })
        } else {
            setOrderDispatched({ status: "failure", finishBuy: true })
        }
    }

    const backToHome = () => {
        router.push("/")
    }

    const handleCancel = () => {
        closeModalDeliveryInfo()
        withdrawRef.current.click()
    }

    return (
        <div className={styles.container}>
            <header>
                <BtnBack href={"/orders"} />
            </header>
            <main>
                <form onSubmit={handleSubmit}>
                    <AnimatePresence>
                        {/* Formulário da tela de Finish (Dados dos clientes) */}

                        {/* Movimento de arrasto horizontal */}
                        {!buyStatus.finishBuy && <motion.div
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
                            <section>

                                <p>Seu pedido está quase completo!</p>

                                {/* Input nome do cliente */}
                                <div className={styles.inputName}>
                                    <label htmlFor="name">Nome</label>
                                    <input
                                        type="text"
                                        autoFocus={true}
                                        id="name"
                                        maxLength={50}
                                        placeholder="Digite seu nome"
                                        required={true}
                                        ref={nameRef}
                                    />
                                </div>

                                {/* Radio Button forma de entrega (delivery ou retirada) */}
                                <div className={styles.deliveryMethodContainer}>
                                    <label>Como deseja receber?</label>
                                    <div className={styles.deliveryMethods} onChange={handleDeliveryMethods}>
                                        <input
                                            type="radio"
                                            id="delivery"
                                            name="deliveryMethod"
                                            value="Em casa"
                                            ref={deliveryRef}
                                        />
                                        <label htmlFor="delivery">Em casa</label>
                                        <input
                                            type="radio"
                                            id="withdraw"
                                            name="deliveryMethod"
                                            value="primegrills"
                                            ref={withdrawRef}
                                            defaultChecked
                                        />
                                        <label htmlFor="withdraw">No PrimeGrills</label>
                                    </div>
                                </div>

                                <Modal close={handleCancel} state={modalDeliveryInfoState} customStyle={{ width: "70%" }}>
                                    <DeliveryDataForm handleDeliveryInfo={handleDeliveryInfo} handleCancel={handleCancel} close={closeModalDeliveryInfo}/>
                                </Modal>

                                {/* Input e verificação de celular */}
                                <div className={styles.cellphone}>
                                    <label>Número de Whatsapp</label>
                                    <div>
                                        <input
                                            type="tel"
                                            maxLength={15}
                                            minLength={14}
                                            autoComplete='off'
                                            onKeyUp={cellphone}
                                            placeholder="(87) 99999-9999"
                                            required={true}
                                            ref={cellphoneRef}
                                        />
                                        <button className={styles.verify}>Verificar</button>
                                    </div>

                                    <span>
                                        Por motivos de segurança, precisamos enviar um código de confirmação para seu Whatsapp.
                                    </span>
                                </div>

                                {/* Button finalizar (Submete o formulário) */}
                                <div className={styles.btnFinish}>
                                    <button type="button" onClick={handleSubmit} className={styles.buttonFinish}>
                                        Finalizar
                                    </button>
                                </div>
                            </section>
                        </motion.div>}
                    </AnimatePresence>
                </form>

                <Modal close={backToHome} state={buyStatus.finishBuy} customStyle={{ width: "90%" }}>
                    {buyStatus.status === "success" && <div className={styles.confirmation}>
                        <div className={styles.headerSuccess}>
                            <p><strong>Pedido enviado!</strong></p>
                            <img src="icons/checkmark.svg" alt="checkmark" />
                        </div>
                        <div className={styles.main}>
                            <p><strong>Estamos conferindo seus dados...</strong></p>
                            <p>Avisaremos sobre o <strong>andamento</strong> do pedido pelo Whatsapp informado.</p>
                        </div>
                        <div className={styles.footer}>
                            <p><strong>A equipe Prime Grills agradece pela preferência!</strong></p>
                            <button>Voltar para o WhatsApp</button>
                        </div>
                    </div>}

                    {buyStatus.status === "failure" && <div className={styles.confirmation}>
                        <div className={styles.headerFailure}>
                            <p><strong>Ops... Algo deu errado 🙁</strong></p>
                            <img src="icons/checkmark-failure.svg" alt="checkmark-failure" />
                        </div>
                        <div className={styles.main}>
                            <p><strong>Mas não se preocupe, já estamos resolvendo!</strong></p>
                            <p>Se possível, em instantes entraremos em contato pelo WhatsApp informado.</p>
                            <p>Caso isso não aconteça, tente novamento em alguns minutos.</p>
                        </div>
                        <div className={styles.footer}>
                            <p><strong>A equipe Prime Grills pede desculpas pelo transtorno.</strong></p>
                            <button>Voltar para o WhatsApp</button>
                        </div>
                    </div>}
                </Modal>
            </main>
        </div >
    );
}

