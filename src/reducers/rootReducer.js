export const initState = {
    additionalPrice: [0, 1500],
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_FEATURE":
            return state.car.features.map(i => i.id).includes(action.obj.id) ? { ...state } :
            {    ...state, additionalPrice: [...state.additionalPrice, action.obj.price], car: { ...state.car, features: [...state.car.features, action.obj]}, additionalFeatures: state.additionalFeatures.filter(i => i.id !== action.obj.id) 
            }
        case "REMOVE_FEATURE":
            console.log("filtering features", state.car.features.filter(i =>( i.id === action.obj.id)))
            console.log("features array, action id",state.car.features.map(i => i.id), action.obj.id)
            return {
                ...state, additionalPrice: [ ...state.additionalPrice, -action.obj.price ], car: { ...state.car, features: [...state.car.features.filter(i =>( i.id !== action.obj.id))  ], additionalFeatures: [...state.additionalFeatures, action.obj] }
            }
        default:
            return state               
    }
}

