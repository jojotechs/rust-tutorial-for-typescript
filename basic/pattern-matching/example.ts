// TypeScript 中的模式匹配示例
// 使用 switch、联合类型和类型守卫模拟模式匹配
export {}

// 1. 基本 switch 语句
function processNumber(value: number): string {
    switch (value) {
        case 0:
            return "零";
        case 1:
            return "一";
        case 2:
            return "二";
        case 3:
            return "三";
        default:
            return "其他数字";
    }
}

// 2. 字符串模式匹配
function processStatus(status: string): string {
    switch (status) {
        case "pending":
            return "等待处理";
        case "approved":
            return "已批准";
        case "rejected":
            return "已拒绝";
        default:
            return "未知状态";
    }
}

// 3. 联合类型和类型守卫
type Shape = 
    | { type: "circle"; radius: number }
    | { type: "rectangle"; width: number; height: number }
    | { type: "triangle"; base: number; height: number };

function calculateArea(shape: Shape): number {
    switch (shape.type) {
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        case "rectangle":
            return shape.width * shape.height;
        case "triangle":
            return (shape.base * shape.height) / 2;
        default:
            // 这里 TypeScript 会检查穷尽性
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

// 4. 嵌套对象模式匹配
type ApiResponse = 
    | { status: "success"; data: any }
    | { status: "error"; error: string; code: number }
    | { status: "loading" };

function handleApiResponse(response: ApiResponse): string {
    switch (response.status) {
        case "success":
            return `成功: ${JSON.stringify(response.data)}`;
        case "error":
            return `错误 ${response.code}: ${response.error}`;
        case "loading":
            return "加载中...";
    }
}

// 5. 数组模式匹配（模拟）
function processArray<T>(arr: T[]): string {
    switch (arr.length) {
        case 0:
            return "空数组";
        case 1:
            return `单元素数组: ${arr[0]}`;
        case 2:
            return `双元素数组: ${arr[0]}, ${arr[1]}`;
        default:
            return `多元素数组，长度: ${arr.length}`;
    }
}

// 6. 类型守卫函数
function isString(value: unknown): value is string {
    return typeof value === 'string';
}

function isNumber(value: unknown): value is number {
    return typeof value === 'number';
}

function isArray<T>(value: unknown): value is T[] {
    return Array.isArray(value);
}

// 7. 复杂类型守卫
type User = { type: "user"; name: string; email: string };
type Admin = { type: "admin"; name: string; permissions: string[] };
type Guest = { type: "guest" };

type Person = User | Admin | Guest;

function getPersonInfo(person: Person): string {
    switch (person.type) {
        case "user":
            return `用户: ${person.name} (${person.email})`;
        case "admin":
            return `管理员: ${person.name} - 权限: ${person.permissions.join(", ")}`;
        case "guest":
            return "访客用户";
    }
}

// 8. 条件链模式匹配
function processValue(value: unknown): string {
    if (isString(value)) {
        if (value.length === 0) {
            return "空字符串";
        } else if (value.length < 5) {
            return "短字符串";
        } else {
            return "长字符串";
        }
    } else if (isNumber(value)) {
        if (value === 0) {
            return "零";
        } else if (value > 0) {
            return "正数";
        } else {
            return "负数";
        }
    } else if (isArray(value)) {
        return `数组，长度: ${value.length}`;
    } else {
        return "未知类型";
    }
}

// 9. Option 类型模拟
type Option<T> = { type: "some"; value: T } | { type: "none" };

function createSome<T>(value: T): Option<T> {
    return { type: "some", value };
}

function createNone<T>(): Option<T> {
    return { type: "none" };
}

function mapOption<T, U>(option: Option<T>, f: (value: T) => U): Option<U> {
    switch (option.type) {
        case "some":
            return createSome(f(option.value));
        case "none":
            return createNone();
    }
}

function unwrapOption<T>(option: Option<T>, defaultValue: T): T {
    switch (option.type) {
        case "some":
            return option.value;
        case "none":
            return defaultValue;
    }
}

// 10. Result 类型模拟
type Result<T, E> = 
    | { type: "ok"; value: T }
    | { type: "error"; error: E };

function createOk<T, E>(value: T): Result<T, E> {
    return { type: "ok", value };
}

function createError<T, E>(error: E): Result<T, E> {
    return { type: "error", error };
}

function divide(a: number, b: number): Result<number, string> {
    if (b === 0) {
        return createError("除零错误");
    }
    return createOk(a / b);
}

function handleResult<T, E>(result: Result<T, E>): string {
    switch (result.type) {
        case "ok":
            return `成功: ${result.value}`;
        case "error":
            return `错误: ${result.error}`;
    }
}

// 11. 递归数据结构模式匹配
type TreeNode<T> = 
    | { type: "leaf"; value: T }
    | { type: "branch"; left: TreeNode<T>; right: TreeNode<T> };

function sumTree(tree: TreeNode<number>): number {
    switch (tree.type) {
        case "leaf":
            return tree.value;
        case "branch":
            return sumTree(tree.left) + sumTree(tree.right);
    }
}

// 12. 主函数演示
function main(): void {
    console.log("=== TypeScript 模式匹配演示 ===");
    
    // 基本 switch
    console.log("数字匹配:", processNumber(1));
    console.log("状态匹配:", processStatus("approved"));
    
    // 形状面积计算
    const shapes: Shape[] = [
        { type: "circle", radius: 5 },
        { type: "rectangle", width: 4, height: 6 },
        { type: "triangle", base: 3, height: 4 }
    ];
    
    shapes.forEach(shape => {
        console.log(`${shape.type} 面积:`, calculateArea(shape));
    });
    
    // API 响应处理
    const responses: ApiResponse[] = [
        { status: "success", data: { id: 1, name: "Alice" } },
        { status: "error", error: "Not found", code: 404 },
        { status: "loading" }
    ];
    
    responses.forEach(response => {
        console.log("API 响应:", handleApiResponse(response));
    });
    
    // 数组模式匹配
    console.log("数组匹配:", processArray([]));
    console.log("数组匹配:", processArray([1]));
    console.log("数组匹配:", processArray([1, 2]));
    console.log("数组匹配:", processArray([1, 2, 3, 4]));
    
    // 人员信息
    const people: Person[] = [
        { type: "user", name: "Alice", email: "alice@example.com" },
        { type: "admin", name: "Bob", permissions: ["read", "write", "delete"] },
        { type: "guest" }
    ];
    
    people.forEach(person => {
        console.log("人员信息:", getPersonInfo(person));
    });
    
    // 值处理
    const values: unknown[] = ["hello", "", "a very long string", 42, 0, -10, [1, 2, 3], {}];
    values.forEach(value => {
        console.log("值处理:", processValue(value));
    });
    
    // Option 类型
    const someValue = createSome(42);
    const noneValue = createNone<number>();
    
    console.log("Option 映射:", unwrapOption(mapOption(someValue, x => x * 2), 0));
    console.log("Option 默认值:", unwrapOption(noneValue, 100));
    
    // Result 类型
    const divisionResults = [divide(10, 2), divide(10, 0)];
    divisionResults.forEach(result => {
        console.log("除法结果:", handleResult(result));
    });
    
    // 树结构
    const tree: TreeNode<number> = {
        type: "branch",
        left: { type: "leaf", value: 1 },
        right: {
            type: "branch",
            left: { type: "leaf", value: 2 },
            right: { type: "leaf", value: 3 }
        }
    };
    
    console.log("树的和:", sumTree(tree));
}

// 运行主函数
main();

// 输出结果：
// === TypeScript 模式匹配演示 ===
// 数字匹配: 一
// 状态匹配: 已批准
// circle 面积: 78.53981633974483
// rectangle 面积: 24
// triangle 面积: 6
// API 响应: 成功: {"id":1,"name":"Alice"}
// API 响应: 错误 404: Not found
// API 响应: 加载中...
// 数组匹配: 空数组
// 数组匹配: 单元素数组: 1
// 数组匹配: 双元素数组: 1, 2
// 数组匹配: 多元素数组，长度: 4
// 人员信息: 用户: Alice (alice@example.com)
// 人员信息: 管理员: Bob - 权限: read, write, delete
// 人员信息: 访客用户
// 值处理: 长字符串
// 值处理: 空字符串
// 值处理: 长字符串
// 值处理: 正数
// 值处理: 零
// 值处理: 负数
// 值处理: 数组，长度: 3
// 值处理: 未知类型
// Option 映射: 84
// Option 默认值: 100
// 除法结果: 成功: 5
// 除法结果: 错误: 除零错误
// 树的和: 6 