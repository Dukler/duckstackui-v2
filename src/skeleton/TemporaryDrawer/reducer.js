export default function reducer(state, action) {
    switch (action.type) {
        case 'drawerOpen':
            return {open: true};
        case 'drawerToggle':
            return {open: !state.open};
        case 'drawerClose':
            return {open: false};
        default:
            throw new Error();
    }
}