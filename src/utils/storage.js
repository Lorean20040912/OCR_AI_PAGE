function getFacturi() {
    return JSON.parse(localStorage.getItem("facturi")) || []
}

function saveFacturi(facturi) {
    return localStorage.setItem("facturi", JSON.stringify(facturi))
}

function addFactura(factura) {
    const facturi = getFacturi()
    facturi.push(factura)
    saveFacturi(facturi)
}

export { getFacturi, saveFacturi, addFactura }