var thongTinLopHoc =[
    {
        mon: "Toan",
        gv: "Nghiêm Thị Hồng Hạnh",
        sdt: "0915014329",
        ID: "7986862630",
        pass: "tamNhu0301"
    },
    {
        mon: "Van",
        gv: "Bùi Thị Kim Ánh",
        sdt: "0974704715",
        ID: "8760856770",
        pass: "704715"
    },
    {
        mon: "Anh",
        gv: "Đỗ Đoàn Diệu Linh",
        sdt: "0941518286",
        ID: "8306858571",
        pass: "12345"
    },
    {
        mon: "Ly",
        gv: "Nguyễn Thùy Linh",
        sdt: "0983091993",
        ID: "5039839690",
        pass: "Linh@"
    },
    {
        mon: "Hoa",
        gv: "Nguyễn Thị Thúy Hường",
        sdt: "0967385869",
        ID: "6539369080",
        pass: "TrvA70"
    },
    {
        mon: "Sinh",
        gv: "Bùi Thu Hà",
        sdt: "0974498139",
        ID: "4711814708",
        pass: "211289"
    },
    {
        mon: "Su",
        gv: "Lê Thị Trà",
        sdt: "0979561800",
        ID: "2336333457",
        pass: "361674"
    },
    {
        mon: "Dia",
        gv: "Vũ Quốc Lịch",
        sdt: "0967385869",
        ID: "6539369080",
        pass: "TrvA70"
    },
    {
        mon: "GDCD",
        gv: "Trần Văn Năng",
        sdt: "0917046146",
        ID: "8856018255",
        pass: "123456"
    },
    {
        mon: "Cong Nghe",
        gv: "Đặng Thị Thu Hà",
        sdt: "09733281530",
        ID: "8312809650",
        pass: "tycn23ams"
    },
    {
        mon: "Tin (thay Tung)",
        gv: "Nguyễn Thanh Tùng",
        sdt: "0968666245",
        ID: "3849137409",
        pass: "2357"
    },
    {
        mon: "Tin (co Hanh)",
        gv: "Nghiêm Thị Hồng Hạnh",
        sdt: "0915014329",
        ID: "7986862630",
        pass: "tamNhu0301"
    },
    {
        mon: "The Duc",
        gv: "Lê Khả Chiến",
        sdt: "0934305671",
        ID: "9994113715",
        pass: "0934"
    },
    {
        mon: "GDQP",
        gv: "Nguyễn Thị Thúy",
        sdt: "0988847346",
        ID: "3017265074",
        pass: "191088"
    },
]
let clipboard_ID = ""
let clipboard_pass = ""
function DisplayData(lop){
    console.log(lop)
    for(let i = 0;i<14;i++){
        if(lop == thongTinLopHoc[i].mon){
            document.getElementById("classData_mon").innerHTML = "Mon: " + thongTinLopHoc[i].mon
            document.getElementById("classData_gv").innerHTML = "GV: " + thongTinLopHoc[i].gv
            document.getElementById("classData_sdt").innerHTML = "Mon: " + thongTinLopHoc[i].sdt
            document.getElementById("classData_id").innerHTML = "ID: " + thongTinLopHoc[i].ID
            clipboard_ID = thongTinLopHoc[i].ID
            document.getElementById("classData_pass").innerHTML = "Pass: " + thongTinLopHoc[i].pass
            clipboard_pass = thongTinLopHoc[i].pass
        }
    }
}
function copyToClipboard(type){
    if(type=="id"){
        /* Get the text field */
        var copyText = document.getElementById("clipboard_id");

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        document.execCommand("copy");
    }
}