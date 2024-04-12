import updateProfile from "@/actions/candidate/updateProfile";
import { UserData } from "@/types/userData";

export default ({ data }: { data: UserData }) => {
	return (
		<form
			action={async () => {
				const result = await updateProfile(JSON.stringify(data));
				if (result) {
					alert("Done");
				} else {
					console.log("Update fail");
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
