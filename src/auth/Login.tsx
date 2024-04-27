import { useEffect, useState } from "react";
import { fromStringToTypeOfHandicape, typeOfHandicape, UserModel } from "../models/user";

import { useLocation, useNavigate } from "react-router-dom";

import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";


export default function Login() {

    const navigate = useNavigate();
    const from = useLocation().state?.from?.pathname || "/";

    const [name, setName] = useState<string>('');
    const [handicape, setHandicape] = useState<typeOfHandicape>(typeOfHandicape.none);
    const [age, setAge] = useState<number>(0);


    const _setHandicape = (value: string) => {
        setHandicape(fromStringToTypeOfHandicape(value));
    }

    const _setAge = (value: string) => {
        setAge(parseInt(value));
    }

    const pos0: number = Object.values(typeOfHandicape).toString().indexOf('0');
    const listHandicape: string[] = Object.values(typeOfHandicape).toString().substring(0, pos0 - 1).split(',');

    const { user, login } = useAuth();
    const data = localStorage.getItem('user');
    
    const handleLogin = () => {
        if (name === '' || age === 0 || name === null || age === null) return;
        login(new UserModel(name, handicape, age, 1, 0));
    }

    useEffect(() => {
        if (data !== null) {
            login(new UserModel(JSON.parse(data).name, JSON.parse(data).handicape, JSON.parse(data).age, JSON.parse(data).score, JSON.parse(data).level));
        }
        // eslint-disable-next-line
    }, []);


    useEffect(() => {
        if (user) {
            user.saveUser();

            if (from.search("game") > 0)
                navigate(from, {replace: true})
            else 
                navigate("/game", {replace: true})
        }
        // eslint-disable-next-line
    }, [user]);

    return (<>
        <div className="flex items-center justify-center h-screen overflow-hidden">
            <div className="space-y-6">
                <h1 className="text-4xl font-bold text-center">Se Connecter</h1>
                <div className="w-80 md:w-96 space-y-4">
                    <Input label="Nom" value={name} onChange={setName} />
                    <Input label="Age" type="number" value={age} onChange={(value) => _setAge(value)} />
                    <Select label="Handicape" onChange={_setHandicape} options={listHandicape} />
                </div>
                <div className="flex justify-center">
                    <Button label="Jouer" action={handleLogin} active={true} />
                </div>
            </div>
        </div>
    </>)
}