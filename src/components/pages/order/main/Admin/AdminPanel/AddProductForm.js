import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
}

export default function AddProductForm() {
  const { handleAddProduct } = useContext(OrderContext)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)

  const handleChange = (event) => {
    setNewProduct({
      ...newProduct,
      [event.target.name]: event.target.value,
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddProduct({
      ...newProduct,
      id: crypto.randomUUID(),
    })
    setNewProduct(EMPTY_PRODUCT)
  }


  return (
    <AddProductFormStyled onSubmit={handleSubmit}>
        <div className="product-image">Coming Soon</div>
        <div className="product-form">
            <input
            name="title"
            value={newProduct.title} 
            type="text" 
            placeholder="nom du produit (ex: Super Burger)" 
            onChange={handleChange}
            />
            <input
            name="imageSource"
            value={newProduct.imageSource} 
            type="text" 
            placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" 
            onChange={handleChange}
            />
            <input
            name="price"
            value={newProduct.price ? newProduct.price : ""} 
            type="text" 
            placeholder="Prix" 
            onChange={handleChange}
            />
        </div>
        <button className="submit-button">Ajouter un nouveau produit au menu</button>
    </AddProductFormStyled>
  )
}

const AddProductFormStyled = styled.form`
    border: 1px solid red;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    height: 100%;
    width: 70%;

    .product-image {
      border: 2px solid green;
      grid-area: 1 / 1 / 4 / 2;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .product-form {
      grid-area: 1 / 2 / 4 / -1;
      display: grid;
      //width: 50%;
    }
    .submit-button {
      width: 50%;
      grid-area: 4 / 2 / -1 / -1;
    }

`;