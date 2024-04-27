import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./game/Home"
import Scene from "./game/Scene"
import Profile from "./Profile"
import GameLayout from "./game/GameLayout"
import Chapiters from "./game/Chapiters"
import MenuLayout from "./game/MenuLayout"

import gameTrack from "../assets/audios/game-music-loop.mp3";

function App() {

	// play game music
	const audio = new Audio(gameTrack);
	audio.loop = true;
	audio.play();

	return (<>
		<Routes>
			<Route element={<Layout />}>

				<Route element={<MenuLayout />} >
					<Route path="/" element={<Home />} />
					<Route path="/:type" element={<Chapiters />} />
				</Route>

				<Route element={<GameLayout />}>
					<Route path="/:type/:id" element={<Scene />} />
				</Route>
				
				<Route path="/profile" element={<Profile /> } />

			</Route>
		</Routes>
	</>)
}

export default App
