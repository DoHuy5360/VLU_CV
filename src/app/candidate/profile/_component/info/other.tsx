import { UserData } from "@/types/userData";
import EditArea from "../editArea";

export default (data: UserData) => {
	return (
		<EditArea
			allowNull={true}
			label='Other'
			updateType='update-user-other-content'
			value={data.attrs.other.content}
		/>
	);
};
