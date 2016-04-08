var expect = require('chai').expect;
var Point = require('../index');
var numerical = require('../lib/numerical');

describe('static methods', function () {

	describe('new Point', function () {
		var x, y, vec1, vec2;

		before(function () {
			x = 100;
			y = 200;
			vec1 = new Point(x, y);
		});

		it('should be an instance of Point', function () {
			expect(vec1).to.be.an.instanceof(Point);
		});

		it('should have axis from arguments', function () {
			expect(vec1).to.have.property('x', x);
			expect(vec1).to.have.property('y', y);
		});
	});

	describe('Point.fromArray()', function () {
		var arr, vec;

		before(function () {
			arr = [100, 200];
			vec = Point.fromArray(arr);
		});

		it('should return an instance of Point', function () {
			expect(vec).to.be.an.instanceof(Point);
		});

		it('should have coordinates from array', function () {
			expect(vec).to.have.property('x', arr[0]);
			expect(vec).to.have.property('y', arr[1]);
		});
	});

	describe('Point.fromAngleWithLength()', function () {
    var point = new Point.fromAngleWithLength(40, 20);
    var angle = point.getAngle();
    var length = point.getLength();
		it('should return an instance of Point', function () {
			expect(point).to.be.an.instanceof(Point);
		});

		it('should have the correct angle and length', function () {
			expect(angle).to.be.closeTo(40, numerical.EPSILON);
			expect(length).to.be.closeTo(20, numerical.EPSILON);
		});
	});

	describe('Point.fromObject()', function () {
		var obj, vec;

		before(function () {
			obj = { x: 100, y: 200 };
			vec = Point.fromObject(obj);
		});

		it('should return an instance of Point', function () {
			expect(vec).to.be.an.instanceof(Point);
		});

		it('should have coordinates from object', function () {
			expect(vec).to.have.property('x', obj.x);
			expect(vec).to.have.property('y', obj.y);
		});
	});

	describe('Point.random()', function () {
		var vec;

		before(function () {
			vec = Point.random();
		});

		it('should return an instance of Point', function () {
			expect(vec).to.be.an.instanceof(Point);
		});

		it('should have coordinates from object', function () {
			expect(vec).to.have.property('x');
			expect(vec).to.have.property('y');
		});
	});

	describe('Point.randomVector()', function () {
		var vec;

		before(function () {
			vec = Point.randomVector();
		});

		it('should return an instance of Point', function () {
			expect(vec).to.be.an.instanceof(Point);
		});

		it('should have coordinates from object', function () {
			expect(vec).to.have.property('x');
			expect(vec).to.have.property('y');
		});
	});

	describe('Point.min(point1, point2)', function () {
		var vec, vec1, ret;

		before(function () {
			vec = new Point(5, 10);
			vec1 = new Point(10, 5);
			ret = Point.min(vec, vec1);
		});

		it('should return an instance of Point', function () {
			expect(ret).to.be.an.instanceof(Point);
		});

		it('should return an instance of Point', function () {
			expect(ret).to.be.an.instanceof(Point);
		});

		it('should have returned a point with the smallest x and y coordinates from both points', function () {
			expect(ret).to.have.property('x', vec.x);
			expect(ret).to.have.property('y', vec1.y);
		});
	});

	describe('Point.max(point1, point2)', function () {
		var vec, vec1, ret;

		before(function () {
			vec = new Point(5, 10);
			vec1 = new Point(10, 5);
			ret = Point.max(vec, vec1);
		});

		it('should return an instance of Point', function () {
			expect(ret).to.be.an.instanceof(Point);
		});

		it('should return an instance of Point', function () {
			expect(ret).to.be.an.instanceof(Point);
		});

		it('should have returned a point with the largest x and y coordinates from both points', function () {
			expect(ret).to.have.property('x', vec1.x);
			expect(ret).to.have.property('y', vec.y);
		});
	});

});

