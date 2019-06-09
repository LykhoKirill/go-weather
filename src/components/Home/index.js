import React from 'react'

import {
  Wrapper,
  PageLinkWrapper,
  PageLinkSubTitle,
  PageLinkTitle
} from './styles'

const PageLink = ({ to, title, subTitle }) => (
  <PageLinkWrapper to={to}>
    <PageLinkTitle>{title}</PageLinkTitle>
    <PageLinkSubTitle>{subTitle}</PageLinkSubTitle>
  </PageLinkWrapper>
)

const Home = () => (
  <Wrapper>
    <PageLink
      to='/current'
      title='Current location'
      subTitle='Requires to allow to get geolocation'
    />
    <PageLink
      to='/browse'
      title='Browse'
      subTitle='Browse forecast for cities'
    />
  </Wrapper>
)

export default Home
