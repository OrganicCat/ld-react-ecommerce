export const addItemToCart = (list, item) => [...list, item]

export const partial = (func, ...args) => func.bind(null, ...args)