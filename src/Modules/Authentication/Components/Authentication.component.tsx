import { Container, Row, Col } from "react-bootstrap";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Shared/GlobalStore/Hooks";
import { getUser, isLoadingSelect } from "../Store/Authentication.slice";

const AuthenticationComponent = () => {
  const isLoadingState = useAppSelector((state) => state.getUser.isLoading);
  const dispatch = useAppDispatch();
  const test = (): void => {};
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>Login</h1>
          <p>Need an Account?</p>
          <button onClick={() => dispatch(getUser())}>Login</button>
        </Col>
      </Row>
    </Container>
  );
};
export default AuthenticationComponent;
