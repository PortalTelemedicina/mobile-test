import styled from 'styled-components/native';

interface SpecialtyCardProps {
  backgroundColor?: string;
}

export const Container = styled.TouchableOpacity`
  justify-content: space-between;
  width: 180px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #555252;
  font-family: 'Segoe UI Bold';
`;

export const SpecialtyCard = styled.View<SpecialtyCardProps>`
  height: 200px;
  width: 160px;
  background-color: ${props => props.backgroundColor};
  border-radius: 20px;

  shadow-color: #000;
  shadow-offset: 0 3px;
  shadow-opacity: 0.27;
  shadow-radius: 4.65px;
  elevation: 6;
`;

export const SpecialtyCardImageContent = styled.View`
  background-color: #fff;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 90px;
`;

export const SpecialtyCardImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const SpecialtyCardName = styled.Text`
  font-size: 22px;
  font-family: 'Segoe UI Bold';
  color: #ffffff;
  text-align: left;
  flex: 1;
  flex-wrap: wrap;
  margin-top: 10px;
  flex-shrink: 1;
`;

export const SpecialtyCardAmount = styled.Text`
  font-size: 18px;
  color: #ffffff;
  margin-top: 5px;
`;
