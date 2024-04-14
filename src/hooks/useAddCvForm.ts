import { CvAction, CvContext } from "@/contexts/cvProvider";
import { useCallback, useContext } from "react";

export function useAddCvForm(dispatchData: CvAction) {
	const { dispatch } = useContext(CvContext);
	const f = useCallback(() => {
		dispatch(dispatchData);
	}, [dispatchData]);
	return { f };
}
