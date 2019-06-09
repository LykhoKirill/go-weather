import { createSelector } from 'reselect'
import get from 'lodash/get'

import { selectCurrentCity, selectBrowseCity } from 'Core/location/selectors'

const selectWeather = state => state.core.weather
const createWeatherSelector = createSelector.bind(null, selectWeather)

const weatherMappingHelper = forecast => {
  const { temperature, summary } = forecast.today
  const weekSummary = get(forecast, 'week.daily.summary', 'Not provided')
  const dailyData = get(forecast, 'week.daily.data', {})
  const dailyForecast = dailyData.map(forecast => {
    const {
      summary,
      temperatureHigh,
      temperatureLow,
      dateTime
    } = forecast
    return {
      summary,
      temperatureHigh,
      temperatureLow,
      dateTime
    }
  })

  return {
    today: { temperature, summary },
    weekSummary,
    dailyForecast
  }
}

export const selectCurrentLocationWeather = createWeatherSelector(
  selectCurrentCity,
  (weather, currentCity) => {
    const currentCityForecast = get(weather.cities, currentCity)
    if (!currentCityForecast) return null

    return weatherMappingHelper(currentCityForecast)
  }
)

export const selectBrowseLocationWeather = createWeatherSelector(
  selectBrowseCity,
  (weather, browseCity) => {
    const browseCityForecast = get(weather.cities, browseCity)
    if (!browseCityForecast) return null

    return weatherMappingHelper(browseCityForecast)
  }
)
