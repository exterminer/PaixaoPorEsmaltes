import styled from "styled-components";

export const RegisterPage = styled.div`
  background-color: rgb(32 31 45);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const TittleRegister = styled.h2`
  white-space: pre-wrap;
  overflow: visible;
  font-size: 36px;
  font-weight: 700;
  color: rgb(255, 251, 250);
  line-height: 1;
  opacity: 1;
  margin-bottom: 30px;
  min-width: 0px;
  min-height: 0px;
  height: max-content;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    background-color: rgb(84, 106, 123);
    border-radius: 16px;
    font-size: 16px;
    font-weight: 400;
    color: rgb(216, 228, 255);
    max-width: 100%;
    width: 70vw;
    padding: 16px;
    height: 48px;
    margin: 0px 0px 16px;
    min-width: 250px;
    border: none;
  }
  button {
    border: none;
    border-radius: 8px;
    color: #fffbfa;
    background-color: #74c494;
    padding: 16px;
    max-width: 100%;
    min-width: 250px;
    width: 70vw;
    margin: 0px 0px 16px;
    cursor: pointer;
    transition: background 200ms ease 0s;
    height: max-content;
    margin: 16px 0px 0px;
  }
`;

export const RegisterInputs = styled.div`

  h3{
    font-weight: 400;
    margin-bottom: 20px;
    color: rgb(255, 251, 250);
    line-height: 1;
    
  }
  h4 {
    margin-top: 20px;
    text-align: center;
    color: rgb(255, 251, 250);
    line-height: 1;
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
`;

export const LinkRegister = styled.link`
  margin-top: 20px;
  text-decoration: none;
  position: relative;
  color: #74c494;
  cursor: pointer;
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
