export const toggleNav = (navOpen) => {
    console.log(navOpen);
    return {
        type: 'TOGGLE_NAV',
        payload: !navOpen
    }
}

export const toggleModal = (modalOpen) => {
    return {
        type: 'TOGGLE_MODAL',   
        payload: !modalOpen
    }
}