import React from "react";
import styled from 'styled-components';

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";
import * as Fetcher from "../../fetcher";

export default class Discover extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errorEncountered: false,
            keyword: '',
            year: 0,
            results: [],
            totalCount: 0,
            genreOptions: [],
            ratingOptions: [
                {id: 7.5, name: 7.5},
                {id: 8, name: 8},
                {id: 8.5, name: 8.5},
                {id: 9, name: 9},
                {id: 9.5, name: 9.5},
                {id: 10, name: 10}
            ],
            languageOptions: [
                {id: 'GR', name: 'Greek'},
                {id: 'EN', name: 'English'},
                {id: 'RU', name: 'Russian'},
                {id: 'PO', name: 'Polish'}
            ]
        };
    }

    componentWillMount() {
        Fetcher.fetchMovies()
            .then(results => this.setState({results: results, totalCount: results.length, errorEncountered: false}))
        Fetcher.movieGenre()
            .then(results => this.setState({genreOptions: results}));
    }

    /*Method to search for movies based on filter criteria, returning most popular if no info*/
    searchMovies = (key, year) => {
        if (!key && !year) {
            Fetcher.fetchMovies()
                .then(results => this.setState({results: results, totalCount: results.length, errorEncountered: false}))
        } else {
            Fetcher.fetchMoviesByKeyword(key, year)
                .then(results => this.setState({
                    results: results,
                    totalCount: results.length
                })).catch(error => this.setState({errorEncountered: true}))
        }
    }

    render() {
        const {genreOptions, languageOptions, ratingOptions, totalCount, results} = this.state;

        return (
            <DiscoverWrapper>
                <MobileTitleWrapper>
                <MobilePageTitle>Discover</MobilePageTitle>
                </MobileTitleWrapper>
                <MovieFilters>
                    <SearchFilters
                        genres={genreOptions}
                        ratings={ratingOptions}
                        languages={languageOptions}
                        onSearch={(keyword, year) => this.searchMovies(keyword, year)}
                    />
                </MovieFilters>
                <TotalCount>{totalCount} movies</TotalCount>
                <MovieResults>
                    <MovieList
                        movies={results || []}
                        genres={genreOptions || []}
                    />
                </MovieResults>
            </DiscoverWrapper>
        )
    }
}

const DiscoverWrapper = styled.main`
  padding: 45px;
        @media screen and (max-width: 950px) {
            display: flex;
            flex-direction: column;
        }
        @media screen and (max-width: 540px) {
            padding: 15px
        }

`

const MovieResults = styled.div`
  display: inline-block;
  width: calc(100% - 295px);
          @media screen and (max-width: 950px) {
          width: 100%;
          }
        
`

const MovieFilters = styled.div`
  width: 280px;
           @media screen and (max-width: 950px) {
          width: 100%;
          }
  float: right;
  margin-top: 15px;
`

const MobilePageTitle = styled.h1`
  display: none;
  @media screen and (max-width: 580px) {
          display: block;
  }
  
`

const MobileTitleWrapper = styled.div`
  @media screen and (max-width: 580px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
`

const TotalCount = styled.strong`
  display: block;
`