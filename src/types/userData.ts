export type Head = {
	name: string;
	avatar: string;
	position: string;
	phone: string;
	email: string;
	address: string;
	website: string;
	birth: string;
	gender: string;
};

export type Goal = {
	title: string;
	content: string;
};
export type Work = {
	name: string;
	time: string;
	position: string;
	tasks: string;
};
export type Experience = {
	title: string;
	works: Work[];
};
export type Project = {
	title: string;
	products: [
		{
			name: string;
			time: string;
			where: string;
			member: string;
			position: string;
			tasks: string[];
			techs: string[];
		}
	];
};
export type Education = {
	title: string;
	time: string;
	major: string;
	school: string;
	status: string;
};
export type Ability = {
	name: string;
	status: string;
};
export type Skill = {
	title: "Skills";
	skills: Ability[];
};

export type Achievement = {
	time: string;
	name: string;
	where: string;
};

export type Badge = {
	title: string;
	achievements: Achievement[];
};

export type Merit = {
	time: string;
	name: string;
	where: string;
};

export type Certificate = {
	title: string;
	certificates: Merit[];
};

export type Colleague = {
	name: string;
	where: string;
	phone: string;
};

export type Reference = {
	title: string;
	references: Colleague[];
};
export type Act = {
	time: string;
	name: string;
	position: string;
	tasks: string[];
};
export type Activity = {
	title: "Activity";
	activities: Act[];
};
export type Favorite = {
	name: string;
	status: string;
};
export type Hobby = {
	title: string;
	hobbies: Favorite[];
};
export type Other = {
	title: string;
	content: string;
};
export type Attrs = {
	head: Head;
	goal: Goal;
	experience: Experience;
	project: Project;
	education: Education;
	skill: Skill;
	badge: Badge;
	certificate: Certificate;
	reference: Reference;
	activity: Activity;
	hobby: Hobby;
	other: Other;
};

export type UserData = {
	template: string;
	attrs: Attrs;
};

export const userDataSample: UserData = {
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
