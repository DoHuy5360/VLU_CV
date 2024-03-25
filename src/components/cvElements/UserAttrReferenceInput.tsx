import { CvContext } from "@/contexts/cvProvider";
import { useContext, useState } from "react";

function UserAttrReferenceInput({
	id,
	className,
	type,
	value,
}: {
	id?: string;
	type: string;
	value: string;
	className?: string;
}) {
	const { dispatch, editable } = useContext(CvContext);
	return (
		<input
			id={id}
			disabled={!editable}
			className={
				!editable
					? `disabled:bg-transparent w-full ${className}`
					: `w-full ${className}`
			}
			onChange={(e) => {
				dispatch({
					type,
					value: e.target.value,
				});
			}}
			value={value}
		/>
	);
}

export default UserAttrReferenceInput;
