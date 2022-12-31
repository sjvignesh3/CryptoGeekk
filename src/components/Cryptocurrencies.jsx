import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { useState,useEffect } from 'react';
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import millify from 'millify'

const Cryptocurrencies = ( {simplified} ) => {
  const count = simplified? 10 : 100;
  const {data,isFetching} = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    const filteredData = data?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchItem.toLowerCase()));
    setCryptos(filteredData);
  },[searchItem]);

  if(isFetching) return 'Loading....'

  return (
    <>
      {!simplified && (
        <div className='search-crypto'>
        <input placeholder='Search Cryptocurrency' onChange={(e) => setSearchItem(e.target.value)}></input> 
        </div>
      )}
   
      <Row gutter={[32,32]} className='crypto-card-container'>
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.uuid}>
            <Link to={`/crypto/${currency.uuid}`}>
            <h1>{currency.id}</h1>
              <Card 
                  title={`${currency.rank}. ${currency.name}`}
                  extra={<img className='crypto-image' src={currency.iconUrl}/>}
                  hoverable
                  >
                  <p>Price : {millify(currency.price)}</p>
                  <p>Market Cap : {millify(currency.marketCap)}</p>
                  <p>Daily Change : {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies