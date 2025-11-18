function formatValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    if (typeof value === "number") {
        return value * 10;
    }
    if (typeof value === "boolean") {
        return !value;
    }
    return value;
}
function getLength(value) {
    if (typeof value === "string") {
        return value.length;
    }
    if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
}
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getDetails = function () {
        return "'Name: ".concat(this.name, ", Age: ").concat(this.age, "'");
    };
    return Person;
}());
function filterByRating(items) {
    var topRatedItems = items.filter(function (item) { return item.rating >= 4; });
    return topRatedItems;
}
function filterActiveUsers(users) {
    var activeUsers = users.filter(function (user) { return user.isActive; });
    return activeUsers;
}
function printBookDetails(book) {
    console.log("Title: ".concat(book.title, ", Author: ").concat(book.author, ", Published: ").concat(book.publishedYear, ", Available: ").concat(book.isAvailable ? "Yes" : "No"));
}
function getUniqueValues(array1, array2) {
    var result = [];
    for (var i = 0; i < array1.length; i++) {
        var value = array1[i];
        var exists = false;
        for (var j = 0; j < result.length; j++) {
            if (result[j] === value) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result.push(value);
        }
    }
    for (var i = 0; i < array2.length; i++) {
        var value = array2[i];
        var exists = false;
        for (var j = 0; j < result.length; j++) {
            if (result[j] === value) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result.push(value);
        }
    }
    return result;
}
var array1 = [1, 2, 3, 4, 5];
var array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));
