function DSNV() {
    this.arr = [];
    this.them = function (nv) {
        this.arr.push(nv);
    };

    this.capNhat = function (nv) {
        const index = this.layIndexTheoId(nv);

        if (index !== -1) {
            this.arr[index] = nv;
        }
    };

    this.xoa = function(id) {
        const index = this.layIndexTheoId(id);
        if(index !== -1) {
            this.arr.splice(index, 1);
        }
    }

    this.timTheoXepLoai = function (loai) { };

    this.layIndexTheoId = function (id) {
        let index = -1;
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i].taiKhoan === id) {
                index = i;
                break;
            }
        }
        return index;
    };

    this.layThongTinTheoId = function (id) {
        const index = this.layIndexTheoId(id);
        if (index !== -1) {
            return this.arr[index];
        }

        return null;
    };
}