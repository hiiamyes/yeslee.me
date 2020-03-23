import styled from "styled-components"

export default styled.div`
  padding: 15px;
  > .trails {
    display: grid;
    grid: 1fr / repeat(4, max-content);
    grid-gap: 5px;
  }
`
