

<!-- Start index.js -->

# Point - A JavaScript 2D point class with methods for common vector operations

## Point(x, y)

Constructor.

### Examples:
    var point1 = new Point(100, 50);

### Params:

* **Number** *x* Value of the x coordinate
* **Number** *y* Value of the y coordinate

### Return:

* **Point** 

## x

The X coordinate

### Examples:
    var point = new Point(42, 21);

    point.x;
    // => 42

## y

The Y coordinate

### Examples:
    var point = new Point(42, 21);

    point.y;
    // => 21

# Static

## Point.fromArray(array)

Creates a new instance from an array

### Examples:
    var point = Point.fromArray([42, 21]);

    point.toString();
    // => x:42, y:21

### Params:

* **Array** *array* Array with the x and y coordinates at index 0 and 1 respectively

### Return:

* **Point** The new instance

## Point.fromObject(obj)

Creates a new instance from an object

### Examples:
    var point = Point.fromObject({ x: 42, y: 21 });

    point.toString();
    // => x:42, y:21

### Params:

* **Object** *obj* Object with the values for x and y

### Return:

* **Point** The new instance

## Point.random()

Creates a new instance with random x and y coordinates between 0 and 1,

### Examples:
    var randomVector = Point.random();

    point.toString();
    // => x:0.0273982 y: 0.9784389

### Return:

* **Point** The new instance

## Point.min(point1, point2)

Returns a new point object with the smallest x and y of the
supplied points.

### Params:

* **Point** *point1* 
* **Point** *point2* 

### Return:

* **Point** The new instance

## Point.max(point1, point2)

Returns a new point object with the largest x and y of the
supplied points.

### Params:

* **Point** *point1* 
* **Point** *point2* 

### Return:

* **Point** The new instance

## Point

# Manipulation

These functions are chainable.

## add(vector)

Adds another vector to this one

### Examples:
    var point1 = new Point(10, 10);
    var point = new Point(20, 30);

    point1.add(point);
    point1.toString();
    // => x:30, y:40

### Params:

* **Point** *vector* The other vector you want to add to this one

### Return:

* **Point** `this` for chaining capabilities

## addNum(number)

Adds the given number to both point coordinates

### Examples:
    var point = new Point(1, 2);

    point.addNum(2);
    point.toString();
    // => x: 3, y: 4

### Params:

* **Number** *number* The number to add

### Return:

* **Point** `this` for chaining capabilities

## addX(number)

Adds the given number to the X coordinate

### Examples:
    var point = new Point(1, 2);

    point.addX(2);
    point.toString();
    // => x: 3, y: 2

### Params:

* **Number** *number* The number to add

### Return:

* **Point** `this` for chaining capabilities

## addY(number)

Adds the given number to the Y coordinate

### Examples:
    var point = new Point(1, 2);

    point.addY(2);
    point.toString();
    // => x: 1, y: 4

### Params:

* **Number** *number* The number to add

### Return:

* **Point** `this` for chaining capabilities

## subtract(vector)

Subtracts another vector from this one

### Examples:
    var point1 = new Point(100, 50);
    var point = new Point(20, 30);

    point1.subtract(point);
    point1.toString();
    // => x:80, y:20

### Params:

* **Point** *vector* The other vector you want subtract from this one

### Return:

* **Point** `this` for chaining capabilities

## subtractNum(number)

Subtracts the given number from the X and Y coordinates of the point

### Examples:
    var point = new Point(100, 200);

    point.subtractNum(20);
    point.toString();
    // => x: 80, y: 180

### Params:

* **Number** *number* The number to subtract

### Return:

* **Point** `this` for chaining capabilities

## subtractX(number)

Subtracts the given number from the X coordinate

### Examples:
    var point = new Point(100, 200);

    point.subtractX(20);
    point.toString();
    // => x: 80, y: 200

### Params:

* **Number** *number* The number to subtract

### Return:

