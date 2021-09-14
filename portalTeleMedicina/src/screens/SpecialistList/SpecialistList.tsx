import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

// Action
import { specialistListRequest } from '@store/ducks/specialistList/actions';

// Components
import { Background, Header, SpecialistInfo, Typography, CardSpecialistInfoShimmer, SpecialistInfoError } from '@components';

// DTO
import SpecialistInfoDTO from '@dto/SpecialistInfoDTO';

// Styles
import { Container, LoadingContainer } from './specialistList.styles';

const SpecialistList = () => {
  const { params } = useRoute();
  const dispatch = useDispatch();

  const specialistList:[] = useSelector((state: SpecialistInfoDTO) => state.specialistList.specialistList);
  const loading = useSelector((state: SpecialistInfoDTO) => state.specialistList.loading);
  const [hasConnection, setHasConnection] = useState(true);

  const { specialist } = params;

  const specialistTotal = loading ? 'Searching' : `${specialistList.length} were found`;

  useEffect(() => {
    dispatch(specialistListRequest(specialist))
  } , []);

  const loadAgain = () => {
    NetInfo.fetch().then(({ isConnected }: NetInfoState) => {
      setHasConnection(isConnected);
    });

    NetInfo.addEventListener(({ isConnected }: NetInfoState) => {
    setHasConnection(isConnected);
    });

     dispatch(specialistListRequest(specialist))
  }

  const header = () => (
    <>
      <Header />

      <Typography variant='Ubuntu20' color='darkBrown' style={{ marginTop: 30 }}>{specialist}</Typography>
      <Typography variant='Ubuntu18' color='grayLight'>{specialistTotal}</Typography>
    </>
  );

  const renderSpecialistList = (item: SpecialistInfoDTO) => ( 
     <SpecialistInfo name={item.name} distance={item.distance} description={item.description} call={item.actions.call} chat={item.actions.chat}/>
  );

  const renderLoad = () => (
    <LoadingContainer>
      <Header loading/>
      <CardSpecialistInfoShimmer />
    </LoadingContainer>
  )

  const renderContent = () => (
    <Container
      contentContainerStyle={{padding: 20}}
      ListHeaderComponent={header()}
      data={specialistList}
      keyExtractor={(item: SpecialistInfoDTO) => item.name}
      renderItem={({ item }) => renderSpecialistList(item)}
    />
  );

  const renderNoConnection = () => (
    <LoadingContainer>
      <Header loading/>
      <Typography variant='Ubuntu20' color='darkBrown' style={{ marginTop: 30 }}>{specialist}</Typography>
      <SpecialistInfoError onPress={() => loadAgain()}/>
    </LoadingContainer>
  )

  return (
    <Background>
      { 
        loading ? renderLoad() : hasConnection ? renderContent() : renderNoConnection()
      }
    </Background>
  );
}

export default SpecialistList;