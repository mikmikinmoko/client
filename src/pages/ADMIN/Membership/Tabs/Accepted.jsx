import { Table } from "ant-table-extensions";

const Accepted = ({ data, columns }) => {
  return <Table dataSource={data} columns={columns} />;
};

export default Accepted;
