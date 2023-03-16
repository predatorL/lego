import { Tabs } from 'antd';

const { TabPane } = Tabs;

const onChange = (key: string) => {
  console.log(key);
};

export default function Dashboard() {
  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="翻译" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="写" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
}
