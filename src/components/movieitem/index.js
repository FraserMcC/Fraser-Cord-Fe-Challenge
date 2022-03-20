import React from "react";
import styled from 'styled-components';
import * as colors from "../../colors";

export default function MovieItem({movie, genres}) {
    let movieGenre = genres.filter(x => movie.genre_ids.includes(x.id)).map(e => e.name).join(' | ');
    const movieImage = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

    return (
        // TODO: Complete the MovieItem component
        <MovieItemWrapper>
            <LeftCont>
                <MovieImage src={movieImage} alt={movie.title + " Movie Poster"}/>
            </LeftCont>
            <RightCont>
                <ScoreCont>
                    <MovieScore>{movie.vote_average}</MovieScore>
                </ScoreCont>
                <Title>{movie.title}</Title>
                <Genre>{movieGenre}</Genre>
                <OverView>{movie.overview}</OverView>
                <Footer>
                    <ReleaseDate>{movie.release_date}</ReleaseDate>
                </Footer>
            </RightCont>
        </MovieItemWrapper>
    )
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: 15px 0;
  display: flex;
   @media screen and (max-width: 950px) {
          display: flex;
          flex-direction: column;
          align-items: center;
  }
`

const LeftCont = styled.div`
  display: inline-block;
  float: left;
`

const RightCont = styled.div`
  display: inline-block;
`

const MovieImage = styled.img`
    max-height: 225px;
    max-width: 150px;
    border-radius: 3px;
    margin-right: 20px

`

const ScoreCont = styled.div`
    float: right;
    background-color: ${colors.primaryColor};
    padding: 7.5px;
        border-radius: 5px;
    align-items: center;
    width: 20px;
    display: flex;
`
const MovieScore = styled.h4`
    color: white;
    padding: 0.5%;
    border-radius: 5px;
    margin: 0 auto;
`

const Title = styled.h2`
  font-size: 1.4;
  margin-bottom: 0;
`;

const Genre = styled.h5`
    margin-top 1%;
    margin-bottom: 1%;
    color: ${colors.primaryColor};
`;

const Footer = styled.div`
    bottom: 0;
    position: absolute;
`
const ReleaseDate = styled.h6`
    color: ${colors.primaryColor};
`

const OverView = styled.p`
    margin-top: 0;
    margin-bottom: 10%
`