import SongList from './SongList';

const App = () => {
  return (
    <div className='ui container grid' style={{ padding: '2rem' }}>
      <div className='ui row'>
        <div className='column eight wide'>
          <SongList />
        </div>
      </div>
    </div>
  );
};

export default App;
