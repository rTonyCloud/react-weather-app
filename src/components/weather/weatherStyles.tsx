import styled from "styled-components";

const Container = styled.div`
  width: 607px;
  height: 829px;
  margin: auto;
  margin-top: 75px;
  border-radius: 12px;
  background-image: linear-gradient(180deg, #130754 0%, #3b2f80 100%);
`;

const TopBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  padding-top: 60px;
`;

const Input = styled.input`
  display: flex;
  width: 362px;
  height: 78px;
  background: #ebfffc;
  border: none;
  outline: none;
  border-radius: 40px;
  padding-left: 40px;
  color: #626262;
  font-size: 20px;
  font-weight: 400;
`;

// const SearchIconWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 78px;
//   height: 78px;
//   background: #ebfffc;
//   border-radius: 40px;
//   cursor: pointer;
// `;

const WeatherImage = styled.div`
  margin-top: 29px;
  display: flex;
  justify-content: center;
`;

const WeatherTemp = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 120px;
  font-weight: 400;
`;

const WeatherLocation = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 60px;
  font-weight: 400;
`;

const DataContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  color: white;
`;

const Element = styled.div`
  margin: auto;
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const Data = styled.div`
  font-size: 34px;
  font-weight: 400;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: 400;
`;

const Icon = styled.img`
  margin-top: 10px;
`;

export {
  Container,
  TopBar,
  Input,
  WeatherImage,
  // SearchIconWrapper,
  WeatherTemp,
  WeatherLocation,
  DataContainer,
  Element,
  Data,
  Text,
  Icon,
};