const alienList = ['Gorgons', 
                'Itzals', 
                'Harbongers', 
                'Kazarts', 
                'Rothians', 
                'Wardlos', 
                'Tuts', 
                'Molovians', 
                'Urgunthos', 
                'Ys', 
                'Vasues', 
                'Nechevos', 
                'Brelins', 
                'Andors', 
                'Kachets', 
                'Juroandens', 
                'Pales', 
                'Furokees', 
                'Lucks', 
                'Elonions'
                ]

const planetList = ['forested', 
                'desert', 
                'tundra', 
                'oceananic', 
                'grasslands', 
                'poisonous',
                'stromy',
                'destroyed'
                ]

const travelAction = ['travelled through deep space',
                    'stopped by a junkers craft to gain supplies',
                    'lowered thrusters to enjoy the view',
                    'sent communications back to Earth',    
                ]

const verbList = ['loved', 
                'hated', 
                'jumped for joy at', 
                'throughly enjoyed', 
                'seemed confused by']

const peaceOfferingList = ['a bag of cheetos', 
                        'an ancient vase', 
                        'a multitude of earthly grains', 
                        'jewels and precious stones', 
                        'hugs', 
                        'one of Elon Musks many children', 
                        'vats of chocolate', 
                        'knowledge of beyond'
                        ]

const randomEventList = ['Alien attacked one of our outter rings resulting in minor damage which was easily fixed by our crew', 
                    'We journeyed through deep space at Hyberspeed, all reports normal',
                    'An asteriod slowly approached our ship, missing us by several meters',
                    'Saw the famed space tesla, crew stopped to take photos',
                    'A Klingon warship was located in this sector. Reports indicate their captain wishes to communicate. Their intention are unknown. USS Enterprise alerted'
                    ]

const galaxyList = ['Pisces Dwarf',
                    'Andromeda I',
                    'Draco Dwarf',
                    'Phoenic Dwarf',
                    'Leo II',
                    'NDC 6946',
                    'EGSY8p7',
                    'Pinwheel',
                    'Centaurus A'
                ]

function printCaptainsLog() {
    function getRandNum(array) {
        return Math.floor(Math.random() * array.length);
    }

    let alien = alienList[getRandNum(alienList)];
    let location = planetList[getRandNum(planetList)];
    let action = travelAction[getRandNum(travelAction)];
    let peaceOffering = peaceOfferingList[getRandNum(peaceOfferingList)];
    let event = randomEventList[getRandNum(randomEventList)];
    let verb = verbList[getRandNum(verbList)];
    let galaxy = galaxyList[getRandNum(galaxyList)];

    let fullstring = `Captains Log: ${event}. Afterwards we encountered
    the ${alien} species on a ${location} type planet. As custom, we gave them ${peaceOffering}
    in hopes of befriending this alien species, they ${verb} the gift. Later we ${action}. A new star was 
    discovered in the ${galaxy} galaxy. End Captains Log...`;
    return fullstring;
}

var audio = new Audio("./CSS/images/mixkit-retro-game-notification-212.wav");

function clickHandler() {
    let outputDiv = document.getElementById('message-output');
    outputDiv.innerHTML = `<p>${printCaptainsLog()}</p>`;
    audio.play();
    let buttonText = document.querySelector('button');
    buttonText.innerHTML = "...see another log?";
}


