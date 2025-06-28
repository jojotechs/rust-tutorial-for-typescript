// TypeScript 中的变量和常量示例
// 帮助你理解 TypeScript 的变量声明方式
export {}

// 1. 基本变量声明
let userName: string = "Alice";
let age: number = 25;
let isActive: boolean = true;

// 2. 类型推断
let message = "Hello, TypeScript!"; // 自动推断为 string
let count = 42; // 自动推断为 number

// 3. 常量声明
const PI: number = 3.14159;
const APP_NAME: string = "My App";

// 4. 可变 vs 不可变
let mutableData = "I can change";
mutableData = "I changed!";

const immutableData = "I cannot change";
// immutableData = "This would cause an error"; // 错误！

// 5. 作用域和变量遮蔽
function demonstrateScope() {
    let outerVar = "I'm in the outer scope";
    
    if (true) {
        let innerVar = "I'm in the inner scope";
        let outerVar = "I'm shadowing the outer variable"; // 遮蔽外部变量
        console.log("Inner:", outerVar);
        console.log("Block scoped:", innerVar);
    }
    
    console.log("Outer:", outerVar);
    // console.log(innerVar); // 错误！innerVar 不在作用域内
}

// 6. 重新声明变量
let score = 100;
score = 200; // 可以重新赋值

// 7. 数组和对象
let numbers: number[] = [1, 2, 3, 4, 5];
let person: { name: string, age: number } = {
    name: "Bob",
    age: 30
};

// 8. 函数中的变量
function calculateArea(width: number, height: number): number {
    const area = width * height; // 函数内部常量
    return area;
}

// 9. 展示所有概念
function main() {
    console.log("=== TypeScript 中的变量和常量 ===");
    
    console.log(`用户名: ${userName}`);
    console.log(`年龄: ${age}`);
    console.log(`活跃状态: ${isActive}`);
    console.log(`消息: ${message}`);
    console.log(`计数: ${count}`);
    console.log(`PI: ${PI}`);
    console.log(`应用名: ${APP_NAME}`);
    console.log(`可变数据: ${mutableData}`);
    console.log(`不可变数据: ${immutableData}`);
    
    demonstrateScope();
    
    console.log(`分数: ${score}`);
    console.log(`数字数组: ${numbers}`);
    console.log(`人员信息: ${JSON.stringify(person)}`);
    console.log(`区域计算: ${calculateArea(10, 5)}`);
}

// 运行主函数
main();

// 输出结果：
// === TypeScript 中的变量和常量 ===
// 用户名: Alice
// 年龄: 25
// 活跃状态: true
// 消息: Hello, TypeScript!
// 计数: 42
// PI: 3.14159
// 应用名: My App
// 可变数据: I changed!
// 不可变数据: I cannot change
// Inner: I'm shadowing the outer variable
// Block scoped: I'm in the inner scope
// Outer: I'm in the outer scope
// 分数: 200
// 数字数组: 1,2,3,4,5
// 人员信息: {"name":"Bob","age":30}
// 区域计算: 50 