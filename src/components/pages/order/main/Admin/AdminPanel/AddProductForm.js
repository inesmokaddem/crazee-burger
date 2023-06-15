import { useContext, useState } from "react"
import OrderContext from "../../../../../../context/OrderContext"
import { EMPTY_PRODUCT } from "../../../../../../enums/product"
import Form from "./Form"
import SubmitButton from "./SubmitButton"

export default function AddProductForm() {
  const { handleAddProduct, newProduct, setNewProduct } = useContext(OrderContext)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    setNewProduct({
      ...newProduct,
      [event.target.name]: event.target.value,
    })
  }

  const displaySuccess = () => {
    setTimeout(() => {
      setIsSubmitted(false)
    }, 2000)
    setNewProduct(EMPTY_PRODUCT)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleAddProduct({
      ...newProduct,
      id: crypto.randomUUID(),
    })
    setIsSubmitted(true);
    displaySuccess();
  }

  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
      <SubmitButton isSubmitted={isSubmitted}/>
    </Form>
  )
}


