import { Game } from "../models/game";
import { gameThemes, typeOfGame } from "../models/game";
import { dic_alphabet, dic_words, dic_audios, dic_number, dic_vocab, dic_number_count } from "./dictionnary";


export const game: Game = {
    id: '1',
    name: 'Test Game',
    theme: gameThemes.none,
    type: typeOfGame.qcm,
    questions: [
    {
        label: "Quelle est la capitale de la France ?",
        response: "Paris",
        key: ["p", "a", "r", "i", "s"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paris_-_Eiffelturm_und_Marsfeld2.jpg/800px-Paris_-_Eiffelturm_und_Marsfeld2.jpg",
        choices: [
            "Paris",
            "Londres",
            "Berlin",
            "Madrid"
        ]
    },
    {
        label: "Quelle est la capitale de l'Italie ?",
        response: "Rome",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Roma_-_Pantheon.jpg/800px-Roma_-_Pantheon.jpg",
        choices: [
            "Paris",
            "Londres",
            "Rome",
            "Madrid"
        ]
    },
    {
        label: "Quelle est la capitale de l'Espagne ?",
        response: "Madrid",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Madrid_-_Palacio_Real.jpg/800px-Madrid_-_Palacio_Real.jpg",
        choices: [
            "Paris",
            "Londres",
            "Berlin",
            "Madrid"
        ]
    },
    {
        label: "Quelle est la capitale de l'Allemagne ?",
        response: "Berlin",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Berlin_-_Reichstag.jpg/800px-Berlin_-_Reichstag.jpg",
        choices: [
            "Paris",
            "Berlin",
            "Rome",
            "Madrid"
        ]
    },
    {
        label: "Quelle est la capitale de la Belgique ?",
        response: "Bruxelles",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Bruxelles_-_Grand-Place.jpg/800px-Bruxelles_-_Grand-Place.jpg",
        choices: [
            "Paris",
            "Londres",
            "Berlin",
            "Bruxelles"
        ]
    },
    {
        label: "Quelle est la capitale de la Suisse ?",
        response: "Berne",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Bern_-_Bundeshaus.jpg/800px-Bern_-_Bundeshaus.jpg",
        choices: [
            "Paris",
            "Londres",
            "Berlin",
            "Berne"
        ]
    },
    {
        label: "Quelle est la capitale de la Suède ?",
        response: "Stockholm",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Stockholm_-_Gamla_Stan.jpg/800px-Stockholm_-_Gamla_Stan.jpg",
        choices: [
            "Paris",
            "Londres",
            "Berlin",
            "Stockholm"
        ]
    }
],
    isCompleted: false
}

export const braille: Game[] = [
    {
        id : '1',
        name: 'Alphabet',
        theme: gameThemes.braille,
        type: typeOfGame.qcm,
        questions: [
            {
                label: "Quel est le braille de la lettre A ?",
                response: "A",
                audio : dic_audios["A"],
                choices: [
                    dic_audios["A"],
                    dic_audios["C"],
                    dic_audios["E"],
                    dic_audios["F"]
                ],
            },
            {
                label: "Quel est le braille de la lettre B ?",
                response: "B",
                audio : dic_audios["B"],
                choices: [
                    dic_audios["A"],
                    dic_audios["C"],
                    dic_audios["B"],
                    dic_audios["F"]
                ],
            },
            {
                label: "Quel est le braille de la lettre C ?",
                response: "C",
                audio : dic_audios["C"],
                choices: [
                    dic_audios["A"],
                    dic_audios["C"],
                    dic_audios["E"],
                    dic_audios["F"]
                ],
            },
            {
                label: "Quel est le braille de la lettre F ?",
                response: "F",
                audio : dic_audios["F"],
                choices: [
                    dic_audios["A"],
                    dic_audios["C"],
                    dic_audios["E"],
                    dic_audios["F"]
                ],
            }
        ],
        isCompleted: false
    },
]


export const sign: Game[] = [
   {
        id : '2',
        name: 'Alphabet',
        theme: gameThemes.sign,
        type: typeOfGame.qcm,
        questions: [
            {
                label: "Quel est le signe de la lettre A ?",
                response: dic_alphabet["A"],
                text : "A",
                choices: [
                    dic_alphabet["A"],
                    dic_alphabet["C"],
                    dic_alphabet["E"],
                    dic_alphabet["F"]
                ],
                audio: ""
            },
            {
                label: "Ce signe correspond à quel mot ?",
                response: "à bientôt",
                video: dic_words["à bientôt"],
                choices: [
                    "à bientôt",
                    "bonjour",
                    "merci",
                    "pardon"
                ],
            },
            {
                label: "Ce signe correspond à quel lettre ?",
                image: dic_alphabet["B"],
                response: "B",
                choices: [
                    "A",
                    "B",
                    "C",
                    "D"
                ],
            }
        ],
        isCompleted: false
   },
   {
        id : '3',
        name: 'Les nombres',
        theme: gameThemes.sign,
        type: typeOfGame.qcm,
        questions: [
            {
                label: "Ce signe correspond à quel chiffre ?",
                image: dic_number["1"],
                response: "1",
                choices: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
            },
            {
                label: "Ce signe correspond à quel chiffre ?",
                image: dic_number["2"],
                response: "2",
                choices: [
                    "6",
                    "2",
                    "12",
                    "4"
                ],
            },
            {
                label: "Ce signe correspond à quel chiffre ?",
                image: dic_number["3"],
                response: "trois",
                choices: [
                    "un",
                    "deux",
                    "trois",
                    "quatre"
                ],
            },
            {
                label: "Ce nombre correspond à quel signe ?",
                text : "12",
                response: dic_number["12"],
                choices: [
                    dic_number["12"],
                    dic_number["15"],
                    dic_number["20"],
                    dic_number["10"]
                ],
            },
            {
                label: "Ce signe correspond à quel chiffre ?",
                image: dic_number["4"],
                response: "4",
                choices: [
                    "11",
                    "2",
                    "13",
                    "4"
                ],
            },
            {
                label: "Ce nombre correspond à quel signe ?",
                text : "5",
                response: dic_number["5"],
                choices: [
                    dic_number["5"],
                    dic_number["10"],
                    dic_number["15"],
                    dic_number["20"]
                ],
            },

        ],
        isCompleted: false
   },
   {
        id : '4',
        name: 'Les nombres en lettres',
        theme: gameThemes.sign,
        type: typeOfGame.qcm,
        questions: [
            {
                label: "Ce mot correspond à quel chiffre ?",
                text : "un",
                response: dic_number["1"],
                choices: [
                    dic_number["1"],
                    dic_number["2"],
                    dic_number["3"],
                    dic_number["4"]
                ],
            },
            {
                label: "Ce mot correspond à quel chiffre ?",
                text : "deux",
                response: dic_number["2"],
                choices: [
                    dic_number["6"],
                    dic_number["2"],
                    dic_number["12"],
                    dic_number["4"]
                ],
            },
            {
                label: "Ce mot correspond à quel chiffre ?",
                text : "trois",
                response: dic_number["3"],
                choices: [
                    dic_number["1"],
                    dic_number["2"],
                    dic_number["3"],
                    dic_number["4"]
                ],
            },
            {
                label: "Ce mot correspond à quel chiffre ?",
                text : "douze",
                response: dic_number["12"],
                choices: [
                    dic_number["12"],
                    dic_number["15"],
                    dic_number["20"],
                    dic_number["10"]
                ],
            },
            {
                label: "Ce mot correspond à quel chiffre ?",
                text : "quatre",
                response: dic_number["4"],
                choices: [
                    dic_number["11"],
                    dic_number["2"],
                    dic_number["13"],
                    dic_number["4"]
                ],
            },
            {
                label: "Ce mot correspond à quel chiffre ?",
                text : "cinq",
                response: dic_number["5"],
                choices: [
                    dic_number["5"],
                    dic_number["10"],
                    dic_number["15"],
                    dic_number["20"]
                ],
            },
        ],
        isCompleted: false
   },
   {
        id : '5',
        name: 'Vocabulaire 1',
        theme: gameThemes.sign,
        type: typeOfGame.qcm,
        questions: [
            {
                label: "Ce mot correspond à quel signe ?",
                text : "chien",
                response: dic_vocab["chien"],
                choices: [
                    dic_vocab["chien"],
                    dic_vocab["chat"],
                    dic_vocab["jouer"],
                    dic_vocab["maison"]
                ],
            },
            {
                label: "Ce mot correspond à quel signe ?",
                text : "dormir",
                response: dic_vocab["dormir"],
                choices: [
                    dic_vocab["chien"],
                    dic_vocab["dormir"],
                    dic_vocab["jouer"],
                    dic_vocab["maison"]
                ],
            },
            {
                label: "Ce mot correspond à quel signe ?",
                text : "malade",
                response: dic_vocab["malade"],
                choices: [
                    dic_vocab["malade"],
                    dic_vocab["dormir"],
                    dic_vocab["jouer"],
                    dic_vocab["maison"]
                ],
            },
            {
                label: "Trouve le sens de la phrase.",
                video : dic_vocab["phrase_chat"],
                response: "Papa est allergique au chat",
                choices: [
                    "Papa est allergique au chat",
                    "J'aime jouer",
                ],
            },
            {
                label: "Trouve le sens de la phrase.",
                video : dic_vocab["phrase_jeu"],
                response: "Moi et mon cousin aimons jouer",
                choices: [
                    "Moi et mon cousin aimons jouer",
                    "Maman est malade",
                ],
            },
        ],
        isCompleted: false,
   }
]


export const french: Game[] = [
    
]


export const maths: Game[] = [
    {
        id : '6',
        name: 'Additions',
        theme: gameThemes.maths,
        type: typeOfGame.qcm,
        questions: [
            {
                label: "Combien font 2 + 2 ?",
                text : "2 + 2",
                response: dic_number_count["4"],
                choices: [
                    dic_number_count["4"],
                    dic_number_count["5"],
                    dic_number_count["6"],
                    dic_number_count["7"]
                ],
            },
            {
                label: "Combien font 3 + 1 ?",
                text : "3 + 1",
                response: dic_number_count["4"],
                choices: [
                    dic_number_count["4"],
                    dic_number_count["5"],
                    dic_number_count["6"],
                    dic_number_count["7"]
                ],
            },
            {
                label: "Combien font 2 + 4 ?",
                text : "2 + 4",
                response: dic_number_count["6"],
                choices: [
                    dic_number_count["4"],
                    dic_number_count["5"],
                    dic_number_count["6"],
                    dic_number_count["8"]
                ],
            },
            {
                label: "Combien font 5 + 4 ?",
                image : dic_number["5+4"],
                response: dic_number_count["9"],
                choices: [
                    dic_number_count["10"],
                    dic_number_count["5"],
                    dic_number_count["9"],
                    dic_number_count["7"]
                ],
            },
        ],
        isCompleted: false
    }
]


export const hg: Game[] = [
    game
]


export const sciences: Game[] = [
    {
        id :'run/4',
        name: 'Les animaux',
        theme: gameThemes.sciences,
        type: typeOfGame.math,
        questions: [
            {
                label: "Vie dans l'eau, a des branchies et nage",
                response: "poisson",
                choices: [],
                key: [ // random keys with response keys
                    "p", "b", "c", "d", "o", "i", "s", "n", "h", "e", "a", "g"
                ]
            },
            {
                label: "Roi de la jungle",
                response: "lion",
                choices: [],
                key: [
                    "l", "n", "j", "i", "o", "u", "g", "e"
                ]
            },
            {
                label: "Animal domestique qui miaule",
                response: "chat",
                choices: [],
                key: [
                    "c", "h", "a", "t", "m", "i", "l", "e", "u"
                ]
            },
            {
                label: "Animal qui aboie",
                response: "chien",
                choices: [],
                key: [
                    "c", "h", "i", "e", "n", "a", "b", "o", "r"
                ]
            },
            {
                label: "Animal qui vole et pond des oeufs",
                response: "oiseau",
                choices: [],
                key: [
                    "o", "i", "s", "e", "a", "u", "v", "l", "d"
                ]
            },
            {
                label: "Animal qui vit dans l'eau et a des nageoires",
                response: "dauphin",
                choices: [],
                key: [
                    "d", "a", "u", "p", "h", "i", "n", "v", "t", "s", "l", "e", "o"
                ]
            },
            {
                label: "Animal qui vit dans la savane et a une longue trompe",
                response: "éléphant",
                choices: [],
                key: [
                    "é", "l", "p", "h", "a", "n", "t", "v", "i", "d", "s", "u", "o", "e"
                ]
            },
            {
                label: "Animal qui vit dans la mer et a des tentacules",
                response: "pieuvre",
                choices: [],
                key: [
                    "p", "i", "e", "u", "f", "r", "v", "t", "n", "d", "s", "l", "m"
                ]
            },
        ],
        isCompleted: false
    }
]


export const getGames = (theme: string): Game[] => {
    switch (theme) {
        case 'braille':
            return braille;
        case 'sign':
            return sign;
        case 'french':
            return french;
        case 'maths':
            return maths;
        case 'hg':
            return hg;
        case 'sciences':
            return sciences;
        default:
            return [];
    }
}

