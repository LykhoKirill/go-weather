import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Header = styled.header`
  padding: 30px 15px;
  display: flex;
  align-items: baseline;
`

export const Title = styled.span`
  font-size: 32px;
  font-weight: bold;
`

export const StyledLink = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  color: #333;
`

export const LinksWrapper = styled.div`
  display: flex;
  margin-left: 75px;
  
  a {
    margin-left: 30px;
    font-weight: lighter;
  }
`