describe('chainable instance methods', function () {

	describe('#set()', function () {
		var vec1;
		var ret;
		before(function () {
			vec1 = new Point(20, 40);
			ret = vec1.set(10, 10);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec1);
		});

		it('should set the x and y properties', function () {
			expect(vec1).to.have.property('x', 10);
			expect(vec1).to.have.property('y', 10);
		});
	});

	describe('#add()', function () {
		var vec1, vec2, ret;

		before(function () {
			vec1 = new Point(20, 40);
			vec2 = new Point(30, 20);
			ret = vec1.add(vec2);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec1);
		});

		it('should add a vector', function () {
			expect(vec1).to.have.property('x', 50);
			expect(vec1).to.have.property('y', 60);
		});
	});

	describe('#subtract()', function () {
		var vec1, vec2, ret;

		before(function () {
			vec1 = new Point(30, 20);
			vec2 = new Point(20, 40);
			ret = vec1.subtract(vec2);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec1);
		});

		it('should subtract a vector', function () {
			expect(vec1).to.have.property('x', 10);
			expect(vec1).to.have.property('y', -20);
		});
	});

	describe('#divide()', function () {
		var vec, vec2, ret;

		before(function () {
			vec = new Point(30, 20);
			vec2 = new Point(2, 2);
			ret = vec.divide(vec2);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should divide both vector axis by 2', function () {
			expect(vec).to.have.property('x', 15);
			expect(vec).to.have.property('y', 10);
		});
	});

	describe('#divideNum()', function () {
		var vec, number, ret;

		before(function () {
			vec = new Point(30, 20);
			number = 2;
			ret = vec.divideNum(number);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should divide both vector axis by 2', function () {
			expect(vec).to.have.property('x', 15);
			expect(vec).to.have.property('y', 10);
		});

		it('should return a zero vector when dividing by 0', function() {
			vec = new Point(30, 20);
			number = 0;
			ret = vec.divideNum(number);

			expect(vec).to.have.property('x', 0);
			expect(vec).to.have.property('y', 0);
		});
	});

	describe('#divideX()', function () {
		var vec, number, ret;

		before(function () {
			vec = new Point(30, 20);
			number = 2;
			ret = vec.divideX(number);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should divide the X axis by 2', function () {
			expect(vec).to.have.property('x', 15);
			expect(vec).to.have.property('y', 20);
		});

		it('should return a zero X when dividing by 0', function() {
			vec = new Point(30, 20);
			number = 0;
			ret = vec.divideX(number);

			expect(vec).to.have.property('x', 0);
		});
	});

	describe('#divideY()', function () {
		var vec, number, ret;

		before(function () {
			vec = new Point(30, 20);
			number = 2;
			ret = vec.divideY(number);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should divide the Y axis by 2', function () {
			expect(vec).to.have.property('x', 30);
			expect(vec).to.have.property('y', 10);
		});

		it('should return a zero Y when dividing by 0', function() {
			vec = new Point(30, 20);
			number = 0;
			ret = vec.divideY(number);

			expect(vec).to.have.property('y', 0);
		});
	});

	describe('#multiply()', function () {
		var vec, vec2, ret;

		before(function () {
			vec = new Point(30, 20);
			vec2 = new Point(2, 2);
			ret = vec.multiply(vec2);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should multiply both vector axis by 2', function () {
			expect(vec).to.have.property('x', 60);
			expect(vec).to.have.property('y', 40);
		});
	});

	describe('#multiplyNum()', function () {
		var vec, number, ret;

		before(function () {
			vec = new Point(30, 20);
			number = 2;
			ret = vec.multiplyNum(number);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should multiply both vector axis by 2', function () {
			expect(vec).to.have.property('x', 60);
			expect(vec).to.have.property('y', 40);
		});
	});

	describe('#multiplyX()', function () {
		var vec, number, ret;

		before(function () {
			vec = new Point(30, 20);
			number = 2;
			ret = vec.multiplyX(number);
		});

		it('should multiply the X axis by 2', function () {
			expect(vec).to.have.property('x', 60);
			expect(vec).to.have.property('y', 20);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});
	});

	describe('#multiplyY()', function () {
		var vec, number, ret;

		before(function () {
			vec = new Point(30, 20);
			number = 2;
			ret = vec.multiplyY(number);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should multiply the Y axis by 2', function () {
			expect(vec).to.have.property('x', 30);
			expect(vec).to.have.property('y', 40);
		});
	});

	describe('#addNum()', function () {
		var vec, number, ret;

		before(function () {
			vec = new Point(1, 2);
			number = 2;
			ret = vec.addNum(number);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should add 2 to both vector axis', function () {
			expect(vec).to.have.property('x', 3);
			expect(vec).to.have.property('y', 4);
		});
	});

	describe('#addX()', function () {
		var vec, number, ret;

		before(function () {
			vec = new Point(1, 2);
			number = 2;
			ret = vec.addX(number);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should add 2 to the x axis', function () {
			expect(vec).to.have.property('x', 3);
			expect(vec).to.have.property('y', 2);
		});
	});

	describe('#addY()', function () {
		var vec, number, ret;

		before(function () {
			vec = new Point(10, 20);
			number = 2;
			ret = vec.addY(number);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should add 2 to the y axis', function () {
			expect(vec).to.have.property('x', 10);
			expect(vec).to.have.property('y', 22);
		});
	});

	describe('#subtractNum()', function () {
		var vec, number, ret;

		before(function () {
			vec = new Point(10, 20);
			number = 2;
			ret = vec.subtractNum(number);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should subtract 2 from both vector axis', function () {
			expect(vec).to.have.property('x', 8);
			expect(vec).to.have.property('y', 18);
		});
	});

	describe('#subtractX()', function () {
		var vec, number, ret;

		before(function () {
			vec = new Point(10, 20);
			number = 2;
			ret = vec.subtractX(number);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should subtract 2 from the x axis', function () {
			expect(vec).to.have.property('x', 8);
			expect(vec).to.have.property('y', 20);
		});
	});

	describe('#subtractY()', function () {
		var vec, number, ret;

		before(function () {
			vec = new Point(10, 20);
			number = 2;
			ret = vec.subtractY(number);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should add 2 to the y axis', function () {
			expect(vec).to.have.property('x', 10);
			expect(vec).to.have.property('y', 18);
		});
	});

	describe('#normalize()', function () {
		var vec, ret;

		before(function () {
			vec = new Point(10, 0);
			ret = vec.normalize();
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should have the correct properties', function () {
			expect(vec).to.have.property('x', 1);
			expect(vec).to.have.property('y', 0);
		});
	});

	describe('#normalize(length)', function () {
		var vec, ret;

		before(function () {
			vec = new Point(0, 10);
			ret = vec.normalize(20);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should have the correct properties', function () {
			expect(vec).to.have.property('x', 0);
			expect(vec).to.have.property('y', 20);
		});
	});

	describe('#invert()', function () {
		var vec, ret;

		before(function () {
			vec = new Point(-10, 10);
			ret = vec.invert();
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should have inverted the coordinates', function () {
			expect(vec).to.have.property('x', 10);
			expect(vec).to.have.property('y', -10);
		});
	});

	describe('#invertX()', function () {
		var vec, ret;

		before(function () {
			vec = new Point(-10, 10);
			ret = vec.invertX();
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should have inverted the x coordinate', function () {
			expect(vec).to.have.property('x', 10);
			expect(vec).to.have.property('y', 10);
		});
	});

	describe('#invertY()', function () {
		var vec, ret;

		before(function () {
			vec = new Point(-10, 10);
			ret = vec.invertY();
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should have inverted the y coordinate', function () {
			expect(vec).to.have.property('x', -10);
			expect(vec).to.have.property('y', -10);
		});
	});

	describe('#modulo()', function () {
		var vec, ret;

		before(function () {
			vec = new Point(5, 7);
			ret = vec.modulo(new Point(5, 5));
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should have set the integer remainders of dividing the point by the supplied point', function () {
			expect(vec).to.have.property('x', 0);
			expect(vec).to.have.property('y', 2);
		});
	});

	describe('#moduloNum()', function () {
		var vec, ret;

		before(function () {
			vec = new Point(5, 7);
			ret = vec.moduloNum(5);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should have set the integer remainders of dividing the x and y coordinates of the point by the supplied number', function () {
			expect(vec).to.have.property('x', 0);
			expect(vec).to.have.property('y', 2);
		});
	});

	describe('#moduloX()', function () {
		var vec, ret;

		before(function () {
			vec = new Point(5, 7);
			ret = vec.moduloX(5);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should have set the integer remainders of dividing the x coordinate of the point by the supplied number', function () {
			expect(vec).to.have.property('x', 0);
			expect(vec).to.have.property('y', 7);
		});
	});

	describe('#moduloY()', function () {
		var vec, ret;

		before(function () {
			vec = new Point(5, 7);
			ret = vec.moduloY(5);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should have set the integer remainders of dividing the y coordinate of the point by the supplied number', function () {
			expect(vec).to.have.property('x', 5);
			expect(vec).to.have.property('y', 2);
		});
	});

	describe('#round()', function () {
		var vec, ret;

		before(function () {
			vec = new Point(30.333, 20.666);
			ret = vec.round();
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should round both vector axis to integers', function () {
			expect(vec).to.have.property('x', 30);
			expect(vec).to.have.property('y', 21);
		});
	});

	describe('#abs()', function () {
		var vec, ret;

		before(function () {
			vec = new Point(-10.1, 10.1);
			ret = vec.abs();
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should Math.abs both vector axis to positive values', function () {
			expect(vec).to.have.property('x', 10.1);
			expect(vec).to.have.property('y', 10.1);
		});
	});

	describe('#ceil()', function () {
		var vec, ret;

		before(function () {
			vec = new Point(-10.1, 10.1);
			ret = vec.ceil();
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should round up the x and y coordinates of the point', function () {
			expect(vec).to.have.property('x', -10);
			expect(vec).to.have.property('y', 11);
		});
	});

	describe('#floor()', function () {
		var vec, ret;

		before(function () {
			vec = new Point(-10.1, 10.1);
			ret = vec.floor();
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should round down the x and y coordinates of the point', function () {
			expect(vec).to.have.property('x', -11);
			expect(vec).to.have.property('y', 10);
		});
	});

	describe('#mix()', function () {
		var vec1, vec2, ret;

		before(function () {
			vec1 = new Point(100, 100);
			vec2 = new Point(200, 200);
			ret = vec1.mix(vec2, 0.5);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec1);
		});

		it('should interpolate half way', function () {
			expect(vec1).to.have.property('x', 150);
			expect(vec1).to.have.property('y', 150);
		});
	});

	describe('#copy()', function () {
		var vec1, vec2, ret;

		before(function () {
			vec1 = new Point(100, 100);
			vec2 = new Point(200, 200);
			ret = vec1.copy(vec2);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec1);
		});

		it('should copy the X and Y coordinates of the supplied point', function () {
			expect(vec1).to.have.property('x', 200);
			expect(vec1).to.have.property('y', 200);
		});
	});

	describe('#getVector()', function () {
		var vec1, vec2, ret;

		before(function () {
			vec1 = new Point(100, 100);
			vec2 = new Point(250, 250);
			ret = vec1.getVector(vec2);
		});

		it('should be chainable', function () {
			expect(ret).to.not.equal(vec1);
			expect(ret).to.not.equal(vec2);
		});

		it('should return the vector from the point to the supplied point as a new point', function () {
			expect(ret).to.have.property('x', 150);
			expect(ret).to.have.property('y', 150);
		});
	});

	describe('#zero()', function () {
		var vec, ret;

		before(function () {
			vec = new Point(100, 100);
			ret = vec.zero();
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should set the X and Y coordinates to zero', function () {
			expect(vec).to.have.property('x', 0);
			expect(vec).to.have.property('y', 0);
		});
	});

	describe('#getAngle()', function(){
		var angle;
		before(function(){
			angle = new Point(0, 10).getAngle();
		});

		it('The angle of the point should be 90°', function(){
			expect(angle).to.be.closeTo(90, numerical.EPSILON);
		});
	});

	describe('#getAngle(point)', function(){
		var angle;
		before(function(){
	    angle = new Point(0, 10).getAngle(new Point(10, 10));
		});

		it('The angle of the point should be 45', function(){
			expect(angle).to.be.closeTo(45, numerical.EPSILON);
		});
	});

	describe('get #angle', function(){
		var angle;
		before(function(){
			angle = new Point(0, 10).angle;
		});

		it('The angle of the point should be 90°', function(){
			expect(angle).to.be.closeTo(90, numerical.EPSILON);
		});
	});

	describe('#setAngle()', function(){
		var vec, ret, length;
		before(function(){
			vec = new Point(10, 20);
			length = vec.length;
			ret = vec.setAngle(120);
		});

		it('should be chainable', function(){
			expect(ret).to.equal(vec);
		});

		it('should rotate any Vector to a given angle', function(){
			expect(vec.getAngle()).to.be.closeTo(120, numerical.EPSILON);
		});

		it('should keep the length', function(){
			expect(ret.length).to.equal(length);
		});
	});

	describe('set #angle', function(){
		var vec, length;

		before(function(){
			vec = new Point(10, 20);
			length = vec.length;
			vec.angle = 120;
		});

		it('should rotate any Vector to a given angle', function(){
			expect(vec.angle).to.be.closeTo(120, numerical.EPSILON);
		});

		it('should keep the length', function(){
			expect(vec.length).to.equal(length);
		});
	});

	describe('set #angle and #length', function(){
		var vec, length, angle;

		before(function(){
			vec = new Point();
			vec.length = 100;
			vec.angle = 30;
			length = vec.length;
			angle = vec.angle;
		});

		it('contain the correct length and angle', function(){
			expect(vec.angle).to.be.closeTo(angle, numerical.EPSILON);
			expect(vec.length).to.be.closeTo(length, numerical.EPSILON);
		});
	});

	describe('#rotate()', function () {
		var vec, ret;

		before(function () {
     vec = new Point(100, 50);
     ret = vec.rotate(90);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should rotate the vector by certain degrees', function () {
			expect(vec).property('x').to.be.closeTo(-50, numerical.EPSILON);
			expect(vec).property('y').to.be.closeTo(100, numerical.EPSILON);
		});
	});

	describe('#rotateBy()', function () {
		var vec, ret;

		before(function () {
			vec = new Point(100, 100);
			ret = vec.rotateBy(45);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should rotate by the given angle', function () {
			expect(vec).to.have.property('x', -100);
			expect(vec).to.have.property('y', 100);
		});
	});

  describe('#project()', function () {
		var vec1, vec2, var3, selfRet, perpRet, paraRet, middleRet;

		before(function () {
			vec1 = new Point(100, 0);
			vec2 = new Point(100, 100);
      vec3 = new Point(0,100);
      vec4 = new Point(200,0);
      selfRet = vec1.project(vec1);
			perpRet = vec1.clone().project(vec3);
      paraRet = vec1.clone().project(vec4);
      middleRet = vec1.clone().project(vec2);
		});

    it('should be chainable', function () {
			expect(selfRet).to.equal(vec1);
		});

    it('should project same vector onto itself without change', function() {
        expect(selfRet).to.have.property('x',100);
        expect(selfRet).to.have.property('y',0);
    });

		it('should project orthogonal vectors into a zero-length vector', function () {
            expect(perpRet).to.have.property('x',0);
            expect(perpRet).to.have.property('y',0);
		});

	  it('shuld project parallel vectors into a vector of same direction and magnitude', function () {
	      expect(paraRet).to.have.property('x', 100);
	      expect(paraRet).to.have.property('y', 0);
	  });

		it('should project non-orthogonal non-parallel vectors correctly', function () {
			expect(middleRet).to.have.property('x', 50);
			expect(middleRet).to.have.property('y', 50);
		});
	});
});

