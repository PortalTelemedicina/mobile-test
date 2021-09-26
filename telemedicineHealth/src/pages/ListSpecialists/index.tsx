import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Line,
  ContentText,
  TextNameAmountFound,
  TextNameSpecialist,
  ListSpecialistsItems,
  ListSpecialistsItemsProps,
} from './styles';
import CardTypeSpecialist from '../../components/CardTypeSpecialist';
import {
  SpecilaistScreenProp,
  RouteNames,
} from '../../navigation/INavigationApp';
import { getSpecialistsTypesRequestAction } from '../../store/modules/listTypeSpecialist/actions';
import { IState } from '../../store';

type IListSpecialistsProps = SpecilaistScreenProp<RouteNames.ListSpecialists>;

const ListSpecialists = ({
  navigation,
  route,
}: IListSpecialistsProps): JSX.Element => {
  const { itemsTypesSpecialist, loadingTypes } = useSelector(
    (state: IState) => state.typeSpecialist,
  );
  const value = route.params;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSpecialistsTypesRequestAction(String(value.name)));
  }, []);

  return (
    <Container>
      <ContentText>
        <TextNameSpecialist>{value.name} </TextNameSpecialist>
        <TextNameAmountFound>
          {loadingTypes
            ? 'Searching...'
            : `${value.amountSpecialist} doctors were found`}
        </TextNameAmountFound>
      </ContentText>
      <Line />
      <ListSpecialistsItems
        data={(itemsTypesSpecialist as unknown) as ListSpecialistsItemsProps[]}
        keyExtractor={item => String(item.name)}
        horizontal={false}
        renderItem={({ item }) => (
          <CardTypeSpecialist
            testId={item.name}
            description={item.description}
            distance={item.distance}
            name={item.name}
          />
        )}
      />
    </Container>
  );
};

export default ListSpecialists;
