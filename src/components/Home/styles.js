import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding-left: 200px;
  height: 70%;
`

export const PageLinkWrapper = styled(Link)`
  color: #333;
  text-decoration: none;
  
  :first-child {
    margin-bottom: 150px;
  }
`

export const PageLinkTitle = styled.div`
  font-size: 64px;
  
  :hover {
    text-decoration: underline;
  }
`

export const PageLinkSubTitle = styled.div`
  font-size: 22px;
  font-weight: lighter;
`
