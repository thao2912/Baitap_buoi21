function getElementById(id) {
    return document.getElementById(id);
}

const dsnv = new DSNV();
const valid = new Validations();

layData();

function themNV() {
    const nv = layGiaTriNhap();
    let valid = false;


    if (!valid) {
        return;
    }

    dsnv.them(nv);
    hienthiDSNV(dsnv.arr);
    getElementById("btnThemNV")
    getElementById("btnThemNV").setAttribute("data-dismiss", "modal");
    luuTruData();



}

function capNhatNV() {
    const nv = layGiaTriNhap();
    dsnv.capNhat(nv);

    hienthiDSNV(dsnv.arr);
    getElementById("btnThemNV").setAttribute("data-dismiss", "modal");
    luuTruData();
}

function xoaNV(id) {
    dsnv.xoa(id);

    hienthiDSNV(dsnv.arr);
    luuTruData();
}


function layTTNVChinhSua(taiKhoan) {
    xoaDuLieu();
    const nv = dsnv.layThongTinTheoId(taiKhoan);

    if (nv) {
        getElementById("tknv").disabled = true;
        getElementById("tknv").value = nv.taiKhoan;
        getElementById("name").value = nv.hoTen;
        getElementById("email").value = nv.email;
        getElementById("password").value = nv.matKhau;
        getElementById("datepicker").value = nv.ngayLam;
        getElementById("luongCB").value = nv.luongCoBan;
        getElementById("chucvu").value = nv.chucVu;
        getElementById("gioLam").value = nv.gioLamTrongThang;
    }

}

function layGiaTriNhap() {
    const _taiKhoan = getElementById("tknv").value;
    const _hoTen = getElementById("name").value;
    const _email = getElementById("email").value;
    const _matKhau = getElementById("password").value;
    const _ngayLam = getElementById("datepicker").value;
    const _luongCoBan = getElementById("luongCB").value;
    const _chucVu = getElementById("chucvu").value;
    const _gioLamTrongThang = getElementById("gioLam").value;

    const nv = new NhanVien(_taiKhoan, _hoTen, _email, _matKhau, _ngayLam, _luongCoBan, _chucVu, _gioLamTrongThang);
    nv.xepLoai();
    nv.tinhLuong();

    return nv;
}

function hienthiDSNV(arr) {
    let content = "";

    dsnv.arr.forEach(nv => {
        content += `
            <tr>
                <td>
                    ${nv.taiKhoan}
                </td> 
                <td>
                    ${nv.hoTen}
                </td> 
                <td>
                    ${nv.email}
                </td> 
                <td>
                    ${nv.ngayLam}
                </td> 
                <td>
                    ${nv.chucVu}
                </td> 
                <td>
                    ${nv.tongLuong}
                </td> 
                <td>
                    Nhân viên ${nv.xepLoaiNV}
                </td> 
                <td>
                    <button class="btn btn-danger" data-toggle="modal" data-target="#myModal" onclick="layTTNVChinhSua('${nv.taiKhoan}')">Chỉnh sửa thông tin</button>
                </td> 
                <td>
                    <button class="btn btn-danger" data-toggle="modal" data-target="#myModal" onclick="xoa('${nv.taiKhoan}')">Chỉnh sửa thông tin</button>
                </td> 
            </tr>`;
    });

    getElementById("tableDanhSach").innerHTML = content;


}

function kiemTraLoiNhapTT(isAdd, nv) {
    let valid = false;
    // Tai Khoan
    if (!isAdd) {
        // checkTrungTaiKhoan
    }

    valid += valid.kiemtraRong("", "tbTKNV", nv.taiKhoan, "(*) Vui lòng nhập thông tin.");
    if (valid) valid += valid.kiemtraDinhDang(/^[0-9]+$/, "tbTKNV", nv.taiKhoan, "(*) Vui lòng nhập giá trị là chữ số.");
    if (valid) valid += valid.kiemtraChieuDai(4, 6, "tbTKNV", nv.taiKhoan, "(*) Tài khoản tối đa 4 - 6 ký số.");

    // Ten NV
    valid += valid.kiemtraRong("", "tbTen", nv.hoTen, "(*) Vui lòng nhập thông tin.");

    // Email
    valid += valid.kiemtraRong("", "tbEmail", nv.email, "(*) Vui lòng nhập thông tin.");

    // Mat khau
    valid += valid.kiemtraRong("", "tbMatKhau", nv.matKhau, "(*) Vui lòng nhập thông tin.");

    // Ngay lam
    valid += valid.kiemtraRong("", "tbNgay", nv.ngayLam, "(*) Vui lòng nhập thông tin.");

    // Luong co ban
    valid += valid.kiemtraRong("", "tbLuongCB", nv.luongCoBan, "(*) Vui lòng nhập thông tin.");

    // Chuc vu
    valid += valid.kiemtraRong("", "tbChucVu", nv.chucVu, "(*) Vui lòng nhập thông tin.");

    // So gio lam viec
    valid += valid.kiemtraRong("", "tbGiolam", nv.gioLamTrongThang, "(*) Vui lòng nhập thông tin.");

}

function xoaDuLieu() {
    getElementById("tknv").disabled = false;
    getElementById("tknv").value = "";
    getElementById("name").value = "";
    getElementById("email").value = "";
    getElementById("password").value = "";
    getElementById("datepicker").value = "";
    getElementById("luongCB").value = "";
    getElementById("chucvu").value = "";
    getElementById("gioLam").value = "";
}

function layData() {
    if (!localStorage.getItem("DSNV")) return;
    const arrString = localStorage.getItem("DSNV");
    const arrJSON = JSON.parse(arrString);
    dsnv.arr = arrJSON;
    hienthiDSNV(dssv.arr);
}

function luuTruData() {
    const arrString = JSON.stringify(dsnv.arr);
    localStorage.setItem("DSNV", arrString);
}