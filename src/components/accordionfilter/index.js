import React, {useState} from "react";
import styled from 'styled-components';
import Checkbox from "../checkbox";

export default function AccordionFilter({Title, Options}) {
    const [isOpen, setIsOpen] = useState(false);


    //TODO Implement real checkbox logic!
    const onCheckboxSelect = (selection, name) => {
        console.log(selection, name);
    }
    return (
        <AccordionWrapper>
            <FilterHeading onClick={() => setIsOpen(!isOpen)}>{isOpen ? "-" : "+" } {Title}</FilterHeading>
            <FilterOptions isOpen={isOpen}>
                {Options.map(e => {
                    return <Checkbox label={e.name} onChange={onCheckboxSelect}/>
                })}
            </FilterOptions>
        </AccordionWrapper>
    );

}


const AccordionWrapper = styled.div`
    margin-bottom: 20px;
`
const FilterHeading = styled.button`
background:none;
    border:none;
    margin:0;
    padding:0;
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;
    
`

const FilterOptions = styled.div`
  ${({ isOpen }) =>
    !isOpen &&
    `display: none;
    `}
`;