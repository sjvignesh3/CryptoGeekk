import React from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Typography,Select, Row, Col, Card, Avatar } from 'antd'
import moment from 'moment';
import { useState } from 'react';
import Loader from './Loader';

const {Text,Title} = Typography;
const {Option} =Select;
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({simplified}) => {

  const count = simplified?'6':'15';
  const [category, setCategory] = useState("Cryptocurrency");

  const {data} = useGetCryptoNewsQuery( {newsCategory:category,count:count});
  const {data:crypto} = useGetCryptosQuery(100);
  
  if(!data?.value) return <Loader/>;
  console.log(crypto);

  return (
    <>
      {!simplified && (
        <Col span={24}>

          <Select
            showSearch
            className='select-news'
            placeholder='Select a Crypto'
            optionFilterProp='children'
            onChange={(v) => setCategory(v)}
            filterOption={(input,option) => option.children.toLowerCase().indexOf(input.toLowerCase())}
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {crypto?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
          
          </Select>

        </Col>
      )}

      <Row gutter={[24,24]}>
        {data?.value.map((news,i) => (
          <Col xs={24} sm={12} lg={8} key={i}>

            <Card hoverable className='news-card'>
              <a href={news.url} target='_blank' rel='noreferrer'>
                
                <div className='news-image-container'>
                  <Title level={4} className='news-title'>{news.name}</Title>
                  <img style={{maxWidth: '200px',maxheight: '100px'}} src={news?.image?.thumbnail?.contentUrl || demoImage} alt='news'></img>
                </div>
                
                <p>
                  {news.description.length > 250 ? `${news.description.substring(0,250)}...`:news.description}
                </p>
                
                <div className='provider-container'>
                  <div>
                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt=''></Avatar>
                    <Text className='provider-name'>{news.provider[0]?.name}</Text>
                  </div>
                  
                  <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                </div>
              
              </a>
            </Card>

          </Col>
        ))}
      </Row>
    </>
  )
}

export default News