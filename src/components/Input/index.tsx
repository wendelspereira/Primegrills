
import React, { HtmlHTMLAttributes, InputHTMLAttributes, useCallback } from "react";
import { currency, cellphone } from "./masks";
import styles from "./Input.module.scss"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    mask: "currency" | "cellphone"
}

const Input: React.FC<InputProps> = ({ mask, ...props }) => {
    const className = `input-${mask}`
    
    const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        switch (mask) {
            case "cellphone": {
                cellphone(e)
            } break

            case "currency" : {
                currency(e)
            } break
        }

    }, [mask])

    return (
        <div className={styles.inputCellphone}>
            <input {...props} onKeyUp={handleKeyUp} />
        </div>
    )
}

export default Input
