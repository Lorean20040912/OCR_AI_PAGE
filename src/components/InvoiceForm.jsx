import { useState } from 'react'

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

    return (
        <div>
            <input name="numarFactura" placeholder="Numar Factura" onChange={handleChange} />
            <input name="dataFactura" placeholder="Data Facturii" onChange={handleChange} />
            <input name="furnizor" placeholder="Furnizor" onChange={handleChange} />
            <input name="idno" placeholder="IDNO" onChange={handleChange} />
            <input name="valoareTotala" placeholder="Valoarea Totala" onChange={handleChange} />
            <input name="tva" placeholder="TVA" onChange={handleChange} />
            <button>Aprobă</button>
            <button>Respinge</button>
            <button>Export JSON</button>
        </div>
    )
}
export default InvoiceForm