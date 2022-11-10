import CartWidget from "./CartWidget"


const NavBar = ({ greeting }) => {

    return (
        <div>
            <p>{greeting}</p>
            <CartWidget/>

        </div>
    )




};


export default NavBar;