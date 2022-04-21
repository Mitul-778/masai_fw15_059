import styled from "styled-components"

const Button = styled.button`
background-color: ${(props)=> props.background};
color: ${(props)=> props.color};
border: 1px ${(props)=> props.border} lightgray;
height: 50px;
width: 150px;
margin: 5px
`

export default Button;