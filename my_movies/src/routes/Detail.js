import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const [loading, setLoading] = useState(true);
    const [deMovies,setDemovies] = useState([]);
    const {id} = useParams();
    async function getUrl(){
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setLoading(false);
        setDemovies(json.data.movie);
        console.log(json.data.movie);
    }
    
    useEffect(() =>{
        getUrl();
    }
    ,[]);
    return(
        <div>
            {loading ? <h1>Loading</h1> : 
            <div>
                 <div>
                    <img src={deMovies.large_cover_image} alt={deMovies.title_long}></img>
                    <h2>{deMovies.title_long}</h2>
                    <ul>
                        <li>{deMovies.genres}</li>
                    </ul>
                    <p>Summary: {deMovies.description_full}</p>
                    
                </div>
            </div>}
        </div>
    );
}

export default Detail;