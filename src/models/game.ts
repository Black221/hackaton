import { Question } from "./core";

export enum typeOfGame {
    qcm,
    memory,
    math,
    puzzle,
    word,
    other
}


export enum gameThemes {
    braille,
    sign,
    french,
    maths,
    hg,
    sciences,
    none
}

export function getGameTheme(theme: string): gameThemes {
    switch (theme) {
        case 'braille':
            return gameThemes.braille;
        case 'sign':
            return gameThemes.sign;
        case 'french':
            return gameThemes.french;
        case 'maths':
            return gameThemes.maths;
        case 'hg':
            return gameThemes.hg;
        case 'sciences':
            return gameThemes.sciences;
        default:
            return gameThemes.none;
    }
}

export function getGameThemeString(theme: gameThemes | undefined): string {
    switch (theme) {
        case gameThemes.braille:
            return 'braille';
        case gameThemes.sign:
            return 'sign';
        case gameThemes.french:
            return 'french';
        case gameThemes.maths:
            return 'maths';
        case gameThemes.hg:
            return 'hg';
        case gameThemes.sciences:
            return 'sciences';
        default:
            return 'none';
    }
}

export enum gameStatus {
    termined,
    inProgress,
    notStarted
}


export interface Game {
    id?: string;
    name: string;
    theme: gameThemes;
    type: typeOfGame;
    questions: Question[];
    isCompleted: boolean;
}

export interface currentGame {
    questions: string[];
    answers: string[];
}

export interface Games {
    locked: Game[];
    unlocked: Game[];
    completed: Game[];
    current: Game | null;
    next: Game | null;
    previous: Game | null;
    all: Game[];
}

export class GameModel {
    private games: Games;

    constructor() {
        this.games = {
            locked: [],
            unlocked: [],
            completed: [],
            current: null,
            next: null,
            previous: null,
            all: []
        }
    }

    getGames(): Games {
        return this.games;
    }

    getGameById(id: number): Game | null {
        return this.games.all[id];
    }

    addGame(game: Game): void {
        this.games.all.push(game);
    }

    removeGame(game: Game): void {
        this.games.all = this.games.all.filter(g => g !== game);
    }

    unlockGame(game: Game): void {
        this.games.unlocked.push(game);
        this.games.locked = this.games.locked.filter(g => g !== game);
    }

    completeGame(game: Game): void {
        this.games.completed.push(game);
        this.games.unlocked = this.games.unlocked.filter(g => g !== game);
    }

    setCurrentGame(game: Game): void {
        this.games.current = game;
    }

    setNextGame(game: Game): void {
        this.games.next = game;
    }

    setPreviousGame(game: Game): void {
        this.games.previous = game;
    }

    //save on local storage
    saveGames(): void {
        localStorage.setItem('games', JSON.stringify(this.games));
    }

    //load from local storage
    loadGames(): void {
        const games = localStorage.getItem('games');
        if (games) {
            this.games = JSON.parse(games);
        }
    }

    //clear local storage
    clearGames(): void {
        localStorage.removeItem('games');
    }
}