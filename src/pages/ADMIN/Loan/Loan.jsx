import { Button } from "antd";
import ReusableDrawer from "../../../components/Reusable/Drawer/ReusableDrawer";
import { useOpenDrawer } from "../../../components/Reusable/useReusableDrawer";
import LoanTable from "./LoanTable";
import LoanDrawer from "./LoanDrawer";

const Load = () => {
  const { drawers, setOpen, toggleDrawer } = useOpenDrawer();
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
          placement={"bottom"}
          height={"90%"}
          className="rounded-l-md"
          onClose={() => setOpen("addLoan", false)}
          title={"Please input loan details"}
          footer={
            <div className="flex justify-end">
              <Button type="primary">Submit Application</Button>
            </div>
          }
        >
          <LoanDrawer />
        </ReusableDrawer>
        <LoanTable />
      </div>
    </>
  );
};

export default Load;
