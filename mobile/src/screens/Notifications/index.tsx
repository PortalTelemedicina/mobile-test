import React from 'react';
import { 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  StatusBar 
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  Content,
  ContentHeader,
  ContentBody,
  TitleBlue,
  TitleBlush,
} from './styles';

const Notifications: React.FC = () => {
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
              <Icon name="bell-slash" size={150} color="#7C8494" />
            </ContentHeader>

            <ContentBody>
              <TitleBlue> Notifications </TitleBlue>
              <TitleBlush> Nothing here! </TitleBlush>
            </ContentBody>
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

export default Notifications;
