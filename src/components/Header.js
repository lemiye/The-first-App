import { BrowserRouter, Router, Link } from "react-router-dom"

function Header () {
    return (
        <div className="Header">
            <div className="Logo"></div>
            <div className="Navigation">
            <ul>

                <li><Link className="Home" to="/">Home</Link></li>
                <li><Link className="Favorites" to="/pages/favorites" >Favourites</Link></li>
                <li><Link className="Upcoming" to="/pages/upcoming">Upcoming</Link></li>
            </ul>
            </div>
            <div className="Search">
                <form action="/search">
                    <input itemType="search" name="show" placeholder="Search here"></input>
                </form>
            </div>
        </div>

    )
}

export default Header