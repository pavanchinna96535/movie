
import Navbar from "./components/navbar/navbar.jsx"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Movie from "./components/navbar/movies/movie.jsx"
import Watchlist from "./components/navbar/watchlist/watchlist.jsx"
import { useEffect, useState } from "react"
function App() {

  function getWatchlist(){
    try{
      const watchlist=localStorage.getItem("watchlist");

      return watchlist? JSON.parse(watchlist):[];

    }
    catch(e){
      return [];
    }
    
  }
  const [watchlist,setwatchlist]=useState(getWatchlist());

  
   
    const addToWatchlist=(movie)=>{
      setwatchlist([...watchlist,movie]);
    }
    const removeFromwatchlist=(movie)=>{
      const filteredWatchlist=watchlist.filter((watchlistMovie)=>{
        return watchlistMovie.id!==movie.id;
      })
      setwatchlist(filteredWatchlist);
    }
    useEffect(()=>{
      localStorage.setItem("watchlist",JSON.stringify(watchlist));
    },[watchlist])

    

  return (
    <>
      
      <BrowserRouter>
      <Navbar />
        <Routes>
           <Route path="/" element={<Movie watchlist={watchlist} addToWatchlist={addToWatchlist} removeFromwatchlist={removeFromwatchlist}/>}></Route>
           <Route path="/movie" element={<Movie watchlist={watchlist} addToWatchlist={addToWatchlist} removeFromwatchlist={removeFromwatchlist} />}></Route>
           <Route path="/watchlist" element={<Watchlist watchlist={watchlist} removeFromwatchlist={removeFromwatchlist}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


