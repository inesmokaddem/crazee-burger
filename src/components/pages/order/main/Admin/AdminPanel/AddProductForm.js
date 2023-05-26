import { useContext, useState } from "react"
import styled from "styled-components"
import OrderContext from "../../../../../../context/OrderContext"
import TextInput from "../../../../../reusable-ui/TextInput"
import Button from "../../../../../reusable-ui/Button"
import ImagePreview from "./ImagePreview"
import SubmitMessage from "./SubmitMessage"
import { getInputTextsConfig } from "./inputTextConfig"

export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
}

export default function AddProductForm() {
  const { handleAddProduct, newProduct, setNewProduct } = useContext(OrderContext)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    setNewProduct({
      ...newProduct,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleAddProduct({
      ...newProduct,
      id: crypto.randomUUID(),
    })
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
    }, 2000)
    setNewProduct(EMPTY_PRODUCT)
  }

const inputTexts = getInputTextsConfig(newProduct);

  return (
    <AddProductFormStyled onSubmit={handleSubmit}>
      <ImagePreview imageSource={newProduct.imageSource} title={newProduct.title}/>
      <div className="input-fields">
        {inputTexts.map((input) => 
          <TextInput key={input.id} {...input} onChange={handleChange} variant="minimalist" />    
        )}
      </div>

      <div className="submit">
        <Button
          variant="success"
          label="Ajouter un nouveau produit au menu"
          className="submit-button"
        />
        {isSubmitted && (
          <SubmitMessage />
        )}
      </div>
    </AddProductFormStyled>
  )
}

const AddProductFormStyled = styled.form`
  height: 100%;
  width: 70%;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    grid-area: 1 / 2 / -2 / 3;
    display: grid;
    row-gap: 8px;
  }

  .submit {
    grid-area: 4 / 2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
  } 
`
