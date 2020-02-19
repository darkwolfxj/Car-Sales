export const addFeature = (obj) => {
    return { type: "ADD_FEATURE", obj }
}
export const removeFeature = obj => {
    return { type: "REMOVE_FEATURE", obj }
}