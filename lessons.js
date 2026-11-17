// Lessons and quizzes for Classes 1-5 (English)
// LESSONS[subject][class] = { title, icon, text, points, quiz }
const Q = (q, a, correct, why) => ({ q, a, correct, why });

const SUBJECT_INFO = {
  math:        { name: 'Mathematics', icon: '🔢', color: '#fff0e9' },
  science:     { name: 'Science',     icon: '🌱', color: '#e7f8f0' },
  language:    { name: 'Languages',   icon: '🔤', color: '#f0edff' },
  environment: { name: 'Environment', icon: '🌍', color: '#fff5d9' }
};

const LESSONS = {
  math: {
    1: {
      title: 'Counting and Adding', icon: '🍎',
      text: 'Numbers help us count things around us. When we add, we put groups together to find how many there are in all. If you have 3 mangoes and get 2 more, you have 5 mangoes.',
      points: ['Count from 1 to 20', 'Adding means "putting together"', 'The sign + means add', 'A triangle has 3 sides'],
      quiz: [
        Q('What is 4 + 3?', ['6', '7', '8', '9'], 1, '4 + 3 = 7.'),
        Q('What number comes after 19?', ['18', '21', '20', '22'], 2, 'After 19 comes 20.'),
        Q('How many sides does a triangle have?', ['2', '3', '4', '5'], 1, 'A triangle has 3 sides.')
      ]
    },
    2: {
      title: 'Tens, Ones and Taking Away', icon: '🧮',
      text: 'Every two-digit number is made of tens and ones. In 43, the 4 means 4 tens (40) and the 3 means 3 ones. Subtraction means taking away: if you have 15 bananas and eat 6, you have 9 left.',
      points: ['43 = 4 tens + 3 ones', 'The sign − means take away', '2 × 4 means 2 added 4 times', 'Odd and even numbers'],
      quiz: [
        Q('What is 15 − 6?', ['8', '10', '9', '7'], 2, '15 − 6 = 9.'),
        Q('In the number 43, what does the digit 4 stand for?', ['4', '40', '14', '34'], 1, 'The 4 is in the tens place, so it means 40.'),
        Q('Which of these is an even number?', ['7', '13', '9', '12'], 3, '12 can be shared equally in 2 groups, so it is even.')
      ]
    },
    3: {
      title: 'Multiplication and Division', icon: '✖️',
      text: 'Multiplication is quick adding of equal groups. 4 × 5 means 4 groups of 5, which is 20. Division is sharing equally: 12 sweets shared among 3 friends gives 4 each. Time also matters: there are 60 minutes in 1 hour.',
      points: ['4 × 5 = 5 + 5 + 5 + 5', 'Division is equal sharing', 'Multiplication and division are opposites', '1 hour = 60 minutes'],
      quiz: [
        Q('What is 4 × 5?', ['9', '20', '25', '15'], 1, '4 groups of 5 make 20.'),
        Q('12 ÷ 3 = ?', ['3', '9', '4', '6'], 2, '12 shared equally among 3 is 4 each.'),
        Q('How many minutes are there in 1 hour?', ['30', '60', '100', '24'], 1, '1 hour has 60 minutes.')
      ]
    },
    4: {
      title: 'Fractions and Perimeter', icon: '🍕',
      text: 'A fraction is a part of a whole. If a roti is cut into 2 equal parts, each part is 1/2 (one half). Perimeter is the distance around a shape. For a square, add all 4 equal sides or multiply one side by 4.',
      points: ['1/2 + 1/2 = 1 whole', 'The top number is the part, the bottom is the total parts', 'Perimeter = distance around', 'Square perimeter = 4 × side'],
      quiz: [
        Q('What is half of 20?', ['5', '10', '15', '40'], 1, 'Half of 20 is 10.'),
        Q('A square has sides of 5 cm. What is its perimeter?', ['10 cm', '15 cm', '25 cm', '20 cm'], 3, '4 × 5 = 20 cm.'),
        Q('What is 250 + 150?', ['300', '350', '400', '450'], 2, '250 + 150 = 400.')
      ]
    },
    5: {
      title: 'Decimals, Area and Units', icon: '📐',
      text: 'Decimals are another way to write parts of a whole. 0.5 is the same as 1/2. Area is the space inside a shape: for a rectangle, multiply length by breadth. Remember that 1 kilogram is 1000 grams.',
      points: ['0.5 = 1/2 and 0.25 = 1/4', 'Rectangle area = length × breadth', '1 kg = 1000 g', '1 m = 100 cm'],
      quiz: [
        Q('A rectangle is 6 cm long and 4 cm wide. What is its area?', ['10 sq cm', '20 sq cm', '24 sq cm', '28 sq cm'], 2, '6 × 4 = 24 square cm.'),
        Q('Which is the largest number?', ['0.07', '0.17', '0.7', '0.01'], 2, '0.7 is the same as 7 tenths, which is greater than the others.'),
        Q('How many grams are in 1 kilogram?', ['100', '10', '500', '1000'], 3, '1 kg = 1000 g.')
      ]
    }
  },

  science: {
    1: {
      title: 'My Body and My Senses', icon: '👀',
      text: 'We use our five senses to know about the world. We see with our eyes, hear with our ears, smell with our nose, taste with our tongue and feel with our skin. Living things like dogs, trees and people grow and need food.',
      points: ['We have 5 senses', 'Eyes help us see', 'Living things grow and need food', 'Stones are non-living'],
      quiz: [
        Q('How many senses do we have?', ['3', '4', '5', '6'], 2, 'We have 5 senses: sight, hearing, smell, taste and touch.'),
        Q('Which part of the body do we use to hear?', ['Eyes', 'Ears', 'Nose', 'Hands'], 1, 'We hear with our ears.'),
        Q('Which of these is a living thing?', ['Stone', 'Chair', 'Dog', 'Pencil'], 2, 'A dog grows, eats and breathes, so it is living.')
      ]
    },
    2: {
      title: 'Plants and Animals', icon: '🌿',
      text: 'Plants make their own food using sunlight, air and water. Roots hold the plant in the soil and take in water. Animals cannot make their own food, so they eat plants or other animals. Some animals, like hens, lay eggs.',
      points: ['Roots take in water', 'Leaves make food using sunlight', 'Herbivores eat plants', 'Some animals lay eggs'],
      quiz: [
        Q('Which part of a plant takes in water from the soil?', ['Leaf', 'Flower', 'Root', 'Fruit'], 2, 'Roots absorb water from the soil.'),
        Q('Plants make food using sunlight, air and ___.', ['Milk', 'Water', 'Sand', 'Oil'], 1, 'Plants need water, sunlight and air to make food.'),
        Q('Which animal lays eggs?', ['Cow', 'Dog', 'Hen', 'Goat'], 2, 'A hen lays eggs.')
      ]
    },
    3: {
      title: 'Water and Its Three States', icon: '💧',
      text: 'Water can be found in three forms. Ice is a solid, liquid water flows in rivers and rain, and water vapour is a gas. Heating water turns it into vapour, and cooling vapour turns it back into water drops. This is part of the water cycle.',
      points: ['Solid: ice', 'Liquid: water', 'Gas: water vapour', 'Water boils at 100°C'],
      quiz: [
        Q('Ice is water in which state?', ['Liquid', 'Gas', 'Solid', 'Smoke'], 2, 'Ice is the solid form of water.'),
        Q('Water vapour is water in the form of a ___.', ['Gas', 'Solid', 'Stone', 'Powder'], 0, 'Water vapour is a gas.'),
        Q('At what temperature does water boil?', ['0°C', '50°C', '100°C', '200°C'], 2, 'Water boils at 100°C.')
      ]
    },
    4: {
      title: 'Our Solar System', icon: '🪐',
      text: 'The Sun is a star at the centre of our solar system. Eight planets move around it, and Earth is the third planet from the Sun. The Moon is Earth\'s natural satellite. Mercury is the planet closest to the Sun.',
      points: ['The Sun is a star', '8 planets go around the Sun', 'Earth is the 3rd planet', 'The Moon goes around the Earth'],
      quiz: [
        Q('Which planet is closest to the Sun?', ['Earth', 'Mars', 'Mercury', 'Jupiter'], 2, 'Mercury is the closest planet to the Sun.'),
        Q('What is the Moon called?', ['A star', 'A planet', 'A comet', 'A natural satellite'], 3, 'The Moon is Earth\'s natural satellite.'),
        Q('The Sun is a ___.', ['Star', 'Planet', 'Moon', 'Cloud'], 0, 'The Sun is a star that gives us light and heat.')
      ]
    },
    5: {
      title: 'Forces and Energy', icon: '⚡',
      text: 'A force is a push or a pull. Gravity is the force that pulls things towards the Earth, which is why a ball thrown up comes back down. Friction is the force that slows moving things when surfaces rub together. The Sun is our main source of energy.',
      points: ['A force is a push or a pull', 'Gravity pulls objects down', 'Friction slows things down', 'The Sun is our main energy source'],
      quiz: [
        Q('Which force pulls objects towards the Earth?', ['Friction', 'Gravity', 'Magnetism', 'Wind'], 1, 'Gravity pulls things towards the Earth.'),
        Q('What is the main source of energy for the Earth?', ['The Moon', 'Wind', 'Coal', 'The Sun'], 3, 'The Sun gives us light and heat energy.'),
        Q('Which organ pumps blood around the body?', ['Heart', 'Lungs', 'Stomach', 'Brain'], 0, 'The heart pumps blood.')
      ]
    }
  },

  language: {
    1: {
      title: 'Alphabet and First Words', icon: '🔠',
      text: 'The English alphabet has 26 letters. Five of them are vowels: A, E, I, O and U. All the other letters are consonants. Letters join together to make words like cat, ball and sun.',
      points: ['26 letters in the alphabet', 'Vowels: a, e, i, o, u', 'Letters make words', 'B is for Ball'],
      quiz: [
        Q('Which letter comes after C?', ['B', 'E', 'D', 'A'], 2, 'The order is A, B, C, D.'),
        Q('Which of these is a vowel?', ['B', 'E', 'M', 'T'], 1, 'E is a vowel.'),
        Q('Which word begins with the letter B?', ['Sun', 'Cat', 'Ball', 'Dog'], 2, 'Ball starts with B.')
      ]
    },
    2: {
      title: 'Naming Words and Rhymes', icon: '📖',
      text: 'A noun is a naming word. It names a person, place, animal or thing, like teacher, village, cow or table. Words that end with the same sound rhyme, like cat and hat. Add s to many nouns to show more than one: book becomes books.',
      points: ['A noun names a person, place, animal or thing', 'Rhyming words sound alike at the end', 'Add s to make many: books', 'Sentences begin with a capital letter'],
      quiz: [
        Q('Which of these is a noun?', ['Run', 'Table', 'Quickly', 'Blue'], 1, 'A table is a thing, so it is a noun.'),
        Q('Which word rhymes with cat?', ['Dog', 'Cup', 'Hat', 'Pen'], 2, 'Cat and hat end with the same sound.'),
        Q('What is the plural of book?', ['Bookes', 'Books', 'Bookies', 'Book'], 1, 'Add s to make books.')
      ]
    },
    3: {
      title: 'Action Words and Opposites', icon: '🏃',
      text: 'A verb is an action word. It tells us what someone does, like run, jump, eat and write. Opposites are words with the opposite meaning, like hot and cold or big and small. A verb must match the doer: "She goes to school" and "They go to school."',
      points: ['A verb shows an action', 'Opposites: hot and cold', 'She goes, they go', 'Use a full stop at the end of a sentence'],
      quiz: [
        Q('Which word is an action word (verb)?', ['Run', 'Mango', 'Green', 'Tall'], 0, 'Run shows an action.'),
        Q('What is the opposite of hot?', ['Warm', 'Cold', 'Big', 'Soft'], 1, 'Cold is the opposite of hot.'),
        Q('Choose the correct word: She ___ to school.', ['go', 'going', 'goes', 'gone'], 2, 'We say "She goes to school."')
      ]
    },
    4: {
      title: 'Describing Words and Tenses', icon: '🎨',
      text: 'An adjective is a describing word. It tells us more about a noun, like a tall tree or a sweet mango. Verbs change to show time. We say "I play" now, "I played" in the past and "I will play" in the future. Some plurals are special: child becomes children.',
      points: ['An adjective describes a noun', 'Past tense: played', 'Future tense: will play', 'Child → children'],
      quiz: [
        Q('Which word is an adjective in "a tall tree"?', ['A', 'Tree', 'Tall', 'Is'], 2, 'Tall describes the tree.'),
        Q('What is the past tense of play?', ['Playing', 'Played', 'Plays', 'Will play'], 1, 'Played shows something that already happened.'),
        Q('What is the plural of child?', ['Childs', 'Childes', 'Childen', 'Children'], 3, 'The plural of child is children.')
      ]
    },
    5: {
      title: 'Adverbs, Synonyms and Punctuation', icon: '✍️',
      text: 'An adverb tells us how an action is done, like quickly, slowly or loudly. Synonyms are words with a similar meaning, like happy and joyful. Punctuation marks guide the reader: a full stop (.) ends a statement, a question mark (?) ends a question, and an exclamation mark (!) shows strong feeling.',
      points: ['Adverbs describe verbs', 'Synonyms mean the same', 'Full stop, question mark, exclamation mark', 'Use commas in lists'],
      quiz: [
        Q('Which word is the adverb in "She runs quickly"?', ['She', 'Runs', 'Quickly', 'None'], 2, 'Quickly tells us how she runs.'),
        Q('Which word means the same as happy?', ['Sad', 'Joyful', 'Angry', 'Tired'], 1, 'Joyful is a synonym of happy.'),
        Q('Which mark ends a question?', ['.', '!', ',', '?'], 3, 'A question ends with a question mark.')
      ]
    }
  },

  environment: {
    1: {
      title: 'Keeping Our Surroundings Clean', icon: '🧹',
      text: 'Our surroundings include the land, water, air, plants and animals around us. We should keep them clean. Throw waste in a dustbin, never on the road. Trees give us fresh air, shade and fruits, so we must look after them.',
      points: ['Use dustbins for waste', 'Trees give fresh air', 'Do not waste food or water', 'Switch off the fan and light when not needed'],
      quiz: [
        Q('Where should we throw waste?', ['On the road', 'In a dustbin', 'In a river', 'In the playground'], 1, 'Waste belongs in a dustbin.'),
        Q('What do trees give us?', ['Plastic', 'Smoke', 'Fresh air', 'Noise'], 2, 'Trees give us fresh air, shade and fruits.'),
        Q('What should we do before leaving a room?', ['Leave the fan on', 'Switch off fan and light', 'Break the switch', 'Open all taps'], 1, 'Switching off saves electricity.')
      ]
    },
    2: {
      title: 'Water: Use It Wisely', icon: '🚰',
      text: 'We get water from rain, rivers, wells and ponds. Water is needed by people, plants and animals, and it is precious. We can save water by closing the tap while brushing our teeth and by fixing leaking taps.',
      points: ['Sources: rain, river, well, pond', 'Close the tap after use', 'Fix leaking taps', 'Never make water dirty'],
      quiz: [
        Q('Which of these is a source of water?', ['Rain', 'Sand', 'Plastic', 'Smoke'], 0, 'Rain is a natural source of water.'),
        Q('How can we save water?', ['Leave the tap running', 'Close the tap while brushing', 'Waste water in play', 'Wash cars daily'], 1, 'Closing the tap saves lots of water.'),
        Q('Who needs water to live?', ['Only people', 'Only plants', 'Only animals', 'All living things'], 3, 'Every living thing needs water.')
      ]
    },
    3: {
      title: 'Pollution and the 3 Rs', icon: '♻️',
      text: 'Pollution means making air, water or land dirty. Smoke from vehicles and factories pollutes the air. Plastic harms animals and clogs drains. We can help by following the 3 Rs: Reduce, Reuse and Recycle. Wet waste like peels can become compost.',
      points: ['Smoke causes air pollution', 'Plastic harms animals', '3 Rs: Reduce, Reuse, Recycle', 'Wet waste can become compost'],
      quiz: [
        Q('What causes air pollution?', ['Smoke from vehicles', 'Trees', 'Rain', 'Clean water'], 0, 'Smoke and fumes make the air dirty.'),
        Q('What are the 3 Rs?', ['Run, Rest, Read', 'Reduce, Reuse, Recycle', 'Rain, River, Road', 'Read, Write, Rub'], 1, 'The 3 Rs are Reduce, Reuse and Recycle.'),
        Q('Which waste can be made into compost?', ['Plastic bottle', 'Glass', 'Vegetable peels', 'Metal can'], 2, 'Vegetable peels are wet waste that rots into compost.')
      ]
    },
    4: {
      title: 'Forests and Wildlife', icon: '🐅',
      text: 'Forests are homes for many animals and plants. Tree roots hold the soil together and stop it from washing away. If we cut too many trees, animals lose their homes. India\'s national animal is the tiger and its national bird is the peacock.',
      points: ['Forests are animal homes', 'Roots hold the soil', 'Do not cut trees without need', 'National animal: Tiger, national bird: Peacock'],
      quiz: [
        Q('What is the national animal of India?', ['Lion', 'Elephant', 'Tiger', 'Deer'], 2, 'The tiger is the national animal of India.'),
        Q('What happens when too many trees are cut?', ['Animals lose their homes', 'More rain always', 'Air becomes cleaner', 'Nothing'], 0, 'Animals lose their homes and soil gets washed away.'),
        Q('What is the national bird of India?', ['Crow', 'Parrot', 'Sparrow', 'Peacock'], 3, 'The peacock is India\'s national bird.')
      ]
    },
    5: {
      title: 'Climate and Caring for Earth', icon: '🌎',
      text: 'Burning coal, petrol and diesel releases carbon dioxide, which traps heat and makes the Earth warmer. This is called global warming. We can use clean, renewable energy like solar and wind power. World Environment Day is celebrated on 5 June.',
      points: ['Carbon dioxide traps heat', 'Solar and wind are renewable', 'Plant more trees', 'World Environment Day: 5 June'],
      quiz: [
        Q('Which gas mainly causes global warming?', ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Helium'], 1, 'Carbon dioxide traps heat in the air.'),
        Q('Which of these is a renewable source of energy?', ['Coal', 'Petrol', 'Diesel', 'Solar'], 3, 'Sunlight never runs out, so solar is renewable.'),
        Q('When is World Environment Day?', ['5 June', '14 November', '26 January', '2 October'], 0, 'World Environment Day is on 5 June.')
      ]
    }
  }
};
