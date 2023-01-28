import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import {Navbar,Home,Exchanges,CryptoDetails,Cryptocurrencies,News} from './components' 
import './App.css'
import Title from 'antd/es/skeleton/Title';

function App() {
  return (
    <div className="app">
      <div className='navbar'>
          <Navbar/>
      </div>
      <div className='main'>
          <Layout>
              <div className='routes'>
                  <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/cryptocurrencies' element={<Cryptocurrencies simplified={false}/>}></Route>
                    <Route path='/crypto/:coinId' element={<CryptoDetails/>}></Route>
                    <Route path='/news' element={<News simplified={false}/>}></Route>
                    <Route path='/exchanges' element={<Exchanges/>}></Route>
                  </Routes>
              </div>
          </Layout>
      
      <div className='footer'>
        <Typography.Title level={3} style={{color:'white', textAlign:'center'}}>
        CryptoGeekk<br/>
          All rights reserved
        </Typography.Title>
    
        <Space>
          <Link to='/'>Home</Link>
          <Link to='/exchanges'>Exchanges</Link>
          <Link to='/news'>News</Link>
        </Space>
        <br/><br/>
        <Typography.Title level={5} style={{color:'white', textAlign:'center'}} >Site Crafted by <a href="https://www.linkedin.com/in/vigneshwaran3/" rel='noreferer' target='_blank'>Vigneshwaran J ❤</a></Typography.Title>
        </div>
      </div>
    </div>
  );
}

export default App;
