function formatValue(
  value: string | number | boolean
): string | number | boolean {
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

function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }

  return 0;
}

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const topRatedItems = items.filter((item) => item.rating >= 4);

  return topRatedItems;
}

function filterActiveUsers(
  users: { id: number; name: string; email: string; isActive: boolean }[]
): { id: number; name: string; email: string; isActive: boolean }[] {
  const activeUsers = users.filter((user) => user.isActive);
  return activeUsers;
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
function printBookDetails(book: Book): void {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
}

function getUniqueValues(
  array1: (string | number)[],
  array2: (string | number)[]
): (string | number)[] {
  const result: (string | number)[] = [];

  for (let i = 0; i < array1.length; i++) {
    const value = array1[i];
    let exists = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j] === value) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result.push(value);
    }
  }

  for (let i = 0; i < array2.length; i++) {
    const value = array2[i];
    let exists = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j] === value) {
        exists = true;
        break;
      }
    }

    // if (!exists) {
    //   result.push(value);
    // }
  }

  return result;
}
