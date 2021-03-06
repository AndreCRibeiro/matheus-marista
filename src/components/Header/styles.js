import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #222222;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 100%;

  /*Shadow*/
  box-shadow: 0px 2px 2px 5px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 2px 5px 5px rgba(0, 0, 0, 0.5);

  img {
    max-width: 650px;
    max-height: 650px;

    /* ANIMATION */
    -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  img + img {
    max-width: 400px;
    max-height: 400px;
  }

  h1 {
    color: whitesmoke;
    font-family: Raleway-Medium;
    font-size: 60px;
    margin: 10px;
  }

  h2 {
    color: whitesmoke;
    font-family: Raleway-Thin;
    font-size: 36px;
    margin-bottom: 60px;
  }

  h3 {
    color: whitesmoke;
    font-family: Raleway-Thin;
    margin: 25px;
  }

  span {
    color: #d24a00;
  }

  svg {
    width: 50px;
    height: 50px;
    cursor: pointer;
    color: whitesmoke;
  }

  // Mobile
  @media (max-width: 730px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 250px;
      max-height: 250px;

      /* ANIMATION */
      -webkit-animation: scale-up-center 0.4s
        cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }

    img + img {
      max-width: 200px;
      max-height: 200px;
    }

    h1 {
      color: whitesmoke;
      font-family: Raleway-Medium;
      font-size: 40px;
      margin: 10px;
    }

    h2 {
      color: whitesmoke;
      font-family: Raleway-Thin;
      font-size: 25px;
      margin-bottom: 60px;
    }

    h3 {
      color: whitesmoke;
      font-family: Raleway-Thin;
      margin: 25px;
    }
  }

  // Mobile
  @media (max-width: 450px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 250px;
      max-height: 250px;

      /* ANIMATION */
      -webkit-animation: scale-up-center 0.4s
        cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }

    img + img {
      max-width: 200px;
      max-height: 200px;
    }

    h1 {
      color: whitesmoke;
      font-family: Raleway-Medium;
      font-size: 40px;
      margin: 10px;
    }

    h2 {
      color: whitesmoke;
      font-family: Raleway-Thin;
      font-size: 25px;
      margin-bottom: 60px;
    }

    h3 {
      color: whitesmoke;
      font-family: Raleway-Thin;
      margin: 25px;
    }
  }
`;

export const CardsContainer = styled.div`
  margin-bottom: 15px;
`;

export const ButtonContainer = styled.div`
  margin-bottom: 15px;
`;
