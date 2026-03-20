import { Container } from "react-bootstrap";

const CustomContainer = ({ children }) => {
  return (
    <Container
      style={{
        height: "100%",
      }}
    >
      {children}
    </Container>
  );
};

export default CustomContainer;
