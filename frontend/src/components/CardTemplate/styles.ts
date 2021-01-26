import styled from 'styled-components';

export const Card = styled.div`
  color: #000;
  width: 250px;
  height: 250px;

  padding-top: 20px;
  padding-right: 12.8px;
  padding-left: 12.8px;
  box-shadow: 0px 2px 2px 1px #c2c2c2;
  background: #fff;
  border-radius: 10px;
  margin-top: 2rem;
`;

export const UpSide = styled.div`
  position: relative;
  height: 84px;
  color: #4f9419;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ababab;

  h2 {
    font-size: 16px;
    font-weight: bold;
    line-height: 19px;
    margin-top: 16px;
    margin-bottom: 9px;
  }
`;

export const UnderSide = styled.div`
  height: 146px;

  span {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    line-height: 30px;
  }
`;

export const Img = styled.img`
  width: 3.5rem;
  height: 2.1rem;
`;

export const Icons = styled.div`
  color: #868686;
  position: absolute;
  top: -7px;
  right: 0;
  cursor: pointer;
  display: flex;

  svg {
    margin-left: 20px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 43px;
  margin-left: 13px;
`;
