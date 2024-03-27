import { notAvailablePlaceHolder } from "./not-available-placeholder"

export const amenitiesQuantity = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
}

export const amenitiesQuantities = [...Object.values(amenitiesQuantity).map(n => Number(n)), notAvailablePlaceHolder]