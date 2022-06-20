import { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            {/* passing the action creator that is mapped to props to an onClick prop on the button */}
            <button
              className='ui button primary'
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className='ui divided list'>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
};

// seems that the connect component  will  always connect to the provider beneath the hood.
// the provider is passed the store and the store has the reducers passed to it
// second argument in connect is the action selectSong. Which is imported above.
export default connect(mapStateToProps, {
  selectSong,
})(SongList);
