import { registerWatcher } from "../../../Modules/Authentication/Sagas/authentication.sagas";

export default function* rootSaga() {
  yield registerWatcher();
}
