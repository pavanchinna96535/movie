
import {useState,useEffect} from "react";
import axios from "axios"
import Spinner from "../../spinner/spinner.jsx";
import List from "./list.jsx";
import Pagination from "../../pagination/pagination.jsx"
import Banner from "../banner/banner.jsx";


function trending(props){

    const [trending,setTrending]=useState([]);
    const [loading,setLoading]=useState(true);
    const [pageNumber,setpageNumber]=useState(1);
    const {addToWatchlist,removeFromwatchlist,watchlist}=props;

    let trendingMovieData=async ()=>{
        

    
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_movieBooking}${pageNumber}`);
      
      console.log(response);
       
      const movies = response.data.results; // Extract movie data
      setTrending(movies);
    } catch (error) {
      console.error("Error fetching trending movies:", error);
    } finally {
      setLoading(false); // Hide spinner
    }

    }
    function prevPage(){
        if(pageNumber>1){
            setpageNumber(pageNumber-1);
        }
    }
    function nextPage(){
       if(pageNumber<=500){
        setpageNumber(pageNumber+1);
       }
      
        
    }


    useEffect(()=>{
        trendingMovieData();
    },[pageNumber]);
    return (
    <div className="flex flex-col items-center space-y-10 ">
        <div>
            <Banner pageNumber={pageNumber} />
        </div>
        <div>
            <h1 className="text-3xl font-extrabold ">Trending Movies</h1>
        </div>
     
        <div className="flex flex-wrap w-4/6 gap-8 ">
        
            {
                loading? <Spinner />: (
                    trending.map((movie)=>{
                        return <List watchlist={watchlist} movie={movie} addToWatchlist={addToWatchlist} removeFromwatchlist={removeFromwatchlist}  key={movie.id} bgImage={movie.poster_path} title={movie.title} />
                    })
                )
            }
            
            
        </div>

        <div className="w-96">
            <Pagination prevPage={prevPage} nextPage={nextPage} pageNumber={pageNumber} />
        </div>
    </div>
    );
   
    
    
    
}
export default trending;