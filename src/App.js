import './App.css';
import './Locations/SanFrancisco'
import SanFrancisco from './Locations/SanFrancisco';
import California from './Images/California';
import Tahoe from './Images/Tahoe';
import SouthLake from './Locations/SouthLake';
import Incline from './Locations/Incline';
import TahoeCity from './Locations/TahoeCity';
import Wilderness from './Locations/Wilderness';
import Sacramento from './Locations/Sacramento';
import LetterToReader from './Extra/LetterToReader';
import LetterToMin from './Extra/LetterToMin';

function App() {
  return (
    <div className="App">
      <div className="navbar" id="navbar">
          <a class="navbar-first" href="#Top"><strong>Locations Mythos</strong></a>
          <a class="navbar-last" href="#About">About</a>
        </div>
      <div className="Map-container" id="Top">
        <div className="Maps">
        <California></California>
        <Tahoe></Tahoe>
        </div>
        <div>Scroll to read!</div>
      </div>
      
      <div className='Content'>  
        <div className="right-content">
          <hr id="SanFrancisco"></hr>
          <SanFrancisco></SanFrancisco>
          <hr id="SouthLake" width="60%"></hr>
          <SouthLake></SouthLake>
          <hr id="Incline" width="60%"></hr>
          <Incline></Incline>
          <hr id="TahoeCity" width="60%"></hr>
          <TahoeCity></TahoeCity>
          <hr id="Wilderness" width="60%"></hr>
          <Wilderness></Wilderness>
          <hr id="Sacramento" width="60%"></hr>
          <Sacramento></Sacramento>
        </div>
      </div>
      <div className="Extra">
        <hr id="About"></hr>
        <LetterToReader></LetterToReader>
        <LetterToMin></LetterToMin>
      </div>
      <div className="footer">
          <p>Made with love in Providence</p>
        </div>
    </div>
  );
}

export default App;
