import styled from "styled-components";
import { color } from "../../utils/color";

export const Card = styled.div`
  border: 1px solid ${color.lightGray};
  margin: 10px 0;
  padding: 10px 15px;
  border-radius: 20px;
  max-width: 500px;


  & > .company-name {

  }

  & > .project-title {
    font-weight: 700;
    font-size: 20px;
  }

  & > .concept {

  }
`
