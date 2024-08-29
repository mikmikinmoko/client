import { Card } from "antd";

const ReusableCard = ({ children, title, extra }) => {
  return (
    <Card className="h-full overflow-auto" title={title} extra={extra}>
      {children}
    </Card>
  );
};

export default ReusableCard;
