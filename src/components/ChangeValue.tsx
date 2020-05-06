import styled from "styled-components";
import * as React from "react"; 


type ButtonProps = {
    
    decrement:boolean
   
  }

export const Button= styled("button")<ButtonProps>`
  font-size: 25px;
  float: right;
  color: white; 
  background-color:${props => props.decrement? "#d32f2f": "#5ac04c"}; 
  &:hover{
  background-color: darkgrey; 
 
  } 
`

interface IValue{
    incrementClick: () => void; 
    decrementClick: () => void; 

}

const ChangeValue: React.FC<IValue> = ({incrementClick,decrementClick}) => 
{
    return(
        <div> 
            <Button decrement= {true} onClick = {incrementClick}> +</Button>
            
            <Button decrement= {false} onClick = {decrementClick}> -</Button>
        </div>
    )

}
export default ChangeValue;