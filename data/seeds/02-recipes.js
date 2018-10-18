exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          recipe_name: 'Veggie Chili',
          directions:
            'Heat the olive oil in a large pot over medium heat. Stir in the onion, and season with bay leaves, cumin, oregano, and salt. Cook and stir until onion is tender, then mix in the celery, green bell peppers, jalapeno peppers, garlic, and green chile peppers. When vegetables are heated through, mix in the vegetarian burger crumbles. Reduce heat to low, cover pot, and simmer 5 minutes.',
          dish_id: 1
        },
        {
          recipe_name: 'Texas Chili',
          directions:
            'Cook the ground beef in large pot or dutch oven over medium heat, until fully cooked, no longer pink, for about 7 minutes.Drain the grease. Return the pot to the stove.Add the tomato paste, tomato sauce, and beef stock. Stir to combine.Add the seasonings. Cover and simmer over medium heat for the next 10 minutes.Serve warm!',
          dish_id: 1
        },
        {
          recipe_name: 'Veggie Mac & Cheese',
          directions:
            'Preheat oven to 350°. In a 6-qt. stockpot, cook macaroni according to package directions, adding broccoli, cauliflower, carrots and celery during the last 6 minutes of cooking. Drain; transfer to a greased 13x9-in. baking dish.Meanwhile, in a large saucepan, heat butter over medium-high heat; saute onion until tender. Stir in flour until blended. Gradually stir in milk and broth; bring to a boil. Cook and stir until thickened, about 2 minutes; stir in cheese, mustard, salt and pepper.Add to macaroni mixture, stirring to coat; sprinkle with paprika. Bake, uncovered, until heated through, 15-20 minutes.',
          dish_id: 2
        },
        {
          recipe_name: 'Decadent Crawfish Mac & Cheese',
          directions:
            'Spoon mixture into a buttered 13x9-inch baking dish, dot with butter, and top with remaining 2 cups cheese and bake at 350ºF, center oven, for 50 minutes or until golden. OR: Evenly divide macaroni mixture between 8 single-sized buttered baking dishes, dot the tops with butter, top with ¼ cup shredded cheddar and bake at 375ºF for 35 minutes. For a darker crust, carefully broil 1 to 2 minutes or until the top cheese is to the desired color, while watching (do not burn).',
          dish_id: 2
        }
      ]);
    });
};
