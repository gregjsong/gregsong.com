import styled from 'styled-components';

const Button = styled.a`  
background: ${props => props.filled ? 'teal' : 'white'};
border-radius: 25px;
border: 2px solid teal;
color: ${props => props.filled ? 'white' : 'teal'};
margin: 5px 10px;
height: 50px;
width: 150px;
text-align: center;
padding: 10px 0;
text-decoration: none;
&:hover {
  text-decoration: none;
  color: ${props => props.filled ? 'white' : 'teal'}
}
`;

export default Button