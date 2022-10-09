import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.status ? 'radial-gradient(#555, #111)' : '#222')};
`;

export const Bulb = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  background: ${(props) => (props.status ? '#fff' : '#444')};
  border-radius: 50%;
  z-index: 2;
  box-shadow: ${(props) => (props.status
    ? `0 0 50px #fff,
    0 0 100px #fff,
    0 0 150px #fff,
    0 0 200px #fff,
    0 0 250px #fff,
    0 0 300px #fff,
    0 0 350px #fff` : 'none')};
  &::before {
    content: '';
    background: ${(props) => (props.status ? '#fff' : '#444')};
    position: absolute;
    top: -50px;
    left: 22.5px;
    width: 35px;
    height: 80px;
    border-top: 30px solid black;
    border-radius: 10px;
  }
  ${(props) => (props.status && css`
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
    background: #fff;
    border-radius: 50%;
    filter: blur(40px);
  }
  `)}
`;

export const Supports = styled.span`
  &:nth-child(1) {
    position: absolute;
    top: -16px;
    left: -4px;
    display: block;
    width: 30px;
    height: 30px;
    background: transparent;
    transform: rotate(342deg);
    border-bottom-right-radius: 40px;
    box-shadow: 20px 20px 0 10px ${(props) => (props.status ? '#fff' : '#444')};
  }
  &:nth-child(2) {
    position: absolute;
    top: -16px;
    right: -4px;
    display: block;
    width: 30px;
    height: 30px;
    background: transparent;
    transform: rotate(17deg);
    border-bottom-left-radius: 40px;
    box-shadow: -20px 20px 0 10px ${(props) => (props.status ? '#fff' : '#444')};
  }
`;

export const Wire = styled.div`
  position: absolute;
  left: calc(50% - 2px);
  bottom: 50%;
  width: 4px;
  height: 60vh;
  background: #000;
  z-index: 1;
`;

export const Switcher = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 80px;
  height: 80px;
  background: linear-gradient(#eee, #ccc, #eee);
  border: 3px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div`
  position: relative;
  width: 25px;
  height: 40px;
  background: linear-gradient(#777, #fff, #777);
  border-radius: 6px;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    top: ${(props) => (props.status ? '15%' : '0')};
    left: 0;
    width: 100%;
    height: 80%;
    background: linear-gradient(#fff, #fff);
    border-radius: 4px;
  }
`;
