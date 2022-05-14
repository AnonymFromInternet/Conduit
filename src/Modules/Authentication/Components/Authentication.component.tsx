import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import * as ActionCreators from "../Store/ActionCreators/ActionCreators";
import { State } from "../../../Shared/GlobalStore/RootReducer";

const AuthenticationComponent = () => {
  const dispatch = useDispatch();
  const { loginAction } = bindActionCreators(ActionCreators, dispatch);
  const authStateSelector = useSelector((state: State) => state.auth);
  console.log("state", authStateSelector);

  const login = (): void => {
    loginAction();
  };

  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>Login</h1>
          <p>Need an Account?</p>
          <button onClick={login}>Login</button>
        </Col>
      </Row>
    </Container>
  );
};
export default AuthenticationComponent;
