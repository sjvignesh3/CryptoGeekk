import { Col, Row, Statistic, Typography } from 'antd'
import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi';
import millify from 'millify'
import {Cryptocurrencies,News} from './';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const {Text,Title} = Typography;

const Home = () => {
    const { data, isFetching} = useGetCryptosQuery(10);
    const globalStat = data?.data?.stats;

    if(isFetching) return <Loader/>;
    
  return (
    <div>
        <Title level={2} className='heading'>Global Crypto Stats</Title>
        <Row>
            <Col span={12}><Statistic title='Total Cryptocurrency' value={globalStat.total}/></Col>
            <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStat.totalExchanges)}/></Col>
            <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStat.totalMarketCap)}/></Col>
            <Col span={12}><Statistic title='Total 24hr Volume' value={millify(globalStat.total24hVolume)}/></Col>
            <Col span={12}><Statistic title='Total Markets' value={millify(globalStat.totalMarkets)}/></Col>
        </Row>

        <div className='home-heading-container'>
            <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
            <Text level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Text>
        </div>
        <Cryptocurrencies simplified={true}/>

        <div className='home-heading-container'>
            <Title level={2} className='home-title'>Latest Crypto News</Title>
            <Text level={3} className='show-more'><Link to='/news'>Show More</Link></Text>
        </div>
        <News simplified={true}/>
    </div>
  )
}

export default Home