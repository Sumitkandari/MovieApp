import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import MovieComponent from './component/MovieComponent.js';
import React,{useState} from 'react';
import MovieInfoComponent from './component/MovieInfoComponent';
import axios from 'axios';
let API_KEY="c4ee317a";
const Container =styled.div`
display:flex;
flex-direction:column;
`;
const Header=styled.div`
display:flex;
flex-direction:row;
background-color:black;
justify-content:space-between;
color:white;
padding:10px;
font-size:25px;
font-weight:bold;
box-shadow:0 3px 10px darkblue;
align-items:center;
position:sticky;
top:0;
`;
const Appname=styled.div`
display:flex;
flex-direction:row;
align-items:center;
`;
const MovieImage=styled.img`
width:48px;
height:48px;
margin:1px;
`;
const Search=styled.div`
display:flex;
flex-direction:row;
padding:10px 10px;
background-color:white;
width:50%;
border-radius:6px;
margin-left:20px;

align-items:center;

`;
const SearchIcon=styled.img`
width:20px;
height:20px;
`;
const SearchInput=styled.input`
width:100%;
border:none;
outline:none;
color:black;
margin-left:5px;
font-weight:bold;
font-size:16px;

`;
const MovieListContainer=styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
padding:50px;
gap:10px;
justify-content:space-evenly;
`;

function App() {
  const [searchQuery,setSearchQuery]=useState();
  const [timeoutId,setTimeoutId]=useState();
  const [movielist,setMovieList]=useState();
  const [selectedMovie,onSelectedMovie]=useState();
  

  async function fetechData (searchString) {
    const response=await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=c4ee317a`);
    console.log(response);
    setMovieList(response.data.Search);
  }
   function onTextChange(event){
    clearTimeout(timeoutId);
    setSearchQuery(event.target.value);
    const timeout=setTimeout(()=>fetechData(event.target.value),1000);
    setTimeoutId(timeout);

  }
  return (
    <Container>
    
    <Header >
    <Appname>
    <MovieImage src="/pngegg.png"/>
    React Movie App
    </Appname>
    <Search>
    <SearchIcon src="/search.png"/>
    <SearchInput   placeholder="Search Movie" value={searchQuery} onChange={onTextChange}/>
    

    </Search>

    </Header>
    {
      selectedMovie&&<MovieInfoComponent selectedMovie={selectedMovie} onSelectedMovie={onSelectedMovie}/>
    }
    <MovieListContainer>
    {
      movielist?.length?movielist.map((movie,index)=><MovieComponent movie={movie} key={index} onSelectedMovie={onSelectedMovie}/>):<MovieImage src="/pngegg.png"/>

    }
    
    

    </MovieListContainer>
    
    </Container>
  );
}

export default App;
