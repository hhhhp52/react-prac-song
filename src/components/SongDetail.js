import React from 'react';
import { connect } from 'react-redux'

const SongDetail = ({ song }) => {
    
    if(!song){
        const nocontent = (
            <h3>Select Song</h3>
        );
        return nocontent;
    }else{
        const content = (
            <div>
                <h3>Song Detail</h3>
                <p>Title: {song.title}</p>
                <p>Duration: {song.duration}</p>
            </div>
        );
        return content;
    }
    //return <div>Song Detail</div>
};

const mapStateToProps = (state) => {
    //console.log(state);
    return { song: state.selectedSong };
}


export default connect(mapStateToProps)(SongDetail);