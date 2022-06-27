function navbar() {
    return ` <div id="navbar">
      <div>
        <h3> <a href="index.html">Home</a> </h3>
      </div>
  
      <div class="options">
        <h3><a href="day.html">Recipe Of The Day</a></h3>
        <h3><a href="latest.html">Recipe's</a></h3>
        <div style="display: flex">
        <input type="search" id="search" placeholder="Search" /><br />
        <button id="btn"><i class="fa fa-search"></i></button>
      </div>
  
      </div>
    </div>`;
  }
  export default navbar;