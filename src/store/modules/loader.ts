// To use:
// this.$store.commit('loader/START_LOADING');
// this.$store.commit('loader/FINISH_LOADING');

// Within a module
// commit("Loading/START_LOADING", null, { root: true });
// commit("Loading/FINISH_LOADING", null, { root: true });

// To Listen
// this.$store.state["Loading"].loading;

// Inspired by:
// https://medium.com/@LoCascioNick/create-a-global-loading-progress-indicator-using-vuex-axios-and-nprogress-20451b33145a

interface LoaderState {
  loading: number;
}

const state: LoaderState = {
  loading: 0
};

const getters = {
  loading: (state: LoaderState) => state.loading
};

const mutations = {
  START_LOADING: (state: LoaderState) => state.loading++,
  FINISH_LOADING: (state: LoaderState) => state.loading--,
  RESET_LOADING: (state: LoaderState) => (state.loading = 0)
};

export default {
  namespaced: true,
  state,
  getters,
  mutations
};