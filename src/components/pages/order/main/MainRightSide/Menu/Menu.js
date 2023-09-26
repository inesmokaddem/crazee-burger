import { useContext } from "react"
import styled from "styled-components"
import { formatPrice } from "../../../../../../utils/maths"
import Card from "../../../../../reusable-ui/Card"
import OrderContext from "../../../../../../context/OrderContext"
import { theme } from "../../../../../../theme"
import EmptyMenuAdmin from "./EmptyMenuAdmin"
import EmptyMenuClient from "./EmptyMenuClient"
import { checkIfProductIsSelected } from "./helper"
import { EMPTY_PRODUCT, IMAGE_COMING_SOON } from "../../../../../../enums/product"
import { findObjectById, isEmpty } from "../../../../../../utils/array"

// const DEFAULT_PRODUCT_IMAGE = "/images/coming-soon.png";

export default function Menu() {

  // states parents (il ne s'agit pas de son state)
  const { 
    menu, 
    isCollapsed, 
    isModeAdmin, 
    handleDeleteMenu, 
    resetMenu, 
    productSelected, 
    setProductSelected, 
    handleAddToBasket,
    handleDeleteBasketProduct,

    setIsCollapsed,
    setCurrentTabSelected,
    titleEditRef,
  } = useContext(OrderContext)

  // comportements
  const handleClick = async (idProductClicked) => {
    if (!isModeAdmin) return

    await setIsCollapsed(false)
    await setCurrentTabSelected("edit")
    //const productClickedOn = menu.find((product) => product.id === idProductClicked)
    const productClickedOn = findObjectById(idProductClicked, menu)
    await setProductSelected(productClickedOn)
    titleEditRef.current.focus()
  }

  
  // affichage 
  if (isEmpty(menu)) {
    if (!isModeAdmin) return <EmptyMenuClient />
    return <EmptyMenuAdmin onReset={resetMenu} />
  }

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation()
    handleDeleteMenu(idProductToDelete)
    handleDeleteBasketProduct(idProductToDelete)
    idProductToDelete === productSelected.id && setProductSelected(EMPTY_PRODUCT)
  }

  const handleAddButton = (event, idProductToAdd) =>  {
    event.stopPropagation()
    const productToAdd = findObjectById(idProductToAdd, menu)
    handleAddToBasket(productToAdd)
  }

  return (
    <MenuStyled className={isCollapsed ? "" : "admin-open"}>
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={(event) => handleCardDelete(event, id)}
            onClick={() => handleClick(id)}
            isHoverable={isModeAdmin}
            isSelected={checkIfProductIsSelected(id, productSelected.id)}
            onAdd={(event) => handleAddButton(event,id)}
          />
        )
      })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */

  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  overflow-y: scroll;

  &.admin-open {
    padding: 50px 50px 300px;
  }
`