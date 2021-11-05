import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { menuData } from "../data/MenuData"
import { Button } from './Button'
import Logo from './Logo'




const Header = () => {
  
  return (
    <Nav>
      <NavLink to='/'><Logo /></NavLink>
      <Bars />
      <NavMenu>
        {menuData.map((item, index) =>(
            <NavLink to={item.link} key={index}>
              {item.title}
            </NavLink>
        ))}

      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/#suscribete">Suscríbete</Button>
      </NavBtn>
    </Nav>
  )
}
export default Header



const Nav = styled.nav`
  background: rgba(9, 27, 40, 0.4);
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem calc((100vw- 1300px)/2);
  z-index: 100;
  position: sticky;
 `
const NavLink = styled(Link)`
  color:#ffff;
  display: flex;
  align-items: center;
  margin-right: auto;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  h4{
    color:#ed6955;
    font-size: 25px;
  }
`
const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: right;
  margin-right: -48px;
 
  @media screen and (max-width: 768px){
    display: none;
  }
`
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  margin-left: 50px;
  @media screen and (max-width: 768px){
    display: none;
  }
`