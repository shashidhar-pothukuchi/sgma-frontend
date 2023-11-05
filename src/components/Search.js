import React, { useState } from "react";
import {
  Container,
  Dropdown,
  FormControl,
  Button,
  Image,
  Row,
  Col,
  FormGroup,
} from "react-bootstrap";
import "../index.css";

const SearchInput = ({ addNewItem }) => {
  const [searchValue, setSearchValue] = useState("");
  const [mainItem, setmainItem] = useState();
  const [items] = useState([
    { id: 1, name: "Tomato", imgSrc: require("../images/toamto.jpg") },
    { id: 2, name: "Onion", imgSrc: require("../images/onion.jpeg") },
    { id: 3, name: "Eggs", imgSrc: require("../images/egg.png") },
    { id: 4, name: "Bread", imgSrc: require("../images/bread.jpeg") },
    { id: 5, name: "Garlic", imgSrc: require("../images/garlic.jpg") },
    // Add more items as needed
  ]);
  const [filteredItems, setFilteredItems] = useState(items);

  const handleFilterFunction = (e) => {
    const inputValue = e.target.value.toUpperCase();
    setSearchValue(e.target.value);

    const filtered = items.filter(
      (item) => item.name.toUpperCase().indexOf(inputValue) > -1
    );
    setFilteredItems(filtered);
  };

  const handleSelect = (item) => {
    setInputElement(item.name);
    setmainItem(item);
  };

  const setInputElement = (value) => {
    setSearchValue(value);
  };

  return (
    <Container fluid className="pt-3">
      <div className="container-fluid">
        <form>
          <Container fluid>
            <Row className="align-items-center">
              <Col xs={12} sm={8} md={9} lg={10}>
                <Dropdown variant="" size="lg">
                  <FormGroup>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      size="lg"
                      variant=""
                      style={{ border: 0 }}
                      active
                    >
                      <FormControl
                        className="me-2 form-control"
                        id="dropdownMenuButton"
                        aria-expanded="false"
                        placeholder="Search items to add"
                        value={searchValue}
                        onChange={handleFilterFunction}
                        style={{ width: "1600px" }}
                      />
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      className="container-fluid"
                      id="myUL"
                      aria-labelledby="dropdownMenuButton"
                    >
                      {filteredItems.map((item) => (
                        <Dropdown.Item
                          key={item.id}
                          className="dropdown-item item-search-li"
                          onClick={() => handleSelect(item)}
                        >
                          <Image
                            src={item.imgSrc}
                            height="50"
                            width="50"
                            className="drow"
                          />
                          {item.name}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </FormGroup>
                </Dropdown>
              </Col>
              <Col
                xs={12}
                sm={4}
                md={3}
                lg={2}
                className="text-center mt-3 mt-sm-0"
              >
                <Button
                  variant="outline-success"
                  className="add-btn"
                  onClick={() => {
                    console.log("Add button clicked");
                    addNewItem({
                      name: mainItem.name,
                      quantity: 0,
                      defquantity: 0,
                      imgSrc: mainItem.imgSrc,
                      expiryDate: "2023-11-30",
                      expired: false,
                      expireIn: 25,
                    });
                  }}
                >
                  Add
                </Button>
              </Col>
            </Row>
          </Container>
        </form>
      </div>
    </Container>
  );
};

export default SearchInput;
