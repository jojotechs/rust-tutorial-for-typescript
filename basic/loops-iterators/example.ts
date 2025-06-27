// TypeScript 中的循环和迭代器示例
// 展示各种循环方式和数组方法

// 1. 基本 for 循环
function basicForLoop(): void {
    console.log("=== 基本 for 循环 ===");
    for (let i = 0; i < 5; i++) {
        console.log(`索引: ${i}`);
    }
}

// 2. for...of 循环（值）
function forOfLoop(): void {
    console.log("=== for...of 循环 ===");
    const numbers = [1, 2, 3, 4, 5];
    for (const num of numbers) {
        console.log(`值: ${num}`);
    }
}

// 3. for...in 循环（键）
function forInLoop(): void {
    console.log("=== for...in 循环 ===");
    const person = { name: "Alice", age: 25, city: "New York" };
    for (const key in person) {
        console.log(`${key}: ${person[key as keyof typeof person]}`);
    }
}

// 4. while 循环
function whileLoop(): void {
    console.log("=== while 循环 ===");
    let count = 0;
    while (count < 3) {
        console.log(`计数: ${count}`);
        count++;
    }
}

// 5. do...while 循环
function doWhileLoop(): void {
    console.log("=== do...while 循环 ===");
    let num = 0;
    do {
        console.log(`至少执行一次: ${num}`);
        num++;
    } while (num < 2);
}

// 6. 数组方法 - map
function demonstrateMap(): void {
    console.log("=== Array.map 示例 ===");
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(num => num * 2);
    console.log("原数组:", numbers);
    console.log("翻倍后:", doubled);
}

// 7. 数组方法 - filter
function demonstrateFilter(): void {
    console.log("=== Array.filter 示例 ===");
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    console.log("原数组:", numbers);
    console.log("偶数:", evenNumbers);
}

// 8. 数组方法 - reduce
function demonstrateReduce(): void {
    console.log("=== Array.reduce 示例 ===");
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const product = numbers.reduce((acc, num) => acc * num, 1);
    console.log("数组:", numbers);
    console.log("求和:", sum);
    console.log("求积:", product);
}

// 9. 数组方法 - forEach
function demonstrateForEach(): void {
    console.log("=== Array.forEach 示例 ===");
    const fruits = ["apple", "banana", "orange"];
    fruits.forEach((fruit, index) => {
        console.log(`${index}: ${fruit}`);
    });
}

// 10. 函数式编程链式调用
function demonstrateChaining(): void {
    console.log("=== 链式调用示例 ===");
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    const result = numbers
        .filter(num => num % 2 === 0)    // 筛选偶数
        .map(num => num * num)           // 平方
        .reduce((sum, num) => sum + num, 0); // 求和
    
    console.log("原数组:", numbers);
    console.log("偶数平方和:", result);
}

// 11. 嵌套循环
function demonstrateNestedLoops(): void {
    console.log("=== 嵌套循环示例 ===");
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
        }
    }
}

// 12. 迭代器接口示例
function demonstrateIterator(): void {
    console.log("=== 迭代器示例 ===");
    
    class NumberIterator {
        private current: number;
        private max: number;
        
        constructor(max: number) {
            this.current = 0;
            this.max = max;
        }
        
        [Symbol.iterator]() {
            return this;
        }
        
        next(): IteratorResult<number> {
            if (this.current < this.max) {
                return { value: this.current++, done: false };
            } else {
                return { value: undefined, done: true };
            }
        }
    }
    
    const iterator = new NumberIterator(5);
    for (const num of iterator) {
        console.log(`迭代器值: ${num}`);
    }
}

// 13. 生成器函数
function* fibonacciGenerator(): Generator<number, void, unknown> {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

function demonstrateGenerator(): void {
    console.log("=== 生成器示例 ===");
    const fib = fibonacciGenerator();
    
    for (let i = 0; i < 10; i++) {
        console.log(`斐波那契数列: ${fib.next().value}`);
    }
}

// 14. 异步迭代器
async function* asyncNumberGenerator(): AsyncGenerator<number, void, unknown> {
    for (let i = 0; i < 5; i++) {
        await new Promise(resolve => setTimeout(resolve, 100));
        yield i;
    }
}

async function demonstrateAsyncIterator(): Promise<void> {
    console.log("=== 异步迭代器示例 ===");
    for await (const num of asyncNumberGenerator()) {
        console.log(`异步生成的数字: ${num}`);
    }
}

// 15. 主函数演示
async function main(): Promise<void> {
    console.log("=== TypeScript 循环和迭代器演示 ===");
    
    basicForLoop();
    forOfLoop();
    forInLoop();
    whileLoop();
    doWhileLoop();
    
    demonstrateMap();
    demonstrateFilter();
    demonstrateReduce();
    demonstrateForEach();
    demonstrateChaining();
    
    demonstrateNestedLoops();
    demonstrateIterator();
    demonstrateGenerator();
    
    await demonstrateAsyncIterator();
}

// 运行主函数
main().catch(console.error);

// 输出结果：
// === TypeScript 循环和迭代器演示 ===
// === 基本 for 循环 ===
// 索引: 0
// 索引: 1
// 索引: 2
// 索引: 3
// 索引: 4
// === for...of 循环 ===
// 值: 1
// 值: 2
// 值: 3
// 值: 4
// 值: 5
// ... (更多输出) 