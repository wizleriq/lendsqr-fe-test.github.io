import "./navbar.scss";
import{AiOutlineSearch} from 'react-icons/ai'
import {BsBell} from 'react-icons/bs'
import{BiDownArrow} from 'react-icons/bi'

const Navbar =()=>{
  return(
    <div className="navbar">
      <div className="nav">
        <div className="search">
          <input type="text" placeholder="Search..." />    
          <AiOutlineSearch className="logo" />
          </div>
          <div className="contents">  
            <div className="content">
              <h3>Docs</h3>
            </div>

            <div className="content">
              <BsBell className="logo" />

            </div> 

            <div className="content">
              <img
              src= "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className= "image"
              />


            </div> 

            <div className="content">
              <h2>Adedeji</h2>

            </div>

              

            <div className="contentone">
              <BiDownArrow className="logo" />

            </div> 
          </div>

      </div>

    </div>
  )
}

export default Navbar