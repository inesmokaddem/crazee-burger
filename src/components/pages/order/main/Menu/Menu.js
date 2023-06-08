import { useContext } from "react"
import styled from "styled-components"
import { formatPrice } from "../../../../../utils/maths"
import Card from "../../../../reusable-ui/Card"
import OrderContext from "../../../../../context/OrderContext"
import { theme } from "../../../../../theme"
import EmptyMenuAdmin from "./EmptyMenuAdmin"
import EmptyMenuClient from "./EmptyMenuClient"

const DEFAULT_PRODUCT_IMAGE = "/images/coming-soon.png";

export default function Menu() {

  // states parents (il ne s'agit pas de son state)
  const { menu, isCollapsed, isModeAdmin, handleDelete, resetMenu,  setProductSelected } = useContext(OrderContext)

  // comportements

  const handleClick = (idProductClicked) => {
    const productClickedOn = menu.find((product) => product.id === idProductClicked)
    setProductSelected(productClickedOn)
  }

  // affichage 
  if (menu.length === 0) {
    if (!isModeAdmin) return <EmptyMenuClient />
    return <EmptyMenuAdmin onReset={resetMenu} />
  }


  return (
    <MenuStyled className={isCollapsed ? "" : "admin-open"}>
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : DEFAULT_PRODUCT_IMAGE}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={() => handleDelete(id)}
            onClick={() => handleClick(id)}
            isHoverable={isModeAdmin}
            isSelected={true}
          />
        )
      })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  overflow-y: scroll;

  &.admin-open {
    padding: 50px 50px 300px;
  }
`