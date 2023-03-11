import "./Images.css"

function California() {

  return (
      <div className="California">
        <img className="image" src="https://i.imgur.com/mh3K30d.png" 
        alt="Workplace" usemap="#icons1"></img>
        <map name="icons1">
          <area shape="rect" coords="68,252,88,271" alt="icon" href="#SanFrancisco"
            onClick={document.getElementById('SanFrancisco')} 
            pointer="cursor"></area>
            <area shape="rect" coords="103,215,123,235" alt="icon" href="#Sacramento" 
            onClick={document.getElementById('Sacramento')}
            pointer="cursor"></area>
            <area shape="rect" coords="178,188,200,206" alt="icon" href="#SouthLake" 
            onClick={document.getElementById('SouthLake')}
            pointer="cursor">
            </area>
        </map>
      </div>
  );
}
// "129,220,152,249"
export default California;
