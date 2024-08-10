// Hàm để lấy tên ngày trong tuần và ngày tháng
function getDayOfWeekAndDate(date) {
    const DayOfWeek = date.getDay();
    const dayNames = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
    const dayName = dayNames[DayOfWeek];
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return {
        dayName: dayName,
        day: day,
        month: month,
        year: year
    };
}

// Hàm để lấy các ngày trong tuần từ một ngày cụ thể
function getWeekDates(startDate) {
    let days = [];
    let currentDate = new Date(startDate);
    
    // Lấy ngày đầu tiên của tuần (Chủ nhật)
    currentDate.setDate(currentDate.getDate() - currentDate.getDay());

    // Thêm tất cả các ngày trong tuần vào mảng
    for (let i = 0; i < 7; i++) {
        let day = new Date(currentDate);
        days.push(getDayOfWeekAndDate(day));
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return days;
}

// Lấy ngày bắt đầu, ví dụ ngày hôm nay
let today = new Date();
let nextWeek = new Date(today);
nextWeek.setDate(today.getDate() + 7);

// Lấy danh sách các ngày trong tuần
let weekDates = getWeekDates(today);
// console.log(weekDates);
// In ra tên ngày trong tuần và ngày tháng

// weekDates.forEach(dateString => {
//     console.log(dateString);
// });

export default getWeekDates