// TypeScript 中的错误处理示例
// 展示 try/catch、Promise、自定义错误等处理方式
export {}

// 1. 基本错误处理
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("除零错误：除数不能为零");
    }
    return a / b;
}

function basicErrorHandling(): void {
    try {
        console.log("正常除法:", divide(10, 2));
        console.log("错误除法:", divide(10, 0)); // 会抛出错误
    } catch (error) {
        console.log("捕获错误:", error.message);
    } finally {
        console.log("清理资源（finally 块总是执行）");
    }
}

// 2. 自定义错误类
class ValidationError extends Error {
    constructor(
        message: string,
        public field: string,
        public code: string
    ) {
        super(message);
        this.name = 'ValidationError';
    }
}

class NetworkError extends Error {
    constructor(
        message: string,
        public statusCode: number,
        public url: string
    ) {
        super(message);
        this.name = 'NetworkError';
    }
}

// 3. 用户输入验证
interface User {
    name: string;
    email: string;
    age: number;
}

function validateUser(userData: any): User {
    if (!userData.name || typeof userData.name !== 'string') {
        throw new ValidationError("姓名是必需的且必须是字符串", "name", "INVALID_NAME");
    }
    
    if (!userData.email || !userData.email.includes('@')) {
        throw new ValidationError("请提供有效的邮箱地址", "email", "INVALID_EMAIL");
    }
    
    if (!userData.age || userData.age < 0 || userData.age > 150) {
        throw new ValidationError("年龄必须在 0-150 之间", "age", "INVALID_AGE");
    }
    
    return {
        name: userData.name,
        email: userData.email,
        age: userData.age
    };
}

// 4. 异步错误处理 - Promise
function fetchUserData(userId: number): Promise<User> {
    return new Promise((resolve, reject) => {
        // 模拟网络请求
        setTimeout(() => {
            if (userId <= 0) {
                reject(new ValidationError("用户ID必须为正数", "userId", "INVALID_USER_ID"));
                return;
            }
            
            if (userId === 404) {
                reject(new NetworkError("用户未找到", 404, `/api/users/${userId}`));
                return;
            }
            
            if (userId === 500) {
                reject(new NetworkError("服务器内部错误", 500, `/api/users/${userId}`));
                return;
            }
            
            // 成功返回用户数据
            resolve({
                name: `User${userId}`,
                email: `user${userId}@example.com`,
                age: 20 + userId % 50
            });
        }, 100);
    });
}

// 5. async/await 错误处理
async function handleAsyncErrors(): Promise<void> {
    const userIds = [1, 404, 500, -1];
    
    for (const userId of userIds) {
        try {
            const user = await fetchUserData(userId);
            console.log(`获取用户成功:`, user);
        } catch (error) {
            if (error instanceof ValidationError) {
                console.log(`验证错误: ${error.message} (字段: ${error.field}, 代码: ${error.code})`);
            } else if (error instanceof NetworkError) {
                console.log(`网络错误: ${error.message} (状态码: ${error.statusCode}, URL: ${error.url})`);
            } else {
                console.log(`未知错误:`, error.message);
            }
        }
    }
}

// 6. Promise 链式错误处理
function promiseChainErrorHandling(): void {
    fetchUserData(1)
        .then(user => {
            console.log("步骤1 - 获取用户:", user.name);
            return fetchUserData(2); // 获取另一个用户
        })
        .then(user => {
            console.log("步骤2 - 获取用户:", user.name);
            throw new Error("模拟处理过程中的错误");
        })
        .then(user => {
            console.log("这行不会执行");
        })
        .catch(error => {
            console.log("Promise 链中的错误:", error.message);
        })
        .finally(() => {
            console.log("Promise 链处理完成");
        });
}

// 7. 多个并行异步操作的错误处理
async function handleParallelOperations(): Promise<void> {
    const userIds = [1, 2, 3, 404];
    
    try {
        // Promise.all - 一个失败就全部失败
        const users = await Promise.all(userIds.map(id => fetchUserData(id)));
        console.log("所有用户获取成功:", users.map(u => u.name));
    } catch (error) {
        console.log("Promise.all 失败:", error.message);
    }
    
    // Promise.allSettled - 获取所有结果（成功和失败）
    const results = await Promise.allSettled(userIds.map(id => fetchUserData(id)));
    
    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`用户 ${userIds[index]} 获取成功:`, result.value.name);
        } else {
            console.log(`用户 ${userIds[index]} 获取失败:`, result.reason.message);
        }
    });
}

// 8. 重试机制
async function retryOperation<T>(
    operation: () => Promise<T>,
    maxRetries: number = 3,
    delay: number = 1000
): Promise<T> {
    let lastError: Error;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            return await operation();
        } catch (error) {
            lastError = error;
            console.log(`尝试 ${attempt}/${maxRetries} 失败:`, error.message);
            
            if (attempt < maxRetries) {
                console.log(`等待 ${delay}ms 后重试...`);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }
    
    throw lastError!;
}

