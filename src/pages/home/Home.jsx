import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Widget from "../../components/widgets/Widget"
import Table from "../../components/table/Table"
import "./home.scss"
const Home = () => {
  return(
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="widgets">
          <Widget  type = 'USER' />
          <Widget  type = 'ACTIVE USERS' />
          <Widget  type = 'USERS WITH LOANS' />
          <Widget  type = 'USERS WITH SAVINGS' />
        </div>
        <div className="list">
          <div className="transactions">Transations</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home