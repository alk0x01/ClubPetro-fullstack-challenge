import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  height: 24.12vh;
  background-color: #4f9419;
  color: #fff;
  display: grid;
  grid-template-columns: 21vw 31.5vw 16.5vw 14vw;
  justify-content: space-around;
  justify-items: center;
  align-items: center;
  @media only screen and (max-width: 710px) {
    grid-template-columns: 50vw;
    height: max(280px, 40vh);
    justify-content: space-around;
    align-items: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Country = styled.select`
  label {
    margin-left: 72px;
  }
  font-size: max(1rem, 0.8vw);
  position: relative;
  width: 21vw;
  height: 4.6vh;
  border: 0;
  background: #ffffff;
  border-radius: 7px;
  padding-left: 15px;
  @media only screen and (max-width: 710px) {
    width: 70vw;
    height: max(4.68vh, 45.34px);
  }
`;

export const Place = styled.input`
  label {
    margin-left: 34px;
  }
  font-size: max(1rem, 0.8vw);
  position: relative;
  width: 31.5vw;
  height: 4.68vh;
  border: 0;
  background: #ffffff;
  border-radius: 7px;
  padding-left: 18px;
  @media screen and (max-width: 710px) {
    width: 70vw;
    height: max(4.68vh, 45.34px);
  }
`;

export const Button = styled.button`
  width: 12vw;
  height: 4.78vh;
  color: #fff;
  white-space: nowrap;
  font-size: max(1.3rem, 0.8vw);
  border: 0;
  background-color: #006c18;
  border-radius: 7px;
  margin-top: 16px;
  cursor: pointer;
  &:hover {
    background-color: #034d13;
  }
  @media only screen and (max-width: 710px) {
    width: max(144px, 7.5vw);
    height: max(4.78vh, 36.31px);
  }
`;

export const ContainerCards = styled.div`
  margin-left: 1.87vw;
  margin-right: 1.87vw;
  margin-top: 1.25rem;
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-template-rows: repeat(auto-fill, 282px);
  overflow-wrap: wrap;
`;
