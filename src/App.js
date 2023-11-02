import './App.css';

function App() {
  return (
    <div class="container-fluid">
    <div class="container-fluid mb-5">
        <nav class="navbar navbar-expand-md fixed-top py-0 container-fluid rounded-bottom" >
            <div class="container-fluid pt-2 px-2 justify-content-center" id="head-nv">
                <p id="title"><a href="index.html" class="navbar-brand text-light h1 title">SGMA</a></p>
            </div>
        </nav>
    </div>

    <div class="container-fluid pt-3">
        <div class="input-group">
            <div class="container-fluid">
                <form class="d-flex">
                    <div class="container-fluid">
                        <div class="dropdown">
                            <input type="search" class="form-control me-2 dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" 
                             placeholder="Search items to add" onkeyup="filterFunction()"></input>
                            <ul class="dropdown-menu container-fluid" id="myUL" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item item-search-li" href="#" onclick="setinputfield('Tomato')"><img src="https://via.placeholder.com/20" class="drow"></img> Tomato</a></li>
                                <li><a class="dropdown-item item-search-li" href="#" onclick="setinputfield('Onion')"><img src="https://via.placeholder.com/20" class="drow"></img> Onion</a></li>
                                <li><a class="dropdown-item item-search-li" href="#" onclick="setinputfield('Bread')"><img src="https://via.placeholder.com/20" class="drow"></img> Bread</a></li>
                                <li><a class="dropdown-item item-search-li" href="#" onclick="setinputfield('Garlic')"><img src="https://via.placeholder.com/20" class="drow"></img> Garlic</a></li>
                                <li><a class="dropdown-item item-search-li" href="#" onclick="setinputfield('Eggs')"><img src="https://via.placeholder.com/20" class="drow"></img> Eggs</a></li>
                            </ul>
                        </div>
                    </div>
                  <button class="btn btn-outline-success" type="submit">Add</button>
                </form>
              </div>
        </div>
      </div>
    
    </div>
  );
}

export default App;
