# Usecases

 - order a meal
 - limit amount of meal reservations
 - meal reservation deadline which disallows reservations
 - keep track of user balance
 - barter reserved meals between users
 - past deadline pleading for meals
 - past deadline granting of meals by kitchen manager

## managing dishes
Kitchen crew is able to assemble a cookbook of dishes

 - name
 - cost to reserve
 - recipe?
 - ingredients?
 - modifiers e.g broodjes bruin/wit kaas/hesp/curry/...

## managing meals
Kitchen crew is able to plan meals on dates

 - dish
 - meal date? time can be generated based on global config + mealType
 - mealType (breakfast, lunch, dinner, snack)
 - reservation deadline (time before meal? certain hour of day in global config?)
 - when reservation deadline is passed, notify amount of meals?

## ordering meals
users can reserve a meal once one is planned.

 - select a day, find all meals on that date, order by mealType
 - multiple reservations per users are possible
 - eat in or take away
 - select meal preference (regular/veggie/vegan/other)
  - users can select default preference on their profile
 - if deadline not passed, simply reserve
 - if deadline passed, allow user to "Barter".
  - User without reservations can "Plead"
  - Users with reservation can "Donate"
  - Kitchen crew can "grant"

## managing balance
optionally, keep track of costs incurred by users

 - cost associated with meal reservation is deducted when meal datetime is passed
 - users can not reserve when balance is too low
 - interface for balance top-up
 - interface for balance history
