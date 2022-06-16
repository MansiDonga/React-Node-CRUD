import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { create } from "../../services/product.service";

function AddProduct() {
  const [addProduct, setAddProduct] = useState({
    productName: "",
    description: "",
    rate: "",
  });

  function inputsHandler(e) {
    setAddProduct((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  function HandleSaveChanges(e) {
    create(addProduct);
  }

  return (
    <div className="add-product-wrapper">
      <h3 className="text-center">Add Product!</h3>
      <form>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            placeholder="Product Name"
            className="form-control"
            name="productName"
            value={addProduct.productName}
            onChange={(e) => inputsHandler(e)}
          ></input>
        </div>
        <div className="form-group mt-4">
          <label>Product Description</label>
          <input
            type="text"
            placeholder="Description"
            className="form-control"
            name="description"
            value={addProduct.description}
            onChange={(e) => inputsHandler(e)}
          ></input>
        </div>
        <div className="form-group mt-4 mb-4">
          <label>Product Rate</label>
          <input
            type="text"
            placeholder="Rate"
            className="form-control"
            name="rate"
            value={addProduct.rate}
            onChange={(e) => inputsHandler(e)}
          ></input>
        </div>

        <Link to={"/products"} className="nav-link">
          <button
            className="btn btn-primary btn-md mt-5"
            type="button"
            onClick={(e) => HandleSaveChanges(e)}
          >
            Save Product
          </button>
        </Link>
      </form>
    </div>
  );
}

export default AddProduct;
