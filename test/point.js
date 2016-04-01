var expect = require('chai').expect;
var Point = require('../index');

var EPSILON = 0.0001;

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

	describe('#fromArray()', function () {
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

	describe('#fromObject()', function () {
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

});

describe('chainable instance methods', function () {

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
			vec = new Point(13.37, 42.42);
			ret = vec.normalize();
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it.skip('should?', function () {
			expect(vec).to.have.property('x');
			expect(vec).to.have.property('y');
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

	describe('#zero()', function () {
		var vec, ret;

		before(function () {
			vec = new Point(100, 100);
			ret = vec.zero();
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should interpolate half way', function () {
			expect(vec).to.have.property('x', 0);
			expect(vec).to.have.property('y', 0);
		});
	});

	describe('#horizontalAngle()', function(){

		var angleX,angleY;
		before(function(){
			angleX = new Point(100,0).horizontalAngle();
			angleY = new Point(0,100).horizontalAngle();
			angleXPi = new Point(-100,0).horizontalAngle();
		});

		it('should x directed vector to 0°', function(){
			expect(Math.abs(angleX - 0)).to.lte(0,EPSILON);
		});

		it('should y directed vector to 90°', function(){
			expect(Math.abs(angleY - Math.PI/2)).to.lte(EPSILON);
		});

		it('should negative x directed vector to 180°', function(){
			expect(Math.abs(angleXPi - Math.PI)).to.lte(EPSILON);
		});
	});

	describe('#rotate()', function () {
		var vec, ret;

		before(function () {
			vec = new Point(100, 100);
			ret = vec.rotate(90 * Math.PI / 180);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should rotate the vector by certain degrees', function () {
			expect(vec).to.have.property('x', -100);
			expect(vec).to.have.property('y', 100);
			expect(Math.abs(vec.horizontalAngle() - 135 * Math.PI / 180)).to.lte(EPSILON);
		});
	});


	describe('#rotateDeg()', function () {
		var vec, ret;

		before(function () {
			vec = new Point(100, 100);
			ret = vec.rotateDeg(90);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should set the rotation angle in degrees', function () {
			expect(vec).to.have.property('x', -100);
			expect(vec).to.have.property('y', 100);
		});
	});


	describe('#rotateTo()', function(){
		var vecX,vecY, retX, retY;


		before(function(){
			vecX = new Point(100,0);
			vecY = new Point(0,100);
			retX = vecX.rotateTo(120 * Math.PI / 180);
			retY = vecY.rotateTo(120 * Math.PI / 180);
		});

		it('should be chainable', function(){
			expect(retX).to.equal(vecX);
		});

		it('should rotate any Vector to a given angle', function(){
			expect(vecX.angle()).to.equal(120 * Math.PI /180);
			expect(vecY.angle()).to.equal(120 * Math.PI /180);
		});

		it('should keep the length', function(){
			expect(retX.length()).to.equal(100);
			expect(retY.length()).to.equal(100);
		});

	});

	describe('#rotateToDeg()', function(){
		var vec,ret;
		before(function(){
			vec = new Point(100,0);

			ret = vec.rotateToDeg(120);

		});

		it('should be chainable', function(){
			expect(ret).to.equal(vec);
		});

		it('should rotate any Vector to a given angle', function(){
			expect(Math.abs(vec.angleDeg()-120)).to.lte(EPSILON);

		});

		it('should keep the length', function(){
			expect(ret.length()).to.equal(100);

		});

	});

	describe('#rotateBy()', function () {
		var vec, ret;

		before(function () {
			vec = new Point(100, 100);
			ret = vec.rotateBy(45 * Math.PI / 180);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should rotate by the given angle', function () {
			expect(vec).to.have.property('x', -100);
			expect(vec).to.have.property('y', 100);
		});
	});

	describe('#rotateByDeg()', function () {
		var vec, ret;

		before(function () {
			vec = new Point(100, 100);
			ret = vec.rotateByDeg(45);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should rotate by the given angle in degrees', function () {
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

	describe.skip('#distance()', function () {
		var vec1, vec2, ret;

		before(function () {
			vec1 = new Point(100, 100);
			vec2 = new Point(200, 100);
			ret = vec1.distance(vec2);
		});

		it('should return the euclidean distance between 2 vectors', function () {
			expect(ret).to.equal(-21);
		});
	});

	describe('#length()', function () {
		var vec, ret;

		before(function () {
			vec = new Point(100, 100);
			ret = vec.length();
		});

		it('should return the length of the vector', function () {
			expect(Math.round(ret)).to.equal(141);
		});
	});

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
			vec = new Point(100, 200);
			ret = vec.toString();
		});

		it('should return a string representation of the vector', function () {
			expect(ret).to.be.a('string');
			expect(ret).to.have.string('x:100, y:200');
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
