import StatsCard from "../components/StatsCard"

function Dashboard() {
    return (
     <div>
       <h1>Dashboard</h1>
       <StatsCard numar={0} titlu="Total Facturi"/>
       <StatsCard numar={1} titlu="Aprobate"/>
       <StatsCard numar={2} titlu="Respinse"/>
       <StatsCard numar={3} titlu="In asteptare"/>
     </div>
    )
}
export default Dashboard


