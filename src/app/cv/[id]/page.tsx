"use client";
import HomeLayout from "@/components/layouts/app/home";
import { V01ACertificate, V01AReference, V01AActivity, V01AHobby, V01AOther, V01AHead, V01AGoal, V01AExperience, V01AProject, V01AEducation, V01ASkill, V01ABadge } from "@/components/cv/v01A/export";
import { Column02, Column03 } from "@/components/layouts/export";
import { useEffect, useState } from "react";
interface TransferType {
	[key: string]: (props: any) => JSX.Element;
}
export const Transfer: TransferType = {
	Column02: Column02,
	Column03: Column03,
	V01AHead: V01AHead,
	V01AGoal: V01AGoal,
	V01AExperience: V01AExperience,
	V01AProject: V01AProject,
	V01AEducation: V01AEducation,
	V01ASkill: V01ASkill,
	V01ABadge: V01ABadge,
	V01ACertificate: V01ACertificate,
	V01AReference: V01AReference,
	V01AActivity: V01AActivity,
	V01AHobby: V01AHobby,
	V01AOther: V01AOther,
};
const de = [
	{
		name: "V01AHead",
		attrs: {
			name: "Do Huy",
			position: "Web dev",
			phone: "0963758993",
			email: "dohuy.200276@gmail.com",
			address: "Binh Chanh, TP.HCM",
		},
	},
	{
		name: "V01AGoal",
		attrs: {
			title: "Goal",
			content:
				"Áp dụng những kinh nghiệm về kỹ năng bán hàng và sự hiểu biết về thị trường để trở thành một nhân viên bán hàng chuyên nghiệp, mang đến nhiều giá trị cho khách hàng. Từ đó giúp Công ty tăng số lượng khách hàng và mở rộng tập khách hàng.",
		},
	},
	{
		name: "V01AExperience",
		attrs: {
			title: "Experience",
			works: [
				{
					name: "TopCV company",
					time: "03/2015 - current",
					position: "NHÂN VIÊN BÁN HÀNG",
					tasks: ["- Hỗ trợ viết bài quảng cáo sản phẩm qua kênh facebook, các forum,...", "- Giới thiệu, tư vấn sản phẩm, giải đáp các vấn đề thắc mắc của khách hàng qua điện thoại và email."],
				},
				{
					name: "TopCV company",
					time: "03/2015 - current",
					position: "NHÂN VIÊN BÁN HÀNG",
					tasks: ["- Hỗ trợ viết bài quảng cáo sản phẩm qua kênh facebook, các forum,...", "- Giới thiệu, tư vấn sản phẩm, giải đáp các vấn đề thắc mắc của khách hàng qua điện thoại và email."],
				},
			],
		},
	},
	{
		name: "V01AProject",
		attrs: {
			title: "Project",
			products: [
				{
					name: "Rainway Group",
					time: "03/2015 - current",
					where: "ANZ TOPCV",
					member: "8",
					position: "LẬP TRÌNH VIÊN",
					tasks: ["Phân tích và thiết kế hệ thống", "- Phát triển module", "- Tối ưu code", "- Sửa lỗi"],
					techs: ["- Android Studio 1.4, Java, Android 4.0", "- Google Cloud Message"],
				},
			],
		},
	},
	{
		name: "Column02",
		attrs: {
			left: {
				name: "V01AEducation",
				attrs: {
					title: "Education",
					time: "10/2010 - 05/2014",
					major: "QUẢN TRỊ DOANH NGHIỆP",
					school: "Đại học TOPCV",
					status: "Tốt nghiệp loại Giỏi, điểm trung bình 8.0",
				},
			},
			right: {
				name: "V01ASkill",
				attrs: {
					title: "Skills",
					skills: [
						{
							name: "Tin học văn phòng TOPCV",
							status: "- Sử dụng thành thạo các công cụ Word, Excel, Power Point",
						},
						{
							name: "Tiếng Anh",
							status: "- Khả năng giao tiếp Tiếng Anh trôi chảy",
						},
					],
				},
			},
		},
	},
	{
		name: "Column03",
		attrs: {
			left: {
				name: "V01ABadge",
				attrs: {
					title: "Badge",
					achievements: [
						{
							time: "2014",
							name: "Nhân viên xuất sắc năm công ty",
							where: "TOPCV",
						},
					],
				},
			},
			middle: {
				name: "V01ACertificate",
				attrs: {
					title: "Certificate",
					certificates: [
						{
							time: "2013",
							name: "Giải nhất Tài năng TOPCV",
							where: "TopCV",
						},
					],
				},
			},
			right: {
				name: "V01AReference",
				attrs: {
					title: "Reference",
					references: [
						{
							name: "Anh... - Trưởng phòng Marketing",
							where: "Công ty TOPCV",
							phone: "023093024",
						},
					],
				},
			},
		},
	},
	{
		name: "Column03",
		attrs: {
			left: {
				name: "V01AActivity",
				attrs: {
					title: "Activity",
					activities: [
						{
							time: "10/2013 - 08/2014",
							name: "NHÓM TÌNH NGUYỆN TOPCV",
							tasks: ["Tình nguyện viên", "Tập hợp các món quà và phân phát tới người vô gia cư.", "- Chia sẻ, động viên họ vượt qua giai đoạn khó khăn, giúp họ có những suy nghĩ lạc quan."],
						},
					],
				},
			},
			middle: {
				name: "V01AHobby",
				attrs: {
					title: "Hobby",
					hobbies: [
						{
							name: "Đọc sách:",
							status: "- Mỗi tháng đọc 1 quyển sách về kinh doanh.",
						},
						{
							name: "Đá bóng:",
							status: "- Tham gia hoạt động đá bóng của công ty hàng tuần",
						},
					],
				},
			},
			right: {
				name: "V01AOther",
				attrs: {
					title: "Other",
					content: "(Nếu có)",
				},
			},
		},
	},
];
function ViewCV() {
	const [userData, setUserData] = useState<any[]>([]);
	useEffect(() => {
		setUserData(de);
	}, []);
	return (
		<HomeLayout>
			<div className='w-full p-2 bg-slate-200'>
				<div className='m-auto sm:w-11/12 md:w-2/3 lg:w-2/3 xl:w-2/4  p-4 bg-white'>
					<div id='sectionParent' className='flex flex-col gap-4'>
						{userData.map((section, index) => (
							<div key={index}>{Transfer[section.name](section.attrs)}</div>
						))}
					</div>
				</div>
			</div>
		</HomeLayout>
	);
}

export default ViewCV;
