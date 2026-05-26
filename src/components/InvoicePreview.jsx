function InvoicePreview({ imagine }) {
    return (
        <div className="preview-card">
            {imagine ? <img src={imagine} style={{width: '100%'}} /> : <p>Nicio imagine</p>}
        </div>
    )
}
export default InvoicePreview