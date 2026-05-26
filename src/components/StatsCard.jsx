function StatsCard(props) {
    return (
        <div className={`stat-card ${props.clasa}`}>
            <h2>{props.numar}</h2>
            <p>{props.titlu}</p>
        </div>
    )
}
export default StatsCard