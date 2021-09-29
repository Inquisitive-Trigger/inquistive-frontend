import styled from "styled-components";
import { color } from "../../utils/color";

export const Card = styled.div<{
  color?: string,
  backgroundColor?: string,
  margin?: string,
  height?: string,
  width?: string,
  maxWidth?: string,
  animationDelay?: number
}>`
  border: 1px solid ${color.lightGray};
  margin: ${({ margin }) => margin ? margin : '10px 0'};
  padding: 10px 15px;
  border-radius: 20px;
  max-width: 500px;
  width: ${({ width }) => width ? width : '90%'};
  cursor: pointer;
  animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  ${({ animationDelay }) => animationDelay && `animation-delay: ${animationDelay * 150}ms;`}

  & > .company-name {

  }

  & > .project-title {
    font-weight: 700;
    font-size: 20px;
    color: ${color.darkGreen};
  }

  & > .concept {

  }

  @keyframes slide-left {
    0% {
      -webkit-transform: translateX(500px);
              transform: translateX(500px);
    }
    100% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
    }
  }

`
