import {
  getUserSuccessWatcher,
  getUserWatcher,
} from "../../../Modules/Authentication/Store/Sagas/authentication.sagas";

export default function* rootSaga() {
  yield getUserSuccessWatcher();
}
