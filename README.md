1. What are some differences between interfaces and types in TypeScript?

---

Interface দিয়ে অব্জেক্ত ,ক্লাস বা ফান্সন এর structure তইরি করা যায়। আর types হল যেকোনো টাইপকে একটি নতুন নাম দিয়ে দিফাইন করা।

উদাহরণ:
interface User {
name: string;
}

interface User {
age: number;
}

Interface :

Interface দিয়ে object, class, function–এর structure তৈরি করা যায়।
Interface re-open করা যায়—মানে একই নামের interface একাধিকবার লিখলে সেগুলো merge হয়ে যায়।
Interface সহজে extends করা যায়।
Interface মূলত object-এর জন্য ব্যবহৃত হয়।

Types :
Type দিয়ে যেকোনো টাইপকে একটি নতুন নাম দিয়ে ডিফাইন করা যায়।
Type re-open করা যায় না।
Type union, intersection, tuple, primitive, function—সবকিছু ডিফাইন করতে পারে।
Type তুলনামূলকভাবে বেশি ফ্লেক্সিবল।

---

3.Explain the difference between any, unknown, and never types in TypeScript.

1. any

TypeScript এটিকে চেক করে না।
যেকোনো ভ্যালু রাখা যায় এবং যেকোনো অপারেশন করা যায়।
টাইপ সেফটি নষ্ট হয়।

2. unknown

যেকোনো ভ্যালু রাখা যায়, কিন্তু ব্যবহারের আগে টাইপ চেক করতে হবে।
any এর থেকে সেফ।

3. never

এমন টাইপ যা কখনো ঘটবে না।
উদাহরণ:ফাংশন যেটি কখনো রিটার্ন করবে না।
