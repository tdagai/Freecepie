import {
  UnitsOfMeasurementImperial,
  UnitsOfMeasurementMetric,
} from '../constants';

export type IngredientItemProps = {
  quantity: number;
  units: UnitsOfMeasurementImperial | UnitsOfMeasurementMetric;
  name: string;
}

const IngredientItem = ({ quantity, units, name }: IngredientItemProps) => {
  return (
    <li>{quantity} {units} {name}</li>
  )
}

export default IngredientItem;