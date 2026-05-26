import InvoiceForm from "../components/InvoiceForm"
import InvoicePreview from "../components/InvoicePreview"
import { useState } from 'react'

function Procesare() {
    const [imagine, setImagine] = useState(null)

    function handleFisier(e) {
        setImagine(URL.createObjectURL(e.target.files[0]))
    }
    return (
        <div className="procesare">
            <input type="file" accept="image/*" onChange={handleFisier} />
            <div className="procesare-content">
                <InvoicePreview imagine={imagine} />
                <InvoiceForm />
            </div>
        </div>
    )
}
export default Procesare