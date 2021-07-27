import React from 'react';
import { specialistsTypes } from './mock/specialists'
import { fireEvent, render } from "@testing-library/react-native";
import SpecialistsMenu from "../../src/components/menus/specialists";

describe('Specialist Menu component', () => {


  it('Should go to specialists page on home', () => {
    const navigation = {navigate: () => {}}

    const specialists = render(<SpecialistsMenu items={specialistsTypes}/>);

    const specialistMenuItem = page.getByText('Heart Specialist');

    fireEvent.press(specialistMenuItem);

    expect(navigation.navigate()).toHaveBeenCalledWith('Heart Specialist');
  })

})
