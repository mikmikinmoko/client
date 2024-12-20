import QRCode from "react-qr-code";

const GenerateQR = ({ value }) => {
  return (
    <QRCode
      size={256}
      style={{ height: "auto", maxWidth: "100%", width: "100%" }}
      value={value}
      viewBox={`0 0 256 256`}
    />
  );
};

export default GenerateQR;
