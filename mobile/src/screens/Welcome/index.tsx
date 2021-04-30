import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, ScrollView, Dimensions, BackHandler, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import SvgIllustration1 from './svg/illustration1';
1
import Button from '../../components/Button';

import {
  Container,
  Content,
  ContentHeader,
  ContentBody,
  ContentFooter,
  Title,
  TitleBlue,
  TitleGreen,
  Description,
} from './styles';

const deviceWidth = Dimensions.get('window').width;

const Welcome: React.FC = () => {
  const appNavigation = useNavigation();
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScrollView = useCallback(async (data: number) => {
    try {
      await scrollViewRef.current?.scrollTo({
        x: data * deviceWidth,
        y: 0,
        animated: true,
      });
    } catch (err) {
      // console.log(err);
    }
  }, []);

  return (
    <>
      <Container>
        <Content style={{ width: deviceWidth }}>
          <ContentHeader style={{ width: deviceWidth }}>
            <SvgIllustration1 />
          </ContentHeader>

          <ContentBody style={{ width: deviceWidth }}>
            <TitleBlue>
              <TitleGreen>Hi! </TitleGreen>
              Bem-vindo
            </TitleBlue>

            <Description>
              {`Sua conta digital completa\n e descomplicada!`}
            </Description>
          </ContentBody>

          <ContentFooter style={{ width: deviceWidth }}>
            <Button
              icon="long-arrow-alt-right"
              onPress={() => appNavigation.navigate('SignIn')}
            >
              AVANÇAR
            </Button>
          </ContentFooter>
        </Content>
      </Container>
    </>
  );
};

export default Welcome;
