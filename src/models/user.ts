

// type of handicaped user
export enum typeOfHandicape {
    visual,
    auditory,
    speech,
    none
}

export function fromStringToTypeOfHandicape(type: string): typeOfHandicape {
    switch (type) {
        case 'visual': return typeOfHandicape.visual;
        case 'auditory': return typeOfHandicape.auditory;
        case 'speech': return typeOfHandicape.speech;
        default: return typeOfHandicape.none;
    }
}

export interface user {
    name: string;
    typeOfHandicape: typeOfHandicape;
    age: number;
    level: number; // depending on the level of the user, the difficulty of the game will be adjusted
    experience: number;
}

export class UserModel {
    private user: user;

    constructor(
        name: string, 
        typeOfHandicape: typeOfHandicape, 
        age: number, 
        level: number, 
        experience: number
    ) {
        this.user = {
            name: name,
            typeOfHandicape: typeOfHandicape,
            age: age,
            level: level,
            experience: experience
        }
    }

    getUser(): user {
        return this.user;
    }

    getName(): string {
        return this.user.name;
    }

    getTypeOfHandicape(): typeOfHandicape {
        return this.user.typeOfHandicape;
    }

    getAge(): number {
        return this.user.age;
    }

    getLevel(): number {
        return this.user.level;
    }

    getExperience(): number {
        return this.user.experience;
    }

    setUser(user: user): void {
        this.user = user;
    }

    updateExperience(experience: number): void {
        this.user.experience = experience;
    }

    updateLevel(level: number): void {
        this.user.level = level;
    }

    updateName(name: string): void {
        this.user.name = name;
    }

    updateTypeOfHandicape(typeOfHandicape: typeOfHandicape): void {
        this.user.typeOfHandicape = typeOfHandicape;
    }

    updateAge(age: number): void {
        this.user.age = age;
    }

    // save on local storage
    saveUser(): void {
        localStorage.setItem('user', JSON.stringify(this.user));
    }

    // load from local storage
    loadUser(): void {
        this.user = JSON.parse(localStorage.getItem('user') || '{}');
    }

    // delete from local storage
    deleteUser(): void {
        localStorage.removeItem('user');
    }
}