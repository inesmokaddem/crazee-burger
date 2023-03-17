import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components';

export default function OrderPage(){
  // state 
    const { username } = useParams() 
  // comportements

  // affichage
  return (
    <OrderPageStyled>
      <div className='container'>
        <div className='navbar'>
          navbar
          <h1>Bonjour { username }</h1>
          <Link to="/">
            <button>Déconnexion</button>
          </Link>
        </div>
        <div className='main'>main</div>
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  background: orange;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;

    .navbar {
      background: blue;
      height: 10vh;
    }

    .main {
      background: green;
      flex: 1;
    }

  }
`;

