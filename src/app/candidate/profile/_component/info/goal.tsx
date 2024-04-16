import { UserData } from "@/types/userData";
import EditArea from "../editArea";

export default (data: UserData) => {
	return (
		<EditArea
			label='Goal'
			updateType='update-user-goal'
			value={data.attrs.goal.content}
		/>
	);
};
