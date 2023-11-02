import './index.css'
import Navbar from './components/Navbar';
import Search from './components/Search';
import Item from './components/Item';
import CreateList from './components/Grocerylist';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid pt-3">
        <Search />
        <h1 className="pt-4 display1">Inventory</h1>
        <Item />
      </div>
      <CreateList />
    </div>
  );
}

export default App;
