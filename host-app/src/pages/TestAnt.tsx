import React from "react";
import {
  Layout,
  Menu,
  Input,
  Table,
  Progress,
  Card,
  Typography,
  Tabs,
  Row,
  Col,
} from "antd";

const { Header, Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

const TestAnt = () => {
  const columns = [
    {
      title: "Questionnaire Name",
      dataIndex: "name",
    },
    {
      title: "Process",
      dataIndex: "process",
    },
    {
      title: "End Term",
      dataIndex: "end",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (value:any) => <Progress percent={value} status="exception" />,
    },
  ];

  const data = [
    {
      key: "1",
      name: "Fulltime Employee",
      process: "50%",
      end: "01/08/2025",
      status: 50,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={80} style={{ background: "#005533", color: "#fff" }}>
        <Menu
          mode="vertical"
          theme="dark"
          style={{ background: "#005533", textAlign: "center", paddingTop: 20 }}
        >
          <Menu.Item key="1">🏠</Menu.Item>
          <Menu.Item key="2">📄</Menu.Item>
          <Menu.Item key="3">📊</Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header style={{ padding: "0 24px", background: "#fff" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Title level={3} style={{ margin: 0, color: "#237804" }}>
              Sustainability Data Collection
            </Title>
            <Input.Search placeholder="Search..." style={{ width: 240 }} />
          </div>
        </Header>

        <Content style={{ padding: "24px", background: "#f0f2f5" }}>
          {/* Banner */}
          <Card
            cover={
              <img
                alt="banner"
                src="https://source.unsplash.com/featured/?farm,field"
                style={{ height: 200, objectFit: "cover" }}
              />
            }
          >
            <Paragraph style={{ color: "#555" }}>
              Kindly be reminded to gather and record all necessary information...
            </Paragraph>
          </Card>

          <Row gutter={16} style={{ marginTop: 24 }}>
            {/* Welcome */}
            <Col xs={24} lg={8}>
              <Card title="Welcome Back,">
                <Paragraph>
                  Mohamad Manmohan Abdullah
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </Paragraph>
              </Card>
            </Col>

            {/* Assignment + Tabs */}
            <Col xs={24} lg={16}>
              <Card
                title="Your Assignments"
                extra={
                  <Tabs defaultActiveKey="1" items={[
                    { key: '1', label: 'On Process' },
                    { key: '2', label: 'Finished' }
                  ]} />
                }
              >
                {/* pagination กำหนดแถวต่อหน้าได้เลย */}
                <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }}/>
              </Card>
            </Col>
          </Row>

          {/* Graphs */}
          <Row gutter={16} style={{ marginTop: 24 }}>
            <Col xs={24} lg={16}>
              <Card title="Graph Title" style={{ height: 300 }}>
                <div style={{ height: "100%", textAlign: "center", paddingTop: 100 }}>
                  Bar Chart Here
                </div>
              </Card>
            </Col>
            <Col xs={24} lg={8}>
              <Row gutter={[0, 16]}>
                <Col span={24}>
                  <Card title="Graph Title">
                    <div style={{ height: 100, textAlign: "center", paddingTop: 35 }}>
                      Line Chart
                    </div>
                  </Card>
                </Col>
                <Col span={24}>
                  <Card title="Graph Title">
                    <div style={{ height: 100, textAlign: "center", paddingTop: 35 }}>
                      Column Chart
                    </div>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default TestAnt;
