import EditInput from "../editInput";
import Save from "../save";
import { UserData } from "@/types/userData";

export default (state: UserData) => {
	return (
		<div className='flex flex-col gap-2 p-4'>
			<div className='w-28 h-28 rounded-full overflow-hidden'>
				<img
					src={state.attrs.head.avatar}
					alt='avatar'
					draggable='false'
				/>
			</div>
			<div className='text-sm flex gap-2 flex-wrap'>
				<EditInput
					label='Name'
					updateType='update-user-name'
					value={state.attrs.head.name}
				/>
				<EditInput
					label='Date of Birth'
					updateType='update-user-birth'
					value={state.attrs.head.birth}
				/>
				<EditInput
					label='Position'
					updateType='update-user-position'
					value={state.attrs.head.position}
				/>
				<EditInput
					label='Phone'
					updateType='update-user-phone'
					value={state.attrs.head.phone}
				/>
				<EditInput
					label='Email'
					updateType='update-user-email'
					value={state.attrs.head.email}
				/>
				<EditInput
					label='Address'
					updateType='update-user-address'
					value={state.attrs.head.address}
				/>
				<EditInput
					label='Website'
					updateType='update-user-website'
					value={state.attrs.head.website}
				/>
				<EditInput
					label='Gender'
					updateType='update-user-gender'
					value={state.attrs.head.gender}
				/>
			</div>
			<Save />
		</div>
	);
};
