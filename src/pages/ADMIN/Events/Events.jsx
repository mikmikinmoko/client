import { Button } from "antd";
import EventsTable from "./Table/EventsTable";
import ReusableDrawer from "../../../components/Reusable/Drawer/ReusableDrawer";
import { useOpenDrawer } from "../../../components/Reusable/useReusableDrawer";

const Events = () => {
  const { drawers } = useOpenDrawer();
  return (
    <>
      <ReusableDrawer>Test</ReusableDrawer>
      <div className="w-full h-full">
        <div className="flex justify-between items-center pb-5">
          <div>Events Management</div>
          <div>
            <Button>Add Events</Button>
          </div>
        </div>
        <EventsTable />
      </div>
    </>
  );
};

export default Events;