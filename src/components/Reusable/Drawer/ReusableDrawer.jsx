import { Drawer } from "antd";

const ReusableDrawer = ({
  title,
  placement,
  open,
  onClose,
  width,
  className,
  children,
}) => {
  return (
    <Drawer
      titlee={title}
      placement={placement}
      open={open}
      onClose={onClose}
      width={width}
      className={className}
    >
      {children}
    </Drawer>
  );
};

export default ReusableDrawer;