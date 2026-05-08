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
     <div>
       <h1>Dashboard</h1>
       <StatsCard numar={facturi.length} titlu="Total Facturi"/>
       <StatsCard numar={facturi.filter(f => f.status === 'aprobata').length} titlu="Aprobate"/>
       <StatsCard numar={facturi.filter(f => f.status === 'respinsa').length} titlu="Respinse"/>
       <StatsCard numar={facturi.filter(f => f.status === 'in_asteptare').length} titlu="In asteptare"/>
     </div>
    )
}
export default Dashboard


