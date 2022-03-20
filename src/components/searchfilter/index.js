import React, {useEffect, useRef, useState} from "react";
import styled from 'styled-components';

import SearchBar from "../../components/searchbar";

import SearchIcon from "../../images/search-icon-yellow.png";
import FilterIcon from "../../images/filter-icon.png";
import YearIcon from "../../images/year-icon.png";
import AccordionFilter from "../accordionfilter";

export default function SearchFilters({genres, ratings, languages, onSearch}) {
    const [year, setYear] = useState(null);
    const [keyword, setKeyword] = useState("");
    const [displayFilter, setDisplayFilter] = useState(false);
    const isMounted = useRef(false);


    /*Method to handle changes to both input components, won't load on initial mount*/
    useEffect(() => {
        if (isMounted.current) {
            onSearch(keyword, year);
        } else {
            isMounted.current = true;
        }
    }, [year, keyword, onSearch]);

    return (
        <FiltersWrapper>
            <SearchFiltersCont className="search_inputs_cont" marginBottom>
                <MobileFilter>
                    <SearchBar
                        id="keyword_search_input"
                        type="text"
                        icon={{src: SearchIcon, alt: 'Magnifying glass'}}
                        placeholder="Search for movies"
                        onChange={(e) => setKeyword(e)}
                    />
                    <FilterButton onClick={() => setDisplayFilter(!displayFilter)} src={FilterIcon}/>
                </MobileFilter>
                {!displayFilter ? (
                        <SearchBar
                            id="year_search_input"
                            type="number"
                            icon={{src: YearIcon, alt: 'Calendar icon'}}
                            placeholder="Year of release"
                            onChange={(e) => setYear(e)}
                        />)
                    : <div/>}

            </SearchFiltersCont>
            <SearchFiltersCont displayFilter={displayFilter}>
                <CategoryTitle>Movies</CategoryTitle>
                <AccordionFilter Title={"Select Genre(s)"} Options={genres}/>
                <AccordionFilter Title={"Select min.vote"} Options={ratings}/>
                <AccordionFilter Title={"Select language"} Options={languages}/>
            </SearchFiltersCont>
        </FiltersWrapper>
    );
}

const FiltersWrapper = styled.div`
  position: relative;
`

const MobileFilter = styled.div`
    display: inline-flex;
    width: 100%;
`
const SearchFiltersCont = styled.div`
  ${({displayFilter}) =>
    displayFilter &&
    `display: none;
    `}
        @media screen and (max-width: 580px) {
          background-color: transparent ;
    }
            @media screen and (min-width: 580px) {
          display: block;
    }
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  transition: all .3s ease-in-out;
  margin-bottom: 15px;
  .search_bar_wrapper:first-child {
    margin-bottom: 15px;
    width: 100%;
  }
`

const CategoryTitle = styled.h3`
  margin: 0 0 15px 0;
`

const FilterButton = styled.img`
    float: right;
    cursor: pointer;
    display: none;
    @media screen and (max-width: 580px) {
          display: block;
    }
    margin: auto 5%;
    width: 40px;
    height: 40px;
`