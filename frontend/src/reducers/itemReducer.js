import { v4 as uuidv4 } from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEMS } from '../actions/types';

const initialState = {
    items: [
        { id: uuidv4(), name: 'Eggs' },
        { id: uuidv4(), name: 'Butter' },
        { id: uuidv4(), name: 'Cheese' },
        { id: uuidv4(), name: 'Milk' }
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
            defualt:
            return state:
    }
}