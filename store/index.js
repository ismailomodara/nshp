export const state = () => ({
  video: {
    play: false,
    lang: 'english',
  },
})

export const mutations = {
  SET_VIDEO(state, video) {
    state.video.play = video.play
    state.video.lang = video.lang
  },
}

export const actions = {
  VIDEO({ commit }, video) {
    commit('SET_VIDEO', video)
  },
}

export const getters = {
  video(state) {
    return state.video
  },
}
