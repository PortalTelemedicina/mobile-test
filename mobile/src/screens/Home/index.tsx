import React, { useCallback, useEffect, useState } from 'react';

import {
  SafeAreaView, 
  ScrollView,
  RefreshControl,
  StyleSheet,
  StatusBar,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { SvgUri } from 'react-native-svg';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { useAuth } from '../../hooks/auth';

import { Specialty } from '../../interfaces/specialty';

import Loading from '../../components/Loading';

import { 
  SvgAmbulance, SvgDiagnostic, SvgNurse,
  SvgConsultation, SvgLabWork, SvgMedicine,
} from '../../assets/svg/icons-need';

import {
  Container,
  HeaderBar,
  HeaderMenu,
  HeaderMenuButton,
  CategoryListContainer,
  CategoryList,
  CategoryContainer,
  CategoryImage,
  CategoryTitle,
  Content,
  ContentHeader,
  ContentBody,
  ContentHeaderTitle,
  UserTitleHello,
  UserTitleName,
  ContentHeaderTitleText,
  NeedHorizontalContainer,
  NeedContainer,
  NeedImage,
  NeedTitle,
  NeedTitleText,
  LabelCaption,
} from './styles';

const HomeScreen: React.FC = ({}) => {
  const { user, signOut } = useAuth();
  const { navigate } = useNavigation();

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [specialties, setSpecialties] = useState<Specialty[]>([]);

  useEffect(() => {
    async function syncAPISpecialties(): Promise<void> {

      try {
        let response = await fetch(
          'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api/home_specialists.json'
        );

        let json = await response.json();

        setSpecialties(json);

        if (loading) {
          setLoading(false);
        }        
      } catch (error) {
        console.error(error);
      } finally {
        
      }
    }

    syncAPISpecialties();
  }, []);

  const handleNavigateToSpecialists = useCallback((itemObject: Specialty) => {
    navigate('Specialists', itemObject);
  }, [navigate]);

  const onRefresh = useCallback(async () => {
    try {
      setRefreshing(true);
      setRefreshing(false);
    } catch (error) {

    }
  }, []);

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <SafeAreaView style={ styles.container }>     
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressBackgroundColor="#FFFFFF"
            colors={["#CA49E5", "#7349E5", "#F6AF3D", "#E5495E"]}
          />
        }
      >
        <Container>
          <HeaderBar>
            <HeaderMenu>
              <UserTitleHello>Hello, </UserTitleHello>
              <UserTitleName>{ user.name }</UserTitleName>
            </HeaderMenu>

            <HeaderMenuButton onPress={() => { signOut() }}>
              <Icon name="sign-out-alt" size={24} color="#504C4C" />
            </HeaderMenuButton>
          </HeaderBar>      
                  
          <Content>
            <ContentHeader>
              <CategoryListContainer>
                <ContentHeaderTitle>
                  <ContentHeaderTitleText>Specialists</ContentHeaderTitleText>
                </ContentHeaderTitle>

                <CategoryList
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={ specialties }
                  keyExtractor={(item: any, index: any) => index} //(categoryItem: Category)  => categoryItem.
                  renderItem={({ item: itemList }) => (

                    <CategoryContainer 
                      color={ itemList.color }
                      onPress={() => { handleNavigateToSpecialists(itemList) }}> 

                      <CategoryImage>
                        <SvgUri
                          width="100%"
                          height="100%"
                          fill={ itemList.color }
                          uri={ itemList.image_url }
                        />                       
                      </CategoryImage>
                
                      <CategoryTitle>{ itemList.name }</CategoryTitle>

                      <LabelCaption>{ `${ itemList.total } Doctors` }</LabelCaption>
                    </CategoryContainer>  
                      
                  )}
                />
              </CategoryListContainer>
            </ContentHeader>
            
            <ContentBody>
              <NeedHorizontalContainer>
                <NeedContainer color="#CA49E5" onPress={() => {}}>
                  <NeedImage>
                    <SvgDiagnostic color="#ffffff"/>  
                  </NeedImage>
                  
                  <NeedTitle>
                    <NeedTitleText numberOfLines={1} color="#ffffff">Diagnostic</NeedTitleText>
                  </NeedTitle>
                </NeedContainer>

                <NeedContainer onPress={() => {}}>
                  <NeedImage>
                    <SvgConsultation color="#7C8494"/>  
                  </NeedImage>
                  
                  <NeedTitle>
                    <NeedTitleText numberOfLines={1}>Consultation</NeedTitleText>
                  </NeedTitle>
                </NeedContainer>

                <NeedContainer onPress={() => {}}>
                  <NeedImage>
                    <SvgNurse color="#7C8494"/>  
                  </NeedImage>
                  
                  <NeedTitle>
                    <NeedTitleText numberOfLines={1}>Nurse</NeedTitleText>
                  </NeedTitle>
                </NeedContainer>

                <NeedContainer onPress={() => {}}>
                  <NeedImage>
                    <SvgAmbulance color="#7C8494"/>  
                  </NeedImage>
                  
                  <NeedTitle>
                    <NeedTitleText numberOfLines={1}>Ambulance</NeedTitleText>
                  </NeedTitle>
                </NeedContainer>

                <NeedContainer onPress={() => {}}>
                  <NeedImage>
                    <SvgLabWork color="#7C8494"/>  
                  </NeedImage>
                  
                  <NeedTitle>
                    <NeedTitleText numberOfLines={1}>Lab Work</NeedTitleText>
                  </NeedTitle>
                </NeedContainer>

                <NeedContainer onPress={() => {}}>
                  <NeedImage>
                    <SvgMedicine color="#7C8494"/>  
                  </NeedImage>
                  
                  <NeedTitle>
                    <NeedTitleText numberOfLines={1}>Medicine</NeedTitleText>
                  </NeedTitle>
                </NeedContainer>
              </NeedHorizontalContainer>
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

export default HomeScreen;