* **Point** `this` for chaining capabilities

## subtractY(number)

Subtracts the given number from the Y coordinate

### Examples:
    var point = new Point(100, 200);

    point.subtractY(20);
    point.toString();
    // => x: 100, y: 180

### Params:

* **Number** *number* The number to subtract

### Return:

* **Point** `this` for chaining capabilities

## divide(vector)

Divides X and Y coordinates of the point by those of the given point

### Examples:
    var point = new Point(100, 50);
    var point = new Point(2, 2);

    point.divide(point);
    point.toString();
    // => x:50, y:25

### Params:

* **Point** *vector* The vector to divide by

### Return:

* **Point** `this` for chaining capabilities

## divideNum(number)

Divides X and Y coordinates of the point by those of the given number

### Examples:
    var point = new Point(100, 50);

    point.divideNum(2);
    point.toString();
    // => x:50, y:25

### Params:

* **Number** *number* The number to divide by

### Return:

* **Point** `this` for chaining capabilities

## divideX(The)

Divides the X coordinate by the given number

### Examples:
    var point = new Victor(100, 50);

    point.divideX(2);
    point.toString();
    // => x:50, y:50

### Params:

* **Number** *The* number to divide by

### Return:

* **Victor** `this` for chaining capabilities

## divideY(The)

Divides the Y coordinate by the given number

### Examples:
    var point = new Victor(100, 50);

    point.divideY(2);
    point.toString();
    // => x:100, y:25

### Params:

* **Number** *The* number to divide by

### Return:

* **Victor** `this` for chaining capabilities

## invert()

Inverts the X and Y coordinates of the point

### Examples:
    var point = new Point(100, 50);

    point.invert();
    point.toString();
    // => x:-100, y:-50

### Return:

* **Point** `this` for chaining capabilities

## invertX()

Inverts the X coordinate

### Examples:
    var point = new Point(100, 50);

    point.invertX();
    point.toString();
    // => x:-100, y:50

### Return:

* **Point** `this` for chaining capabilities

## invertY()

Inverts the Y coordinate

### Examples:
    var point = new Point(100, 50);

    point.invertY();
    point.toString();
    // => x:100, y:-50

### Return:

* **Point** `this` for chaining capabilities

## modulo(point)

Sets the integer remainders of dividing the point by
the supplied point

### Examples:
var point = new Point(12, 6);
point.modulo(new Point(5, 2))
console.log(point); // {x: 2, y: 0}

### Params:

* **Point** *point* 

### Return:

* **Point** `this` for chaining capabilities

## moduloNum(vector)

Sets the integer remainders of dividing the point's
coordinates by the supplied number

### Examples:
var point = new Point(12, 6);
point.modulo(new Point(5, 2))
console.log(point); // {x: 2, y: 0}

### Params:

* **Point** *vector* 

### Return:

* **Point** `this` for chaining capabilities

## moduloX(number)

Sets the integer remainders of dividing the x coordinate by
the supplied number

### Examples:
var point = new Point(12, 6);
point.moduloX(5)
console.log(point); // {x: 2, y: 6}

### Params:

* **Point** *number* 

### Return:

* **Point** `this` for chaining capabilities

## moduloY(number)

Sets the integer remainders of dividing the y coordinate by
the supplied number

### Examples:
var point = new Point(12, 6);
point.moduloY(5)
console.log(point); // {x: 12, y: 1}

### Params:

* **Point** *number* 

### Return:

* **Point** `this` for chaining capabilities

## multiply(vector)

Multiplies the X and Y coordinates by coordinates from a given point

### Examples:
    var point = new Point(100, 50);
    var point = new Point(2, 2);

    point.multiply(point);
    point.toString();
    // => x:200, y:100

### Params:

* **Point** *vector* The vector to multiply by

### Return:

* **Point** `this` for chaining capabilities

## multiplyNum(number)

Multiplies the X and Y coordinates by the given number

