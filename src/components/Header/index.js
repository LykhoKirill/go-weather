import React from 'react'

import { Header, Title, StyledLink, LinksWrapper } from './styles'

export default function () {
  return (
    <Header>
      <Title>GoWeather.</Title>
      <LinksWrapper>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/current'>Current location</StyledLink>
        <StyledLink to='/browse'>Browse</StyledLink>
      </LinksWrapper>
    </Header>
  )
}
