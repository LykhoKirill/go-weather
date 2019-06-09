import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { MetroSpinner } from 'react-spinners-kit'

import { selectCurrentLocationWeather } from 'Core/weather/selectors'
import { selectCurrentCity } from 'Core/location/selectors'
import DetailedForecast from 'Common/DetailedForecast'

import { initCurrentLocation } from './store/actions'
import { selectIsLoading } from './store/selectors'

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

function CurrentLocation ({ forecast, city, initCurrentLocation, isLoading }) {
  useEffect(() => {
    initCurrentLocation()
  }, [])

  if (isLoading) {
    return (
      <LoadingWrapper>
        <MetroSpinner color='#333' />
      </LoadingWrapper>
    )
  }

  return <DetailedForecast forecast={forecast} city={city} />
}

const mapState = state => ({
  forecast: selectCurrentLocationWeather(state),
  city: selectCurrentCity(state),
  isLoading: selectIsLoading(state)
})

const mapDispatch = {
  initCurrentLocation
}

export default connect(mapState, mapDispatch)(CurrentLocation)
