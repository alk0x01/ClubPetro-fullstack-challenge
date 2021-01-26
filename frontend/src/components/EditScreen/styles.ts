import styled from 'styled-components';

export const ContainerModal = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const CardEdit = styled.div`
  color: #000;
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-right: 12.8px;
  padding-left: 12.8px;

  box-shadow: 0px 2px 2px 1px #c2c2c2;
  background: #fff;
  border-radius: 10px;
  margin: 0;
`;

export const Input = styled.input`
  height: 25px;
  width: 170px;
  border-radius: 5px;
  border: 0;
  box-shadow: 0 0 0.5px 0.5px #919191;
  padding-left: 5px;
`;

export const Icon = styled.div`
  color: #000;
  position: absolute;
  top: -7px;
  right: 0;
  cursor: pointer;
  display: flex;

  svg {
    margin-left: 20px;
  }
`;

export const Button = styled.button`
  background-color: #006c18;
  color: #fff;
  width: 70%;
  height: 30px;
  border: 0;
  border-radius: 7px;
  cursor: pointer;

  &:hover {
    background-color: #034d13;
  }
`;

export const WrapperEdit = styled.div`
  margin-top: 43px;
  justify-content: center;
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const Form = styled.form``;
