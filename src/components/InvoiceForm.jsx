import { useState } from 'react'
import { addFactura } from '../utils/storage'

function InvoiceForm() {
    const [date, setDate] = useState({
        numarFactura: '',
        dataFactura: '',
        furnizor: '',
        idno: '',
        valoareTotala: '',
        tva: ''
    })
    function handleChange(e) {
        setDate({...date, [e.target.name]: e.target.value})
    }
    function handleAproba() {
        addFactura({...date, id: Date.now().toString(), status: 'aprobata'})
        alert('Factură aprobată!')
    }
    function handleRespinge() {
        addFactura({...date, id: Date.now().toString(), status: 'respinsa'})
        alert('Factură respinsă!')
    }
    function handleExport() {
        const blob = new Blob([JSON.stringify(date, null, 2)], {type: 'application/json'})
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'factura.json'
        a.click()
    }

    return (
        <div className="form-card">
            <input name="numarFactura" placeholder="Numar Factura" onChange={handleChange} />
            <input name="dataFactura" placeholder="Data Facturii" onChange={handleChange} />
            <input name="furnizor" placeholder="Furnizor" onChange={handleChange} />
            <input name="idno" placeholder="IDNO" onChange={handleChange} />
            <input name="valoareTotala" placeholder="Valoarea Totala" onChange={handleChange} />
            <input name="tva" placeholder="TVA" onChange={handleChange} />
            <button className="btn-aproba" onClick={handleAproba}>Aprobă</button>
            <button className="btn-respinge" onClick={handleRespinge}>Respinge</button>
            <button className="btn-export" onClick={handleExport}>Export JSON</button>
        </div>
    )

}
export default InvoiceForm