import { Table } from "ant-table-extensions";
import { Tag } from "antd";

const Pending = ({ data, columns }) => {
  return <Table columns={columns} dataSource={data} rowkey="id" />;
};

export default Pending;
