import { Link, useOutletContext, useParams } from 'react-router-dom';

function OneProduct() {
    const { id } = useParams();
    const { products } = useOutletContext();
    const product = products.find(el=>el.id==id);
    if(!product?.name)
    return <p>invalid ID</p>;
    console.log(product);
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">${product.price?.toFixed(2)}</p>
          <p className="card-text">{product.description}</p>
          <Link to={`/product/${product.id}/edit`} className="btn btn-primary mr-2">Edit</Link>
          <Link to="/product" className="btn btn-secondary">Back to Products</Link>
        </div>
      </div>
    </div>
  );
}

export default OneProduct;