import { Table } from "ant-table-extensions";

const Pending = ({ data, columns }) => {
  return <Table columns={columns} dataSource={data} rowkey="id" />;
};

export default Pending;
