import styled from "styled-components";

export default styled.div`
  width: 100%;
  height: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 15px;
  > .nav-bar {
    display: flex;
    justify-content: space-between;
    a {
      color: black;
      text-decoration: none;
    }
    > .menus {
      display: flex;
      > *:nth-of-type(n + 1) {
        margin-right: 10px;
      }
    }
  }
  .cover {
    width: 100%;
    height: 400px;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  > .title {
    display: grid;
    grid: 1fr / 100px 1fr;
    grid-gap: 5px;
    font-family: "SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo,
      Courier, monospace;
  }

  > .peaks {
    > .peak {
      display: grid;
      grid: 1fr / 100px 1fr;
      grid-gap: 5px;
      font-family: "SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono",
        Menlo, Courier, monospace;
    }
  }
`;
