export const toggleNav = (navOpen) => {
    console.log(navOpen);
    return {
        type: 'TOGGLE_NAV',
        payload: navOpen
    }
}