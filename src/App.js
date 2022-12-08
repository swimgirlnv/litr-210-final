import './App.css';
import './Locations/SanFrancisco'
import SanFrancisco from './Locations/SanFrancisco';
import California from './Images/California';
import Tahoe from './Images/Tahoe';
import Nevada from './Images/Nevada';
import SouthLake from './Locations/SouthLake';
import Incline from './Locations/Incline';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <h1>Locations Mythos</h1>
      </div>
      <div className="Maps">
      <California></California>
      <Tahoe></Tahoe>
      <Nevada></Nevada>
      </div>
      <div className='Content'>
      <SanFrancisco></SanFrancisco>
      <SouthLake></SouthLake>
      <Incline></Incline>
      </div>
    </div>
  );
}

export default App;
