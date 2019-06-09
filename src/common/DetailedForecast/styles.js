import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 75px 50px 75px 200px;
  display: flex;
  justify-content: space-between;
`

export const TodayWeatherText = styled.div`
  font-weight: lighter;
  font-size: 64px;
`

export const TodayTemperature = styled.div`
  font-size: 128px;
`

export const WeekTitle = styled.div`
  font-size: 64px;
  margin-top: 100px;
`

export const WeekText = styled.p`
  margin-top: 20px;
  font-size: 32px;
  font-weight: lighter;
  max-width: 500px;
`

export const DailyForecastWrapper = styled.div`
`

export const TableRow = styled.tr`
  opacity: .5;
  cursor: default;
  transition: opacity .2s;
  
  :hover {
    opacity: 1;
  }
`

export const TableData = styled.td`
  padding: 10px;
  font-size: 16px;
  letter-spacing: .8px;
`

export const City = styled.div`
  margin-top: 100px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 64px;
  opacity: .3;
  padding-left: 10px;
`
