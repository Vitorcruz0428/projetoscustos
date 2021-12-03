import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar (){
    return (
        <nav>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Custos" />
                </Link>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/contato">Contato</Link>
                <Link to="/novoprojeto">Novo Projeto</Link>
            
            </Container>
        </nav>
    )
}

export default Navbar