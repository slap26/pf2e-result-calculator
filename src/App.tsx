import { BrowserRouter } from "react-router-dom";
import Calculator from "./calculator";

function App() {
	return (
		<BrowserRouter>
			<div className="min-h-screen min-w-full bg-zinc-800 font-sans text-orange-600">
				<Calculator />
			</div>
		</BrowserRouter>
	);
}

export default App;
