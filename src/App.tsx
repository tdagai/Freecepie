import React from 'react';
import styled from 'styled-components';
import IngredientsList from './Ingredients/IngredientsList'
import { IngredientItemProps } from './Ingredients/IngredientItem';
import './App.css';
import { UnitsOfMeasurementImperial } from './constants';


function App() {

  const ingredients: IngredientItemProps[] = [
    { quantity: 2, units: UnitsOfMeasurementImperial.teaspoon, name: 'salt' },
    { quantity: 1.75, units: UnitsOfMeasurementImperial.cup, name: 'flour' }
  ];

  return (
    <AppWrapper>
      is it thursday yet?
      <IngredientsList ingredients={ingredients} />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 10px;
`;

export default App;
