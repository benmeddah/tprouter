import { useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

function EditProduct() {
  const { id } = useParams();
  const { products, handleEdit } = useOutletContext();
  const [product, setProduct] = useState(products.find(el=>el.id==id));

  const [formData, setFormData] = useState({
    name: product?.name,
    price: product?.price,
    description: product?.description
  });


  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = () => {
    handleEdit(product.id,formData);
    setProduct(formData)
  };
  
  if(!product?.name)
  return <p>invalid ID</p>;
  return (
    <div className="container mt-4">
      <div className="row">
        
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">${product.price.toFixed(2)}</p>
              <p className="card-text">{product.description}</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <h2>Edit Product</h2>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="number"
                className="form-control"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                className="form-control"
                name="description"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="button" className="btn btn-primary mr-2" onClick={handleSave}>Save</button>
            {/* Add cancel button to return to products list */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;


