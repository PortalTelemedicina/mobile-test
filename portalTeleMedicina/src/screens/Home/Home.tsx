import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

// Components
import { Background, CardSpecialist, Typography, CardOption, CardSpecialistShimmer, CardSpecialistError } from '@components'

// Actions
import { specialistRequest } from '@store/ducks/specialist/actions';

// DTO
import SpecialistDTO from '@dto/SpecialistDTO';

// Icons
import DiagnosticIcon from '@assets/icons/home.svg';
import ConsultationIcon from '@assets/icons/book.svg';
import NurseIcon from '@assets/icons/person.svg';
import AmbulanceIcon from '@assets/icons/down-chevron.svg';

import { Container, ContainerOptions, SpecialistList, HeaderContainer } from './home.styles';

const Home = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const specialists:[] = useSelector((state: SpecialistDTO) => state.specialist.data);
  const loading = useSelector((state: SpecialistDTO) => state.specialist.loading);

  const [hasConnection, setHasConnection] = useState(true);

  useEffect(() => {
    dispatch(specialistRequest());
  },[]);

  const loadAgain = () => {
    NetInfo.fetch().then(({ isConnected }: NetInfoState) => {
      setHasConnection(isConnected);
    });

    NetInfo.addEventListener(({ isConnected }: NetInfoState) => {
    setHasConnection(isConnected);
    });

    dispatch(specialistRequest())
  }

  const renderSpecialists = (item: SpecialistDTO) => (
    <CardSpecialist 
      key={item.name}
      total={item.total} 
      color={item.color} 
      name={item.name} 
      image={item.imageUrl}
      onPress={() => navigate('SpecialistListScreen', { specialist: item.name })} 
    />
  )

  const renderHeader = () => (
    <HeaderContainer>
      <Typography variant='Ubuntu14' color='darkBrown'>Hello,</Typography>
      <Typography variant='Ubuntu20' color='darkBrown' style={{marginTop: 8}}>Lorelle Luna</Typography>
      <Typography variant='Ubuntu18' color='darkBrown' style={{marginTop: 38, marginBottom: 16}}>Specialist</Typography>
    </HeaderContainer>
  )

  const renderOptions = () => (
    <>
     <Typography variant='Ubuntu18' color='darkBrown' style={{marginTop: 38, marginBottom: 16, padding:12}}>What do you need?</Typography>
      
        <ContainerOptions>
          <CardOption isDarkGrey title='Diagnostic' icon={(<DiagnosticIcon height={30} width={30} />)}/>
          <CardOption title='Consultation' icon={(<ConsultationIcon height={30} width={30}/>)}/>
          <CardOption title='Nurse' icon={(<NurseIcon height={30} width={30}/>)}/>
          <CardOption title='Ambulance' icon={(<AmbulanceIcon height={30} width={30}/>)}/>
          <CardOption title='Lab Work' icon={(<ConsultationIcon height={30} width={30}/>)}/>
          <CardOption title='Medicine' icon={(<NurseIcon height={30} width={30}/>)}/>
        </ContainerOptions>
    </>
  )

  return (
    <Background>
      <Container showsVerticalScrollIndicator={false}>
        {renderHeader()}
        
        {hasConnection ? (
          <SpecialistList horizontal showsHorizontalScrollIndicator={false} >
            {loading ? (<CardSpecialistShimmer />) : (
              specialists.map((item) => (renderSpecialists(item))))
            }
          </SpecialistList>
        ) : (
          <CardSpecialistError onPress={() =>  loadAgain()}/>
        )}

        {renderOptions()}
      </Container>
    </Background>
  );
}

export default Home;