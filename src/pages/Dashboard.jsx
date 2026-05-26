import StatsCard from "../components/StatsCard"
import { useState, useEffect } from 'react'
// State tine minte initial, effect daca observa schimabare modifica
import { getFacturi } from '../utils/storage'
// .. da inapoi in mapa parinte

function Dashboard() {
    const [facturi, setFacturi] = useState([])
    useEffect(() => {
        setFacturi(getFacturi())
    }, [])
    return (
        <div className="dashboard">
       <h1>Dashboard</h1>
            <div className="stats-grid">
         <StatsCard numar={facturi.length} titlu="Total Facturi" clasa="total"/>
         <StatsCard numar={facturi.filter(f => f.status === 'aprobata').length} titlu="Aprobate" clasa="aprobate"/>
         <StatsCard numar={facturi.filter(f => f.status === 'respinsa').length} titlu="Respinse" clasa="respinse"/>
         <StatsCard numar={facturi.filter(f => f.status === 'in_asteptare').length} titlu="In asteptare" clasa="asteptare"/>
     </div>
        </div>
    )
}
export default Dashboard


