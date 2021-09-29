import { Button as AntdButton } from 'antd'
import styled from 'styled-components'

export const Button = styled.button<{
  color?: string,
  backgroundColor?: string,
  margin?: string,
  height?: string,
  width?: string,
  maxWidth?: string,
  padding?: string
}>`
  border-radius: 15px;
  border: 0;
  ${({ color }) => color && `color: ${color};`}
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  transition: all 0.3s;
  box-shadow: 2px 2px 3px 2px #444;

  &:hover {
    box-shadow: 1px 1px 1px 1px #444;
  }

  &:disabled {
    background-color: #DDD;
    color: white;
    box-shadow: 0 0 0 0 #444;
  }
` 
