
import styled from 'styled-components';

import React,{useEffect,useState} from 'react';
import axios from 'axios';
const Container=styled.div`
display:flex;
flex-direction:row;
padding:20px 30px;
background-color:white;

border-bottom:1px solid lightgray;

`;
const CoverImage=styled.img`
object-fit:cover;
height:352px;
`;
const InfoColumn=styled.div`
display:flex;
flex-direction:column;
margin:20px;

`;
const MovieName=styled.span`
font-size:18px;
font-weight:600;
color:black;
margin:15px 0 ;
white-space:nowrap;
text-overflow:ellipsis;
overflow:hidden;
test-transform:captalizes;

`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  margin: 4px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;
  overflow: hidden;
  & span {
    opacity: 0.5;
  }
`;
const Close = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: black;
  background: lightgray;
  height: fit-content;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
`;
function MovieInfoComponent(props){
    const [movieInfo,setMovieInfo]=useState();
    const { selectedMovie } = props;
    useEffect(() => {
        
        axios.get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=c4ee317a`).then((response)=>setMovieInfo(response.data));
        
    },[selectedMovie])
    
    return(
        <Container>
          {movieInfo ? (
        <>
        <CoverImage src={movieInfo?.Poster}/>
        <InfoColumn>
        <MovieName>{movieInfo?.Type}:{movieInfo?.Title}</MovieName>
        <MovieInfo>IMDB Rating: {movieInfo?.imdbRating}</MovieInfo>
        <MovieInfo>Year: {movieInfo?.Year}</MovieInfo>
        <MovieInfo>Language: {movieInfo?.Language}</MovieInfo>
        <MovieInfo>Released: {movieInfo?.Released}</MovieInfo>
        <MovieInfo>Runtime: {movieInfo?.Runtime}</MovieInfo>
        <MovieInfo>Genre: {movieInfo?.Genre}</MovieInfo>
        <MovieInfo>Director: {movieInfo?.Director}</MovieInfo>
        <MovieInfo>Actor: {movieInfo?.Actors}</MovieInfo>
        <MovieInfo>Plot: {movieInfo?.Plot}</MovieInfo>
        </InfoColumn>
        <Close onClick={()=>props.onSelectedMovie()}>X</Close>
           </>
      ) : (
        "Loading..."
      )}
        </Container>
        

    );
}
export default MovieInfoComponent;