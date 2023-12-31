
import { AppBar, Toolbar,  styled } from '@mui/material';

import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
background: #111111;
`;

const Tabs = styled(NavLink)`
font-size: 20px;
margin-right:40px;
text-decoration: none;
color: inherit;
`;
const NavBar = () => {
    return (
        <Header position='static'>
            <Toolbar>
                {/* <Tabs>
                    <Tab label="Home"/>
                    <Tab label="All Userss"/>
                    <Tab label="Add Users"/>
                </Tabs> */}
                <Tabs to="/">Home </Tabs>
                <Tabs to="/all">All Users</Tabs>
                <Tabs to="/add">Add User</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;