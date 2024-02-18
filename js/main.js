function getElementById(id) {
    return document.getElementById(id);
}

const dsnv = new DSNV();



function themNV() {
    const nv = layGiaTriNhap();
    dsnv.them(nv);

    hienthiDSNV()
}

function capNhatNV() {

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

function hienthiDSNV() {
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
                    <button class="btn btn-danger" data-toggle="modal" data-target="#myModal" onclick="chinhSua('${nv.taiKhoan}')">Chỉnh sửa thông tin</button>
                </td> 
            </tr>`;
    });

    getElementById("tableDanhSach").innerHTML = content;
}