function InvoicePreview({ imagine }) {
    return (
        <div>
            {imagine ? <img src={imagine} /> : <p>Nicio imagine</p>}
        </div>
    )
}
export default InvoicePreview