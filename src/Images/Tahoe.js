
function Tahoe() {
  return (
      <div className="Tahoe">
        <img src="https://i.imgur.com/BuSj7kU.png" alt="Workplace" usemap="#icons2"></img>
        <map name="icons2">
          <area shape="rect" coords="99,122,130,158" alt="icon" href="#TahoeCity"
          onClick={document.getElementById('TahoeCity')} 
          pointer="cursor"></area>
          <area shape="rect" coords="269,41,300,75" alt="icon" href="#Incline" 
          onClick={document.getElementById('Incline')}
          pointer="cursor"></area>
          <area shape="rect" coords="262,356,801,387" alt="icon" href="#SouthLake" 
          onClick={document.getElementById('SouthLake')}
          pointer="cursor"></area>
        </map>
      </div>
  );
}

export default Tahoe;
