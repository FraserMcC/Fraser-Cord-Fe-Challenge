import React from "react";
import styled from 'styled-components';


export default function Checkbox ({ id, name, checked, label, onChange }) {
  // TODO: Style the component and checkmark to look like the mockup provided
  return (
    <CheckboxCont>
      <CheckboxInput type="checkbox" id={id} name={name} checked={checked} onChange={e => onChange(e.target.checked, label)}/>
      <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
    </CheckboxCont>
  )

}

const CheckboxCont = styled.div`
  position: relative;
  color: lightgrey;
`

const CheckboxInput = styled.input`
    margin: 5%;
    width: 15px;
    height: 15px;
    cursor: pointer;
`

const CheckboxLabel = styled.label`
    color: #A0A0A0;    
    font-size 15px;
`