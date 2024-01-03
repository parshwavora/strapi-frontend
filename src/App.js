import {  Route,Routes } from 'react-router-dom';


import Homepage from './pages/homepage';
import Resturants from './pages/resturants';
import Category from './pages/category';
import SiteHeader from './components/siteHeader';
import "./styles.css";
function App() {
	return (
    <div>
    <SiteHeader/> 
    <Routes>
		<Route path="/" element={<Homepage/>}></Route>
    <Route path="/resturants/:id" element={<Resturants/>}></Route>
    <Route path="/category/:id" element={<Category/>}></Route>
    </Routes>
</div>
	);
}

export default App;
