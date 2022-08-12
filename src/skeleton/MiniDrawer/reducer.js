export default function reducer(state, action) {
    switch (action.type) {
        case 'drawerToggle':
            return {open: !state.open};
        case 'drawerClose':
            return {open: false};
        default:
            throw new Error();
    }
}