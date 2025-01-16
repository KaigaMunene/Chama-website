import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<Suspense fallback={<Loading />}>
				<Footer />
			</Suspense>
		</Router>
	);
}
function Loading() {
	return <h2>🌀 Loading...</h2>;
}

export default App;
