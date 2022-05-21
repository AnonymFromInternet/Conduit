import { createListenerMiddleware } from "@reduxjs/toolkit";

import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from "../Store/Slices/Feed.slice";
import { FeedService } from "../Services/Feed.service";
import { TokenService } from "../../../Services/Token.service";

export const getFeedListener = createListenerMiddleware();

getFeedListener.startListening({
  actionCreator: getFeedAction,
  effect: async (action, listenerApi) => {
    FeedService.getFeed(action.payload)
      .then((response) => {
        listenerApi.dispatch(getFeedSuccessAction(response.data));
      })
      .catch((error) => {
        console.log("Backend error is: ", error);
        listenerApi.dispatch(getFeedFailureAction());
      });
  },
});
