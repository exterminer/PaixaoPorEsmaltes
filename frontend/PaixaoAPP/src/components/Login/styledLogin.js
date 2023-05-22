import styled from "styled-components";

export const LoginPage = styled.div`
  background-color: rgb(32 31 45);
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const LogoLogin = styled.h3`
  @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@1,700&display=swap");
  color: rgba(116, 195, 148, 1);
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 20px;
`;
export const TittleLogin = styled.h2`
  white-space: pre-wrap;
  overflow: visible;
  font-size: 36px;
  font-weight: 700;
  color: rgb(255, 251, 250);
  line-height: 1;
  opacity: 1;
  align-self: flex-start;
  min-width: 0px;
  min-height: 0px;
  height: max-content;
  margin-bottom: 40px;
`;

export const LoginInputs = styled.div`

  h4 {
    margin-top: 30px;
    text-align: center;
    color: rgb(255, 251, 250);
    line-height: 1;
    margin-bottom: 40px;
  }
  a {
    text-decoration: none;
    position: relative;
    color: #74c494;
    cursor: pointer;
  }
  a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: rgb(255, 251, 250);
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  a:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 50vw;
    padding: 16px 46px;
    input{
      width: 100vw;
    }
  }
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    background-color: rgb(84, 106, 123);
    border-radius: 16px;
    font-size: 16px;
    font-weight: 400;
    color: rgb(216, 228, 255);
    max-width: 100%;
    min-width: 250px;
    width: 70vw;
    padding: 16px;
    height: 48px;
    margin: 0px 0px 16px;
    border: none;
  }
  button {
    border: none;
    border-radius: 8px;
    color: #fffbfa;
    background-color: #74c494;
    padding: 16px;
    cursor: pointer;
    transition: background 200ms ease 0s;
    width: 70vw;
    max-width: 100%;
    min-width: 150px;
    height: max-content;
    margin: 16px 0px 0px;
  }
`;

export const Boximagem = styled.div`
  display: none;
  width: 50vw;
  align-items: center;
  justify-content: center;
  background-color: #74c494;
  height: 100vh;

  img {
    width: 50vw;
  }
  @media (min-width: 1024px) {
    display: flex;
  }
`;