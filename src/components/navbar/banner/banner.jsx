import axios from "axios"
import { useState,useEffect } from "react";


function banner(props){
    const [image,setimage]=useState("https://wallpapers.com/images/high/light-grey-background-cxk0x5hxxykvb55z.webp");
    const [title,setTitle]=useState("");
    const {pageNumber}=props;
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    let fetchMovieData=async ()=>{
        const movieData=await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=d4f97c6b91929e41e56a4f8887450b7a&page=${pageNumber}`);
        console.log(movieData);
        let random=getRandomInt(20);
        const moviePoster=`https://image.tmdb.org/t/p/original${movieData.data.results[random].poster_path}`;
        const title=movieData.data.results[random].title;
        setimage(moviePoster);
        setTitle(title);
    }
    useEffect(()=>{
        fetchMovieData();
    },[pageNumber]);

    return <div className="flex items-end " style={{backgroundImage:` url(${image})`,backgroundSize:"cover",height:"450px",width:"800px"}}>
        <div className=" w-full text-3xl font-extrabold bg-gray-800 text-white  bg-opacity-20 flex justify-center ">
            <h1 >{title}</h1>
        </div>
        
        
    </div>
}
export default banner;