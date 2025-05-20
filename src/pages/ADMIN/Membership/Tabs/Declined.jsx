import { Table } from "ant-table-extensions";

const Declined = ({ data, columns }) => {
  return <Table dataSource={data} columns={columns} />;
};

export default Declined;
