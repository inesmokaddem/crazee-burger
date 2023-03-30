import styled from "styled-components";
import { theme } from "../../../../../theme";
import {AiOutlinePlus} from "react-icons/ai"
import {MdModeEditOutline} from "react-icons/md"
import {FiChevronDown} from "react-icons/fi"

export default function AdminBloc() {
  return (
    <AdminBlocStyled>
      <div className="admin-tabs">
        <div className="tab">
        <button className="toggle-button"><FiChevronDown/></button>
        </div>
        <div className="tab">
          <AiOutlinePlus/> Ajouter un produit
        </div>
        <div className="tab">
          <MdModeEditOutline/> Modifier un produit
        </div>
      </div>
      <div className="admin-panel">
        Ajouter un produit
      </div>
    </AdminBlocStyled>
  )
}

const AdminBlocStyled = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    .admin-tabs {
      display: flex;
      color: #93A2B1;
      margin-left: 70px;

      .tab {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        gap: 13.02px;

        background: #FFFFFF;
        border-width: 1px 1px 2px 1px;
        border-style: solid;
        border-color: #E4E5E9;
        box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
        border-radius: 5px 5px 0px 0px;

        cursor: pointer;

        .toggle-button{
          background: white;
          color: #93A2B1;
          border: none;
        }
      }
    }
    .admin-panel {
      height: 250px;
      background: ${theme.colors.white};
      border-top: 1px solid ${theme.colors.greyLight};
      box-shadow: ${theme.shadows.subtle};
    }

`;