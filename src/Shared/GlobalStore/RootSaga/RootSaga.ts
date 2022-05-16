import { getUserWatcher } from "../../../Modules/Authentication/Store/Sagas/authentication.sagas";

export default function* rootSaga() {
  yield getUserWatcher();
}
