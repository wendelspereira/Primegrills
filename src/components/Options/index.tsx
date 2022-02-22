import styles from './Options.module.scss';



export function OptionsBlock({ product, newOrder, newPrice, setNewPrice }) {
    const hasOptions = product.optionsComponent.length > 0

    const optionsBlocks = hasOptions ? product.optionsComponent.map((block, index) => {
        const { type, name, options, allowedAmount } = block
        const blockName = name
        const additional = []

        let amount = 0

        const handleCheckFree = (e) => {
            const optionName = e.target.name
            if (amount < allowedAmount && e.target.checked) {
                amount++
                newOrder.config[blockName] ? newOrder.config[blockName].push(optionName) : newOrder.config[blockName] = [optionName]
            } else if (!e.target.checked) {
                amount--
                const index = newOrder.config[blockName].indexOf(optionName)
                newOrder.config[blockName].splice(index, 1)
            } else {
                e.target.checked = false
            }
        }

        const handleCheckPaid = (e, option) => {
            const { additionalPrice } = option
            const optionName = e.target.name

            if (e.target.checked) {
                newOrder.config[blockName] ? newOrder.config[blockName].push(optionName) : newOrder.config[blockName] = [optionName]
                setNewPrice(newPrice += additionalPrice)
            } else {
                const index = newOrder.config[blockName].indexOf(optionName)
                newOrder.config[blockName].splice(index, 1)
                setNewPrice(newPrice -= additionalPrice)
            }
        }

        return (
            <div className={styles.container} key={index}>
                <h3>{name} <span>{`(máx. ${allowedAmount} opções grátis)`}</span></h3>
                <ul>
                    {options.map((option, index) => {
                        if (option.additionalPrice === 0) {
                            const availableStyle = !option.isAvailable ? "notAvailable" : "available"
                            return (
                                <li key={index} className={styles.optionContainer}>
                                    <input type="checkbox" name={option.name} onChange={handleCheckFree} id={`${name}_${index}_free`} />
                                    <label htmlFor={`${name}_${index}_free`} className={styles[availableStyle]}>
                                        <div>{option.name}</div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                        </div>
                                    </label>
                                </li>
                            )
                        } else {
                            additional.push(option)
                        }
                    }
                    )}
                </ul>
                {additional.length > 0 && <h4 className={styles.additional}>Adicionais</h4>}
                {additional.length > 0 && <ul>
                    {additional.map((option, index) => {
                        const availableStyle = !option.isAvailable ? "notAvailable" : "available"
                        return (
                            <li key={index} className={styles.optionContainer}>
                                <input type="checkbox" name={option.name} onChange={(e) => handleCheckPaid(e, option)} id={`${name}_${index}_paid`} />
                                <label htmlFor={`${name}_${index}_paid`} className={styles[availableStyle]}>
                                    <div>{option.name}</div>
                                    <div>
                                        + {option.additionalPrice.toLocaleString(
                                            'pt-br',
                                            { style: 'currency', currency: 'BRL' }
                                        )}
                                    </div>
                                </label>
                            </li>
                        )
                    })}
                </ul>}
            </div >
        )
    }) : null

    return (
        <>
            {optionsBlocks}
        </>
    )
}
