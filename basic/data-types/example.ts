// TypeScript 中的数据类型示例
// 展示基本类型、接口、数组和对象的使用
export {}

// 1. 基本数据类型
let age: number = 25;
let name: string = "Alice";
let isActive: boolean = true;
let value: null = null;
let notDefined: undefined = undefined;

// 2. 数组类型
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["hello", "world", "typescript"];
let mixed: (string | number)[] = ["Alice", 25, "Bob", 30];

// 3. 元组类型
let person: [string, number] = ["Alice", 25];
let coordinates: [number, number, number] = [10, 20, 30];

// 4. 对象类型和接口
interface User {
    id: number;
    name: string;
    email: string;
    age?: number; // 可选属性
    isActive: boolean;
}

let user: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    isActive: true
    // age 是可选的，可以不提供
};

// 5. 嵌套对象
interface Address {
    street: string;
    city: string;
    zipCode: string;
}

interface UserWithAddress {
    id: number;
    name: string;
    address: Address;
}

let userWithAddress: UserWithAddress = {
    id: 1,
    name: "Bob",
    address: {
        street: "123 Main St",
        city: "New York",
        zipCode: "10001"
    }
};

// 6. 枚举类型
enum Status {
    Pending = "pending",
    Approved = "approved",
    Rejected = "rejected"
}

let currentStatus: Status = Status.Pending;

// 7. 联合类型
type ID = string | number;
let userId: ID = 123;
let productId: ID = "prod-456";

// 8. 函数类型
type Calculator = (a: number, b: number) => number;

let add: Calculator = (a, b) => a + b;
let multiply: Calculator = (a, b) => a * b;

// 9. 泛型
interface Container<T> {
    value: T;
    getValue(): T;
}

let stringContainer: Container<string> = {
    value: "hello",
    getValue() {
        return this.value;
    }
};

let numberContainer: Container<number> = {
    value: 42,
    getValue() {
        return this.value;
    }
};

// 10. 复杂数据结构
interface Product {
    id: number;
    name: string;
    price: number;
    tags: string[];
    category: {
        id: number;
        name: string;
    };
}

let products: Product[] = [
    {
        id: 1,
        name: "Laptop",
        price: 999.99,
        tags: ["electronics", "computer"],
        category: {
            id: 1,
            name: "Electronics"
        }
    },
    {
        id: 2,
        name: "Book",
        price: 29.99,
        tags: ["education", "reading"],
        category: {
            id: 2,
            name: "Books"
        }
    }
];

// 11. 处理数据的函数
function processUser(user: User): string {
    const ageText = user.age ? ` (age: ${user.age})` : "";
    return `${user.name}${ageText} - ${user.email}`;
}

function calculateTotal(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
}

// 12. 类型守卫
function isString(value: string | number): value is string {
    return typeof value === 'string';
}

function processId(id: ID): string {
    if (isString(id)) {
        return id.toUpperCase();
    } else {
        return id.toString();
    }
}

// 13. 主函数演示
function main() {
    console.log("=== TypeScript 数据类型演示 ===");
    
    // 基本类型
    console.log(`年龄: ${age} (类型: ${typeof age})`);
    console.log(`姓名: ${name} (类型: ${typeof name})`);
    console.log(`活跃: ${isActive} (类型: ${typeof isActive})`);
    
    // 数组
    console.log(`数字数组: ${numbers}`);
    console.log(`字符串数组: ${strings}`);
    console.log(`混合数组: ${mixed}`);
    
    // 元组
    console.log(`人员信息: ${person[0]}, ${person[1]}岁`);
    console.log(`坐标: (${coordinates[0]}, ${coordinates[1]}, ${coordinates[2]})`);
    
    // 对象
    console.log(`用户信息: ${processUser(user)}`);
    console.log(`带地址的用户: ${userWithAddress.name} 住在 ${userWithAddress.address.city}`);
    
    // 枚举
    console.log(`当前状态: ${currentStatus}`);
    
    // 联合类型
    console.log(`用户ID: ${processId(userId)}`);
    console.log(`产品ID: ${processId(productId)}`);
    
    // 泛型
    console.log(`字符串容器: ${stringContainer.getValue()}`);
    console.log(`数字容器: ${numberContainer.getValue()}`);
    
    // 复杂结构
    console.log(`产品总价: $${calculateTotal(products)}`);
    
    // 展示所有产品
    products.forEach(product => {
        console.log(`${product.name}: $${product.price} (${product.category.name})`);
    });
}

// 运行主函数
main();

// 输出结果：
// === TypeScript 数据类型演示 ===
// 年龄: 25 (类型: number)
// 姓名: Alice (类型: string)
// 活跃: true (类型: boolean)
// 数字数组: 1,2,3,4,5
// 字符串数组: hello,world,typescript
// 混合数组: Alice,25,Bob,30
// 人员信息: Alice, 25岁
// 坐标: (10, 20, 30)
// 用户信息: Alice - alice@example.com
// 带地址的用户: Bob 住在 New York
// 当前状态: pending
// 用户ID: 123
// 产品ID: PROD-456
// 字符串容器: hello
// 数字容器: 42
// 产品总价: $1029.98
// Laptop: $999.99 (Electronics)
// Book: $29.99 (Books) 