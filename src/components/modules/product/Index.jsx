import { useState } from "react";
import { Outlet } from "react-router-dom";
let id = 6;

function ProductIndex() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      description: "Description of Product 1",
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      description: "Description of Product 2",
    },
    {
      id: 3,
      name: "Product 3",
      price: 29.99,
      description: "Description of Product 3",
    },
    {
      id: 4,
      name: "Product 4",
      price: 14.99,
      description: "Description of Product 4",
    },
    {
      id: 5,
      name: "Product 5",
      price: 24.99,
      description: "Description of Product 5",
    },
  ]);
  function handleDelete(id) {
    console.log(products.filter((product) => id !== product.id));
    setProducts((prods) => prods.filter((product) => id !== product.id));
  }
  function handleAdd(product) {
    setProducts((prods) => [...prods, { ...product, id: id++ }]);

    return id - 1;
  }
  function handleEdit(id,product) {
    console.log(products[products.findIndex((el)=>el.id==id)]);
    setProducts(ps=>{
      ps[ps.findIndex((el)=>el.id==id)] = {id,...product};
      return ps;
    })
  }
  return (
    <>
      <button type="button" onClick={() => history.back()}>
        Back
      </button>
      <div className="level2">
        <Outlet context={{ handleDelete, products, handleAdd, handleEdit }} />
      </div>
    </>
  );
}

export default ProductIndex;
