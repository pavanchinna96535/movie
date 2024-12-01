import {Link} from "react-router-dom";

function navbar(){

    return <div className="flex h-15  space-x-9 p-5  ">
        <Link to="/">
        <img className="h-10 pl-36" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/08/Free-Creative-Abstract-Logo-Design-Template-scaled.jpg"></img>
        </Link>
        <Link to="/movie">  <h1>Movies</h1> </Link>
        <Link to="/watchlist">  <h1>Watchlist</h1> </Link>
       
    </div>
}
export default navbar;