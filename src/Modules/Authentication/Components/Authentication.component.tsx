import { Container, Row, Col } from "react-bootstrap";

const AuthenticationComponent = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>Login</h1>
          <p>Need an Account?</p>
          <button>Login</button>
        </Col>
      </Row>
    </Container>
  );
};
export default AuthenticationComponent;
