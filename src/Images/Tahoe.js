import "./Images.css"

function Tahoe() {
  return (
      <div className="Tahoe">
        <img className="image" src="https://i.imgur.com/vBFpO08.png" alt="Workplace" usemap="#icons2"></img>
        <map name="icons2">
        <area shape="rect" coords="273,448,300,474" alt="icon"
        href="#SouthLake" 
        onClick={document.getElementById('SouthLake')} 
        pointer="cursor"></area>
          <area shape="rect" coords="275,0,302,28" alt="icon" 
          href="#Wilderness" 
          onClick={document.getElementById('Wilderness')}
          pointer="cursor"></area>
          <area shape="rect" coords="120,180,145,210" alt="icon" 
          href="#TahoeCity" 
          onClick={document.getElementById('TahoeCity')}
          pointer="cursor"></area>
          <area shape="rect" coords="295,68,320,96" alt="icon" 
          href="#Incline" 
          onClick={document.getElementById('Incline')}
          pointer="cursor"></area>
        </map>
      </div>
  );
}

export default Tahoe;
