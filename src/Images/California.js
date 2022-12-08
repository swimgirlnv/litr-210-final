
function California() {

  return (
      <div className="California">
        <img className="image" src="https://i.imgur.com/kU8rD8a.png" 
        alt="Workplace" usemap="#icons1"></img>
        <map name="icons1">
        <area shape="rect" coords="53,193,91,224" alt="icon"
        href="#SanFrancisco" 
        onClick={document.getElementById('SanFrancisco')} 
        pointer="cursor"></area>
          <area shape="rect" coords="101,169,128,204" alt="icon" 
          href="#Davis" 
          onClick={document.getElementById('Davis')}
          pointer="cursor"></area>
          <area shape="rect" coords="128,159,156,190" alt="icon" 
          href="#Sacramento" 
          onClick={document.getElementById('Sacramento')}
          pointer="cursor"></area>
          <area shape="rect" coords="254,450,285,482" alt="icon" 
          href="#SanDiego" 
          onClick={document.getElementById('SanDiego')}
          pointer="cursor"></area>
        </map>
      </div>
  );
}

export default California;
