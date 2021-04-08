import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import { IState } from '../../store';
import { getSpecialistsRequestAction } from '../../store/modules/specialists/actions';
import {
  Container,
  CardSpecialistList,
  CardAttendanceList,
  Title,
  TextQuestion,
} from './styles';
import Header from '../../components/Header';
import CardSpecialists from '../../components/CardSpecialists';
import CardAttendance from '../../components/CardAttendance';
import {
  SpecilaistScreenProp,
  RouteNames,
} from '../../navigation/INavigationApp';
import { ITypeAttendances } from '../../utils/interfaces';
import typeAttendancesValues from '../../utils/constants';

type IHomeProps = SpecilaistScreenProp<RouteNames.Home>;

interface CardSpecialistsProps {
  color: string;
  image_url: string;
  total: number;
  name: string;
}

const Home = ({ navigation }: IHomeProps): JSX.Element => {
  const { items } = useSelector((state: IState) => state.specialist);
  const [typeAttendances] = useState<ITypeAttendances[]>(typeAttendancesValues);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSpecialistsRequestAction());
  }, []);

  return (
    <Container>
      <Header />
      <Animatable.View
        animation="bounceInRight"
        delay={1000}
        useNativeDriver
        style={{}}
      >
        <Title>Specialists</Title>

        <CardSpecialistList
          keyExtractor={item => String(item.name)}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={(items as unknown) as CardSpecialistsProps[]}
          renderItem={({ item }) => (
            <CardSpecialists
              testId={item.name}
              color={item.color}
              total={item.total}
              image_url={item.image_url}
              name={item.name}
              onPress={() =>
                navigation.navigate(RouteNames.ListSpecialists, {
                  name: item.name,
                  amountSpecialist: item.total,
                  // eslint-disable-next-line prettier/prettier
                })}
            />
          )}
        />
      </Animatable.View>

      <Animatable.View
        animation="bounceInLeft"
        delay={1000}
        useNativeDriver
        style={{ marginTop: 40 }}
      >
        <TouchableOpacity>
          <TextQuestion>What do you need?</TextQuestion>
        </TouchableOpacity>
        <CardAttendanceList
          keyExtractor={item => String(item.id)}
          data={typeAttendances}
          renderItem={({ item }) => (
            <CardAttendance
              color={item.color}
              image_url={item.image_url}
              typeAttendance={item.name}
            />
          )}
        />
        <View style={{ height: 50 }} />
      </Animatable.View>
    </Container>
  );
};

export default Home;
