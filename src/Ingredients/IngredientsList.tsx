import IngredientItem, { IngredientItemProps } from './IngredientItem';

type IngredientsListProps = {
  ingredients: IngredientItemProps[];
}

const IngredientsList = ({ ingredients }: IngredientsListProps) => {
  return (
    <ul>
      {ingredients.map((item) => (<IngredientItem {...item} />))}
    </ul>
  );
}

export default IngredientsList;