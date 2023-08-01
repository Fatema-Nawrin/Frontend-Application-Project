import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ViewPage from './pages/ViewPage';
import EditPage from './pages/EditPage';

function App() {
    return (
        <>
            <Header />
            <div className="bg-slate-50 rounded-sm">
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="product" element={<ViewPage />}></Route>
                    <Route path="product/edit" element={<EditPage />}></Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
