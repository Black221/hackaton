


export default function useConvert() {

    const dictionnary: { [key: string]: string } = {
        "mental": "Mental",
        "visual": "Visuel",
        "auditory": "Auditif",
        "speech": "Parole",
        "cognitive": "Cognitif",
        "none": "Aucun",
        "french": "français",
        "braille": "braille",
        "maths": "mathématiques",
        "hg": "culture générale",
        "sciences": "sciences",
        "sign": "langue des signes",
        "memory": "mémoire",
        "puzzle": "puzzle",
        "word": "mot",
        "other": "autre",
    }

    const convert = (value: string): string => {
        return dictionnary[value] || value;
    }

    return convert;
}