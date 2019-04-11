import { combineReducers } from 'redux';

const navbarTogglerReducer = (navOpen=false, action) => {
    switch(action.type) {
        case 'TOGGLE_NAV':
            return action.payload;
        default:
            return navOpen;
    }
}

const modalTogglerReducer = (modalOpen=false, action) => {
    switch(action.type) {
        case 'TOGGLE_MODAL':
            return action.payload;
        default:
            return modalOpen;
    }
}


export default combineReducers({
    navOpen: navbarTogglerReducer,
    modalOpen: modalTogglerReducer
})