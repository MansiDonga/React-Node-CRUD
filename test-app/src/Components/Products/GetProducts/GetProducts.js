import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { getAll, update, deleteProduct } from "../../../services/product.service";

function GetProducts({ searchedValue }) {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState({
    productName: "",
    description: "",
    rate: "",
  });
  const [productID, setProductID] = useState("");

  function inputsHandler(e) {
    setEditProduct((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  function HandleDelete(id) {
    deleteProduct(id).then((data) => {
      getAll().then((data) => {
        setProducts(data);
      });
    });
  }

  function HandleEdit(id, productData) {
    setEditProduct({
      productName: productData.productName,
      description: productData.description,
      rate: productData.rate,
    });
    setShowModal(true);
    setProductID(id);
  }

  function HandleCloseModal() {
    setShowModal(false);
  }

  function HandleSaveChanges() {
    setShowModal(false);
    update(productID, editProduct).then((data) => {
      getAll().then((data) => {
        setProducts(data);
      });
    });
  }

  useEffect(() => {
    getAll().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="product-list-wrapper">
      <h3 className="text-center">All Products!</h3>
      <p>{searchedValue}</p>
      <table cellPadding={10}>
        <thead>
          <tr cellSpacing={2}>
            <th>ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Rate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter((product) => {
              if (
                product.productName.toLowerCase().includes(searchedValue) ||
                product.description.toLowerCase().includes(searchedValue) ||
                product.rate.toString().includes(searchedValue)
              ) {
                return true;
              }
              return false;
            })
            .map((product, index) => {
              return (
                <>
                  {!product.isDeleted && (
                    <tr cellSpacing={2} key={index}>
                      <td>{product.id}</td>
                      <td>{product.productName}</td>
                      <td>{product.description}</td>
                      <td>{product.rate}</td>
                      <td>
                        <button
                          className="btn btn-primary btn-sm me-2"
                          onClick={() => HandleEdit(product.id, product)}
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => HandleDelete(product.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )}
                </>
              );
            })}
        </tbody>
      </table>
      <Modal show={showModal} onHide={HandleCloseModal}>
        <form>
          <Modal.Header closeButton>
            <Modal.Title>Edit Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <label>Product Name</label>
              <input
                type="text"
                placeholder="Product Name"
                className="form-control"
                name="productName"
                value={editProduct.productName}
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
                value={editProduct.description}
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
                value={editProduct.rate}
                onChange={(e) => inputsHandler(e)}
              ></input>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={HandleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={HandleSaveChanges}>
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default GetProducts;
