import React from 'react'
import { connect } from 'react-redux'

import { getForecast } from './store/actions'
import { StyledAutocomplete, Wrapper, Title } from './styles'

function Browse ({ getForecast }) {
  return (
    <Wrapper>
      <StyledAutocomplete
        onPlaceSelected={getForecast}
      />
      <Title>Enter location</Title>
    </Wrapper>
  )
}

const mapDispatch = {
  getForecast
}

export default connect(null, mapDispatch)(Browse)
