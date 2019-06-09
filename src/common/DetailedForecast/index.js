import React from 'react'
import get from 'lodash/get'
import moment from 'moment'

import {
  Wrapper,
  TodayWeatherText,
  TodayTemperature,
  WeekTitle,
  WeekText,
  TableData,
  TableRow,
  DailyForecastWrapper,
  City
} from './styles'

const DailyForecast = ({ dailyForecast }) => (
  <table>
    <tbody>
      {dailyForecast.map(forecast => (
        <TableRow key={forecast.dateTime}>
          <TableData>{moment(forecast.dateTime).format('dddd, DD')}</TableData>
          <TableData>
            {Math.round(forecast.temperatureLow)} °F
            - {Math.round(forecast.temperatureHigh)} °F
          </TableData>
          <TableData>{forecast.summary}</TableData>
        </TableRow>
      ))}
    </tbody>
  </table>
)

export default function DetailedForecast ({ forecast, city }) {
  const { weekSummary, dailyForecast } = forecast
  const today = get(forecast, 'today', {})
  const { temperature, summary } = today

  return (
    <Wrapper>
      <div>
        <TodayWeatherText>Today</TodayWeatherText>
        <TodayTemperature>{Math.round(temperature)} °F</TodayTemperature>
        <TodayWeatherText>{summary}</TodayWeatherText>
        <WeekTitle>Week</WeekTitle>
        <WeekText>{weekSummary}</WeekText>
      </div>
      <DailyForecastWrapper>
        <DailyForecast dailyForecast={dailyForecast} />
        <City>{city}</City>
      </DailyForecastWrapper>
    </Wrapper>
  )
}
