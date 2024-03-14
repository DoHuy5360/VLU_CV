"use client";
import HomeLayout from "@/components/layouts/app/home";
import {
	V01ACertificate,
	V01AReference,
	V01AActivity,
	V01AHobby,
	V01AOther,
	V01AHead,
	V01AGoal,
	V01AExperience,
	V01AProject,
	V01AEducation,
	V01ASkill,
	V01ABadge,
} from "@/components/cv/v01A/export";
import {
	Column02,
	Column03,
} from "@/components/layouts/symmetric/export";
import { useContext, useEffect, useReducer, useState } from "react";
import A01Template from "@/components/layouts/templates/a01Template";
import A02Template from "@/components/layouts/templates/a02Template";
import CvProvider, { CvContext } from "@/contexts/cvProvider";
interface TransferType {
	[key: string]: (props: any) => JSX.Element;
}
export const Transfer: TransferType = {
	A01Template: A01Template,
	A02Template: A02Template,
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

export const de = {
	template: "A01Template",
	attrs: {
		head: {
			name: "Do Huy",
			avatar:
				"https://static.topcv.vn/user_avatars/4xcZ41tkbfgjjzvXWmjv_651574082716e_av.jpg",
			position: "Web dev",
			phone: "0963758993",
			email: "dohuy.200276@gmail.com",
			address: "Binh Chanh, TP.HCM",
			website: "https://github.com/DoHuy5360",
			birth: "17/08/2002",
			gender: "Male",
		},
		goal: {
			title: "Goal",
			content:
				"Áp dụng những kinh nghiệm về kỹ năng bán hàng và sự hiểu biết về thị trường để trở thành một nhân viên bán hàng chuyên nghiệp, mang đến nhiều giá trị cho khách hàng. Từ đó giúp Công ty tăng số lượng khách hàng và mở rộng tập khách hàng.",
		},
		experience: {
			title: "Experience",
			works: [
				{
					name: "TopCV company",
					time: "03/2015 - current",
					position: "NHÂN VIÊN BÁN HÀNG",
					tasks:
						"- Hỗ trợ viết bài quảng cáo sản phẩm qua kênh facebook, các forum,...\n - Giới thiệu, tư vấn sản phẩm, giải đáp các vấn đề thắc mắc của khách hàng qua điện thoại và email.",
				},
				{
					name: "TopCV company",
					time: "03/2015 - current",
					position: "NHÂN VIÊN BÁN HÀNG",
					tasks:
						"- Hỗ trợ viết bài quảng cáo sản phẩm qua kênh facebook, các forum,...\n- Giới thiệu, tư vấn sản phẩm, giải đáp các vấn đề thắc mắc của khách hàng qua điện thoại và email.",
				},
			],
		},
		project: {
			title: "Project",
			products: [
				{
					name: "Rainway Group",
					time: "03/2015 - current",
					where: "ANZ TOPCV",
					member: "8",
					position: "LẬP TRÌNH VIÊN",
					tasks: [
						"Phân tích và thiết kế hệ thống",
						"- Phát triển module",
						"- Tối ưu code",
						"- Sửa lỗi",
					],
					techs: [
						"- Android Studio 1.4, Java, Android 4.0",
						"- Google Cloud Message",
					],
				},
			],
		},
		education: {
			title: "Education",
			time: "10/2010 - 05/2014",
			major: "QUẢN TRỊ DOANH NGHIỆP",
			school: "Đại học TOPCV",
			status: "Tốt nghiệp loại Giỏi, điểm trung bình 8.0",
		},
		skill: {
			title: "Skills",
			skills: [
				{
					name: "Tin học văn phòng TOPCV",
					status:
						"- Sử dụng thành thạo các công cụ Word, Excel, Power Point",
				},
				{
					name: "Tiếng Anh",
					status: "- Khả năng giao tiếp Tiếng Anh trôi chảy",
				},
			],
		},
		badge: {
			title: "Badge",
			achievements: [
				{
					time: "2014",
					name: "Nhân viên xuất sắc năm công ty",
					where: "TOPCV",
				},
			],
		},
		certificate: {
			title: "Certificate",
			certificates: [
				{
					time: "2013",
					name: "Giải nhất Tài năng TOPCV",
					where: "TopCV",
				},
			],
		},
		reference: {
			title: "Reference",
			references: [
				{
					name: "Anh... - Trưởng phòng Marketing",
					where: "Công ty TOPCV",
					phone: "023093024",
				},
			],
		},
		activity: {
			title: "Activity",
			activities: [
				{
					time: "10/2013 - 08/2014",
					name: "NHÓM TÌNH NGUYỆN TOPCV",
					position: "Tình nguyện viên",
					tasks: [
						"Tập hợp các món quà và phân phát tới người vô gia cư.",
						"- Chia sẻ, động viên họ vượt qua giai đoạn khó khăn, giúp họ có những suy nghĩ lạc quan.",
					],
				},
			],
		},
		hobby: {
			title: "Hobby",
			hobbies: [
				{
					name: "Đọc sách:",
					status: "- Mỗi tháng đọc 1 quyển sách về kinh doanh.",
				},
				{
					name: "Đá bóng:",
					status:
						"- Tham gia hoạt động đá bóng của công ty hàng tuần",
				},
			],
		},
		other: {
			title: "Other",
			content: "(Nếu có)",
		},
	},
};
const de2 = {
	template: "A02Template",
	attrs: {
		head: {
			name: "Do Huy",
			avatar:
				"https://static.topcv.vn/user_avatars/4xcZ41tkbfgjjzvXWmjv_651574082716e_av.jpg",
			position: "Web dev",
			phone: "0963758993",
			email: "dohuy.200276@gmail.com",
			address: "Binh Chanh, TP.HCM",
			website: "https://github.com/DoHuy5360",
			birth: "17/08/2002",
			gender: "Male",
		},
		goal: {
			title: "Goal",
			content:
				"Áp dụng những kinh nghiệm về kỹ năng bán hàng và sự hiểu biết về thị trường để trở thành một nhân viên bán hàng chuyên nghiệp, mang đến nhiều giá trị cho khách hàng. Từ đó giúp Công ty tăng số lượng khách hàng và mở rộng tập khách hàng.",
		},
		experience: {
			title: "Experience",
			works: [
				{
					name: "TopCV company",
					time: "03/2015 - current",
					position: "NHÂN VIÊN BÁN HÀNG",
					tasks:
						"- Hỗ trợ viết bài quảng cáo sản phẩm qua kênh facebook, các forum,...\n - Giới thiệu, tư vấn sản phẩm, giải đáp các vấn đề thắc mắc của khách hàng qua điện thoại và email.",
				},
				{
					name: "TopCV company",
					time: "03/2015 - current",
					position: "NHÂN VIÊN BÁN HÀNG",
					tasks:
						"- Hỗ trợ viết bài quảng cáo sản phẩm qua kênh facebook, các forum,...\n - Giới thiệu, tư vấn sản phẩm, giải đáp các vấn đề thắc mắc của khách hàng qua điện thoại và email.",
				},
			],
		},
		project: {
			title: "Project",
			products: [
				{
					name: "Rainway Group",
					time: "03/2015 - current",
					where: "ANZ TOPCV",
					member: "8",
					position: "LẬP TRÌNH VIÊN",
					tasks: [
						"Phân tích và thiết kế hệ thống",
						"- Phát triển module",
						"- Tối ưu code",
						"- Sửa lỗi",
					],
					techs: [
						"- Android Studio 1.4, Java, Android 4.0",
						"- Google Cloud Message",
					],
				},
			],
		},
		education: {
			title: "Education",
			time: "10/2010 - 05/2014",
			major: "QUẢN TRỊ DOANH NGHIỆP",
			school: "Đại học TOPCV",
			status: "Tốt nghiệp loại Giỏi, điểm trung bình 8.0",
		},
		skill: {
			title: "Skills",
			skills: [
				{
					name: "Tin học văn phòng TOPCV",
					status:
						"- Sử dụng thành thạo các công cụ Word, Excel, Power Point",
				},
				{
					name: "Tiếng Anh",
					status: "- Khả năng giao tiếp Tiếng Anh trôi chảy",
				},
			],
		},
		badge: {
			title: "Badge",
			achievements: [
				{
					time: "2014",
					name: "Nhân viên xuất sắc năm công ty",
					where: "TOPCV",
				},
			],
		},
		certificate: {
			title: "Certificate",
			certificates: [
				{
					time: "2013",
					name: "Giải nhất Tài năng TOPCV",
					where: "TopCV",
				},
			],
		},
		reference: {
			title: "Reference",
			references: [
				{
					name: "Anh... - Trưởng phòng Marketing",
					where: "Công ty TOPCV",
					phone: "023093024",
				},
			],
		},
		activity: {
			title: "Activity",
			activities: [
				{
					time: "10/2013 - 08/2014",
					name: "NHÓM TÌNH NGUYỆN TOPCV",
					position: "Tình nguyện viên",
					tasks: [
						"Tập hợp các món quà và phân phát tới người vô gia cư.",
						"- Chia sẻ, động viên họ vượt qua giai đoạn khó khăn, giúp họ có những suy nghĩ lạc quan.",
					],
				},
			],
		},
		hobby: {
			title: "Hobby",
			hobbies: [
				{
					name: "Đọc sách:",
					status: "- Mỗi tháng đọc 1 quyển sách về kinh doanh.",
				},
				{
					name: "Đá bóng:",
					status:
						"- Tham gia hoạt động đá bóng của công ty hàng tuần",
				},
			],
		},
		other: {
			title: "Other",
			content: "(Nếu có)",
		},
	},
};
const cvs = {
	"1": de,
	"2": de2,
};
function Wrap({ children }: { children: JSX.Element }) {
	return <CvProvider>{children}</CvProvider>;
}

function ViewCV({ params }: { params: { id: String } }) {
	const [userData, setUserData] = useState<any | null>(null);
	const { state, dispatch } = useContext(CvContext);
	// useEffect(() => {
	// 	const getUserData = () => {
	// 		setUserData(cvs[params.id as keyof typeof cvs]);
	// 	};
	// 	getUserData();
	// }, []);
	// console.log(state);
	return (
		<HomeLayout>
			<Wrap>
				{Transfer[state.template](state.attrs)}
				{/* {userData !== null ? (
					// Transfer[userData.template](userData.attrs)
				) : (
					<div>No data render</div>
				)} */}
			</Wrap>
		</HomeLayout>
	);
}

export default ViewCV;
