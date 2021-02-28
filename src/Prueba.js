import React from "react";
import { Row, Col, Layout, PageHeader } from "antd";

const Prueba = () => {
  const { Content } = Layout;
  return (
    <Layout>
      <PageHeader title={<img src="/logo.png" alt="username" />} subTitle="Technical Evaluation" />
      <Content>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <p>Sth here</p>
          </Col>
          <Col span={18}>
            <p>Sth There</p>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Prueba;
