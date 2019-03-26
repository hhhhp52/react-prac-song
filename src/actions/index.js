//Action Creator
export const selectSong = song => {
    //retuern an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};
