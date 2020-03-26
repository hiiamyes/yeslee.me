import styled from "styled-components";

export default styled.div`
  padding: 15px;
  > .trails {
    display: flex;
    > *:nth-of-type(n + 1) {
      margin-right: 5px;
    }
  }
`;
