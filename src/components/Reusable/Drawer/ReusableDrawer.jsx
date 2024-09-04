import { Drawer } from "antd";

const ReusableDrawer = ({
  title,
  placement,
  open,
  onClose,
  width,
  className,
  children,
  height,
  footer,
}) => {
  return (
    <Drawer
      title={title}
      placement={placement}
      open={open}
      onClose={onClose}
      width={width}
      height={height}
      className={className}
      footer={footer}
    >
      {children}
    </Drawer>
  );
};

export default ReusableDrawer;
