import React from 'react'
import { useGetExchangesQuery } from '../services/coinGecko'
import {Collapse, Row, Col, Avatar, Typography} from 'antd'
import Loader from './Loader';
import millify from 'millify'

const {Panel} = Collapse;
const {Text} = Typography;

const Exchanges = () => {
  const {data} = useGetExchangesQuery();
  if(!data) return <Loader/>;
  console.log(data);
  return (
    <>
    <Row>
        <Col span={8} flex>Exchanges</Col>
        <Col span={8} flex>24h Trade Volume</Col>
        <Col span={8} flex>Trust Score</Col>
    </Row>

    <Collapse defaultActiveKey={['1']} accordion>
      {data.map((exc) => (
      <Panel 
        key={exc.id}
        header={(
          <Row key={exc.id}>
            <Col span={8} flex>
              <Avatar className="exchange-image" src={exc.image} />
              <Text><strong>{exc.name}</strong></Text>
            </Col>
            <Col span={8} flex>${millify(exc.trade_volume_24h_btc)}</Col>
            <Col span={8} flex>{millify(exc.trust_score)}%</Col>
          </Row>
          )}
        >
        <p>Country : {exc.country}</p>
        <p>Established Year : {exc.year_established}</p>
        <p>Normalized 24h Trade Volume : {millify(exc.trade_volume_24h_btc_normalized)}</p>
        <p>Rank based on Trust : {exc.trust_score_rank}</p>
        <a href={exc.url} target='_blank' rel='noreferrer'>Official Site</a>
      </Panel>
      ))}
    </Collapse>
    </>
  )
}

export default Exchanges