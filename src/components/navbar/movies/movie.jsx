import Trending from "../trending/trending.jsx";

function movie(props){
   const {addToWatchlist,removeFromwatchlist,watchlist}=props;
    return <div >

        <Trending watchlist={watchlist} addToWatchlist={addToWatchlist} removeFromwatchlist={removeFromwatchlist} />
       
    </div>
}
export default movie;