describe('regular instance methods', function () {

	describe('#clone()', function () {
		var vec1, vec2;

		before(function () {
			vec1 = new Point(42, 21);
			vec2 = vec1.clone();
		});

		it('should return a clone of a vector', function () {
			expect(vec2).to.be.an.instanceof(Point);
			expect(vec2).to.not.equal(vec1);
		});

		it('should have the same values as the original', function () {
			expect(vec1.x).to.equal(vec2.x);
			expect(vec1.y).to.equal(vec2.y);
		});
	});

	describe('#dot()', function () {
		var vec1, vec2, ret;

		before(function () {
			vec1 = new Point(42, 21);
			vec2 = new Point(44, 42);
			ret = vec1.dot(vec2);
		});

		it('should return the dot product of 2 vectors', function () {
			expect(ret).to.equal(2730);
		});
	});

	describe('#getDistance()', function () {
		var vec1, vec2, ret;

		before(function () {
			vec1 = new Point(100, 100);
			vec2 = new Point(200, 100);
			ret = vec1.getDistance(vec2);
		});

		it('should return the euclidean distance between 2 vectors', function () {
			expect(ret).to.equal(100);
		});
	});

	describe('#getLength()', function () {
		var vec, ret;

		before(function () {
			vec = new Point(100, 100);
			ret = vec.getLength();
		});

		it('should return the length of the vector', function () {
			expect(ret).to.be.closeTo(141.4213562373095, numerical.EPSILON);
		});
	});

	describe('get #length', function () {
		var vec, ret;

		before(function () {
			vec = new Point(100, 100);
			ret = vec.length;
		});

		it('should return the length of the vector', function () {
			expect(ret).to.be.closeTo(141.4213562373095, numerical.EPSILON);
		});
	});

	describe('#setLength()', function () {
		var vec, ret;

		before(function () {
			vec = new Point(10, 0);
			ret = vec.setLength(30);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should set the length of the vector', function () {
			expect(vec.x).to.equal(30);
			expect(vec.y).to.equal(0);
		});
	});

	describe('set #length', function () {
		var vec;

		before(function () {
			vec = new Point(10, 0);
			vec.length = 30;
		});

		it('should set the length of the vector', function () {
			expect(vec.x).to.equal(30);
			expect(vec.y).to.equal(0);
		});
	});

	describe('#limitLength()', function () {
		var vec, vec2, ret;

		before(function () {
			vec = new Point(10, 0);
			vec2 = new Point(10, 0);
			ret = vec.limitLength(5);
			vec2.limitLength(20);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should limit the length of the vector', function () {
			expect(vec.x).to.equal(5);
			expect(vec.y).to.equal(0);
			expect(vec2.x).to.equal(10);
			expect(vec2.y).to.equal(0);
		});
	});

	describe.skip('#inverse()', function () {});

	describe('#isZero()', function () {
		var vec;

		before(function () {
			vec = new Point(100, 100);
			vec.zero();
		});

		it('should return true if the vector is zero', function () {
			expect(vec.isZero()).to.equal(true);
		});
	});

	describe('#isClose()', function () {
		var point, point2;

		before(function () {
			point = new Point(100, 100);
			point2 = new Point(50, 50);
		});

		it('should return false if the distance is smaller than the provided one', function () {
			expect(point.isClose(point2, 10)).to.equal(false);
		});

		it('should return false if the distance is within than the provided one', function () {
			expect(point.isClose(point2, 1000)).to.equal(true);
		});
	});

	describe('#isCollinear()', function () {
		it('should return true if the points are collinear, false otherwise', function () {
	    expect(new Point(10, 5).isCollinear(new Point(20, 10))).to.equal(true);
	    expect(new Point(5, 10).isCollinear(new Point(-5, -10))).to.equal(true);
	    expect(new Point(10, 10).isCollinear(new Point(20, 10))).to.equal(false);
	    expect(new Point(10, 10).isCollinear(new Point(10, -10))).to.equal(false);
		});
	});

	describe('#equals()', function () {
		var vec1, vec2, vec3;

		before(function () {
			vec1 = new Point(100, 100);
			vec2 = new Point(100, 120);
			vec3 = new Point(100, 120);
		});

		it('should return false if the vectors are not the same', function () {
			expect(vec1.equals(vec2)).to.equal(false);
		});
		it('should return true if the vectors are the same', function () {
			expect(vec2.equals(vec3)).to.equal(true);
		});
	});

});

describe('utility methods', function () {

	describe('#toString()', function () {
		var vec, ret;

		before(function () {
			vec = new Point(100.187181978, 200.181717189);
			ret = vec.toString();
		});

		it('should return a string representation of the vector with 5 fractional digits', function () {
			expect(ret).to.be.a('string');
			expect(ret).to.have.string('{ x: 100.18718, y: 200.18172 }');
		});
	});

	describe('#toArray()', function () {
		var vec, ret;

		before(function () {
			vec = new Point(100, 200);
			ret = vec.toArray();
		});

		it('should return an array representation of the vector', function () {
			expect(ret).to.be.instanceof(Array);
			expect(ret).to.eql([ 100, 200 ]);
		});
	});

	describe('#toObject()', function () {
		var vec, ret;

		before(function () {
			vec = new Point(100, 200);
			ret = vec.toObject();
		});

		it('should return an object representation of the vector', function () {
			expect(ret).to.be.instanceof(Object);
			expect(ret).to.eql({ x: 100, y: 200 });
		});
	});
});
