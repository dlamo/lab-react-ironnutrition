import foods from '../foods.json'

export const NEW_FOODBOX = 'NEW_FOODBOX'
export const ADD_FOODBOX = 'ADD_FOODBOX'
export const SHOW_FORM = 'SHOW_FORM'
export const SEARCH_FOOD = 'SEARCH_FOOD'
export const NEW_TODAYS = 'NEW_TODAYS'
export const ADD_TODAYS = 'ADD_TODAYS'
export const DELETE_TODAYS = 'DELETE_TODAYS'

export const initialState = {
    foods: foods,
    newFood: {
        name: '',
        calories: 0,
        image: '',
        quantity: 0
    },
    showForm: false,
    searchBar: '',
    todayList: []
}

export const foodReducer = (state, { type, payload }) => {
    switch (type) {

    case NEW_FOODBOX:
        return { 
            ...state,
            newFood: {
                ...state.newFood,
                ...payload
            }
        }

    case ADD_FOODBOX:
        return {
            ...state,
            foods: [...state.foods, state.newFood],
            showForm: false
        }

    case SHOW_FORM:
        return {
            ...state,
            showForm: true
        }

    case SEARCH_FOOD:
        return {
            ...state,
            searchBar: payload.searchBar
        }

    case NEW_TODAYS:
        const newFoodState = state.foods.map(food => food.name === payload.target.name ? ({...food, quantity: food.quantity + 1}) : food)
        return {
            ...state,
            foods: newFoodState
        }

    case ADD_TODAYS:
        const foodToAdd = state.foods.filter(food => food.name === payload.target.name)
        const indexFood = state.todayList.findIndex(food => food.name === payload.target.name)
        let todayListUpdated = []
        if (indexFood === -1) {
            todayListUpdated = [...state.todayList, ...foodToAdd]
        } else {
            todayListUpdated = state.todayList.map(food => food.name !== payload.target.name ? food : {...food, quantity: food.quantity + foodToAdd[0].quantity})
        }
        return {
            ...state,
            todayList: todayListUpdated
        }

    case DELETE_TODAYS:
        const todayListDeleted = state.todayList.filter(food => food.name !== payload.target.id)
        return {
            ...state,
            todayList: todayListDeleted
        }
    default:
        return state
    }
}
