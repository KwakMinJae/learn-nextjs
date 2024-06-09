import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css"
import { API_URL } from "../constants";

export const metadata = {
    title: 'Home'
  }

// export const API_URL = "http://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies(){
    // await new Promise ((resolve)=>setTimeout(resolve,1000));
    const response =  await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage(){
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {/* {movies.map((movie) => (<li key={movie.id}>
                <div key={movie.id}>
                    <img src={movie.poster_path} alt={movie.title}/>
                    <Link href={`/movies${movie.id}`}>{movie.title}</Link>
                </div>
            </li>))} */}
            {movies.map((movie) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                />
            ))}
        </div>
    )
}