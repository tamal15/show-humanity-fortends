import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

// import CartDrawer from '../../Components/CartDrawer'
import './Header.css'
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown'
import useAuth from '../../../Hook/useAuth';


const Header = () => {
    const { userLogOut, user, toggle, setToggle, handleClick, admin ,ad} = useAuth()

    console.log(user.photoURL)

    const [isSticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);

    return (

        <div className='header-area'>
            <Navbar expand="lg"  bg="red"  className={(isSticky) ? "navbar  navbar-expand-lg  background-design texts fixed-top" : "navbar  navbar-expand-lg "}>
                <Container>
                {/* onClick={handleClick} */}
                    <NavLink  to="/" className='logo'><span>Show Humanity</span></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    {/* onClick={handleClick} */}
                        <Nav  className="ms-auto menu d-flex align-items-center">

                          
                            {/* <Nav style={{color:'white'}}> */}
                            <Dropdown>
      <Dropdown.Toggle className='drops' id="dropdown-basic">
        All Service
      </Dropdown.Toggle>

      <Dropdown.Menu className='drop-menu'>
        
         {/* <Dropdown>
      <Dropdown.Toggle className='drops' id="dropdown-basic">
        Shilpo
      </Dropdown.Toggle>

      
    </Dropdown> */}

        {/* end  */}
        
        <Dropdown.Item className='down-color' href="/shishu">Street Child</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/old">Old Pople</Dropdown.Item>
     
      </Dropdown.Menu>
    </Dropdown>


    {/* next  */}

    <Dropdown>
      <Dropdown.Toggle className='drops' id="dropdown-basic">
        Donate
      </Dropdown.Toggle>

      <Dropdown.Menu className='drop-menu'>
        
         {/* <Dropdown>
      <Dropdown.Toggle className='drops' id="dropdown-basic">
        Shilpo
      </Dropdown.Toggle>

      
    </Dropdown> */}

        {/* end  */}
        
        <Dropdown.Item className='down-color' href="/virdhains">VirdhaAsram</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/etimkhanadonet">Etim Khana</Dropdown.Item>
     
      </Dropdown.Menu>
    </Dropdown>
                            {/* </Nav> */}
                            <Nav.Link as={NavLink} to="/service" className='menu-item'>Service</Nav.Link>
                            <Nav.Link as={NavLink} to="/health" className='menu-item'>Work</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className='menu-item'>About</Nav.Link>
                           
                            <Nav.Link as={NavLink} to="/contact" className='menu-item'>Contact</Nav.Link>
                           {/* <CartDrawer/> */}
                           
                            {ad? <Nav.Link as={NavLink} to="/admin-dashboard/welcome" className='menu-item'>Admin Dashboard</Nav.Link> : ""}
                        </Nav>
                         {!user.email ? <Nav.Link as={NavLink} to="/login" className='menu-item'>
                            Login
                        </Nav.Link>
                            :

                            <>
                              
                                <img onClick={() => setToggle(!toggle)} src={user.photoURL ? user.photoURL : 'https://i.ibb.co/Xsnkx3L/user.png'} alt="user" className="user-image " />
                                
                            </>
                        } 


                        {user.email && <div className={toggle ? "toggle-menu shadow-lg active" : "toggle-menu"}>
                        <Nav.Link as={NavLink} to="/dashboard/welcome" className='menu-item'>Dashboard</Nav.Link>
                            <Link style={{textDecoration:"none"}} to={'/'}><li onClick={userLogOut}>Log Out</li></Link>
                        </div>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header; 