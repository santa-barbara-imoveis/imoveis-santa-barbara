import { notAvailablePlaceHolder } from "./not-available-placeholder"

export const city = {
    santa_barbara: "Santa Bárbara",
    barao_cocais: "Barão de Cocais",
    catas_altas: "Catas Altas",
    sao_goncalo_rio_abaixo: "São Gonçalo do Rio Abaixo"
}

export const cities = [...Object.values(city), notAvailablePlaceHolder]