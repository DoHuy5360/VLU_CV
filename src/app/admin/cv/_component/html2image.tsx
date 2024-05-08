"use client";
import * as htmlToImage from "html-to-image";

export default function getThumbnailFromHtml({ id, display }: { id: string; display: Function }) {
	const handleCreateImageFromHTML = () => {
		var node = document.getElementById(id);
		if (node !== null)
			htmlToImage
				.toPng(node)
				.then(function (dataUrl) {
					display(dataUrl);
				})
				.catch(function (error) {
					console.error("oops, something went wrong!", error);
				});
	};

	return (
		<button onClick={handleCreateImageFromHTML} className='text-xs text-center bg-[#EFEFEF] hover:bg-[#E5E5E5] border-[1px] border-[#767676] rounded-sm p-1 w-fit cursor-pointer' type='button'>
			Tạo ảnh bìa
		</button>
	);
}
