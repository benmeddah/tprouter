/* eslint-disable react/prop-types */
import { Link, useOutletContext } from "react-router-dom";
import ProductItem from "../utils/ProductItem";
function AllProducts() {
    const { handleDelete, products } = useOutletContext();
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Products List</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
      <Link to="/product/add?ex=val" className="btn btn-primary">
        Add Product
      </Link>
    </div>
  );
}

export default AllProducts;
