import styled from 'styled-components/native';

type CardAttendanceItemProps = {
  color: string;
};
type CardAttendanceItemTextProps = {
  colorTextCard?: string;
};
export const Container = styled.View`
  flex: 1;
  margin-top: 0px;
  width: 100px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding-right: 16px;
  height: 140px;
  /* background: red; */
`;

export const CardAttendanceItem = styled.View<CardAttendanceItemProps>`
  /* width: 60%; */
  height: 130px;
  /* height: 200px; */
  width: 120px;
  background-color: ${props => props.color};
  border-radius: 20px;

  shadow-color: #000;
  shadow-offset: 0 1px;
  shadow-opacity: 0.2;
  shadow-radius: 0.2px;
  elevation: 2;
`;

export const CardAttendanceContent = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

export const CardImage = styled.Image``;

export const CardTextAttendance = styled.Text<CardAttendanceItemTextProps>`
  margin-top: 10px;
  color: ${props => props.colorTextCard};
  font-size: 17px;
  font-family: 'Segoe UI Semi-Bold';
`;
