import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import GetProducts from "./Components/Products/GetProducts/GetProducts";
import AddProduct from "./Components/Products/AddProduct/AddProduct";
import TestReducer from "./Components/TestReducer/TestReducer";
import Registration from "./Components/Registration/Registration";
import QRCodeGenerator from "./Components/Registration/QRCodeGenerator/QRCodeGenerator";
import ManualRegistration from "./Components/Registration/ManualRegistration/ManualRegistration";
import TabChange from "./Components/TabChange/TabChange";
// import ParticlesBg from "./ParticlesBg";

function App() {
  let navigate = useNavigate();
  const [searchedValue, setSearchedValue] = useState("");

  function handleInputChange(e) {
    console.log(e.target.value);
    setSearchedValue(e.target.value);
  }

  return (
    // <div className="App">
    //   <ParticlesBg />
    //   <Navbar expand="lg">
    //     <Container>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <Navbar.Brand href="#" className="text-light">Navbar</Navbar.Brand>
    //         <Nav className="w-100">
    //           <div className="d-flex align-items-center justify-content-between w-100">
    //             <div className="d-flex align-items-center">
    //               <Link to={"/products"} className="nav-link text-light">
    //                 Show Products
    //               </Link>
    //               <Link to={"/add-product"} className="nav-link text-light">
    //                 Add Product
    //               </Link>
    //               <Link to={"/test-reducer"} className="nav-link text-light">
    //                 Test Reducer
    //               </Link>
    //             </div>

    //             <div className="search-bar form-gourp">
    //               <form>
    //                 <input
    //                   type="text"
    //                   className="form-control"
    //                   placeholder="Search here!"
    //                   onChange={(e) => handleInputChange(e)}
    //                 ></input>
    //               </form>
    //             </div>
    //           </div>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    //   <div className="container mt-3">
    //     <Routes>
    //       <Route
    //         exact
    //         path="/products"
    //         element={<GetProducts searchedValue={searchedValue} />}
    //       />
    //       <Route exact path="/add-product" element={<AddProduct />} />
    //       <Route exact path="/test-reducer" element={<TestReducer />} />
    //     </Routes>
    //   </div>
    // </div>
    <div className="App">
      {/* <ParticlesBg /> */}
      <Navbar expand="lg">
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
                  <Link to={"/test-reducer"} className="nav-link">
                    Test Reducer
                  </Link>
                </div>

                <div className="search-bar form-gourp d-flex align-items-center justify-content-between">
                  <form>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search here!"
                      onChange={(e) => handleInputChange(e)}
                    ></input>
                  </form>

                  <button
                    className="btn btn-success ms-3"
                    onClick={() => navigate(`register`)}
                  >
                    Register
                  </button>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container mt-3">
        <Routes>
          <Route
            exact
            path="/products"
            element={<GetProducts searchedValue={searchedValue} />}
          />
          <Route exact path="/add-product" element={<AddProduct />} />
          <Route exact path="/test-reducer" element={<TestReducer />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/tabChange" element={<TabChange />} />
          <Route
            path="/register/generate-qr-code"
            element={<QRCodeGenerator />}
          />
          <Route
            path="/register/maunal-register"
            element={<ManualRegistration />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
