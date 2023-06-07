import { useContext, useState } from "react";
import HintMessage from "./HintMessage";
import OrderContext from "../../../../../../context/OrderContext";
import ImagePreview from "./ImagePreview"
import TextInput from "../../../../../reusable-ui/TextInput"
import styled from "styled-components";
import { getInputTextsConfig } from "./inputTextConfig"
import { EMPTY_PRODUCT } from "../../../../../../enums/product"



export default function EditProductForm() {
  const { productSelected } = useContext(OrderContext)

  const [productBeingEdited, setproductBeingEdited] = useState(EMPTY_PRODUCT);

  const inputTexts = getInputTextsConfig(productSelected);
  
  const handleChange = (e) => { 
    const {name, value} = e.target
    setproductBeingEdited({
      ...productBeingEdited,
      [name]: value,
    })
  }

  return (
    <EditProductFormStyled>
      <ImagePreview imageSource={productSelected.imageSource} title={productSelected.title}/>
      <div className="input-fields">
        {inputTexts.map((input) => 
          <TextInput key={input.id} {...input} onChange={handleChange} variant="minimalist" />    
        )}
      </div>

      <div className="submit"></div>
    </EditProductFormStyled>
  )
}

const EditProductFormStyled = styled.form`
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
