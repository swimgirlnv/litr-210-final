
function Tahoe() {
  return (
      <div className="Tahoe">
        <img src="https://i.imgur.com/vBFpO08.png" alt="Workplace" usemap="#icons2" height="650px" width="auto"></img>
        <map name="icons2">
        <area shape="rect" coords="313,448,339,474" alt="icon"
        href="#SouthLake" 
        onClick={document.getElementById('SouthLake')} 
        pointer="cursor"></area>
          <area shape="rect" coords="314,0,338,28" alt="icon" 
          href="#Wilderness" 
          onClick={document.getElementById('Wilderness')}
          pointer="cursor"></area>
          <area shape="rect" coords="128,159,156,190" alt="icon" 
          href="#TahoeCity" 
          onClick={document.getElementById('TahoeCity')}
          pointer="cursor"></area>
          <area shape="rect" coords="338,68,361,96" alt="icon" 
          href="#Incline" 
          onClick={document.getElementById('Incline')}
          pointer="cursor"></area>
        </map>
      </div>
  );
}

export default Tahoe;
