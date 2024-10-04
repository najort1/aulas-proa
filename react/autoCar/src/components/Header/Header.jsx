import './styleHeader.css';

const Header = () => {
    return (
        <>
        
            <header className="header">
                <div className="tituloPagina">
                    <h1>AutoCar</h1>
                </div>
                <nav className="menu">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Autos</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </header>

        
        </>
    );
}


export default Header;