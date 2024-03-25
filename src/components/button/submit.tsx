"use client";

import { useFormStatus } from "react-dom";

function Submit() {
	const { pending } = useFormStatus();
	return (
		<button
			className={`${
				pending ? "bg-orange-400" : "bg-green-300"
			} mt-4 w-fit py-1 px-2 rounded-sm ml-auto`}
			type='submit'
		>
			{pending ? "Processing..." : "Save"}
		</button>
	);
}
export default Submit;