### Examples:
    var point = new Point(100, 50);

    point.multiplyNum(2);
    point.toString();
    // => x:200, y:100

### Params:

* **Number** *number* The number to multiply by

### Return:

* **Point** `this` for chaining capabilities

## multiplyX(The)

Multiplies the X coordinate by the given number

### Examples:
    var point = new Victor(100, 50);

    point.multiplyX(2);
    point.toString();
    // => x:200, y:50

### Params:

* **Number** *The* number to multiply the X coordinate with

### Return:

* **Victor** `this` for chaining capabilities

## multiplyY(number)

Multiplies the Y coordinate by the given number

### Examples:
    var point = new Victor(100, 50);

    point.multiplyY(2);
    point.toString();
    // => x:100, y:100

### Params:

* **Number** *number* The number to multiply the Y coordinate with

### Return:

* **Victor** `this` for chaining capabilities

## normalize(length)

Normalizes the length of the vector to 1 without
changing its angle. The optional
length parameter defines the length to normalize to.

### Params:

* **Number** *length* The length of the normalized vector

### Return:

* **Point** the normalized vector of the vector that is represented                 by this point's X and Y coordinates

* **Point** `this` for chaining capabilities

## round()

Rounds the X and Y coordinates of the point to an integer value

### Examples:
    var point = new Point(100.2, 50.9);

    point.round();
    point.toString();
    // => x:100, y:51

### Return:

* **Point** `this` for chaining capabilities

## abs()

Sets the X and Y coordinates of the point to absolute values

### Examples:
    var point = new Point(-100, 100);

    point.abs();
    point.toString();
    // => x:100, y:100

### Return:

* **Point** `this` for chaining capabilities

## ceil()

Sets the X and Y coordinates to the smallest integer greater
than or equal to the given coordinates

### Examples:
    var point = new Point(10.3, 10.8);

    point.ceil();
    point.toString();
    // => x:11, y:11

### Return:

* **Point** `this` for chaining capabilities

## floor()

Sets the X and Y coordinates to the largest integer less
than or equal to the given coordinates

### Examples:
    var point = new Point(10.3, 10.8);

    point.floor();
    point.toString();
    // => x:10, y:10

### Return:

* **Point** `this` for chaining capabilities

## toFixed(Precision)

Rounds the X and Y coordinates of the point to a certain precision

### Examples:
    var point = new Point(100.2, 50.9);

    point.unfloat();
    point.toString();
    // => x:100, y:51

### Params:

* **Number** *Precision* (default: 8)

### Return:

* **Point** `this` for chaining capabilities

## mix(point, amount)

Performs a linear blend / interpolation towards another point

### Examples:
    var point1 = new Point(100, 100);
    var point = new Point(200, 200);

    point1.mix(point, 0.5);
    point.toString();
    // => x:150, y:150

### Params:

* **Point** *point* The other point
* **Number** *amount* The blend amount (optional, default: 0.5)

### Return:

* **Point** `this` for chaining capabilities

# Products

## clone()

Creates a clone of this point

### Examples:
    var point1 = new Point(10, 10);
    var point = point1.clone();

    point.toString();
    // => x:10, y:10

### Return:

* **Point** the cloned point

## copy()

Copies another point's X and Y coordinates to its own

### Examples:
    var point1 = new Point(10, 10);
    var point = new Point(20, 20);
    var point = point1.copy(point1);

    point.toString();
    // => x:20, y:20

### Return:

* **Point** `this` for chaining capabilities

## zero()

Sets the point to zero (0,0)

### Examples:
    var point1 = new Point(10, 10);
    var1.zero();
    point1.toString();
    // => x:0, y:0

### Return:

* **Point** `this` for chaining capabilities

## dot(vector)

Calculates the dot product of this vector and another

### Examples:
    var point1 = new Point(100, 50);
    var point = new Point(200, 60);

    point1.dot(point);
    // => 23000

### Params:

