import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import {FiCheck} from "react-icons/fi"

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
}

export default function AddProductForm() {
  const { handleAddProduct } = useContext(OrderContext)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)

  // Submitted message
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    setNewProduct(EMPTY_PRODUCT) // To reset form after submission
    displaySuccessMessage();
  }

  const displaySuccessMessage = () => { 
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
    }, 2000);
   }

// Affichage
  return (
    <AddProductFormStyled onSubmit={handleSubmit}>
        <div className="product-image">
          {newProduct.imageSource ? (<img src={newProduct.imageSource} alt={newProduct.title}></img>) : (<div>Aucune image</div>)}
        </div>
        <div className="product-form">
            <input
            name="title"
            value={newProduct.title} 
            type="text" 
            placeholder="Nom du produit (ex: Super Burger)" 
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
        <div className="submit">
        <button className="submit-button">Ajouter un nouveau produit au menu</button>
        {isSubmitted && (
          <div className="submit-message">
            <FiCheck className="icon" />
            <span>Ajouté avec succès</span>
          </div>
        )}
      </div>
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

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }
    .product-form {
      grid-area: 1 / 2 / 4 / -1;

      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 1fr);
    }
    .submit {
    grid-area: 4 / 2 / -1 / -1;
    background: green;
    display: flex;
    align-items: center;

    .submit-button {
      width: 50%; 
    }

    .submit-message {
      border: 1px solid blue;
      display: flex;
      align-items: center;
    }
  }

`;