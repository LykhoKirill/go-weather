import dsApi from 'dark-sky-api'

import { API } from 'Api/client'

/* DARK SKY API */

dsApi.apiKey = '238b30c34fd8be19497ffff3ee3ab18f'

export const getCurrentLocationWeather = () => dsApi.loadCurrent()
export const getCurrentLocation = () => dsApi.loadPosition()
export const getCurrentLocationForecast = () => dsApi.loadForecast()
export const getWeatherByLocation = location => dsApi.loadCurrent(location)
export const getForecastByLocation = location => dsApi.loadForecast(location)

/* GOOGLE MAPS API */

const gMapsApi = new API('https://maps.googleapis.com/maps/api/')

gMapsApi.setQueryApiKey('AIzaSyBgH-cKJ_dCfQA9NfeWKdBXrFK_Gnjs9YU')

export const getReverseGeocoding = latlng => gMapsApi.get('geocode/json', {
  params: { latlng }
})

export const getGeocodingByAddress = address => gMapsApi.get('geocode/json', {
  params: { address }
})
