import React, { useReducer } from 'react'
import FoodList from '../view/FoodList/FoodList'
import {
    initialState, 
    foodReducer, 
    NEW_FOODBOX, 
    ADD_FOODBOX, 
    SHOW_FORM, 
    SEARCH_FOOD, 
    NEW_TODAYS, 
    ADD_TODAYS, 
    DELETE_TODAYS
} from '../reducers/foodReducer'

function FoodListCt() {
    const [state, dispatch] = useReducer(foodReducer, initialState)
    const handleChangeForm = ({target}) => {
        dispatch({
            type: NEW_FOODBOX,
            payload: {
                [target.name]: target.value
            }
        })
    }
    const handleSubmitForm = e => {
        e.preventDefault()
        dispatch({
            type: ADD_FOODBOX
        })
    }
    const handleNewFoodBtn = () => {
        dispatch({
            type: SHOW_FORM
        })
    }
    const handleSearchBar = ({target}) => {
        dispatch({
            type: SEARCH_FOOD,
            payload: {
                searchBar: target.value
            }
        })
    }
    const handleFoodQuantity = ({target}) => {
        dispatch({
            type: NEW_TODAYS,
            payload: {
                target: target
            }
        })
    }
    const handleAddFood = ({target}) => {
        dispatch({
            type: ADD_TODAYS,
            payload: {
                target: target
            }
        })
    }
    const handleDeleteOnToday = ({target}) => {
        dispatch({
            type: DELETE_TODAYS,
            payload: {
                target: target
            }
        })
    }
    return (
        <FoodList 
            state={state} 
            handleChangeForm={handleChangeForm} 
            handleSubmitForm={handleSubmitForm} 
            handleNewFoodBtn={handleNewFoodBtn} 
            handleSearchBar={handleSearchBar}
            handleFoodQuantity={handleFoodQuantity}
            handleAddFood={handleAddFood}
            handleDeleteOnToday={handleDeleteOnToday}
        />
    )
}

export default FoodListCt
