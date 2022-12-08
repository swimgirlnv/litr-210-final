
function Nevada() {
  return (
      <div className="Nevada">
        <img src="https://i.imgur.com/KT4GrIt.png" alt="Workplace" usemap="#icons3"></img>
        <map name="icons3">
          <area shape="rect" coords="48,161,79,193" alt="icon" href="#Reno" 
          onClick={document.getElementById('Reno')}
          pointer="cursor"></area>
          <area shape="rect" coords="53,197,83,231" alt="icon" href="#Carson" 
          onClick={document.getElementById('Carson')}
          pointer="cursor"></area>
        </map>
      </div>
  );
}

export default Nevada;
