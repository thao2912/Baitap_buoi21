function NhanVien(_taiKhoan, _hoTen, _email, _matKhau, _ngayLam, _luongCoBan, _chucVu, _gioLamTrongThang) {
    this.taiKhoan = _taiKhoan;
    this.hoTen = _hoTen;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCoBan = _luongCoBan;
    this.chucVu = _chucVu;
    this.gioLamTrongThang = _gioLamTrongThang;
    this.xepLoaiNV = "trung bình";
    this.tongLuong = _luongCoBan;
    
    this.tinhLuong = function () {
        switch (this.chucVu.toLowerCase()) {
            case "giamdoc":
                this.tongLuong = this.luongCoBan * 3;
                break;
            case "truongphong":
                this.tongLuong = this.luongCoBan * 2;
                break;
        }
    };

    this.xepLoai = function () {
        if (this.gioLamTrongThang > 160 && this.gioLamTrongThang < 176) {
            this.xepLoaiNV = "khá";
        } else if (this.gioLamTrongThang >= 176 && this.gioLamTrongThang < 192) {
            this.xepLoaiNV = "giỏi";
        } else if (this.gioLamTrongThang > 192){
            this.xepLoaiNV = "xuất xắc";
        } else {
            this.xepLoaiNV = "trung bình";
        }
    };
}