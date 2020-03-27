import styled from "styled-components";

export default styled.div`
  max-width: 768px;
  padding: 15px;
  margin: 0 auto;

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

  > .trails {
    display: flex;
    > *:nth-of-type(n + 1) {
      margin-right: 5px;
    }
  }

  > .trail {
    width: 100%;
    > img {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }
  }
`;
