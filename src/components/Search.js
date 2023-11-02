import React, { useState } from 'react';
import { Container, Dropdown, FormControl, Button } from 'react-bootstrap';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');
  const [items, setItems] = useState([
    { id: 1, name: 'Tomato', imgSrc: '../static-web/images/toamto.jpg' },
    { id: 2, name: 'Onion', imgSrc: '../static-web/images/toamto.jpg' },
    { id: 3, name: 'Eggs', imgSrc: '../static-web/images/toamto.jpg' },
    { id: 4, name: 'Bread', imgSrc: '../static-web/images/toamto.jpg' },
    // Add more items as needed
  ]);

  const handleFilterFunction = (e) => {
    setSearchValue(e.target.value.toUpperCase());
  };

  const setInputElement = (value) => {
    setSearchValue(value.toUpperCase());
  };

  return (
    <Container fluid className="pt-3">
      <div className="input-group">
        <Container fluid>
          <form className="d-flex">
            <Container fluid>
              <Dropdown>
                <FormControl
                  className="me-2 dropdown-toggle"
                  id="dropdownMenuButton"
                  aria-expanded="false"
                  placeholder="Search items to add"
                  value={searchValue}
                  onChange={handleFilterFunction}
                />
                <Dropdown.Menu className="container-fluid" id="myUL" aria-labelledby="dropdownMenuButton">
                  {items
                    .filter((item) => item.name.toUpperCase().indexOf(searchValue) > -1)
                    .map((item) => (
                      <Dropdown.Item key={item.id} className="item-search-li" onClick={() => setInputElement(item.name)}>
                        <img src={item.imgSrc} height="50" width="50" alt={item.name} className="drow" />
                        {item.name}
                      </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
            </Container>
            <Button variant="outline-success" className="add-btn" onClick={() => console.log('Add button clicked')}>
              Add
            </Button>
          </form>
        </Container>
      </div>
    </Container>
  );
};

export default SearchInput;