import useSWR from "swr";
import useSWRImmutable from "swr/immutable";

function useTemplates() {
	const { data, error, isLoading } = useSWRImmutable(
		"/api/cv",
		(url) => fetch(url).then((res) => res.json())
	);
	return { data, error, isLoading };
}

export default useTemplates;
