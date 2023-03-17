import "./sidebar.scss"


import{FaUsers} from 'react-icons/fa'
import{FaUserFriends} from 'react-icons/fa'
import{TbMoneybag} from 'react-icons/tb'
import{FaHandshake} from 'react-icons/fa'
import{MdSavings} from 'react-icons/md'
import{FaHandHoldingUsd} from 'react-icons/fa'
import{FaUserCheck} from 'react-icons/fa'
import{FaUserTimes} from 'react-icons/fa'
import{HiBuildingOffice} from 'react-icons/hi2'
import{BsBank} from 'react-icons/bs'
import{FaMoneyCheckAlt} from 'react-icons/fa'
import{MdPhonelinkRing} from 'react-icons/md'
import{MdOutlineMiscellaneousServices} from 'react-icons/md'
import{RiUserSettingsFill} from 'react-icons/ri'
import{GiNotebook} from 'react-icons/gi'
import{GoGraph} from 'react-icons/go'

const Sidebar =()=>{
  return(
    <div className="sidebar">
      <div className="top"><span className="logo">lendsqr</span></div>
      <hr />
      <div className="center">
        <ul>
          <li>
            
            <span>Switch Organization</span>
          </li>

          <li>
            {/* <PersonIcon /> */}
            <span>Dashboard</span>
          </li>
          
          <p className = "title">CUSTOMERS</p>
          <li>
            <FaUsers />
            <span>Users</span>
          </li>

          <li>
            <FaUserFriends />
            <span>Guarantors</span>
          </li>

          <li>
            <TbMoneybag />
            <span>Loans</span>
          </li>

          <li>
            <FaHandshake />
            <span>Decision Models</span>
          </li>

          <li>
            <MdSavings />
            <span>Savings</span>
          </li>

          <li>
            <FaHandHoldingUsd />
            <span>Loan Request</span>
          </li>

          <li>
            <FaUserCheck />
            <span>Whitelist</span>
          </li>

          <li>
            <FaUserTimes />
            <span>Karma</span>
          </li>

          <p className = "title">BUSINESSES</p>

          <li>
            <HiBuildingOffice />
            <span>Oraganization</span>
          </li>

          <li>
          <FaHandHoldingUsd />
            <span>Loan Products</span>
          </li>

          <li>
            <BsBank />
            <span>Saving Products</span>
          </li>

          <li>
            <FaMoneyCheckAlt />
            <span>Fees and Charges</span>
          </li>

          <li>
            <MdPhonelinkRing />
            <span>Transactions</span>
          </li>

          <li>
            <MdOutlineMiscellaneousServices />
            <span>Services</span>
          </li>

          <li>
            <RiUserSettingsFill />
            <span>Service Account</span>
          </li>

          <li>
            <GiNotebook />
            <span>Settlements</span>
          </li>

          <li>
            <GoGraph />
            <span>Reports</span>
          </li>

          <p className = "title">SETTINGS</p>

          <li>
            <span>Preference</span>
          </li>

          <li>
            <span>Fee and Pricing</span>
          </li>

          <li>
            <span>Audit Logs</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color options</div>

    </div>
  )
}

export default Sidebar