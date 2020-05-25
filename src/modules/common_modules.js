export default {
    namespaced: true,
    state: {
        navigationDrawer: false,
    },
    mutations: {
        toggleNavigationDrawer(state) {
            state.navigationDrawer = !state.navigationDrawer;
        },
        setNavigationDrawer(state, navDrawer) {
            state.navigationDrawer = navDrawer;
        },
    },
}