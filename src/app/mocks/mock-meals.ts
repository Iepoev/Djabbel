export enum MEAL_TYPE {
  BREAKFAST,
  LUNCH,
  DINNER,
  SNACK
}

export type Meal = {
  mealType: MEAL_TYPE;
  name: string;
  cost: number;
}

export const MEALS: Meal[] = [
  { mealType: MEAL_TYPE.BREAKFAST, cost: 12, name: 'Dr. Nice' },
  { mealType: MEAL_TYPE.BREAKFAST, cost: 13, name: 'Bombasto' },
  { mealType: MEAL_TYPE.LUNCH, cost: 14, name: 'Celeritas' },
  { mealType: MEAL_TYPE.LUNCH, cost: 15, name: 'Magneta' },
  { mealType: MEAL_TYPE.LUNCH, cost: 16, name: 'RubberMan' },
  { mealType: MEAL_TYPE.DINNER, cost: 17, name: 'Dynama' },
  { mealType: MEAL_TYPE.DINNER, cost: 18, name: 'Dr. IQ' },
  { mealType: MEAL_TYPE.DINNER, cost: 19, name: 'Magma' },
  { mealType: MEAL_TYPE.SNACK, cost: 20, name: 'Tornado' }
];
