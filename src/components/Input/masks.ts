export function cellphone(e: React.FormEvent<HTMLInputElement>) {
    let value = e.currentTarget.value

    value = value.replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    value = value.replace(/(\d{2})(\d)/, "($1) $2") //Coloca parênteses em volta dos dois primeiros dígitos
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")  //Coloca hífen entre o quarto e o quinto dígito

    e.currentTarget.value = value
    return e
}

export function currency(e: React.FormEvent<HTMLInputElement>) {
    let value = e.currentTarget.value

    value = value.replace(/\D/g, "")
    value = value.replace(/(\d)(\d{2})$/, "$1,$2")
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".")

    e.currentTarget.value = value != "" ? "R$" + value : value 
    return e
}