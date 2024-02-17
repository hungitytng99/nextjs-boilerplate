import { appContainer, appContants } from "@/app-configs";
import { RequestState } from "@/app-configs/app.configs";
import IRequest from "@/shared/types/request/IRequest";
import { ShareTypes } from "@/shared/types/share.types";

const httpRequest = appContainer.get<IRequest>(ShareTypes.IRequest);

export const userRequest = {
  list: async (params: object) => {
    try {
      const response = await httpRequest.get(
        "/issuer/list/institution",
        params
      );
      return {
        state: RequestState.success,
        data: response,
      };
    } catch (error) {
      console.log("error", error);
      return {
        error: error,
        state: RequestState.error,
      };
    }
  },
};
