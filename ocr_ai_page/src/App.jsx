import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Procesare from './pages/Procesare'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/procesare" element={<Procesare/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App