import React, { ReactChildren, useContext, useEffect, useRef, useState } from 'react';
import { FinishContext, deliveryInfoData } from '../../contexts/FinishContext';
import Switch from 'react-switch';
import styles from './DeliveryDataForm.module.scss';
import { currency } from "../Input/masks"
import { motion, AnimatePresence } from "framer-motion";
import ReactSwitch from 'react-switch';

export const DeliveryDataForm = ({ handleDeliveryInfo, ...rest }) => {

    const { handleCancel, close } = rest

    const [methodCash, setMethodCash] = useState(false)
    const [addressFieldEmpyt, setAddressFieldEmpyt] = useState(false)
    const [changeFieldEmpyt, setChangeFieldEmpyt] = useState(false)
    const [switchChangeState, setSwitchChangeState] = useState(false)
    const [geoPosition, setGeoPosition] = useState({})

    const addressRef = useRef<HTMLTextAreaElement>()
    const paymentMethodCashRef = useRef<HTMLInputElement>()
    const paymentMethodCardRef = useRef<HTMLInputElement>()
    const requeredChangeRef = useRef() as React.MutableRefObject<ReactSwitch>
    const changeForRef = useRef<HTMLInputElement>()

    const handlePaymentMethod = (e) => {
        const selecPaymentMethod = e.target.value
        setMethodCash(selecPaymentMethod === "cash" ? true : false)
    }

    const handleSubmit = () => {
        console.log(geoPosition)
        const adress = addressRef.current.value
        const paymentMethod = paymentMethodCashRef.current.id
        const requiredChange = requeredChangeRef.current?.props.checked || false
        const changeFor = changeForRef.current?.value || null

        if (!(adress)) {
            setAddressFieldEmpyt(true)
            addressRef.current?.focus()

        } else if (requiredChange && !(changeFor)) {
            setChangeFieldEmpyt(true)
            changeForRef.current?.focus()

        } else {
            handleDeliveryInfo({
                adress,
                geoPosition,
                paymentMethod,
                requiredChange,
                changeFor,
            })
            close()
        }
    }

    const handleSwitchChange = () => {
        setSwitchChangeState(!switchChangeState)
    }

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                const {latitude, longitude} = position.coords
                setGeoPosition({lat: latitude, lgn: longitude})
            }, (err) => console.log(err))
        }
    }, [])

    return (
        <div className={styles.container}>
            {/* título */}
            <h1>Informações sobre a entrega</h1>

            {/* Bloco de endereço */}
            <div className={styles.adress}>
                <label htmlFor="adress">Endereço detalhado</label>
                <textarea
                    name="adress"
                    autoFocus={true}
                    maxLength={150}
                    ref={addressRef}
                />
                {addressFieldEmpyt && <span
                    style={{ color: "var(--background)", marginBottom: 10 }}>
                    Informe o endereço para entrega
                </span>}
            </div>

            {/* Bloco de forma de pagamento */}
            <div className={styles.paymentMethodsContainer}>
                <label htmlFor="">Forma de pagamento</label>

                {/* Inputs tipo radio */}
                <div className={styles.paymentMethods} onChange={handlePaymentMethod}>
                    <input type="radio" name="paymentMethods" value="cash" id="cash" ref={paymentMethodCashRef} />
                    <label htmlFor="cash">Dinheiro</label>
                    <input type="radio" name="paymentMethods" value="card" id="card" ref={paymentMethodCardRef} defaultChecked />
                    <label htmlFor="card">Cartão</label>
                </div>
            </div>

            {/* Se a opção 'precisa de troco' for selecionada */}
            {methodCash &&
                <AnimatePresence>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -10
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                            }
                        }}
                        exit={{
                            transition: {
                                duration: 0.3
                            }
                        }}
                    >
                        <div className={styles.change}>
                            <div className={styles.switchContainer}>
                                <label htmlFor="switchChange">Troco</label>
                                <Switch
                                    id="switchChange"
                                    onChange={handleSwitchChange}
                                    checked={switchChangeState}
                                    checkedIcon={false}
                                    uncheckedIcon={false}
                                    handleDiameter={16}
                                    height={20}
                                    width={40}
                                    offColor="#FF383B"
                                    onColor="#77D196"
                                    ref={requeredChangeRef}
                                />
                            </div>

                            {switchChangeState &&
                                <AnimatePresence>
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: -10
                                        }}
                                        animate={{
                                            y: 0,
                                            opacity: 1,
                                            transition: {
                                                duration: 0.3,
                                            }
                                        }}
                                        exit={{
                                            transition: {
                                                duration: 0.3
                                            }
                                        }}
                                    >
                                        <input
                                            type="tel"
                                            id="inputChange"
                                            autoFocus={true}
                                            maxLength={8}
                                            autoComplete='off'
                                            onKeyUp={currency}
                                            placeholder="Para qual valor?"
                                            required={true}
                                            ref={changeForRef} />
                                        {changeFieldEmpyt &&
                                            <span
                                                style={{ color: "var(--background)", marginBottom: 10 }}>
                                                Informe o valor
                                            </span>
                                        }
                                    </motion.div>
                                </AnimatePresence>
                            }
                        </div>
                    </motion.div>
                </AnimatePresence>
            }

            {/*Botões de conclusão*/}
            <div className={styles.submit}>
                <button type="button" onClick={handleCancel}>Cancelar</button>
                <button type="button" onClick={handleSubmit}>OK</button>
            </div>
        </div>
    )
}
