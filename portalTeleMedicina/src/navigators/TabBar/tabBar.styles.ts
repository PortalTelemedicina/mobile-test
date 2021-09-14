import styled from 'styled-components/native';

import themes from '@themes/theme';

export const BottomBar = styled.SafeAreaView`
  flex-direction: row;
  background-color: #FFF;
`;

export const BottomBarItem = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 26px;
  margin-bottom: 22px;
`;

export const BottomBarPressable = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
