import { useState } from "react";

export default function useLoading() {
	const [isLoading, setLoading] = useState(false);

	return {
		isLoading,
		setLoading,
		LoadingElement: () => <div>Loading...</div>,
	};
}
