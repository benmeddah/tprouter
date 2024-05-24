import { useState } from 'react';
import { Link, useLocation, useNavigate, useOutletContext } from 'react-router-dom';

function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    description: ''
  });
  const location = useLocation()
  const navigate = useNavigate();
  const { handleAdd } = useOutletContext();
  const handleChange = ev => {
    const { name, value } = ev.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: name=='price'? parseInt(value) : value,
    }));

  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = handleAdd(formData);
    
    navigate('/product/'+id);
  };
  const params = new URLSearchParams(location.search)
  console.log(params.get('ex'));
  return (
    <div className="container mt-4">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
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
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mr-2">Add Product</button>
        <Link to="/product" className="btn btn-secondary">Cancel</Link>
      </form>
    </div>
  );
}

export default AddProduct;