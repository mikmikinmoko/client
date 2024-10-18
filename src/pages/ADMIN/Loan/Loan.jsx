import { Button, Form, message } from "antd";
import ReusableDrawer from "../../../components/Reusable/Drawer/ReusableDrawer";
import { useOpenDrawer } from "../../../components/Reusable/useReusableDrawer";
import LoanTable from "./LoanTable";
import LoanDrawer from "./LoanDrawer";
import { useAddLoan, useGetLoans } from "../../../services/admin/request/loan";

const Load = () => {
  const { drawers, setOpen, toggleDrawer } = useOpenDrawer();
  const { data: loans, isLoading, refetch } = useGetLoans();

  const [form] = Form.useForm();
  const addLoan = useAddLoan();
  console.log(addLoan);

  const onFinish = (val) => {
    addLoan.mutate(val, {
      onSuccess: (data) => {
        refetch();
        message.success(data?.data?.message);
        toggleDrawer("addLoan", false);
      },
      onError: (err) => {
        message.warning(err?.response?.data.message);
      },
    });
  };

  return (
    <>
      <div className="w-full h-full">
        <div className="flex justify-between items-center pb-5">
          <div>Loan Management</div>
          <div>
            <Button onClick={() => toggleDrawer("addLoan")}>Add Loan</Button>
          </div>
        </div>
        <ReusableDrawer
          open={drawers["addLoan"] || false}
          placement={"right"}
          width={"30%"}
          className="rounded-l-md"
          onClose={() => setOpen("addLoan", false)}
          title={"Please input loan details"}
          footer={
            <div className="flex justify-end">
              <Button type="primary" onClick={() => form.submit()}>
                Submit Application
              </Button>
            </div>
          }
        >
          <LoanDrawer form={form} onFinish={onFinish} />
        </ReusableDrawer>
        <LoanTable isLoading={isLoading} loans={loans} />
      </div>
    </>
  );
};

export default Load;
