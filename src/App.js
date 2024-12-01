import './App.css';
import PlayersList from './components/PlayersList';
// import PlayersList from './PlayersList';


function App() {
  return (
    <div>
    <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Liste des joueurs</h1>
    <PlayersList />
</div>
  );
}

export default App;
