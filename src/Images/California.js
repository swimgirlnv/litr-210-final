
function California() {

  return (
      <div className="California">
        <img className="image" src="https://i.imgur.com/mh3K30d.png" 
        alt="Workplace" usemap="#icons1" height="650px"></img>
        <map name="icons1">
          <area shape="rect" coords="78,262,106,291" alt="icon" href="#SanFrancisco"
            onClick={document.getElementById('SanFrancisco')} 
            pointer="cursor"></area>
            <area shape="rect" coords="129,220,152,249" alt="icon" href="#Sacramento" 
            onClick={document.getElementById('Sacramento')}
            pointer="cursor"></area>
            <area shape="rect" coords="219,188,245,216" alt="icon" href="#SouthLake" 
            onClick={document.getElementById('SouthLake')}
            pointer="cursor">
            </area>
        </map>
      </div>
  );
}

export default California;
