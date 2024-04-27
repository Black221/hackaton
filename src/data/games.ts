import { Game } from "../models/game";
import { gameThemes, typeOfGame } from "../models/game";
import { dic_alphabet, dic_words, dic_audios } from "./dictionnary";


export const game: Game = {
    id: '1',
    name: 'Test Game',
    theme: gameThemes.none,
    type: typeOfGame.qcm,
    questions: [
    {
        label: "Quelle est la capitale de la France ?",
        response: "Paris",
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
    }
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
]


export const french: Game[] = [
    game
]


export const maths: Game[] = [
    game
]


export const hg: Game[] = [
    game
]


export const sciences: Game[] = [
    game
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

