import InvoiceForm from "../components/InvoiceForm"
import InvoicePreview from "../components/InvoicePreview"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Procesare() {
    const [imagine, setImagine] = useState(null)
    const navigate = useNavigate()

    function handleFisier(e) {
        setImagine(URL.createObjectURL(e.target.files[0]))
    }
    return (
        <div className="procesare">
            <div className="header">
                <div className="header-left">
                    <h1>Procesare Facturi OCR</h1>
                    <p>Sistem automatizat pentru Republica Moldova</p>
                </div>
                <div className="header-right">
                    <button className="btn-add">Adaugă facturi</button>
                    <button className="btn-config" onClick={() => navigate('/')}>← Dashboard</button>
                </div>
            </div>
            <div className="upload-area" onClick={() => document.getElementById('file-input').click()}>
                <p>⬆ Încarcă Facturi</p>
                <p>PDF, PNG, JPG (multiplu)</p>
                <input id="file-input" type="file" accept="image/*" onChange={handleFisier} style={{display:'none'}} />
            </div>
            {imagine && (
                <div className="procesare-content">
                    <InvoicePreview imagine={imagine} />
                    <InvoiceForm />
                </div>
            )}
        </div>
    )
}
export default Procesare