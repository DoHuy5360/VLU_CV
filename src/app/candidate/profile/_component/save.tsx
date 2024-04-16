import updateProfile from "@/actions/candidate/updateProfile";
import { UserData } from "@/types/userData";
import { userDataSchema } from "@/validation/userData";

export default ({ data }: { data: UserData }) => {
	return (
		<form
			action={async () => {
				// todo: verify data before update
				try {
					userDataSchema.parse(data);
					const result = await updateProfile(JSON.stringify(data));
					result ? alert("Done") : console.log("Update fail");
				} catch (error) {
					console.log(error);
				}
			}}
			className='flex justify-end pb-14 pt-2 pr-2 border-t-[1px] border-slate-200'
		>
			<button
				className='bg-green-300 px-4 py-2 rounded-full text-sm '
				type='submit'
			>
				Save
			</button>
		</form>
	);
};
