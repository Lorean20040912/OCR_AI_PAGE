import StatsCard from "../components/StatsCard"
import InvoicePreview from "../components/InvoicePreview"
import InvoiceForm from "../components/InvoiceForm"
import { useState, useEffect } from 'react'
import { getFacturi } from '../utils/storage'

function Dashboard() {
    const [facturi, setFacturi] = useState([])
    const [imagine, setImagine] = useState(null)

    useEffect(() => {
        setFacturi(getFacturi())
    }, [])

    function handleFisier(e) {
        setImagine(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <div className="app-container">
            <div className="header">
                <div className="header-left">
                    <h1>Procesare Facturi OCR</h1>
                    <p>Sistem automatizat pentru Republica Moldova</p>
                </div>
                <div className="header-right">
                    <button className="btn-add" onClick={() => document.getElementById('file-input').click()}>Adaugă facturi</button>
                    <button className="btn-config">Configurări</button>
                    <input id="file-input" type="file" accept="image/*" onChange={handleFisier} style={{display:'none'}} />
                </div>
            </div>
            <div className="stats-grid">
                <StatsCard numar={facturi.length} titlu="Total Facturi" clasa="total"/>
                <StatsCard numar={facturi.filter(f => f.status === 'aprobata').length} titlu="Aprobate" clasa="aprobate"/>
                <StatsCard numar={facturi.filter(f => f.status === 'respinsa').length} titlu="Respinse" clasa="respinse"/>
                <StatsCard numar={facturi.filter(f => f.status === 'in_asteptare').length} titlu="In asteptare" clasa="asteptare"/>
            </div>
            <div className="upload-wrapper">
                <div className="upload-area" onClick={() => document.getElementById('file-input').click()}>
                    <div className="upload-icon">⬆</div>
                    <h3>Încarcă Facturi</h3>
                    <p>PDF, PNG, JPG (multiplu)</p>
                </div>
            </div>
            {imagine && (
                <div className="procesare-content">
                    <InvoicePreview imagine={imagine} />
                    <InvoiceForm onSave={() => setFacturi(getFacturi())} />
                </div>
            )}
        </div>
    )
}
export default Dashboard