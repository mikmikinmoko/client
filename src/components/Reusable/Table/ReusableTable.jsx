import { Table } from "ant-table-extensions";

const ReusableTable = ({
  searchFunction,
  columns,
  isLoading,
  data,
  rowKey,
}) => {
  return (
    <Table
    exportable={true}
    //   searchableProps={{
      //     searchFunction: searchFunction,
      //   }}
      searchable={true}
      pagination={{
        showSizeChanger: true,
        defaultPageSize: 10,
        pageSizeOptions: [10, 20, 50, 100],
      }}
      rowKey={rowKey}
      columns={columns}
      loading={isLoading}
      dataSource={data}
      //   scroll={{ y: "60vh", x: "100vw" }}
    />
  );
};

export default ReusableTable;
