import './assets/css/styles.css';
import ProductsList from './components/ProductsList';
import ProductsForm from './components/ProductsForm';
import { useState, useEffect } from "react";
import axios from 'axios';
import swal from 'sweetalert';

function App() {

  const [products, setProducts] = useState([]);
  const [productDataUpdate, setProductDataUpdate] = useState(null);

  useEffect(() => {
    axios.get("https://products-crud.academlo.tech/products/")
      .then(resp=>setProducts(resp.data))
      .catch((error) => console.error(error));
  }, []);

  const getAPIData = () => {
    axios
      .get("https://products-crud.academlo.tech/products/")
      .then((resp) => setProducts(resp.data))
      .catch((error) => console.error(error));
  };

  const addProduct = (data)=>{
    axios.post("https://products-crud.academlo.tech/products/", data)
      .then(() => getAPIData(),alertCreate())
      .catch((error) => alertError());
  };
  
  const deleteProduct = (productId) => {
    axios.delete(`https://products-crud.academlo.tech/products/${productId}/`)
      .then(() => getAPIData(),alertDelete())
      .catch((error) => alertError());
    
  };

  const selectProduct = (productData) => {
    setProductDataUpdate(productData);
  };

  const updateProduct = (editedProduct) => {

    axios.put(`https://products-crud.academlo.tech/products/${editedProduct.id}/`,editedProduct)
      .then(() => getAPIData(),alertUpdate())
      .catch((error) => alertError());

    setProductDataUpdate(null);
  };

  const alertCreate=()=>{
    swal({
        title: "PRODUCTO CREADO",
        text: "CON EXITO",
        icon: "success",
        button: "Aceptar"
    });
  }

  const alertUpdate=()=>{
    swal({
        title: "PRODUCTO ACTUALIZADO",
        text: "CON EXITO",
        icon: "success",
        button: "Aceptar"
    });
  }

  const alertDelete=()=>{
    swal({
        title: "PRODUCTO ELIMINADO",
        text: "CON EXITO",
        icon: "success",
        button: "Aceptar"
    });
  }

  const alertError=()=>{
    swal({
        title: "ERROR",
        text: "ERROR",
        icon: "error",
        button: "Aceptar"
    });
  }

  return (
    <div className="App">

      <ProductsForm
        createProductData={(data) => addProduct(data)}
        productSelectedData={productDataUpdate}
        updateProduct={updateProduct}
      />

      <ProductsList
        products={products}
        deleteProduct={deleteProduct}
        selectProduct={selectProduct}
      />
    </div>
  )
}

export default App
