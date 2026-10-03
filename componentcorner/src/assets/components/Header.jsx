import './Header.css'

function Header({name, page1, page2, page3, cart_count}) {
    return (
        <div className="header">
            <a href="#default"><h2>{name}</h2></a>
            <div className="header-right">
                <a className="active" href="#home">{page1}</a>
                <a href="#contact">{page2}</a>
                <a href="#about">{page3}</a>
                {cart_count > 0 && (
                <div className="cart-container"> 
                    <span className="cart-icon">🛒</span> 
                    <span className="cart-badge">{cart_count}</span>
                </div>
               ) }       
            </div>
        </div>
    );
}
export default Header;