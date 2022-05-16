import { Container, Row, Col } from "react-bootstrap";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Shared/GlobalStore/Hooks";
import { getUserSuccessAction } from "../Store/Slices/Authentication.slice";

const AuthenticationComponent = () => {
  const isLoadingState = useAppSelector((state) => state.getUser.isLoading);
  const dispatch = useAppDispatch();
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>Login</h1>
          <p>Need an Account?</p>
          <button
            onClick={() =>
              dispatch(
                getUserSuccessAction({
                  email: "email",
                  token: "token",
                  image: "image",
                  username: "name",
                })
              )
            }
          >
            Login
          </button>
        </Col>
      </Row>
    </Container>
  );
};
export default AuthenticationComponent;
