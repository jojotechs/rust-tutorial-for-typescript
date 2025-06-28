// TypeScript 中的函数示例
// 展示函数定义、参数、返回值和高阶函数
export {}

// 1. 基本函数定义
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// 2. 箭头函数
const multiply = (a: number, b: number): number => a * b;

// 3. 可选参数
function createUser(name: string, age?: number): object {
    return age ? { name, age } : { name };
}

// 4. 默认参数
function power(base: number, exponent: number = 2): number {
    return Math.pow(base, exponent);
}

// 5. 剩余参数
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

// 6. 函数重载
function processData(data: string): string;
function processData(data: number): number;
function processData(data: boolean): string;
function processData(data: any): any {
    if (typeof data === 'string') {
        return data.toUpperCase();
    } else if (typeof data === 'number') {
        return data * 2;
    } else if (typeof data === 'boolean') {
        return data ? 'YES' : 'NO';
    }
}

// 7. 高阶函数
function createMultiplier(factor: number): (value: number) => number {
    return (value: number) => value * factor;
}

// 8. 函数类型
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

// 9. 回调函数
function processArray<T>(
    array: T[], 
    callback: (item: T, index: number) => T
): T[] {
    return array.map(callback);
}

// 10. 异步函数
async function fetchData(url: string): Promise<any> {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        throw new Error(`Failed to fetch data: ${error}`);
    }
}

// 11. 递归函数
function factorial(n: number): number {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// 12. 闭包
function createCounter(): () => number {
    let count = 0;
    return () => ++count;
}

// 13. 函数组合
function compose<T>(
    f: (x: T) => T, 
    g: (x: T) => T
): (x: T) => T {
    return (x: T) => f(g(x));
}

// 14. 柯里化
function curry(f: (a: number, b: number, c: number) => number) {
    return (a: number) => (b: number) => (c: number) => f(a, b, c);
}

// 15. 函数式编程风格
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
    .filter(n => n % 2 === 0)      // 偶数
    .map(n => n * n)               // 平方
    .reduce((sum, n) => sum + n, 0); // 求和

// 16. 主函数演示
function main(): void {
    console.log("=== TypeScript 函数演示 ===");
    
    // 基本函数调用
    console.log("问候:", greet("Alice"));
    console.log("乘法:", multiply(5, 3));
    
    // 可选和默认参数
    console.log("创建用户1:", createUser("Bob"));
    console.log("创建用户2:", createUser("Charlie", 25));
    console.log("幂运算1:", power(5));
    console.log("幂运算2:", power(5, 3));
    
    // 剩余参数
    console.log("求和:", sum(1, 2, 3, 4, 5));
    
    // 函数重载
    console.log("处理字符串:", processData("hello"));
    console.log("处理数字:", processData(42));
    console.log("处理布尔:", processData(true));
    
    // 高阶函数
    const doubler = createMultiplier(2);
    const tripler = createMultiplier(3);
    console.log("双倍:", doubler(5));
    console.log("三倍:", tripler(5));
    
    // 函数类型
    console.log("加法:", add(10, 5));
    console.log("减法:", subtract(10, 5));
    
    // 回调函数
    const doubled = processArray([1, 2, 3], (item, index) => item * 2);
    console.log("数组处理:", doubled);
    
    // 递归
    console.log("阶乘:", factorial(5));
    
    // 闭包
    const counter = createCounter();
    console.log("计数器:", counter(), counter(), counter());
    
    // 函数组合
    const addOne = (x: number) => x + 1;
    const double = (x: number) => x * 2;
    const addOneThenDouble = compose(double, addOne);
    console.log("组合函数:", addOneThenDouble(5)); // (5 + 1) * 2 = 12
    
    // 柯里化
    const curriedAdd = curry((a, b, c) => a + b + c);
    console.log("柯里化:", curriedAdd(1)(2)(3));
    
    // 函数式编程
    console.log("函数式编程结果:", result);
    
    // 展示错误处理
    demonstrateErrorHandling();
}

function demonstrateErrorHandling(): void {
    console.log("\n=== 错误处理演示 ===");
    
    function divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Division by zero");
        }
        return a / b;
    }
    
    try {
        console.log("除法结果:", divide(10, 2));
        console.log("除法结果:", divide(10, 0)); // 会抛出错误
    } catch (error) {
        console.log("捕获错误:", error.message);
    }
    
    // Promise 错误处理
    const asyncOperation = async () => {
        try {
            // 模拟异步操作
            const result = await new Promise<string>((resolve, reject) => {
                setTimeout(() => {
                    Math.random() > 0.5 
                        ? resolve("Success!") 
                        : reject(new Error("Random failure"));
                }, 100);
            });
            console.log("异步结果:", result);
        } catch (error) {
            console.log("异步错误:", error.message);
        }
    };
    
    asyncOperation();
}

// 运行主函数
main();

// 输出结果：
// === TypeScript 函数演示 ===
// 问候: Hello, Alice!
// 乘法: 15
// 创建用户1: { name: 'Bob' }
// 创建用户2: { name: 'Charlie', age: 25 }
// 幂运算1: 25
// 幂运算2: 125
// 求和: 15
// 处理字符串: HELLO
// 处理数字: 84
// 处理布尔: YES
// 双倍: 10
// 三倍: 15
// 加法: 15
// 减法: 5
// 数组处理: [2, 4, 6]
// 阶乘: 120
// 计数器: 1 2 3
// 组合函数: 12
// 柯里化: 6
// 函数式编程结果: 220
// 
// === 错误处理演示 ===
// 除法结果: 5
// 捕获错误: Division by zero
// 异步结果: Success! (或) 异步错误: Random failure 