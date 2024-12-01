import watchlist from "../watchlist/watchlist";




function list(props){
    const {bgImage,title}=props;
    const {addToWatchlist,removeFromwatchlist}=props;
    const {movie}=props;
    const {watchlist}=props;

 
    
    
    const isMovieInWatchlist = watchlist.some((watchlistMovie) => watchlistMovie.id === movie.id);
    

    

    return <div className="bg-cover w-28 h-56 rounded-lg flex items-end relative " style={{backgroundImage:`url("https://image.tmdb.org/t/p/original${bgImage}")`}}>
        <div className="bg-gray-800 text-white w-28 flex justify-center bg-opacity-50">{title}</div>
       {
         (isMovieInWatchlist)? (<div onClick={()=>removeFromwatchlist(movie)} className="absolute top-1 right-1 cursor-pointer"> &#10060;</div>): (
        <div onClick={()=>addToWatchlist(movie)} className="absolute top-1 right-1 cursor-pointer"> &#128525;</div>)
       }
        
        

    </div>
}
export default list;