import { HomeOutlined,BulbOutlined, FundOutlined, MoneyCollectOutlined, MenuOutlined } from '@ant-design/icons'
import { Avatar, Button, Menu, Typography } from 'antd'
import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import icon from '../images/cryptocurrency.png'

const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setscreenSize] = useState();

    useEffect(() => {
        const handleResize = () => setscreenSize(window.innerWidth);
        window.addEventListener('resize',handleResize);
        handleResize();
        return () => window.removeEventListener('resize',handleResize);
      }, []);
      
      useEffect(() => {
        if(screenSize>768) setActiveMenu(true);
        else setActiveMenu(false);
      }, [screenSize]);

  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size='large'/>
            <Typography.Title level={2} className='logo'>
                <Link to='/'>CryptoGeekk</Link>
            </Typography.Title>
            <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                <MenuOutlined/>
            </Button>
        </div>

        {activeMenu && (
        <Menu style={{fontSize:'20px'}} theme='dark' level={1}>
            <Menu.Item icon={<HomeOutlined/>}>
                <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined/>}>
                <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined/>}>
                <Link to='/exchanges'>Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined/>}>
                <Link to='/news'>News</Link>
            </Menu.Item>
        </Menu>
        )}
    </div>
  )
}

export default Navbar