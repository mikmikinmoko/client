import { Button, Form } from "antd";
import { Helmet } from "react-helmet";
import { useOpenDrawer } from "../../../../components/Reusable/useReusableDrawer";
import ReusableDrawer from "../../../../components/Reusable/Drawer/ReusableDrawer";
import LoanTermsDrawer from "./Drawer/LoanTermsDrawer";
import { Table } from "ant-table-extensions";

const LoanTerms = () => {
  const [form] = Form.useForm();
  const drawers = useOpenDrawer((state) => state.drawers);
  const setOpen = useOpenDrawer((state) => state.setOpen);
  const toggleDrawer = useOpenDrawer((state) => state.toggleDrawer);

  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center pb-5">
        <Helmet>
          <title>SIRMMPC | Loan Management</title>
        </Helmet>
        <div>Loan Terms</div>
        <div>
          <Button onClick={() => toggleDrawer("addTerms")}>Add Terms</Button>
        </div>
      </div>
      <ReusableDrawer
        open={drawers["addTerms"] || false}
        placement={"right"}
        width={"30%"}
        onClose={() => setOpen("addTerms", false)}
        title={"Add Terms"}
        footer={
          <Button
            onClick={() => form.submit()}
            type="primary"
            className="float-right"
          >
            Submit
          </Button>
        }
      >
        <LoanTermsDrawer form={form} />
      </ReusableDrawer>
      <Table />
    </div>
  );
};

export default LoanTerms;
