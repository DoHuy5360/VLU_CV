import updateProfile from "@/actions/candidate/updateProfile";
import { UserData } from "@/types/userData";
import { z } from "zod";

const workSchema = z.object({
	name: z.string().min(1),
	time: z.string().min(1),
	position: z.string().min(1),
	tasks: z.string().min(1),
});
const experienceSchema = z.object({
	title: z.string(),
	works: z.array(workSchema),
});

export default ({ data }: { data: UserData }) => {
	return (
		<form
			action={async () => {
				// todo: verify data before update
				try {
					experienceSchema.parse(data.attrs.experience);
					const result = await updateProfile(JSON.stringify(data));
					result ? alert("Done") : console.log("Update fail");
				} catch (error) {
					console.log("exp invalid");
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
