import styled from "styled-components";
import { color } from "../../utils/color";

export const Card = styled.div<{
  color?: string,
  backgroundColor?: string,
  margin?: string,
  height?: string,
  width?: string,
  maxWidth?: string
}>`
  border: 1px solid ${color.lightGray};
  margin: ${({ margin }) => margin ? margin : '10px 0'};
  padding: 10px 15px;
  border-radius: 20px;
  max-width: 500px;
  width: ${({ width }) => width ? width : '90%'};


  & > .company-name {

  }

  & > .project-title {
    font-weight: 700;
    font-size: 20px;
  }

  & > .concept {

  }
`
