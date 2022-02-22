//Esquema (estrutura) do databse. Model_08052021
const SCHEMA = {

    category: {
        categoryName: "CATEGORY-TITLE",
        items: [
            //Item 1
            {
                id: 1,
                name: "TITLE",
                cardDescription: "",
                description: "",
                isFixedPrice: true,
                price: 0,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "",
                        options: [
                            { name: '', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 1,
                        allowedAmount: 1,
                    },
                ]
            },
        ]
    },
}

const menu = {
    prime_artesanal: {
        categoryName: "PRIME ARTESANAL",
        items: [
            //Item 1
            {
                id: 1,
                name: "PRIME EGG",
                cardDescription: "",
                description: "Blend bovina artesanal, double egg, cebola caramelizada, muçarela, tomate e alface.",
                isFixedPrice: true,
                price: 10.9,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Acompanhamentos",
                        options: [
                            { name: 'Verde', additionalPrice: 0, isAvailable: true },
                            { name: 'Barbecue', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese caseira', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese branca', additionalPrice: 0, isAvailable: true },
                            { name: 'Ketchup', additionalPrice: 0, isAvailable: true },
                            { name: 'Mostarda', additionalPrice: 0, isAvailable: true },
                            { name: 'Rose', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de batata', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de macacheira', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    },
                ]
            },
            //Item 2
            {
                id: 2,
                name: "PRIME ITÁLIA",
                cardDescription: "",
                description: "Blend bovina artesanal, calabresa, cebola caramelizada, creme três queijos, tomate e alface.",
                isFixedPrice: true,
                price: 10.9,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Acompanhamentos",
                        options: [
                            { name: 'Verde', additionalPrice: 0, isAvailable: true },
                            { name: 'Barbecue', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese caseira', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese branca', additionalPrice: 0, isAvailable: true },
                            { name: 'Ketchup', additionalPrice: 0, isAvailable: true },
                            { name: 'Mostarda', additionalPrice: 0, isAvailable: true },
                            { name: 'Rose', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de batata', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de macacheira', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    },
                ]
            },
            //Item 3
            {
                id: 3,
                name: "PRIME ALEMANHA",
                cardDescription: "",
                description: "Blend bovina artesanal, single egg, cheddar, bacon, cebola caramelizada, muçarela, tomate e alface.",
                isFixedPrice: true,
                price: 9.9,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Acompanhamentos",
                        options: [
                            { name: 'Verde', additionalPrice: 0, isAvailable: true },
                            { name: 'Barbecue', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese caseira', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese branca', additionalPrice: 0, isAvailable: true },
                            { name: 'Ketchup', additionalPrice: 0, isAvailable: true },
                            { name: 'Mostarda', additionalPrice: 0, isAvailable: true },
                            { name: 'Rose', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de batata', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de macacheira', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    },
                ]
            },
            //Item 4
            {
                id: 4,
                name: "PRIME BRASIL",
                cardDescription: "",
                description: "Filé de frango, presunto, muçarela, tomate, alface, cebola e caramelizada",
                isFixedPrice: true,
                price: 10.9,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Acompanhamentos",
                        options: [
                            { name: 'Verde', additionalPrice: 0, isAvailable: true },
                            { name: 'Barbecue', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese caseira', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese branca', additionalPrice: 0, isAvailable: true },
                            { name: 'Ketchup', additionalPrice: 0, isAvailable: true },
                            { name: 'Mostarda', additionalPrice: 0, isAvailable: true },
                            { name: 'Rose', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de batata', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de macacheira', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    },
                ]
            },
            //Item 5
            {
                id: 5,
                name: "ESPECIAL GRILLS",
                cardDescription: "",
                description: "Triple brend bovina artesanal, bacon, calabresa, pure de batata, double egg, muçarela, tomate, alface e cebola caramelizada + Porção de fritas.",
                isFixedPrice: true,
                price: 19.9,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Acompanhamentos",
                        options: [
                            { name: 'Verde', additionalPrice: 0, isAvailable: true },
                            { name: 'Barbecue', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese caseira', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese branca', additionalPrice: 0, isAvailable: true },
                            { name: 'Ketchup', additionalPrice: 0, isAvailable: true },
                            { name: 'Mostarda', additionalPrice: 0, isAvailable: true },
                            { name: 'Rose', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de batata', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de macacheira', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    },
                ]
            },
        ]
    },

    prime_especial: {
        categoryName: "PRIME INDUSTRIAL",
        items: [
            //Item 1
            {
                id: 1,
                name: "PRIME SIMPLE",
                cardDescription: "",
                description: "Double blend bovina industrial, alface e tomate.",
                isFixedPrice: true,
                price: 6.9,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Acompanhamentos",
                        options: [
                            { name: 'Verde', additionalPrice: 0, isAvailable: true },
                            { name: 'Barbecue', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese caseira', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese branca', additionalPrice: 0, isAvailable: true },
                            { name: 'Ketchup', additionalPrice: 0, isAvailable: true },
                            { name: 'Mostarda', additionalPrice: 0, isAvailable: true },
                            { name: 'Rose', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de batata', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de macacheira', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    },
                ]
            },
            //Item 2
            {
                id: 2,
                name: "PRIME BACON",
                cardDescription: "",
                description: "Blend bovina industrial, bacon, alface e tomate.",
                isFixedPrice: true,
                price: 6.9,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Acompanhamentos",
                        options: [
                            { name: 'Verde', additionalPrice: 0, isAvailable: true },
                            { name: 'Barbecue', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese caseira', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese branca', additionalPrice: 0, isAvailable: true },
                            { name: 'Ketchup', additionalPrice: 0, isAvailable: true },
                            { name: 'Mostarda', additionalPrice: 0, isAvailable: true },
                            { name: 'Rose', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de batata', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de macacheira', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    },
                ]
            },
            //Item 3
            {
                id: 3,
                name: "PRIME CHEESE",
                cardDescription: "",
                description: "Blend bovina industrial, cheddar, catupiry, muçarela, alface e tomate.",
                isFixedPrice: true,
                price: 6.9,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Acompanhamentos",
                        options: [
                            { name: 'Verde', additionalPrice: 0, isAvailable: true },
                            { name: 'Barbecue', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese caseira', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese branca', additionalPrice: 0, isAvailable: true },
                            { name: 'Ketchup', additionalPrice: 0, isAvailable: true },
                            { name: 'Mostarda', additionalPrice: 0, isAvailable: true },
                            { name: 'Rose', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de batata', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de macacheira', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    },
                ]
            },
            //Item 4
            {
                id: 4,
                name: "PRIME FRANGO",
                cardDescription: "",
                description: "Blend bovina industrial, patê de frango, alface e tomate.",
                isFixedPrice: true,
                price: 6.9,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Acompanhamentos",
                        options: [
                            { name: 'Verde', additionalPrice: 0, isAvailable: true },
                            { name: 'Barbecue', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese caseira', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese branca', additionalPrice: 0, isAvailable: true },
                            { name: 'Ketchup', additionalPrice: 0, isAvailable: true },
                            { name: 'Mostarda', additionalPrice: 0, isAvailable: true },
                            { name: 'Rose', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de batata', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de macacheira', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    },
                ]
            },
            //Item 5
            {
                id: 5,
                name: "PRIME CALABRESA",
                cardDescription: "",
                description: "Blend bovina industrial, calabresa, alface e tomate.",
                isFixedPrice: true,
                price: 6.9,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Acompanhamentos",
                        options: [
                            { name: 'Verde', additionalPrice: 0, isAvailable: true },
                            { name: 'Barbecue', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese caseira', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese branca', additionalPrice: 0, isAvailable: true },
                            { name: 'Ketchup', additionalPrice: 0, isAvailable: true },
                            { name: 'Mostarda', additionalPrice: 0, isAvailable: true },
                            { name: 'Rose', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de batata', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de macacheira', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    },
                ]
            },
            //Item 6
            {
                id: 6,
                name: "PRIME EGG",
                cardDescription: "",
                description: "Blend bovina industrial, single egg, alface e tomate.",
                isFixedPrice: true,
                price: 6.9,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Acompanhamentos",
                        options: [
                            { name: 'Verde', additionalPrice: 0, isAvailable: true },
                            { name: 'Barbecue', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese caseira', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese branca', additionalPrice: 0, isAvailable: true },
                            { name: 'Ketchup', additionalPrice: 0, isAvailable: true },
                            { name: 'Mostarda', additionalPrice: 0, isAvailable: true },
                            { name: 'Rose', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de batata', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de macacheira', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    },
                ]
            },
        ]
    },

    prime_industrial: {
        categoryName: "PRIME ESPECIALS",
        items: [
            //Item 1
            {
                id: 1,
                name: "PRIME NORDESTINO",
                cardDescription: "",
                description: "Carne de sol, molho nordestino, alface, tomate e muçarela",
                isFixedPrice: true,
                price: 6.9,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Acompanhamentos",
                        options: [
                            { name: 'Verde', additionalPrice: 0, isAvailable: true },
                            { name: 'Barbecue', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese caseira', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese branca', additionalPrice: 0, isAvailable: true },
                            { name: 'Ketchup', additionalPrice: 0, isAvailable: true },
                            { name: 'Mostarda', additionalPrice: 0, isAvailable: true },
                            { name: 'Rose', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de batata', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de macacheira', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    },
                ]
            },
            //Item 2
            {
                id: 2,
                name: "PRIME MINEIRO",
                cardDescription: "",
                description: "Creme três queijos, molho mineiro, alface e tomate.",
                isFixedPrice: true,
                price: 6.9,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Acompanhamentos",
                        options: [
                            { name: 'Verde', additionalPrice: 0, isAvailable: true },
                            { name: 'Barbecue', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese caseira', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese branca', additionalPrice: 0, isAvailable: true },
                            { name: 'Ketchup', additionalPrice: 0, isAvailable: true },
                            { name: 'Mostarda', additionalPrice: 0, isAvailable: true },
                            { name: 'Rose', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de batata', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de macacheira', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    },
                ]
            },
            //Item 3
            {
                id: 3,
                name: "PRIME FITNESS",
                cardDescription: "",
                description: "File de frango, tomate, alface, cebola, omelete e especial.",
                isFixedPrice: true,
                price: 6.9,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Acompanhamentos",
                        options: [
                            { name: 'Verde', additionalPrice: 0, isAvailable: true },
                            { name: 'Barbecue', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese caseira', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese branca', additionalPrice: 0, isAvailable: true },
                            { name: 'Ketchup', additionalPrice: 0, isAvailable: true },
                            { name: 'Mostarda', additionalPrice: 0, isAvailable: true },
                            { name: 'Rose', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de batata', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de macacheira', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    },
                ]
            },

        ]
    },

    petiscos: {
        categoryName: "PETISCOS",
        items: [
            //Item 1
            {
                id: 1,
                name: "PASTEL",
                cardDescription: "",
                description: "",
                isFixedPrice: true,
                price: 4.99,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Selecione o sabor",
                        options: [
                            { name: 'Mussarela', additionalPrice: 0, isAvailable: true },
                            { name: 'Frango', additionalPrice: 0, isAvailable: true },
                            { name: 'Blend Bovina', additionalPrice: 0, isAvailable: true },
                            { name: 'Carne de Sol', additionalPrice: 2 },
                            { name: 'Pizza', additionalPrice: 0, isAvailable: true }
                        ],
                        freeAmount: 1,
                        allowedAmount: 2,
                    },

                    {
                        type: "checkbox",
                        name: "Adicionais",
                        options: [
                            { name: 'Catupiry', additionalPrice: 0, isAvailable: true },
                            { name: 'Cheddar', additionalPrice: 0, isAvailable: true },
                            { name: 'Mussarela', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de batata', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de mandioca', additionalPrice: 0, isAvailable: true }
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    }
                ]
            },
            //Item 2
            {
                id: 2,
                name: "HOT DOG BASIC + REFRI",
                cardDescription: "",
                description: "Pão 12cm, linguiça italiana, blend bovina ao molho, mussarela e batata palha.",
                isFixedPrice: true,
                price: 4.99,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Selecione os molhos",
                        options: [
                            { name: 'Verde', additionalPrice: 0, isAvailable: true },
                            { name: 'Barbecue', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese caseira', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese branca', additionalPrice: 0, isAvailable: true },
                            { name: 'Ketchup', additionalPrice: 0, isAvailable: true },
                            { name: 'Mostarda', additionalPrice: 0, isAvailable: true },
                            { name: 'Rose', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de batata', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de macacheira', additionalPrice: 0, isAvailable: true },
                            { name: 'Catupiry', additionalPrice: 0, isAvailable: true },
                            { name: 'Cheddar', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    },
                ]
            },
            //Item 3
            {
                id: 3,
                name: "HOT DOG ESPECIAL GRILSS",
                cardDescription: "",
                description: "Pão 25cm, double linguiça italiana, blend bovina ao molho, milho verde, bacon, calabreza, mussarela, alface e tomate.",
                isFixedPrice: true,
                price: 9.99,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Selecione os molhos",
                        options: [
                            { name: 'Verde', additionalPrice: 0, isAvailable: true },
                            { name: 'Barbecue', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese caseira', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese branca', additionalPrice: 0, isAvailable: true },
                            { name: 'Ketchup', additionalPrice: 0, isAvailable: true },
                            { name: 'Mostarda', additionalPrice: 0, isAvailable: true },
                            { name: 'Rose', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de batata', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de macacheira', additionalPrice: 0, isAvailable: true },
                            { name: 'Catupiry', additionalPrice: 0, isAvailable: true },
                            { name: 'Cheddar', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    },
                ]
            },
        ],
    },

    porcoes: {
        categoryName: "PORÇÕES",
        items: [
            //Item 1
            {
                id: 1,
                name: "PRIME BOLLS SINGLE",
                cardDescription: "",
                description: "Porção com 5 BOLLS + 1 molho especial",
                isFixedPrice: true,
                price: 9.90,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Selecione os molhos",
                        options: [
                            { name: 'Verde', additionalPrice: 0, isAvailable: true },
                            { name: 'Barbecue', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese caseira', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese branca', additionalPrice: 0, isAvailable: true },
                            { name: 'Ketchup', additionalPrice: 0, isAvailable: true },
                            { name: 'Mostarda', additionalPrice: 0, isAvailable: true },
                            { name: 'Rose', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de batata', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de macacheira', additionalPrice: 0, isAvailable: true },
                            { name: 'Catupiry', additionalPrice: 0, isAvailable: true },
                            { name: 'Cheddar', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 1,
                        allowedAmount: 1,
                    }
                ]
            },
            //Item 2
            {
                id: 2,
                name: "PRIME BOLLS FAMILY",
                cardDescription: "",
                description: "Porção com 10 BOLLS + 2 molhos especiais",
                isFixedPrice: true,
                price: 19.90,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Selecione os molhos",
                        options: [
                            { name: 'Verde', additionalPrice: 0, isAvailable: true },
                            { name: 'Barbecue', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese caseira', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese branca', additionalPrice: 0, isAvailable: true },
                            { name: 'Ketchup', additionalPrice: 0, isAvailable: true },
                            { name: 'Mostarda', additionalPrice: 0, isAvailable: true },
                            { name: 'Rose', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de batata', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de macacheira', additionalPrice: 0, isAvailable: true },
                            { name: 'Catupiry', additionalPrice: 0, isAvailable: true },
                            { name: 'Cheddar', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    }
                ]
            },
            //Item 3
            {
                id: 3,
                name: "FRITAS SINGLE",
                cardDescription: "",
                description: "Porção com 400g de fritas + 2 molhos",
                isFixedPrice: true,
                price: 6.90,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Selecione os molhos",
                        options: [
                            { name: 'Verde', additionalPrice: 0, isAvailable: true },
                            { name: 'Barbecue', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese caseira', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese branca', additionalPrice: 0, isAvailable: true },
                            { name: 'Ketchup', additionalPrice: 0, isAvailable: true },
                            { name: 'Mostarda', additionalPrice: 0, isAvailable: true },
                            { name: 'Rose', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de batata', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de macacheira', additionalPrice: 0, isAvailable: true },
                            { name: 'Catupiry', additionalPrice: 0, isAvailable: true },
                            { name: 'Cheddar', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    }
                ]
            },
            //Item 4
            {
                id: 4,
                name: "FRITAS SINGLE RECHEADAS",
                cardDescription: "",
                description: "Porção com 400g de fritas, bacon e calabresa + molho especial",
                isFixedPrice: true,
                price: 9.90,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Selecione os molhos",
                        options: [
                            { name: 'Verde', additionalPrice: 0, isAvailable: true },
                            { name: 'Barbecue', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese caseira', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese branca', additionalPrice: 0, isAvailable: true },
                            { name: 'Ketchup', additionalPrice: 0, isAvailable: true },
                            { name: 'Mostarda', additionalPrice: 0, isAvailable: true },
                            { name: 'Rose', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de batata', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de macacheira', additionalPrice: 0, isAvailable: true },
                            { name: 'Catupiry', additionalPrice: 0, isAvailable: true },
                            { name: 'Cheddar', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    }
                ]
            },
            //Item 5
            {
                id: 5,
                name: "FRITAS FAMILY",
                cardDescription: "",
                description: "Porção com 800g de fritas + molho especial",
                isFixedPrice: true,
                price: 9.90,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Selecione os molhos",
                        options: [
                            { name: 'Verde', additionalPrice: 0, isAvailable: true },
                            { name: 'Barbecue', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese caseira', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese branca', additionalPrice: 0, isAvailable: true },
                            { name: 'Ketchup', additionalPrice: 0, isAvailable: true },
                            { name: 'Mostarda', additionalPrice: 0, isAvailable: true },
                            { name: 'Rose', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de batata', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de macacheira', additionalPrice: 0, isAvailable: true },
                            { name: 'Catupiry', additionalPrice: 0, isAvailable: true },
                            { name: 'Cheddar', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    }
                ]
            },
            //Item 6
            {
                id: 6,
                name: "FRITAS FAMILY RECHEADAS",
                cardDescription: "",
                description: "Porção com 800g de fritas, bacon e calabresa + molho especial",
                isFixedPrice: true,
                price: 13.90,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Selecione os molhos",
                        options: [
                            { name: 'Verde', additionalPrice: 0, isAvailable: true },
                            { name: 'Barbecue', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese caseira', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese branca', additionalPrice: 0, isAvailable: true },
                            { name: 'Ketchup', additionalPrice: 0, isAvailable: true },
                            { name: 'Mostarda', additionalPrice: 0, isAvailable: true },
                            { name: 'Rose', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de batata', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de macacheira', additionalPrice: 0, isAvailable: true },
                            { name: 'Catupiry', additionalPrice: 0, isAvailable: true },
                            { name: 'Cheddar', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    }
                ]
            },
            //Item 7
            {
                id: 7,
                name: "CUSCUZ SINGLE RECHEADO",
                cardDescription: "",
                description: "Cuscuz, frango, blend bovina ao molho, bacon, calabresa, milho verde e tomate.",
                isFixedPrice: true,
                price: 6.90,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: []
            },
            //Item 8
            {
                id: 8,
                name: "CUSCUZ RECHEADO FAMILY",
                cardDescription: "",
                description: "Cuscuz, frango, blend bovina ao molho, bacon, calabresa, milho verde, e tomate.",
                isFixedPrice: true,
                price: 9.90,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: []
            },
            //Item 9
            {
                id: 9,
                name: "ISCAS DE FRANGO SINGLE",
                cardDescription: "",
                description: "Porção com 400g + Fritas + Molho Especial",
                isFixedPrice: true,
                price: 9.90,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Selecione os molhos",
                        options: [
                            { name: 'Verde', additionalPrice: 0, isAvailable: true },
                            { name: 'Barbecue', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese caseira', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese branca', additionalPrice: 0, isAvailable: true },
                            { name: 'Ketchup', additionalPrice: 0, isAvailable: true },
                            { name: 'Mostarda', additionalPrice: 0, isAvailable: true },
                            { name: 'Rose', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    }
                ]
            },
            //Item 10
            {
                id: 10,
                name: "ISCAS DE FRANGO FAMILY",
                cardDescription: "",
                description: "Porção com 800g + Fritas + Molho Especial",
                isFixedPrice: true,
                price: 19.90,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Selecione os molhos",
                        options: [
                            { name: 'Verde', additionalPrice: 0, isAvailable: true },
                            { name: 'Barbecue', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese caseira', additionalPrice: 0, isAvailable: true },
                            { name: 'Maionese branca', additionalPrice: 0, isAvailable: true },
                            { name: 'Ketchup', additionalPrice: 0, isAvailable: true },
                            { name: 'Mostarda', additionalPrice: 0, isAvailable: true },
                            { name: 'Rose', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    }
                ]
            },
        ],
    },

    bebidas: {
        categoryName: "BEBIDAS",
        items: [
            //Item 1
            {
                id: 1,
                name: "MILKSHAKE",
                cardDescription: "",
                description: "",
                isFixedPrice: true,
                price: 7.99,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Sabor",
                        options: [
                            { name: 'Morango', additionalPrice: 0, isAvailable: true },
                            { name: 'Chocolate Negro', additionalPrice: 0, isAvailable: true },
                            { name: 'Chocolate Branco', additionalPrice: 0, isAvailable: true },
                            { name: 'Menta', additionalPrice: 0, isAvailable: true },
                            { name: 'Flocos', additionalPrice: 0, isAvailable: true },
                            { name: 'Açaí', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 1,
                        allowedAmount: 1,
                    },

                    {
                        type: "checkbox",
                        name: "Condimentos",
                        options: [
                            { name: 'Catupiry', additionalPrice: 0, isAvailable: true },
                            { name: 'Cheddar', additionalPrice: 0, isAvailable: true },
                            { name: 'Mussarela', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de batata', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de mandioca', additionalPrice: 0, isAvailable: true }
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    },

                    {
                        type: "checkbox",
                        name: "Calda",
                        options: [
                            { name: 'Catupiry', additionalPrice: 0, isAvailable: true },
                            { name: 'Cheddar', additionalPrice: 0, isAvailable: true },
                            { name: 'Mussarela', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de batata', additionalPrice: 0, isAvailable: true },
                            { name: 'Purê de mandioca', additionalPrice: 0, isAvailable: true }
                        ],
                        freeAmount: 1,
                        allowedAmount: 1,
                    }
                ]
            },
            //Item 2
            {
                id: 2,
                name: "REFRIGERANTE LATA",
                cardDescription: "",
                description: "",
                isFixedPrice: true,
                price: 3.49,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "select",
                        name: "Sabor/marca",
                        options: [
                            { name: 'Cola-Cola', additionalPrice: 0, isAvailable: true },
                            { name: 'Guaraná', additionalPrice: 0, isAvailable: true },
                            { name: 'Fanta', additionalPrice: 0, isAvailable: true },
                            { name: 'Soda', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 1,
                        allowedAmount: 1,
                    },
                ]
            },
            //Item 3
            {
                id: 3,
                name: "REFRIGERANTE DE 1L",
                cardDescription: "",
                description: "",
                isFixedPrice: true,
                price: 6.99,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "select",
                        name: "Sabor/marca",
                        options: [
                            { name: 'Cola-Cola', additionalPrice: 0, isAvailable: true },
                            { name: 'Guaraná', additionalPrice: 0, isAvailable: true },
                            { name: 'Sukita', additionalPrice: 0, isAvailable: true },
                            { name: 'Soda', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 1,
                        allowedAmount: 1,
                    },
                ]
            },
            //Item 4
            {
                id: 4,
                name: "REFRIGERANTE DE 2L",
                cardDescription: "",
                description: "",
                isFixedPrice: true,
                price: 8.49,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "select",
                        name: "Sabor/marca",
                        options: [
                            { name: 'Cola-Cola', additionalPrice: 0, isAvailable: true },
                            { name: 'Guaraná', additionalPrice: 0, isAvailable: true },
                            { name: 'Fanta', additionalPrice: 0, isAvailable: true },
                            { name: 'Soda', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 1,
                        allowedAmount: 1,
                    },
                ]
            },
        ],
    },

    acai: {
        categoryName: "AÇAÍ",
        items: [
            //Item 1
            {
                id: 1,
                name: "AÇAÍ EM CAMADAS",
                cardDescription: "",
                description: "",
                isFixedPrice: true,
                price: 9.90,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Condimentos",
                        options: [
                            { name: 'Granola', additionalPrice: 0, isAvailable: true },
                            { name: 'Lascas de chocolate', additionalPrice: 0, isAvailable: true },
                            { name: 'Amendoim', additionalPrice: 0, isAvailable: true },
                            { name: 'M&M', additionalPrice: 0, isAvailable: true },
                            { name: 'Leite em pó', additionalPrice: 0, isAvailable: true },
                            { name: 'Farinha láctea', additionalPrice: 0, isAvailable: true },
                            { name: 'Jujuba', additionalPrice: 0, isAvailable: true },
                            { name: 'Marshmallow', additionalPrice: 0, isAvailable: true },
                            { name: 'Cereja', additionalPrice: 0, isAvailable: true },
                            { name: 'Tubitos', additionalPrice: 0, isAvailable: true },
                            { name: 'Brigadeiro', additionalPrice: 0, isAvailable: true },
                            { name: 'Bis', additionalPrice: 0, isAvailable: true },
                            { name: 'Sonho de valça', additionalPrice: 0, isAvailable: true },
                            { name: 'Oreo', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 5,
                        allowedAmount: 5,
                    },

                    {
                        type: "checkbox",
                        name: "Calda",
                        options: [
                            { name: 'Morango', additionalPrice: 0, isAvailable: true },
                            { name: 'Chocolare', additionalPrice: 0, isAvailable: true },
                            { name: 'Leite condensado', additionalPrice: 0, isAvailable: true },
                            { name: 'Maracujá', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 1,
                        allowedAmount: 1,
                    },

                    {
                        type: "checkbox",
                        name: "Frutas",
                        options: [
                            { name: 'Morango', additionalPrice: 0, isAvailable: true },
                            { name: 'Banana', additionalPrice: 0, isAvailable: true },
                            { name: 'KIWI', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    },
                ]
            },

            //Item 2
            {
                id: 2,
                name: "AÇAÍ EM BATIDO",
                cardDescription: "",
                description: "",
                isFixedPrice: true,
                price: 9.90,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Condimentos",
                        options: [
                            { name: 'Granola', additionalPrice: 0, isAvailable: true },
                            { name: 'Lascas de chocolate', additionalPrice: 0, isAvailable: true },
                            { name: 'Amendoim', additionalPrice: 0, isAvailable: true },
                            { name: 'M&M', additionalPrice: 0, isAvailable: true },
                            { name: 'Leite em pó', additionalPrice: 0, isAvailable: true },
                            { name: 'Farinha láctea', additionalPrice: 0, isAvailable: true },
                            { name: 'Jujuba', additionalPrice: 0, isAvailable: true },
                            { name: 'Marshmallow', additionalPrice: 0, isAvailable: true },
                            { name: 'Cereja', additionalPrice: 0, isAvailable: true },
                            { name: 'Tubitos', additionalPrice: 0, isAvailable: true },
                            { name: 'Brigadeiro', additionalPrice: 0, isAvailable: true },
                            { name: 'Bis', additionalPrice: 0, isAvailable: true },
                            { name: 'Sonho de valça', additionalPrice: 0, isAvailable: true },
                            { name: 'Oreo', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    },

                    {
                        type: "checkbox",
                        name: "Calda",
                        options: [
                            { name: 'Morango', additionalPrice: 0, isAvailable: true },
                            { name: 'Chocolare', additionalPrice: 0, isAvailable: true },
                            { name: 'Leite condensado', additionalPrice: 0, isAvailable: true },
                            { name: 'Maracujá', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 1,
                        allowedAmount: 1,
                    },

                    {
                        type: "checkbox",
                        name: "Frutas",
                        options: [
                            { name: 'Morango', additionalPrice: 0, isAvailable: true },
                            { name: 'Banana', additionalPrice: 0, isAvailable: true },
                            { name: 'KIWI', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    },
                ]
            },

            //Item 3
            {
                id: 3,
                name: "AÇAÍ EM PURO",
                cardDescription: "",
                description: "",
                isFixedPrice: true,
                price: 9.90,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Calda",
                        options: [
                            { name: 'Morango', additionalPrice: 0, isAvailable: true },
                            { name: 'Chocolare', additionalPrice: 0, isAvailable: true },
                            { name: 'Leite condensado', additionalPrice: 0, isAvailable: true },
                            { name: 'Maracujá', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 1,
                        allowedAmount: 1,
                    },

                    {
                        type: "checkbox",
                        name: "Frutas",
                        options: [
                            { name: 'Morango', additionalPrice: 0, isAvailable: true },
                            { name: 'Banana', additionalPrice: 0, isAvailable: true },
                            { name: 'KIWI', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 3,
                        allowedAmount: 3,
                    },
                ]
            },

            //Item 4
            {
                id: 4,
                name: "AÇAÍ NA BANDEJA",
                cardDescription: "",
                description: "",
                isFixedPrice: true,
                price: 11.90,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Condimentos",
                        options: [
                            { name: 'Granola', additionalPrice: 0, isAvailable: true },
                            { name: 'Lascas de chocolate', additionalPrice: 0, isAvailable: true },
                            { name: 'Amendoim', additionalPrice: 0, isAvailable: true },
                            { name: 'M&M', additionalPrice: 0, isAvailable: true },
                            { name: 'Leite em pó', additionalPrice: 0, isAvailable: true },
                            { name: 'Farinha láctea', additionalPrice: 0, isAvailable: true },
                            { name: 'Jujuba', additionalPrice: 0, isAvailable: true },
                            { name: 'Marshmallow', additionalPrice: 0, isAvailable: true },
                            { name: 'Cereja', additionalPrice: 0, isAvailable: true },
                            { name: 'Tubitos', additionalPrice: 0, isAvailable: true },
                            { name: 'Brigadeiro', additionalPrice: 0, isAvailable: true },
                            { name: 'Bis', additionalPrice: 0, isAvailable: true },
                            { name: 'Sonho de valça', additionalPrice: 0, isAvailable: true },
                            { name: 'Oreo', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 5,
                        allowedAmount: 5,
                    },

                    {
                        type: "checkbox",
                        name: "Calda",
                        options: [
                            { name: 'Morango', additionalPrice: 0, isAvailable: true },
                            { name: 'Chocolare', additionalPrice: 0, isAvailable: true },
                            { name: 'Leite condensado', additionalPrice: 0, isAvailable: true },
                            { name: 'Maracujá', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 1,
                        allowedAmount: 1,
                    },

                    {
                        type: "checkbox",
                        name: "Frutas",
                        options: [
                            { name: 'Morango', additionalPrice: 0, isAvailable: true },
                            { name: 'Banana', additionalPrice: 0, isAvailable: true },
                            { name: 'KIWI', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 3,
                        allowedAmount: 3,
                    },
                ]
            },

            //Item 5
            {
                id: 5,
                name: "AÇAÍ NA BARCA",
                cardDescription: "",
                description: "",
                isFixedPrice: true,
                price: 24.90,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Condimentos",
                        options: [
                            { name: 'Granola', additionalPrice: 0, isAvailable: true },
                            { name: 'Lascas de chocolate', additionalPrice: 0, isAvailable: true },
                            { name: 'Amendoim', additionalPrice: 0, isAvailable: true },
                            { name: 'M&M', additionalPrice: 0, isAvailable: true },
                            { name: 'Leite em pó', additionalPrice: 0, isAvailable: true },
                            { name: 'Farinha láctea', additionalPrice: 0, isAvailable: true },
                            { name: 'Jujuba', additionalPrice: 0, isAvailable: true },
                            { name: 'Marshmallow', additionalPrice: 0, isAvailable: true },
                            { name: 'Cereja', additionalPrice: 0, isAvailable: true },
                            { name: 'Tubitos', additionalPrice: 0, isAvailable: true },
                            { name: 'Brigadeiro', additionalPrice: 0, isAvailable: true },
                            { name: 'Bis', additionalPrice: 0, isAvailable: true },
                            { name: 'Sonho de valça', additionalPrice: 0, isAvailable: true },
                            { name: 'Oreo', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 5,
                        allowedAmount: 5,
                    },

                    {
                        type: "checkbox",
                        name: "Calda",
                        options: [
                            { name: 'Morango', additionalPrice: 0, isAvailable: true },
                            { name: 'Chocolare', additionalPrice: 0, isAvailable: true },
                            { name: 'Leite condensado', additionalPrice: 0, isAvailable: true },
                            { name: 'Maracujá', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 3,
                        allowedAmount: 3,
                    },

                    {
                        type: "checkbox",
                        name: "Frutas",
                        options: [
                            { name: 'Morango', additionalPrice: 0, isAvailable: true },
                            { name: 'Banana', additionalPrice: 0, isAvailable: true },
                            { name: 'KIWI', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 3,
                        allowedAmount: 3,
                    },
                ]
            },
        ]
    },

    sorvete: {
        categoryName: "SORVETE",
        items: [
            //Item 1
            {
                id: 1,
                name: "CASÇÃO",
                cardDescription: "",
                description: "",
                isFixedPrice: true,
                price: 2.90,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Sabor",
                        options: [
                            { name: 'Morango', additionalPrice: 0, isAvailable: true },
                            { name: 'Chocolate', additionalPrice: 0, isAvailable: true },
                            { name: 'Menta', additionalPrice: 0, isAvailable: true },
                            { name: 'Flocos', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    },



                    {
                        type: "checkbox",
                        name: "Calda",
                        options: [
                            { name: 'Morango', additionalPrice: 0, isAvailable: true },
                            { name: 'Chocolare', additionalPrice: 0, isAvailable: true },
                            { name: 'Maracujá', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 1,
                        allowedAmount: 1,
                    },
                ]
            },

            //Item 2
            {
                id: 2,
                name: "COPO 500ml",
                cardDescription: "",
                description: "",
                isFixedPrice: true,
                price: 5.90,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Sabores",
                        options: [
                            { name: 'Morango', additionalPrice: 0, isAvailable: true },
                            { name: 'Chocolate', additionalPrice: 0, isAvailable: true },
                            { name: 'Mente', additionalPrice: 0, isAvailable: true },
                            { name: 'Flocos', additionalPrice: 0, isAvailable: true },
                            { name: 'Açaí', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    },

                    {
                        type: "checkbox",
                        name: "Condimentos",
                        options: [
                            { name: 'Granola', additionalPrice: 0, isAvailable: true },
                            { name: 'Lascas de chocolate', additionalPrice: 0, isAvailable: true },
                            { name: 'Amendoim', additionalPrice: 0, isAvailable: true },
                            { name: 'M&M', additionalPrice: 0, isAvailable: true },
                            { name: 'Leite em pó', additionalPrice: 0, isAvailable: true },
                            { name: 'Farinha láctea', additionalPrice: 0, isAvailable: true },
                            { name: 'Jujuba', additionalPrice: 0, isAvailable: true },
                            { name: 'Marshmallow', additionalPrice: 0, isAvailable: true },
                            { name: 'Cereja', additionalPrice: 0, isAvailable: true },
                            { name: 'Tubitos', additionalPrice: 0, isAvailable: true },
                            { name: 'Brigadeiro', additionalPrice: 0, isAvailable: true },
                            { name: 'Bis', additionalPrice: 0, isAvailable: true },
                            { name: 'Sonho de valça', additionalPrice: 0, isAvailable: true },
                            { name: 'Oreo', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 5,
                        allowedAmount: 5,
                    },

                    {
                        type: "checkbox",
                        name: "Calda",
                        options: [
                            { name: 'Morango', additionalPrice: 0, isAvailable: true },
                            { name: 'Chocolare', additionalPrice: 0, isAvailable: true },
                            { name: 'Leite condensado', additionalPrice: 0, isAvailable: true },
                            { name: 'Maracujá', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 1,
                        allowedAmount: 1,
                    },

                    {
                        type: "checkbox",
                        name: "Frutas",
                        options: [
                            { name: 'Morango', additionalPrice: 0, isAvailable: true },
                            { name: 'Banana', additionalPrice: 0, isAvailable: true },
                            { name: 'KIWI', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    },
                ]
            },

            //Item 3
            {
                id: 3,
                name: "SORVETE NA BANDEJA",
                cardDescription: "",
                description: "",
                isFixedPrice: true,
                price: 9.90,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Sabores",
                        options: [
                            { name: 'Morango', additionalPrice: 0, isAvailable: true },
                            { name: 'Chocolate', additionalPrice: 0, isAvailable: true },
                            { name: 'Mente', additionalPrice: 0, isAvailable: true },
                            { name: 'Flocos', additionalPrice: 0, isAvailable: true },
                            { name: 'Açaí', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    },

                    {
                        type: "checkbox",
                        name: "Condimentos",
                        options: [
                            { name: 'Granola', additionalPrice: 0, isAvailable: true },
                            { name: 'Lascas de chocolate', additionalPrice: 0, isAvailable: true },
                            { name: 'Amendoim', additionalPrice: 0, isAvailable: true },
                            { name: 'M&M', additionalPrice: 0, isAvailable: true },
                            { name: 'Leite em pó', additionalPrice: 0, isAvailable: true },
                            { name: 'Farinha láctea', additionalPrice: 0, isAvailable: true },
                            { name: 'Jujuba', additionalPrice: 0, isAvailable: true },
                            { name: 'Marshmallow', additionalPrice: 0, isAvailable: true },
                            { name: 'Cereja', additionalPrice: 0, isAvailable: true },
                            { name: 'Tubitos', additionalPrice: 0, isAvailable: true },
                            { name: 'Brigadeiro', additionalPrice: 0, isAvailable: true },
                            { name: 'Bis', additionalPrice: 0, isAvailable: true },
                            { name: 'Sonho de valça', additionalPrice: 0, isAvailable: true },
                            { name: 'Oreo', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 5,
                        allowedAmount: 5,
                    },

                    {
                        type: "checkbox",
                        name: "Calda",
                        options: [
                            { name: 'Morango', additionalPrice: 0, isAvailable: true },
                            { name: 'Chocolare', additionalPrice: 0, isAvailable: true },
                            { name: 'Leite condensado', additionalPrice: 0, isAvailable: true },
                            { name: 'Maracujá', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 1,
                        allowedAmount: 1,
                    },

                    {
                        type: "checkbox",
                        name: "Frutas",
                        options: [
                            { name: 'Morango', additionalPrice: 0, isAvailable: true },
                            { name: 'Banana', additionalPrice: 0, isAvailable: true },
                            { name: 'KIWI', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 3,
                        allowedAmount: 3,
                    },
                ]
            },

            //Item 4
            {
                id: 4,
                name: "SORVETE NA BARCA",
                cardDescription: "",
                description: "",
                isFixedPrice: true,
                price: 19.90,
                isAvailable: true,
                imgSrc: '/exemple.svg',
                optionsComponent: [
                    {
                        type: "checkbox",
                        name: "Sabores",
                        options: [
                            { name: 'Morango', additionalPrice: 0, isAvailable: true },
                            { name: 'Chocolate', additionalPrice: 0, isAvailable: true },
                            { name: 'Mente', additionalPrice: 0, isAvailable: true },
                            { name: 'Flocos', additionalPrice: 0, isAvailable: true },
                            { name: 'Açaí', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 2,
                        allowedAmount: 2,
                    },

                    {
                        type: "checkbox",
                        name: "Condimentos",
                        options: [
                            { name: 'Granola', additionalPrice: 0, isAvailable: true },
                            { name: 'Lascas de chocolate', additionalPrice: 0, isAvailable: true },
                            { name: 'Amendoim', additionalPrice: 0, isAvailable: true },
                            { name: 'M&M', additionalPrice: 0, isAvailable: true },
                            { name: 'Leite em pó', additionalPrice: 0, isAvailable: true },
                            { name: 'Farinha láctea', additionalPrice: 0, isAvailable: true },
                            { name: 'Jujuba', additionalPrice: 0, isAvailable: true },
                            { name: 'Marshmallow', additionalPrice: 0, isAvailable: true },
                            { name: 'Cereja', additionalPrice: 0, isAvailable: true },
                            { name: 'Tubitos', additionalPrice: 0, isAvailable: true },
                            { name: 'Brigadeiro', additionalPrice: 0, isAvailable: true },
                            { name: 'Bis', additionalPrice: 0, isAvailable: true },
                            { name: 'Sonho de valça', additionalPrice: 0, isAvailable: true },
                            { name: 'Oreo', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 8,
                        allowedAmount: 8,
                    },

                    {
                        type: "checkbox",
                        name: "Calda",
                        options: [
                            { name: 'Morango', additionalPrice: 0, isAvailable: true },
                            { name: 'Chocolare', additionalPrice: 0, isAvailable: true },
                            { name: 'Leite condensado', additionalPrice: 0, isAvailable: true },
                            { name: 'Maracujá', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 3,
                        allowedAmount: 3,
                    },

                    {
                        type: "checkbox",
                        name: "Frutas",
                        options: [
                            { name: 'Morango', additionalPrice: 0, isAvailable: true },
                            { name: 'Banana', additionalPrice: 0, isAvailable: true },
                            { name: 'KIWI', additionalPrice: 0, isAvailable: true },
                        ],
                        freeAmount: 3,
                        allowedAmount: 3,
                    },
                ]
            },
        ]
    },
}

export default menu
