import { Link, useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function SideBar () {

  const navigate = useNavigate()
  const sidebarStyling = {
    height: '1000px',
    width: '160px',
    position: 'fixed',
    marginLeft: "0px",
    zIndex: -1,
    top: -200,
    left: 0,
    paddingTop:350,
    backgroundColor: 'black',
    color:"aqua",
    overflowX: 'hidden'
    
  }

  const sideBarItemStyling = {
    color: 'white', padding: '6px 8px 6px 16px', display: 'block'
  }

  return (
    <div style={sidebarStyling}>
      <Button color='inherit' onClick={() => { navigate('/Home') }}>Users</Button>
          <Button color='inherit' onClick={() => { navigate('/login') }}>Latest News</Button>
          <Button color='inherit' onClick={() => { navigate('/Community') }}>Success Stories</Button>
    </div>
  )
}

export default SideBar
