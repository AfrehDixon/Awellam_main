import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
// import Store from "./pages/Serve";
import Contact from "./pages/Contact";
import Serve from './pages/Serve'

function App() {
	return (
		<BrowserRouter>
			<Layout />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/service" element={<Serve />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
