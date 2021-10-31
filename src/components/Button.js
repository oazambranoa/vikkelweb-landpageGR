import styled from 'styled-components'
import {Link} from 'gatsby'

export const Button = styled(Link)`
    background: ${({primary}) =>(primary ? '#ed6955': '#091b28')};
    white-space: nowrap;
    padding: ${({ big })=> (big ? '16px 40px': '10px 32px')};
    color: #fff;
    font-size: ${({ big })=> (big ? '20px': '16px')};
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    margin-left: 10px;
    margin-right: 10px;
    border-radius:  ${({ round }) => (round ? '50px': 'none')};

    &:hover{
        background: ${({primary}) =>(primary ? '#091b28': '#ed6955')};
        transform: translateY(-2px);
    }

`