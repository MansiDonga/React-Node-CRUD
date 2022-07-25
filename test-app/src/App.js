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
import MemberList from "./Components/Members/MemberList";
import Card1 from "./Components/Card1/Card1";
import Card2 from "./Components/Card2/Card2";
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
                  <Link to={"/members"} className="nav-link">
                    Members
                  </Link>
                  <Link to={"/card1"} className="nav-link">
                    Card 1
                  </Link>
                  <Link to={"/card2"} className="nav-link">
                    Card 2
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
          <Route
            path="/register/generate-qr-code"
            element={<QRCodeGenerator />}
          />
          <Route
            path="/register/maunal-register"
            element={<ManualRegistration />}
          />
          <Route path="/members" element={<MemberList />} />
          <Route path="/card1" element={<Card1 />} />
          <Route path="/card2" element={<Card2 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
