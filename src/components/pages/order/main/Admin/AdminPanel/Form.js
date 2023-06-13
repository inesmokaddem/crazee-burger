import React from 'react'
import styled from 'styled-components'
import SubmitMessage from './SubmitMessage'
import { getInputTextsConfig } from './inputTextConfig'
import ImagePreview from './ImagePreview'
import TextInput from '../../../../../reusable-ui/TextInput'
import Button from '../../../../../reusable-ui/Button'

export default function Form({ product, onSubmit, onChange, isSubmitted }) { // raised the event 

    const inputTexts = getInputTextsConfig(product)

    return (
        <FormStyled onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title}/>
        <div className="input-fields">
        {inputTexts.map((input) => 
            <TextInput key={input.id} {...input} onChange={onChange} variant="minimalist" />    
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
    </FormStyled>
    )
}

const FormStyled = styled.form`
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