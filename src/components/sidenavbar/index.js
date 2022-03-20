import React, {useState} from "react";
import styled, {css} from 'styled-components';
import {NavLink as Link} from "react-router-dom";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

export default function SideNavBar() {
    const [isOpen, setIsOpen] = useState(true);
    /*Function to open and close Navbar*/
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            {!isOpen ? <FiMenu className={'burger-menu menu-closed'} onClick={() => toggleOpen()}>CLICK ME PLEASE</FiMenu> :
                <MdClose className={'burger-menu menu-opened'} onClick={() => toggleOpen()}>CLICK ME PLEASE</MdClose>
            }
            <SideNavBarCont className={isOpen ? 'sidebar-default sidebar-open' : 'sidebar-default sidebar-close'} onBlur={toggleOpen}>
                <SideNavHeader>
                    Wesley
                    <img src={Arrow} alt="Arrow pointing down"/>
                </SideNavHeader>
                <SideNavMainLink to="/discover" exact>
                    Discover
                    <img src={SearchWhite} alt="Magnifying glass"/>
                </SideNavMainLink>
                <SideNavSectionTitle><HeaderText>Watched</HeaderText></SideNavSectionTitle>
                <NavLink to="/watched/movies">Movies</NavLink>
                <NavLink to="/watched/tv-shows">Tv Shows</NavLink>
                <SideNavSectionTitle><HeaderText>Saved</HeaderText></SideNavSectionTitle>
                <NavLink to="/saved/movies">Movies</NavLink>
                <NavLink to="/saved/tv-shows">Tv Shows</NavLink>
            </SideNavBarCont>
        </div>
    )
        ;
}

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 280px;
  height: 100%;
  background-color: ${colors.sideNavBar};
  color: white;
      @media only screen and (max-width: 581px) {
      padding-top: 40px
    }
`

const SectionsStyles = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`;

const SideNavMainLink = styled(Link)`
  ${SectionsStyles}

  &:hover, &:focus-visible {
    background: ${colors.sideNavBarHover};
  }

  &.active {
    background: ${colors.primaryColor};
  }
`;

const SideNavHeader = styled.div`
  ${SectionsStyles}
`;

const SideNavSectionTitle = styled.div`
  font-size: 1.6em;
  font-weight: 700;
  padding: 25px 0 15px 35px;
`

const HeaderText = styled.div`
  padding: 0 35px 10px 0;
  border-bottom: 1px solid ${colors.lightBackground};
`
const NavLink = styled(Link)`
  display: block;
  color: white;
  opacity: .8;
  font-size: 1.2em;
  padding: 10px 35px;

  &:hover, &:focus-visible {
    opacity: 1;
    background: ${colors.sideNavBarHover};
  }

  &.active { 
    background: ${colors.primaryColor};
    opacity: 1;
  }
`