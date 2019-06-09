import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { selectBrowseLocationWeather } from 'Core/weather/selectors'
import { selectBrowseCity } from 'Core/location/selectors'
import DetailedForecast from 'Common/DetailedForecast'

function CurrentLocation ({ forecast, city }) {
  if (!forecast || !city) return <Redirect to='/browse' />

  return <DetailedForecast forecast={forecast} city={city} />
}

const mapState = state => ({
  forecast: selectBrowseLocationWeather(state),
  city: selectBrowseCity(state)
})

export default connect(mapState, null)(CurrentLocation)