// 9. 资源清理和错误处理
class FileProcessor {
    private isProcessing = false;
    
    async processFile(filename: string): Promise<string> {
        if (this.isProcessing) {
            throw new Error("已有文件正在处理中");
        }
        
        this.isProcessing = true;
        
        try {
            console.log(`开始处理文件: ${filename}`);
            
            // 模拟文件处理
            await new Promise(resolve => setTimeout(resolve, 100));
            
            if (filename.includes('error')) {
                throw new Error(`文件处理失败: ${filename}`);
            }
            
            console.log(`文件处理完成: ${filename}`);
            return `处理结果: ${filename}`;
            
        } finally {
            // 无论成功还是失败都要清理资源
            this.isProcessing = false;
            console.log("清理处理状态");
        }
    }
}

// 10. 错误边界模拟（在 React 中常用）
class ErrorBoundary {
    private errors: Error[] = [];
    
    wrapOperation<T>(operation: () => T, fallback?: T): T | undefined {
        try {
            return operation();
        } catch (error) {
            this.errors.push(error);
            console.log("错误边界捕获错误:", error.message);
            return fallback;
        }
    }
    
    getErrors(): Error[] {
        return [...this.errors];
    }
    
    clearErrors(): void {
        this.errors = [];
    }
}

// 11. 主函数演示
async function main(): Promise<void> {
    console.log("=== TypeScript 错误处理演示 ===");
    
    // 基本错误处理
    console.log("\n1. 基本错误处理:");
    basicErrorHandling();
    
    // 验证错误
    console.log("\n2. 验证错误:");
    const testUsers = [
        { name: "Alice", email: "alice@example.com", age: 25 },
        { name: "", email: "invalid-email", age: -1 },
        { name: "Bob", email: "bob@example.com", age: 200 }
    ];
    
    testUsers.forEach((userData, index) => {
        try {
            const user = validateUser(userData);
            console.log(`用户 ${index + 1} 验证成功:`, user.name);
        } catch (error) {
            if (error instanceof ValidationError) {
                console.log(`用户 ${index + 1} 验证失败: ${error.message} (${error.field})`);
            }
        }
    });
    
    // 异步错误处理
    console.log("\n3. 异步错误处理:");
    await handleAsyncErrors();
    
    // Promise 链错误处理
    console.log("\n4. Promise 链错误处理:");
    promiseChainErrorHandling();
    
    // 等待一下让 Promise 链完成
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // 并行操作错误处理
    console.log("\n5. 并行操作错误处理:");
    await handleParallelOperations();
    
    // 重试机制
    console.log("\n6. 重试机制:");
    try {
        await retryOperation(() => fetchUserData(500), 2, 500);
    } catch (error) {
        console.log("重试失败，最终错误:", error.message);
    }
    
    // 资源清理
    console.log("\n7. 资源清理:");
    const processor = new FileProcessor();
    
    try {
        await processor.processFile("document.txt");
        await processor.processFile("error_file.txt");
    } catch (error) {
        console.log("文件处理错误:", error.message);
    }
    
    // 错误边界
    console.log("\n8. 错误边界:");
    const errorBoundary = new ErrorBoundary();
    
    const result1 = errorBoundary.wrapOperation(() => {
        return "正常操作结果";
    });
    
    const result2 = errorBoundary.wrapOperation(() => {
        throw new Error("操作失败");
        return "不会返回";
    }, "默认值");
    
    console.log("操作结果1:", result1);
    console.log("操作结果2:", result2);
    console.log("错误边界收集的错误:", errorBoundary.getErrors().length);
}

// 运行主函数
main().catch(error => {
    console.error("主函数执行失败:", error);
});

// 输出结果：
// === TypeScript 错误处理演示 ===
// 
// 1. 基本错误处理:
// 正常除法: 5
// 捕获错误: 除零错误：除数不能为零
// 清理资源（finally 块总是执行）
// 
// 2. 验证错误:
// 用户 1 验证成功: Alice
// 用户 2 验证失败: 姓名是必需的且必须是字符串 (name)
// 用户 3 验证失败: 年龄必须在 0-150 之间 (age)
// 
// 3. 异步错误处理:
// 获取用户成功: { name: 'User1', email: 'user1@example.com', age: 21 }
// 网络错误: 用户未找到 (状态码: 404, URL: /api/users/404)
// 网络错误: 服务器内部错误 (状态码: 500, URL: /api/users/500)
// 验证错误: 用户ID必须为正数 (字段: userId, 代码: INVALID_USER_ID)
// ... (更多输出) 