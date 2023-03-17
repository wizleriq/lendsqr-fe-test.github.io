import "./widget.scss"
import {FiUsers} from 'react-icons/fi'
import{HiOutlineUsers} from 'react-icons/hi'
import{FaMoneyBillAlt} from 'react-icons/fa'
import{BiCoinStack} from 'react-icons/bi'

const Widget = ({type}) =>{
  let input;

  switch (type){
    case 'user':
      input ={
        logo:
          <FiUsers className="logo" />,
        name:'USERS',
        nameone: 2453,
      };
      break;

      case 'active user':
      input = {
        logo:
          <HiOutlineUsers className="logo" />,
        name:'ACTIVE USERS',
        nameone: 2453,
      };
      break;

      case 'user with loans':
      input ={
        logo:
          <FaMoneyBillAlt className="logo" />,
        name:'USERS WITH LOANS',
        nameone: 2453,
      };
      break;

      case 'user with savings':
      input = {
        logo:
          <BiCoinStack className="logo" />,
        name:'USERS WITH SAVINGS',
        nameone: 2453,
      };
      break;
      default: 
      break;
  }




  return(  
    <div className="widget">
      <div className="left">
        <FiUsers className="logo" />
      <span className="name">USERS</span>
      <span className="nameone">2,453</span>
      </div>
      
      
      <div className="right">right</div>
      
    </div>
    
  )
}

export  default Widget