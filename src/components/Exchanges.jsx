import React from 'react';
import { Row, Col } from 'antd';

/* eslint-disable */
const Exchanges = () => {
  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
    </>
  );
};

export default Exchanges;