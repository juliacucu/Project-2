const mongoose = require('mongoose');
const Recipe = require('../models/Recipe.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/project2';

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
  const recipes = [
    {
      "title": "Roast rib of beef with mustard-seed crust",
      "level": "Pro Chef",
      "dishType": "Lunch",
      "duration": 40,
      "creator": "Chef LePapu",
      "image": "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/07/734115-1-eng-GB_roast-beef-768x960.jpg",
      "ingredients": [
        "2-bone rib of beef (about 3kg), chined but not trimmed (ask your butcher)",
        "1 large onion, sliced thickly",
        "2 celery sticks, sliced)",
        "3 large carrots, sliced thickly",
        "Sunflower oil for rubbing",
        "1 tbsp Dijon mustard",
        "2 tbsp plain flour",
        "2 tsp English mustard powder",
        "1 tsp freshly ground black pepper",
        "1 tsp each black and yellow mustard seeds, crushed in a pestle and mortar",
        "½ tsp salt"
      ],
      "steps": [
        "Preheat the oven to 230°C/fan 210°C/gas 8. Weigh the beef and calculate the cooking time, allowing 15 minutes per 500g for medium-rare.",
        "Spread the onion, celery and carrots over the centre of a large roasting tin. Rub the joint all over with a little oil and season the cut faces with salt and pepper.",
        "Score the fat in a diamond pattern with a sharp knife, then season lightly and spread with the Dijon mustard. Mix the flour with the mustard powder, pepper, crushed mustard seeds and salt, then pat firmly onto the fat.",
        "Sit the joint upright on top of the veg, taking care not to knock off the crust, then roast on the top shelf of the oven for 20 minutes.",
        "Move to a lower shelf, turn down the oven to 170°C/fan150°C/gas 3½, then roast for the rest of the cooking time. 1 hour 10 minutes for a 3kg piece of beef.",
        "After the beef has cooked for 1 hour, make the Yorkshire pudding batter. Blend the ingredients except the dripping, plus 150ml water, in a liquidiser until smooth. Set aside for 30 minutes.",
        "Remove the cooked beef from the oven and lift onto a carving board. Turn up the oven to 220°C/fan200°C/ gas 7. Cover the beef with foil, then rest for 30 minutes.",
        "Pour the fat from the roasting tin into a bowl and make up to 2 tbsp with melted beef dripping or lard if need be. Spoon ½ tsp of this fat into each hole of a 12-hole muffin tray.",
        "Heat on the top shelf of the oven for 5 minutes until sizzling, then remove carefully and fill each hole three-quarters full with batter. Return to the oven, making sure there’s room for the Yorkshires to rise, then cook for 25-30 minutes until puffed, crisp and golden.",
        "Meanwhile, make the gravy. Put the beef-roasting tin directly over a medium heat on the hob. When it’s sizzling hot, stir in the flour. Add a little of the stock and scrape the base of the tin with a wooden spoon to release all the cooking juices, then gradually add the rest of the stock, along with the wine and port.",
        "Bring to a boil, lower the heat and simmer for 15 minutes until reduced and well-flavoured. Strain into a clean pan, taste, season and keep hot.",
        "Uncover the beef and pour any juices from the carving tray into the gravy. Carve the beef into thin slices and serve with the Yorkshire puddings and gravy."
      ]
    },
    {
      "title": "Smoky aubergine pasta",
      "level": "Easy",
      "dishType": "Dinner",
      "duration": 40,
      "creator": "Júlia Cucurella",
      "image": "https://www.deliciousmagazine.co.uk/wp-content/uploads/2022/06/DEL_2022_Q2_SAM_FOLAN_PASTA-ALLA-NORMA-768x960.jpg",
      "ingredients": [
        "3 small aubergines, 2 whole, 1 cut into 3cm chunks",
        "Olive oil for drizzling",
        "250g cherry tomatoes",
        "1 small red onion, cut in wedges",
        "Splash red wine vinegar",
        "400g calamarata pasta (or another pasta shape)",
        "250g ricotta",
        "4 tbsp capers",
        "Handful basil leaves, shredded"
      ],
      "steps": [
        "Heat a griddle pan until smoking. Drizzle the whole aubergines with oil and griddle them, turning regularly, for 30 minutes until charred all over and collapsing. When the aubergines have had 20 minutes, drizzle the tomatoes and onion with oil and add them to the griddle too. Turn the veg regularly for 10 minutes more or until charred and softened, then set aside. Halve the aubergines and spoon the flesh into a bowl, discarding the skin. Add the other charred veg, season with salt and the vinegar, then set aside.",
        "Meanwhile, cook the pasta in boiling salted water according to the packet instructions until al dente. Reserve a cupful of pasta water, then drain well.",
        "Brush the aubergine chunks with olive oil and season with salt and pepper, then griddle for 1-2 minutes until tender.",
        "Return the pasta to the pan it was cooked in and, over a low heat, stir in the charred veg mixture along with the aubergine chunks and most of the ricotta. Add a splash of cooking water and a glug of olive oil to loosen, if needed. Divide among bowls and top with the capers, the remaining ricotta and the basil."
      ]
    },
    {
      "title": "Deep-dish blueberry and peach pie",
      "level": "Easy",
      "dishType": "Dessert",
      "duration": 45,
      "creator": "David el Nomo",
      "image": "https://www.deliciousmagazine.co.uk/wp-content/uploads/2022/07/DEL_2022_Q3_GarethMorgans_BlueberryPeachPie-768x961.jpg",
      "ingredients": [
        "350g plain flour, plus extra to dust",
        "1 tsp fine sea salt",
        "225g cold unsalted butter, cut into cubes",
        "50g icing sugar",
        "1 medium free-range egg yolk, plus 1 whole egg, lightly beaten, to glaze",
        "1 tbsp lemon juice",
        "2 tbsp demerara sugar",
        "Whipped cream or vanilla ice cream to serve"
      ],
      "steps": [
        "First make the pastry. Put the flour and salt in a large bowl, then add the butter and rub together with your fingertips until the mixture resembles fine breadcrumbs (you could also do this part in a food processor). Stir in the icing sugar. Whisk the egg yolk with 2 tbsp ice-cold water and the lemon juice. Quickly stir this into the flour mixture with a table knife. If it seems a little dry, add a little more ice-cold water (the dough will come together when lightly kneaded so don’t add too much water as this will leave you with a tough pastry). Bring the dough together with your hands, turn out onto the worktop and knead very briefly to avoid overworking the pastry. Pull off a third of the dough, form both pieces into discs, then wrap well and chill for 2 hours (see Make Ahead).",
        "Meanwhile, toss all the ingredients for the filling in a large bowl, then set aside for 30 minutes. Once the pastry has chilled, roll the larger piece of dough on a lightly dusted worktop into a roughly 30cm circle. Use this to line the pie dish, leaving some overhang. Fill with the blueberry filling. Roll out the remaining pastry to the same size as your dish, cut out 8 strips, then arrange in a lattice on top of the filling (see Know How). Press around the edges of the pie to join the lattice strips to the base, then trim any overhang and crimp the edges.",
        "Heat the oven to 170°C fan/gas 5, putting a baking sheet in the oven as you do so to warm up (see Know How). Brush the pastry with the beaten egg, then sprinkle with the demerara sugar. Chill in the freezer for 10 minutes (or in the fridge for 20-30 minutes), then transfer the pie directly onto the hot baking sheet in the oven and bake for 50 minutes or until the pastry is golden brown. Leave the pie to sit for 15 minutes or so, then serve with whipped cream or vanilla ice cream."
      ]
    },
    {
      "title": "Burrata with pickled cherries and hazelnuts",
      "level": "Easy",
      "dishType": "Dinner",
      "duration": 15,
      "creator": "Chef Hilari",
      "image": "https://www.deliciousmagazine.co.uk/wp-content/uploads/2022/06/DEL_2022_Q2_SAM_FOLAN_BURRATA-PICKLED-CHERRY__HAZELNUT-768x960.jpg",
      "ingredients": [
        "1 burrata",
        "Pinch sumac",
        "50g caster sugar",
        "150ml red wine vinegar",
        "1 small red chilli, seeds removed, thinly sliced",
        "10-15 fresh cherries, stones removed",
        "20g blanched hazelnuts",
        "Handful nasturtium leaves and flowers",
        "1 tbsp olive oil, plus extra for drizzling"
      ],
      "steps": [
        "For the pickled cherries, mix the sugar, vinegar, 150ml water and a pinch of salt in a small pan over a high heat. Bring to the boil, then remove from the heat and add the sliced chilli and cherries. Set aside to cool and pickle – about 20 minutes.",
        "Meanwhile, take the burrata out of the fridge to warm up slightly (see Know How). To make the dressing, heat the oven to 160°C fan/gas 4. Spread the hazelnuts over an oven tray and roast until golden (8-12 minutes, but check regularly). This will release the oil from the nuts giving lots of flavour to the dish. Cool, then roughly crush in a pestle and mortar – don’t make them too small and powdery.",
        "Roughly chop most of the nasturtium leaves and flowers, reserving some for a garnish, then mix with the hazelnuts, olive oil, a pinch of salt and a grinding of pepper.",
        "To serve, drain the cherries and reserve the pickling liquid (see Don’t Waste It), then combine the burrata with the pickled cherries and chilli on a serving plate. Season the burrata with a pinch each of salt and sumac and some spoonfuls of the dressing. Finish with some whole flowers, leaves and a drizzle more olive oil"
      ]
    },
    {
      "title": "Strawberry ice cream cake",
      "level": "Medium",
      "dishType": "Dessert",
      "duration": 40,
      "creator": "Júlia Cucurella",
      "image": "https://www.deliciousmagazine.co.uk/wp-content/uploads/2022/07/DEL_2022_Q3_GarethMorgans_StrawberryIceCreamCake-768x960.jpg",
      "ingredients": [
        "1 tbsp vegetable oil to grease",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "steps": [
        "",
      ]
    },
  ];

Recipe.create(recipes)
  .then(recipesFromDB => {
    console.log(`Created ${recipesFromDB.length} recipes`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating recipes from the DB: ${err}`));