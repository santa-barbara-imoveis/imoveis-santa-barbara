export const contractTypeParamKey = {
    rent: 'rent',
    buy: 'buy'
}

export const contractType = {
    [contractTypeParamKey.rent]: "Locação",
    [contractTypeParamKey.buy]: "Venda"
}

export const contractTypes = [...Object.values(contractType)]