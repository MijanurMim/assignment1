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
console.log(formatValue("hello"));
console.log(formatValue(1));
console.log(formatValue(false));
