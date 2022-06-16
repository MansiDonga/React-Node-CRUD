import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from "react-router-dom";
import GetProducts from "./Products/GetProducts/GetProducts";
import AddProduct from "./Products/AddProduct/AddProduct";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";

function App() {

  const [searchedValue, setSearchedValue] = useState('');

  function handleInputChange(e){
    console.log(e.target.value);
    setSearchedValue(e.target.value);
  }

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <Nav className="w-100">
              <div className="d-flex align-items-center justify-content-between w-100">
                <div className="d-flex align-items-center">
                  <Link to={"/products"} className="nav-link">
                    Show Products
                  </Link>
                  <Link to={"/add-product"} className="nav-link">
                    Add Product
                  </Link>
                </div>                         

                <div className="search-bar form-gourp">
                  <form>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search here!"
                      onChange={(e) => handleInputChange(e)}
                    ></input>
                  </form>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container mt-3">
        <Routes>
          <Route exact path="/products" element={<GetProducts searchedValue={searchedValue}/>} />
          <Route exact path="/add-product" element={<AddProduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
