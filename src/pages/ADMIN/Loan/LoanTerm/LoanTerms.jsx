import { Button, Form } from "antd";
import { Helmet } from "react-helmet";
import LoanTermsDrawer from "./Drawer/LoanTermsDrawer";
import { Table } from "ant-table-extensions";
import { useGetLoanTerms } from "../../../../services/admin/request/loan";
import moment from "moment";
import { useLoanStore } from "../../../../store/admin/useLoan";

const LoanTerms = () => {
  const [form] = Form.useForm();
  const setLoanTermDrawer = useLoanStore((state) => state.setLoanTermDrawer);
  const { data, isLoading } = useGetLoanTerms();

  const columns = [
    {
      title: "Account Id",
      dataIndex: "accountId",
    },
    {
      title: "Days",
      dataIndex: "days",
    },
    {
      title: "Interest",
      dataIndex: "interest",
    },
    {
      title: "Description",
      dataIndex: "descriptions",
    },
    {
      title: "Date Created",
      dataIndex: "dateCreated",
      render: (date) => moment(date).format("lll"),
    },
  ];
  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center pb-5">
        <Helmet>
          <title>SIRMMPC | Loan Management</title>
        </Helmet>
        <div>Loan Terms</div>
        <div>
          <Button onClick={() => setLoanTermDrawer(true)}>Add Terms</Button>
        </div>
      </div>
      <LoanTermsDrawer form={form} />
      <Table columns={columns} dataSource={data} loading={isLoading} />
    </div>
  );
};

export default LoanTerms;