* **Point** *vector* The second vector

### Return:

* **Number** the dor product of the two points

## cross(vector)

Returns the cross product of this vector and another

### Params:

* **Point** *vector* The second vector

### Return:

* **Number** the cross product of the two points

## project(vector)

Projects a vector onto this vector, setting itself to the result.

### Examples:
    var point = new Point(100, 0);
    var point = new Point(100, 100);

    point.project(point);
    point.toString();
    // => x:50, y:50

### Params:

* **Point** *vector* The other vector you want to project this vector onto

### Return:

* **Point** `this` for chaining capabilities

## angleTo(point)

Returns the smaller angle between two vectors in radians. The angle is
unsigned, no information about rotational direction is given.

### Params:

* **Point** *point* 

### Return:

* **Number** the angle in radians

## rotate(angle, center)

Rotates the point by the given angle around an optional center point.

### Params:

* **Number** *angle* the rotation angle in radian
* **Point** *center* the optional center point of the rotation

### Return:

* **Point** `this` for chaining capabilities

## distance(point)

Calculates the euclidean distance between this point and another

### Examples:
    var point1 = new Point(100, 50);
    var point = new Point(200, 60);

    point1.distance(point);
    // => 100.4987562112089

### Params:

* **Point** *point* The second point

### Return:

* **Number** Distance

## distanceSq(point)

Calculates the squared euclidean distance between this point and another

### Examples:
    var point1 = new Point(100, 50);
    var point = new Point(200, 60);

    point1.distanceSq(point);
    // => 10100

### Params:

* **Point** *point* The second point

### Return:

* **Number** Distance

## length()

Calculates the length or magnitude of the point

### Examples:
    var point = new Point(100, 50);

    point.length();
    // => 111.80339887498948

### Return:

* **Number** Length / Magnitude

## lengthSq()

Squared length / magnitude

### Examples:
    var point = new Point(100, 50);

    point.lengthSq();
    // => 12500

### Return:

* **Number** Length / Magnitude

## setLength(length)

Changes the location of the vector, but keeps it's angle.

### Params:

* **Number** *length* 

### Return:

* **Point** `this` for chaining capabilities

## limitLength(length)

Limits the length of the vector, but keeps it's angle.

### Params:

* **Number** *length* 

### Return:

* **Point** `this` for chaining capabilities

## isClose(point, tolerance)

Checks if the point is within a given distance of another point.

### Params:

* **Point** *point* the point to check against
* **Number** *tolerance* the maximum distance allowed

### Return:

* **Boolean** true if it is within the given distance

## isColinear(point)

Checks if the vector represented by this point is colinear (parallel) to
another vector.

### Params:

* **Point** *point* the vector to check against

### Return:

* **Boolean** true if it is colinear

## isOrthogonal(point)

Checks if the vector represented by this point is orthogonal
(perpendicular) to another vector.

### Params:

* **Point** *point* the vector to check against

### Return:

* **Boolean** true if it is orthogonal

## isZero()

Checks whether the point's X and Y coordinates are both 0

### Examples:
    var point = new Point(100, 50);

    point.isZero();
    // => true

### Return:

* **Boolean** 

## equals()

Returns a true if this point is the same as another

### Examples:
    var point1 = new Point(100, 50);
    var point = new Point(100, 50);

    point1.equals(point);
    // => true

### Return:

* **Boolean** 

# Utility Methods

## toString()

Returns an string representation of the point

### Examples:
    var point = new Point(10, 20);

    point.toString();
    // => x:10, y:20

### Return:

* **String** 

## toArray()

Returns an array representation of the point

### Examples:
    var point = new Point(10, 20);

    point.toArray();
    // => [10, 20]

### Return:

* **Array** 

## toObject()

Returns an object representation of the point

### Examples:
    var point = new Point(10, 20);

    point.toObject();
    // => { x: 10, y: 20 }

### Return:

* **Object** 

<!-- End index.js -->

