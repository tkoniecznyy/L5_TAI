"use strict";
var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    Complex.prototype.addComplex = function (complex) {
        return new Complex(this.real + complex.real, this.imaginary + complex.imaginary);
    };
    Complex.prototype.subtractComplex = function (complex) {
        return new Complex(this.real - complex.real, this.imaginary - complex.imaginary);
    };
    Complex.prototype.moduleComplex = function () {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    };
    Complex.prototype.toString = function () {
        console.log('RE: ', this.real, ', IM: ', this.imaginary);
    };
    return Complex;
}());
var a = new Complex(2, 4);
var b = new Complex(-3, 6);
var c = a.addComplex(b);
c.toString();
var d = c.subtractComplex(a);
d.toString();
var e = d.moduleComplex();
console.log("Module: ", e);
