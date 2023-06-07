import {AiOutlinePlus} from "react-icons/ai"
import {MdModeEditOutline} from "react-icons/md"
import AddProductForm from "./AdminPanel/AddProductForm"
import EditProductForm from "./AdminPanel/EditProductForm"

export const tabsConfig = [
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
        Content: <EditProductForm/>
    }
]

export const getTabSelected = (tabs, currentTabSelected) => {
    return tabs.find((tab) => tab.index === currentTabSelected)
}