import { Button, Form, message } from "antd";
import ReusableDrawer from "../../../components/Reusable/Drawer/ReusableDrawer";
import { useOpenDrawer } from "../../../components/Reusable/useReusableDrawer";
import LoanTable from "./LoanTable";
import LoanDrawer from "./LoanDrawer";
import { useAddLoan, useGetLoans } from "../../../services/admin/request/loan";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const Load = () => {
  const { drawers, setOpen, toggleDrawer } = useOpenDrawer();
  const { data: loans, isLoading, refetch } = useGetLoans();

  const [form] = Form.useForm();
  const inputs = Form.useWatch(null, form);
  console.log(inputs);
  const addLoan = useAddLoan();
  console.log(addLoan);

  useEffect(() => {
    const interest = inputs?.amount * 0.03;

    form.setFieldsValue({
      interest,
      loanInterest: 3,
    });
  }, [inputs]);
  const onFinish = (val) => {
    const { date, ...values } = val;
    console.log(values);
    console.log(date);

    // addLoan.mutate(val, {
    //   onSuccess: (data) => {
    //     refetch();
    //     message.success(data?.data?.message);
    //     toggleDrawer("addLoan", false);
    //   },
    //   onError: (err) => {
    //     message.warning(err?.response?.data.message);
    //   },
    // });
  };

  return (
    <>
      <div className="w-full h-full">
        <div className="flex justify-between items-center pb-5">
          <Helmet>
            <title>SIRMMPC | Loan Management</title>
          </Helmet>
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
