"use client";
import { Buttons } from "@/components/button/buttons";
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
		<div onClick={handleCreateImageFromHTML}>
			<Buttons.Create.Text text="Tạo ảnh bìa"/>	
		</div>
	);
}
