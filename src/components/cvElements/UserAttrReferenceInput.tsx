import { CvContext } from "@/contexts/cvProvider";
import { useContext, useState } from "react";

function UserAttrReferenceInput({
	className,
	type,
	value,
}: {
	type: string;
	value: string;
	className?: string;
}) {
	const { dispatch, editable, setEditable } = useContext(CvContext);
	return (
		<input
			disabled={!editable}
			className={
				!editable ? `disabled:bg-transparent ${className}` : className
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
