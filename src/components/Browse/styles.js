import styled from 'styled-components'
import { darken } from 'polished'
import Autocomplete from 'react-google-autocomplete'

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 200px;
`

export const StyledAutocomplete = styled(Autocomplete)`
  width: 500px;
  border: none;
  border-bottom: 3px solid #333;
  border-left: 3px solid #333;
  padding: 10px 20px;
  background-color: ${darken(0.03, '#fff')};
  outline: none;
  font-size: 32px;
  color: #333;
  font-weight: bold;

  ::placeholder {
    opacity: 0;
  }
`

export const Title = styled.div`
  font-size: 48px;
  //opacity: .6;
  margin-top: 20px;
  font-weight: lighter;
`
