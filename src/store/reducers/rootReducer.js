import React from "react";

const initState = {
    users: [
        { id: 1, name: 'Hieu' },
        { id: 2, name: 'Nam' }
    ],
    post: []
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('>>>run into delete user: ', action)
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            }
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 10010)
            let user = { id: id, name: `random -${id}` }
            return {
                ...state, users: [...state.users, user]
            }
            break;
        default:
            // code block
            return state;
    }
}

export default rootReducer;