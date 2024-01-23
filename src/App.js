import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PlayerList from './Components/PlayersList';

function App() {
  const styles={display:'flex',flexWrap:'Wrap',justifyContent:'Center'}
  return (
    <div className="App">
      <PlayerList styles={styles} />
    </div>
  );
}

export default App;
