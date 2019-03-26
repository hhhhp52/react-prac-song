import { combineReducers } from 'redux';

const songsReducer = () =>{
    return [
        {title: 'one', duration: '1:00' },
        {title: 'two', duration: '2:00' },
        {title: 'three', duration: '3:00' },
        {title: 'all', duration: '6:00' }
    ]; 
};

const selectedSongReducer = (selectedSong = null,action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return  selectedSong;  
}; 

export default combineReducers({
    song: songsReducer,
    selectedSong: selectedSongReducer
}); 