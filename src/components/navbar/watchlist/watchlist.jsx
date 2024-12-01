
import { useEffect, useState} from "react";
import genresIdMapping from "../../../configuaration/genreConfig";

function watchlist(props){
   
    const {watchlist,removeFromwatchlist}=props;
    const [movies,setMovies]=useState(watchlist);  
    const genreSet=new Set();

    movies.map((movie)=>{
        const genresId=movie.genre_ids;
        
        genresId.map((id=>{
            genreSet.add(genresIdMapping[id]);
        }))
        

    })


   const genres=Array.from(genreSet);
   genres.unshift("All genre");

   useEffect(()=>{
        setMovies(watchlist);
   },[watchlist]);
   

    return <div >
        <div className="flex justify-center items-center">
            {
                genres.map((genre)=>{
                    return <div className="px-6 border bg-blue-400 m-2 rounded">
                            {genre}
                        </div>
                })
            }
        </div>
        <div className="m-4 flex justify-center ">
            <input className="w-96 h-10 border border-solid border-black bg-blue-100 p-4"  type="text" placeholder="Search movie"></input>
        </div>
        <div className="flex justify-center">
            <table className="table-auto border-collapse">
                <thead>
                    <tr>
                        <th className="px-10 py-8">Name</th>
                        <th className="px-10 py-8">Rating</th>
                        <th className="px-10 py-8">Popularity</th>
                        <th className="px-10 py-8">Genre</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        movies.map((movie)=>{
                           return <tr className="text-center">
                                <td className="flex items-center"> 
                                    <img className="w-32 h-32" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                                    <h1 className="px-5 text-2xl">{movie.title}</h1>
                                </td>
                                {console.log(movie)}
                                <td >{movie.vote_average}</td>
                                <td >{movie.popularity}</td>
                                <td >
                                    {
                                        movie.genre_ids.map((id)=>{
                                           return genresIdMapping[id]
                                        }).join(", ")
                                    }
                                </td>
                                <td onClick={()=>removeFromwatchlist(movie)} className=" text-red-600 cursor-pointer px-6">Delete</td>
                              


                           
                           </tr>
                                
                        })
                    }
                </tbody>
            </table>
        </div>
         
    </div>
}
export default watchlist;