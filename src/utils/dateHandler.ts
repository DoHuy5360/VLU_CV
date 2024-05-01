const dateRegex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

export function dateParser(YYYYMMDD: string) {
	const dateParse = dateRegex.exec(YYYYMMDD);

	let date = new Date(parseInt(dateParse?.groups?.year as string), parseInt(dateParse?.groups?.month as string), parseInt(dateParse?.groups?.day as string));
	return date;
}

function formatDayMonth(day: number | string, month: number | string) {
	// Chuyển đổi tháng và ngày thành chuỗi, nếu là số có một chữ số thì thêm số 0 phía trước
	month = (month as number) < 10 ? "0" + month : month;
	day = (day as number) < 10 ? "0" + day : day;
	return {
		day,
		month,
	};
}

export function getCurrentDate() {
	let date = new Date(); // Tạo một đối tượng Date mới, mặc định sẽ là ngày và giờ hiện tại
	let year = date.getFullYear(); // Lấy năm
	let month: number | string = date.getMonth() + 1; // Lấy tháng (tháng trong JavaScript bắt đầu từ 0, nên ta cần cộng thêm 1)
	let day: number | string = date.getDate(); // Lấy ngày

	const f = formatDayMonth(day, month);

	return `${year}-${f.month}-${f.day}`; // Kết hợp lại để tạo ra chuỗi
}

export function addDate(YYYYMMDD: string, plusDate: number) {
	const date = dateParser(YYYYMMDD);
	const temp = dateParser(YYYYMMDD);
	temp.setDate(date.getDate() + plusDate);

	let year = temp.getFullYear();
	let month = temp.getMonth();
	let day = temp.getDate();
	if (date.getMonth() < temp.getMonth()) {
		day = temp.getDate() + 1;
	}

	const f = formatDayMonth(day, month);

	return `${year}-${f.month}-${f.day}`; // Kết hợp lại để tạo ra chuỗi
}
