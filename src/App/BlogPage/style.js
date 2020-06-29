import styled from "styled-components";

export default styled.div`
  width: 100%;
  height: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 15px;
  > .nav-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      color: black;
      text-decoration: none;
    }
    .contact-link {
      margin: 0 0.4rem;
      color: black;
      font-size: 2rem;
    }
  }

  > .blogs {
    > .blog {
      padding: 5px;
      display: grid;
      grid: 1fr / max-content 1fr;
      grid-gap: 10px;
      > .date {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
          monospace;
      }
    }
  }
`;
