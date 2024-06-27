import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Calculator from "./calculator";

function App() {
	return (
		<BrowserRouter>
			<div className="min-h-screen min-w-full">
				<Nav />
				<main className="flex flex-grow">
					<Calculator />
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;
