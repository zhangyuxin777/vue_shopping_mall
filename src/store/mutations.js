/**
 * Created by oker on 2017/11/11.
 */

export const PLAY_SONG = (state, song) => {
    state.titleBar.title = song;
    console.log(song);
}
