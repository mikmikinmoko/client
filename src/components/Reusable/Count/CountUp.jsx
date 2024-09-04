import CountUp from "react-countup";

const ReusableCount = ({ end, separator, prefix, className, duration }) => {
  return (
    <CountUp
      className={className}
      end={end}
      separator={separator}
      prefix={prefix}
      duration={duration}
    />
  );
};

export default ReusableCount;
