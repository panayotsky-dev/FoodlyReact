import img1 from "./../Media/patatnik.jpg"
import img2 from "./../Media/meatballs.jpg"
import img3 from "./../Media/musaka.jpg"
import img4 from "./../Media/kapama.jpg"
import img5 from "./../Media/banitsa.jpg"
import img6 from "./../Media/sarmi.jpg"
import img7 from "./../Media/portokalopita.jpg"
import img8 from "./../Media/spicy-arrabata-penne.jpg"

    const recipeData = [
    // const initialDetails = [
    //     {
    //       id: 1,
    //       imgPath: "/assets/img/1.png",
    //       name: "Jane Doe",
    //       email: "janedoe@gmail.com",
    //       address: "New Delhi, India",
    //     },

    {
        id: 1,
        name: "Patatnik",
        firstTag: "potatoes",
        secondTag: "filo pastry",
        ingredients:"potatoes",
        image: img1,
        // imgPath: "/assets/img/1.png",
        // instructions: "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.In a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.Drain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
        instructions: "Grate the potatoes and add them to a bowl. Mix in the salt and leave aside for 5-7 minutes so that the salt removes the moisture from the potatoes. With your hands or a cheesecloth, squeeze as much liquid as possible from the potatoes. Throw away the liquid and add the drained potatoes to a clean bowl.Grate the onion and add it to the bowl with the drained grated potatoes.Beat 3 of the 4 eggs with a fork, whisk, or hand mixer, and add them to the bowl with the potatoes and onions. Save one of the eggs for later.Add the minced garlic, black pepper, crumbled Bulgarian white cheese or feta cheese (shown below), and chopped parsley to the bowl. Mix it well.Grease a baking dish with the oil, and add the potato mixture to the baking dish. You can use any baking dish you like as long as the mixture is about 2-3 cm thick in height. Hence, it shouldn’t be much bigger than about 1-inch thickness.",

    },
    {
        id: 2,
        name: "Meat Balls",
        firstTag: "meat",
        secondTag: "balls",
        ingredients:"meat",
        image: img2,
        instructions: "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.In a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.Drain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
        
    },
    {
        id: 3,
        name: "Musaka",
        firstTag: "potatoes",
        secondTag: "meat",
        ingredients:"meat",
        image: img3,
        instructions: "Start with cooking the onion in a pan with 1/4 oil until golden brown. Then add the ground meat, the pepper, the paprika, and half the salt. Fry until meat gets brown and then remove the pan from the heat. Mix well with the potatoes and the other 1/2 tablespoon of salt. Add the mixture in a casserole pan with the rest of the oil. Bake in oven for about 40 minutes on 425 F (~220 C).  In the meantime mix the milk and the eggs separately and pour on top  of the meal for the last 10  minutes in the oven untill it turns brownish.",
        
    },

    {
        id: 4,
        name: "Kapama",
        firstTag: "sausage",
        secondTag: "sauerkraut",
        ingredients:"sauerkraut",
        image: img4,
        instructions: "21 oz (600 g) pork, 17.5 oz (500 g) chicken breasts and 17.5 oz (500 g) sausages. In some regions of Bulgaria they actually use blood pudding as well. When it comes to kapama, the most important thing is to use a clay pot container. I used a 1.5 gal (5 L) one. Prepare the different types of meat by cutting them into coarse pieces. I like to put them in another container together. Then chop the onions and sauerkraut. At the bottom of the clay pot, put the onions and sauerkraut, then a layer of meat of every type, sprinkle with the spices, stir slightly, then arrange sauerkraut again, meat, spices, meat, sauerkraut. I like to put 3 garlic cloves, coarsely chopped, but you can add them whole. I like adding paprika as well.",
        
    },

    {
        id: 5,
        name: "Banitsa",
        firstTag: "filo pastry",
        secondTag: "cheese",
        ingredients:"filo pastry",
        image: img5,
        instructions: "Mix 3 eggs, the oil, the baking soda, and the yogurt in a medium-sized bowl. Give everything a rigorous mix, ideally with a whisk. Once mixed, you should have a smooth, yellow-colored mixture, as shown below. Add the crumbled feta cheese to the egg-yogurt mixture. We prefer getting our feta whole and crumbling it with a fork rather than buying the cheese pre-crumbled. On each filo sheet, add some of the egg-cheese mixture. If using our measurements and a 9-inch pan, then use about 1/6 of the egg-cheese mixture on each filo dough sheet. Add tiny cubes of butter on each filo dough sheet. Again, if using our measurements, you’ll be using 1/6 of the butter on each filo sheet. Take the short edge of the filo dough, and roll each sheet. instructions, about 9 minutes.In a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.Drain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
        
    },

    {
        id: 6,
        name: "Sarmi",
        firstTag: "sauerkraut",
        secondTag: "meat",
        ingredients:"sauerkraut",
        image: img6,
        instructions: "First, bring a pot of boiling water to the boil. Once the water is ready, add all of your leaves into the pot. You’ll need to let the leaves boil for around 1-2 minutes until they change color. Make sure the leaves are submerged in the boiling water.After 1-2 minutes, using a slotted spoon, take them out and lay them to rest on a plate.With your leaves resting, it’s time to start making the filling to stuff in the leaves. Dice the onions. Shred the cabbage and the carrots. Get everything else ready to go. Now, put a pan on medium heat and add olive oil. Add the shredded cabbage and carrots to the pan, and cook the mixture over medium heat, for around 10 minutes. While your diced and shredded vegetables are cooking, you have time to prepare both the meat and rice, ready to add to the pan in due course. First, take the meat, and either dice it into small cubes or mince it, depending on preference. We prefer it diced in small cubes. Set it aside.",
        
    },

    {
        id: 7,
        name: "Portokalopita",
        firstTag: "banana",
        secondTag: "test",
        ingredients:"orange",
        image: img7,
        instructions: "First, bring a pot of boiling water to the boil. Once the water is ready, add all of your leaves into the pot. You’ll need to let the leaves boil for around 1-2 minutes until they change color. Make sure the leaves are submerged in the boiling water.After 1-2 minutes, using a slotted spoon, take them out and lay them to rest on a plate.With your leaves resting, it’s time to start making the filling to stuff in the leaves. Dice the onions. Shred the cabbage and the carrots. Get everything else ready to go. Now, put a pan on medium heat and add olive oil. Add the shredded cabbage and carrots to the pan, and cook the mixture over medium heat, for around 10 minutes. While your diced and shredded vegetables are cooking, you have time to prepare both the meat and rice, ready to add to the pan in due course. First, take the meat, and either dice it into small cubes or mince it, depending on preference. We prefer it diced in small cubes. Set it aside.",
        
    },

    {
        id: 8,
        name: "Spicy Arabata Penne",
        firstTag: "penne",
        secondTag: "meat",
        ingredients:"penne",
        image: img8,
        instructions: "First, bring a pot of boiling water to the boil. Once the water is ready, add all of your leaves into the pot. You’ll need to let the leaves boil for around 1-2 minutes until they change color. Make sure the leaves are submerged in the boiling water.After 1-2 minutes, using a slotted spoon, take them out and lay them to rest on a plate.With your leaves resting, it’s time to start making the filling to stuff in the leaves. Dice the onions. Shred the cabbage and the carrots. Get everything else ready to go. Now, put a pan on medium heat and add olive oil. Add the shredded cabbage and carrots to the pan, and cook the mixture over medium heat, for around 10 minutes. While your diced and shredded vegetables are cooking, you have time to prepare both the meat and rice, ready to add to the pan in due course. First, take the meat, and either dice it into small cubes or mince it, depending on preference. We prefer it diced in small cubes. Set it aside.",
        
    }
]

export default recipeData;