import styled from 'styled-components';
import MovieInfoComponent from './MovieInfoComponent';
import React,{useEffect,useState} from 'react';
import axios from 'axios';

const MovieContainer=styled.div`
display:flex;
flex-direction:column;
padding:10px;
width:280px;
box-shadow:0 3px 10px 0 #aaa;
cursor:pointer;
`;
const CoverImage=styled.img`
object-fit:cover;
height:362px;
`;
const MovieName=styled.span`
font-size:18px;
font-weight:600;
color:black;
margin:15px 0 ;
white-space:nowrap;
text-overflow:ellipsis;
overflow:hidden;

`;
const InfoColumn=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`;
const MovieInfo=styled.span`
font-size:16px;
font-weight:500;
color:black;
test-transform:capitilize;
`;
function MovieComponent(props){
    const { Title, Year, imdbID, Type, Poster } = props.movie;
    
    
    return(
        <MovieContainer onClick={()=>props.onSelectedMovie(imdbID)}>
        <CoverImage src={Poster}/>
        <MovieName>{Title}</MovieName>
        <InfoColumn>
        <MovieInfo>Year: {Year}</MovieInfo>
        <MovieInfo>{Type}</MovieInfo>
        </InfoColumn>
        
        </MovieContainer>

    );
}
export default MovieComponent;