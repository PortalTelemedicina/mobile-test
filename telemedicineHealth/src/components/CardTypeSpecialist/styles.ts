import styled from 'styled-components/native';

export const Container = styled.View``;

export const Content = styled.View`
  margin-bottom: 20px;
`;

export const ContentViewInitialName = styled.View`
  background-color: #fadfed;
  width: 65px;
  height: 70px;
  border-radius: 50px;

  align-items: center;
  justify-content: center;
`;

export const ContentViewInfo = styled.View`
  margin-left: 40px;
`;

export const Line = styled.View`
  margin-top: 10px;
  height: 5px;
  background-color: #f8f6f8;
  width: 100%;
  margin-bottom: 20px;
`;

export const TextInitialName = styled.Text`
  color: #f163a5;
  font-size: 18px;
  font-family: 'Segoe UI Bold';
`;

export const TextName = styled.Text`
  font-size: 18px;
  font-family: 'Segoe UI Bold';
`;

export const TextApproximation = styled.Text`
  font-size: 14px;
  font-family: 'Segoe UI';
  margin-top: 5px;
  color: black;
`;

export const TextDescription = styled.Text`
  width: 85%;
  font-size: 16px;
  font-family: 'Segoe UI';
  margin-top: 5px;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  width: 80%;
  display: flex;
  justify-content: space-between;
  /* background-color: red; */
  margin-top: 20px;
`;

export const ButtonChat = styled.TouchableOpacity`
  width: 120px;
  background: #765fe5;
  height: 30px;

  align-items: center;
  justify-content: center;
  border-radius: 30px;

  shadow-color: #000;
  shadow-offset: 0 3px;
  shadow-opacity: 0.27;
  shadow-radius: 4.65px;
  elevation: 6;
`;

export const TextButtonChat = styled.Text`
  color: #fff;
  font-size: 14px;
  font-family: 'Segoe UI';
`;

export const ButtonCall = styled.TouchableOpacity`
  width: 120px;
  background: #fff;
  height: 30px;

  align-items: center;
  justify-content: center;
  border-radius: 30px;

  shadow-color: #000;
  shadow-offset: 0 3px;
  shadow-opacity: 0.27;
  shadow-radius: 4.65px;
  elevation: 6;
`;

export const TextButtonCall = styled.Text`
  color: black;
  font-size: 14px;
  font-family: 'Segoe UI';
`;
