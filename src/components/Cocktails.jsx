import React from 'react';
import { Row, Col, Layout, Input } from 'antd';

const { Search } = Input;

const Cocktails = () => {
  return (
    <div>
      <Layout.Header
        style={{
          display: 'flex',
          alignItems: 'center',
          color: '#fff',
          fontSize: '20px',
        }}
      >
        Find Your Favorite Cocktails
        <div style={{ display: 'flex', marginLeft: '25px' }}>
          <Search
            placeholder='Search Cocktails'
            allowClear
            // onSearch={onSearch}
            style={{
              width: 250,
            }}
          />
        </div>
      </Layout.Header>

      <div style={{ maxWidth: 1140, margin: 'auto' }}>
        <Row>
          <Col span={24}>col</Col>
        </Row>
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>

        <Layout.Content>Content</Layout.Content>
        <Layout.Footer>Footer</Layout.Footer>
      </div>
    </div>
  );
};

export default Cocktails;
