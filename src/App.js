
import Result from './components/Result';
import { useState,useEffect } from 'react';

const ApiUrl="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
const SearchApi = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
function App() {
  const[movies,setmovies]=useState([]);
  const[search,setsearch]=useState("");
  
  const getAllMovies=()=>
  {
      fetch(ApiUrl).then((response)=>response.json()).then((data)=>setmovies(data.results));
  }
  const getSearchedMovies=()=>
  {
    fetch(SearchApi+search).then((response)=>response.json()).then((data)=>setmovies(data.results));
  }

  useEffect(() => {
    return () => {
      if(search=="")
     { getAllMovies();}
      else 
     {getSearchedMovies();}

    }
  }, [search])
  
  const handlechange=(e)=>{
    setsearch(e.target.value);
  }
  return (
    <div className=' mx-auto w-75 p-3 shadow h-auto'>
      <input type="text" className='form-control p-3 my-3' onChange={handlechange} value={search} placeholder="search here"/>
      {
        movies.length===0
        ?
        <div className=' text-center align-middle '>Loading...</div>
        :
        <Result movies={movies}/>
      }
       
    </div>
  );
}

export default App;
