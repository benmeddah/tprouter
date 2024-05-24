/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function ProductItem({ product, handleDelete }) {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>${product.price?.toFixed(2)}</td>
      <td>{product.description}</td>
      <td>
        <Link to={`/product/${product.id}`} className="btn btn-primary mr-2">View</Link>
        <Link to={`/product/${product.id}/edit`} className="btn btn-secondary mr-2">Edit</Link>
        <button onClick={() => handleDelete(product.id)} className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
}

export default ProductItem;