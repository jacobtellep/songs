import { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button className='ui button primary'>Select</button>
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
  return { songs: state.songs };
};

// seems that the connect component  will  always connect to the provider beneath the hood.
// the provider is passed the store and the store has the reducers passed to it
export default connect(mapStateToProps)(SongList);
