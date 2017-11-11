/**
 * 播放歌曲
 * @param commit
 * @param song
 */
export const playSong = ({commit}, song) => {
    commit('PLAY_SONG', song);
    console.log(song);
}

