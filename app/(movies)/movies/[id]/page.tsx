// import { API_URL } from "../../../(home)/page"

import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// async function getMovie(id:string){
//     console.log(`Fetching movies: ${Date.now()}`)
//     await new Promise ((resolve)=>setTimeout(resolve,5000));
//     const response = await fetch(`${API_URL}/${id}`);
//     return response.json();
// }

// async function getVideos(id:string){
//     console.log(`Fetching movies: ${Date.now()}`)
//     await new Promise ((resolve)=>setTimeout(resolve,5000));
//     const response = await fetch(`${API_URL}/${id}/videos`);
//     return response.json();
// }

interface IParams {
    params : {id:string};
}

export async function generateMetadata({params:{id}}:IParams){
    const movie = await getMovie(id)
    return{
        title:movie.title
    }
}

export default async function MovieDetail({params:{id}}:{params:{id:string}}){
    // const movie = await getMovie(id);
    // const video = await getVideos(id);
    // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    return (
    <div>
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id={id}/>
        </Suspense>
        <Suspense fallback={<h1>Loading movie videos</h1>}>
            <MovieVideos id={id}/>
        </Suspense>
    </div>)
} 