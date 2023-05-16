import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";


export default function AddProductForm() {
  const { handleAddProduct } = useContext(OrderContext)

  return (
    <AddProductFormStyled onSubmit={handleAddProduct}>
        <div className="product-image">Coming Soon</div>
        <div className="product-form">
            <input type="text" placeholder="nom du produit (ex: Super Burger)" />
            <input type="text" placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" />
            <input type="text" placeholder="Prix" />
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