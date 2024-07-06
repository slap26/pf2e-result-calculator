import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Calculator from "./calculator";

function App() {
	return (
		<BrowserRouter>
			<div className="min-h-screen min-w-full bg-zinc-800 font-sans">
				<Nav />
				<Calculator />
			</div>
		</BrowserRouter>
	);
}

export default App;
