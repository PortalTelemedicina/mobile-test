import React, { useEffect, useState, useCallback } from 'react';

import {
  SafeAreaView, 
  StyleSheet,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Specialty } from '../../interfaces/specialty';
import { Specialist } from '../../interfaces/specialist';

import Loading from '../../components/Loading';

import {
  Container,
  HeaderBar,
  HeaderButtons,
  HeaderMenu,
  SpecialistListContainer,
  SpecialistList,
  SpecialistContainer,
  SpecialistContainerUser,
  SpecialistContainerDetail,
  SpecialistNick,
  SpecialistNickSigla,
  SpecialistTitle,
  SpecialistButtons,
  SpecialistButtonChat,
  SpecialistButtonCall,
  Content,
  ContentBody,
  HeaderTitleText,
  HeaderSubTitleText,
  LabelCaption,
  IconButton,
} from './styles';

const Specialists: React.FC = ({}) => {
  const { goBack } = useNavigation();

  const route = useRoute();
  const routeParams = route.params as Specialty;  

  const [loading, setLoading] = useState(true);
  const [specialist, setSpecialist] = useState<Specialist[]>([]);

  useEffect(() => {
    setLoading(true);

    async function syncAPISpecialties(): Promise<void> {
      try {
        let urlApi = 'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api/list_specialist_heart.json';

        switch (routeParams.name) {
          case 'Heart Specialist':
            urlApi = 'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api/list_specialist_heart.json';
            break;
          case 'Dental Care':
            urlApi = 'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api/list_specialist_dental_care.json';
            break;
          case 'Dermatology Specialist':
            urlApi = 'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api/list_specialist_dermatology.json';
            break;
        }

        let response = await fetch(urlApi);

        let json = await response.json();

        setSpecialist(json);

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    syncAPISpecialties();
  }, [routeParams.name]);

  const subName = useCallback((str: string) => {
    var arr = str.split(' ');
    var join = arr[0][0].concat(arr[1][0]).toUpperCase();
    
    return join;
  }, []);  

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <SafeAreaView style={ styles.container }>     
      <Container>
        <HeaderBar>
          <HeaderButtons>
            <IconButton onPress={() => { goBack() }}>
              <Icon name="long-arrow-alt-left" size={24} color="#504C4C" />
            </IconButton>


            <IconButton onPress={() => {}} style={{ marginRight: 10 }}>
              <Icon name="filter" size={24} color="#504C4C" />
            </IconButton>
          </HeaderButtons>

          <HeaderMenu>
            <HeaderTitleText>{ routeParams.name }</HeaderTitleText>
            <HeaderSubTitleText>{ `${routeParams.total} doctors were found` }</HeaderSubTitleText>
          </HeaderMenu>
        </HeaderBar>
                
        <Content>            
          <ContentBody>
            <SpecialistListContainer>
              <SpecialistList
                showsVerticalScrollIndicator={false}
                horizontal={false}
                data={ specialist }
                keyExtractor={(item: any, index: any) => index}
                renderItem={({ item: itemList }) => (

                  <SpecialistContainer onPress={() => {  }}> 
                    <SpecialistContainerUser>
                      <SpecialistNick>
                        <SpecialistNickSigla>{ itemList.name.substr(0, 1) }</SpecialistNickSigla>                      
                      </SpecialistNick>
                    </SpecialistContainerUser>

                    <SpecialistContainerDetail>
                      <SpecialistTitle>{ itemList.name }</SpecialistTitle>

                      <LabelCaption>{ `Nearby ${ itemList.distance } miles` }</LabelCaption>
                      <LabelCaption numberOfLines={3}>{ itemList.description }</LabelCaption>

                      <SpecialistButtons>
                        <SpecialistButtonChat>
                          <LabelCaption color="#FFFFFF" isBold>Chat</LabelCaption>
                        </SpecialistButtonChat>

                        <SpecialistButtonCall onPress={()=>{}}>
                          <LabelCaption isBold>Call</LabelCaption>
                        </SpecialistButtonCall>
                      </SpecialistButtons>                      
                    </SpecialistContainerDetail>
                  </SpecialistContainer>                      
                )}
              />
            </SpecialistListContainer>
          </ContentBody>
        </Content>
      </Container>    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  }
});

export default Specialists;
