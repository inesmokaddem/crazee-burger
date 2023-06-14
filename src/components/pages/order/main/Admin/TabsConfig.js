import {AiOutlinePlus} from "react-icons/ai"
import {MdModeEditOutline} from "react-icons/md"
import AddProductForm from "./AdminPanel/AddProductForm"
import EditProductForm from "./AdminPanel/EditProductForm"
import HintMessage from "./AdminPanel/HintMessage"

export const getTabsConfig = (hasAlreadyBeenClicked) => [
    {
        index: "add",
        label: "Ajouter un produit",
        Icon: <AiOutlinePlus/>,
        Content: <AddProductForm/>
    },
    {
        index: "edit",
        label: "Modifier un produit",
        Icon: <MdModeEditOutline/>,
        Content: hasAlreadyBeenClicked ? <EditProductForm/> : <HintMessage/>
    }, 
    // {
    //     index: "manger",
    //     label: "Autre onglet",
    //     Icon: <FiSettings />,
    //     Content: <UnComposant />,
    //   },
]

export const getTabSelected = (tabs, currentTabSelected) => {
    return tabs.find((tab) => tab.index === currentTabSelected)
}


// BONUS Ticket F09: Le PM (Project Manager) vous confie que qu'autres formulaires seraient à prévoir dans les autres éventuels onglets du panel Admin
// export function UnComposant() {
//     return (
//       <Form
//         product={{
//           id: "1",
//           imageSource: "/images/burger1.png",
//           title: "Burger 1",
//           price: 5.297,
//           quantity: 0,
//           isAvailable: true,
//           isAdvertised: false,
//         }}
//       >
//         <div style={{ width: "50%" }}>
//           <Button version="normal" label={"Bonjour"} />
//         </div>
//       </Form>
//     )
// }