import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from 'Components/Header'
import Home from 'Components/Home'
import CurrentLocation from 'Components/CurrentLocation'
import Browse from 'Components/Browse'
import Details from 'Components/Details'

import { Layout as LayoutWrapper } from './styles'

function Layout () {
  return (
    <LayoutWrapper>
      <Header />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/current' component={CurrentLocation} />
        <Route path='/browse' component={Browse} />
        <Route path='/details' component={Details} />
      </Switch>

    </LayoutWrapper>
  )
}

export default Layout
