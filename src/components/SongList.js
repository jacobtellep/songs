import { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render() {
    return <div>SongList</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

// seems that the connect component  will  always connect to the provider beneath the hood.
// the provider is passed the store and the store has the reducers passed to it
export default connect(mapStateToProps)(SongList);
