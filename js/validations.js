function Validations() {
    this.kiemtraRong = function (label, spanId, value, message) {
        if (!value) {
            getElementById(spanId).innerHTML = message;
            return false;

        }

        getElementById(spanId).innerHTML = "";
        return true;
    };

    this.kiemtraChieuDai = function (min, max, spanId, value, message) {
        if (value.length < min || value.length > max) {
            getElementById(spanId).innerHTML = message;
            return false;

        }

        getElementById(spanId).innerHTML = "";
        return true;
    }

    this.kiemtraChucVu = function (spanId, value, message) {
        if (value.toLowerCase() !== "giamdoc" || value.toLowerCase !== "truongphong" || value.toLowerCase !== "nhanvien") {
            getElementById(spanId).innerHTML = message;
            return false;

        }

        getElementById(spanId).innerHTML = "";
        return true;
    }

    this.kiemtraDinhDang = function (pattern, spanId, value, message) {

        if (!value.match(pattern)) {
            getElementById(spanId).innerHTML = message;
            return false;

        }

        getElementById(spanId).innerHTML = "";
        return true;
    }

}