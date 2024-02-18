function DSNV() {
    this.arr = [];
    this.them = function (nv) {
        this.arr.push(nv);
    };

    this.capNhat = function (nv) { 
        const index = layIndexTheoId(nv);

        if(index !== -1) {
            this.arr[index] = nv;
        }
    };

    this.timTheoXepLoai = function (loai) { };

    this.layIndexTheoId = function (id) {
        let index = -1;
        this.arr.forEach(element => {
            index ++;
            if(element.taiKhoan === id) {
                return index;
            }
        });

        return -1;
     };

    this.layThongTinTheoId = function (id) { 
        const index = layIndexTheoId(nv);
        if(index === 1) {
            return this.arr[index];
        }
        
        return null;
    };
}