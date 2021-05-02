import React, { useCallback } from 'react';
import { 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  Alert, 
  StatusBar 
} from 'react-native';

import { useAuth } from '../../hooks/auth';

import SvgIllustration from '../../assets/svg/logo-welcome/illustration';

import Button from '../../components/Button';

import {
  Container,
  Content,
  ContentHeader,
  ContentBody,
  ContentFooter,
  TitleBlue,
  TitleBlush,
  Description,
} from './styles';

const Welcome: React.FC = () => {
  const { signIn } = useAuth();

  const handleSignIn = useCallback(
    async () => {
      try {
        await signIn({
          email: "lorelle.luna@telemedicina.com.br",
          password: '123456',
        });

        //navigate('Dashboard');
      } catch (err) {
        Alert.alert('Atencão', 'Não foi possível realizar login. Verifique se seus dados estão corretos.', 
          [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
            { text: 'Ok', onPress: () => null },
          ]
        );        
      }
    },
    [signIn],
  );

  return (
    
    <SafeAreaView style={ styles.container }>  
      <ScrollView
        scrollEventThrottle={16}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
        }}
      >   
        <Container>  
          <Content>
            <ContentHeader>
              <SvgIllustration />
            </ContentHeader>

            <ContentBody>
              <TitleBlue> Olá! </TitleBlue>
              <TitleBlush> Seja bem-vindo </TitleBlush>

              <Description>
                {`Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit.`}
              </Description>
            </ContentBody>

            <ContentFooter>
              <Button icon="long-arrow-alt-right" onPress={ handleSignIn } >
                COMEÇAR
              </Button>
            </ContentFooter>
          </Content>
        </Container>
      </ScrollView>
    </SafeAreaView>          
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  }
});

export default Welcome;
