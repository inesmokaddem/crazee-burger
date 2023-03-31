import {AiOutlinePlus} from "react-icons/ai"
import {MdModeEditOutline} from "react-icons/md"

export const TabsLibrary = [
    {
        index: "add",
        label: "Ajouter un produit",
        Icon: <AiOutlinePlus/>,
    },
    {
        index: "edit",
        label: "Modifier un produit",
        Icon: <MdModeEditOutline/>,
    }
]

export const getSelectedTab = (tabs, currentSelectedTab) => {
    return tabs.find((tab) => tab.index === currentSelectedTab)
}