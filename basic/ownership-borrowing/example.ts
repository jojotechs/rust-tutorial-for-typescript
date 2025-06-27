// TypeScript 中的内存管理和引用示例
// 帮助理解 JavaScript/TypeScript 的内存管理方式

export {}
// 1. 引用类型和值类型
let primitiveValue: number = 42;
let anotherPrimitive: number = primitiveValue; // 复制值
anotherPrimitive = 100;
console.log("原始值:", primitiveValue); // 42，不受影响
console.log("复制值:", anotherPrimitive); // 100

// 2. 对象引用
let originalObject = { name: "Alice", age: 25 };
let referencedObject = originalObject; // 共享引用
referencedObject.age = 30;
console.log("原始对象:", originalObject); // { name: "Alice", age: 30 }
console.log("引用对象:", referencedObject); // { name: "Alice", age: 30 }

// 3. 数组引用
let originalArray = [1, 2, 3, 4, 5];
let referencedArray = originalArray; // 共享引用
referencedArray.push(6);
console.log("原始数组:", originalArray); // [1, 2, 3, 4, 5, 6]
console.log("引用数组:", referencedArray); // [1, 2, 3, 4, 5, 6]

// 4. 深度复制 vs 浅复制
let user1 = {
    name: "Bob",
    address: {
        city: "New York",
        zipCode: "10001"
    }
};

// 浅复制
let user2 = { ...user1 };
user2.name = "Charlie"; // 不影响 user1
user2.address.city = "Los Angeles"; // 影响 user1！

console.log("User1 after shallow copy:", user1);
console.log("User2 after shallow copy:", user2);

// 深度复制
let user3 = JSON.parse(JSON.stringify(user1));
user3.address.city = "Chicago"; // 不影响 user1

console.log("User1 after deep copy:", user1);
console.log("User3 after deep copy:", user3);

// 5. 函数参数传递
function modifyPrimitive(value: number): number {
    value = 999;
    return value;
}

function modifyObject(obj: { name: string; age: number }): void {
    obj.age = 999; // 修改原对象
}

function modifyArray(arr: number[]): void {
    arr.push(999); // 修改原数组
}

let myNumber = 42;
let myObject = { name: "David", age: 25 };
let myArray = [1, 2, 3];

console.log("修改前:");
console.log("  数字:", myNumber);
console.log("  对象:", myObject);
console.log("  数组:", myArray);

modifyPrimitive(myNumber);
modifyObject(myObject);
modifyArray(myArray);

console.log("修改后:");
console.log("  数字:", myNumber); // 42，不变
console.log("  对象:", myObject); // age 变成 999
console.log("  数组:", myArray); // 添加了 999

// 6. 垃圾回收示例
function createTemporaryObjects(): void {
    let tempArray: number[] = [];
    for (let i = 0; i < 1000; i++) {
        tempArray.push(i);
    }
    // 函数结束后，tempArray 会被垃圾回收器回收
    console.log("创建了临时数组，长度:", tempArray.length);
}

createTemporaryObjects();
// tempArray 已经超出作用域，等待垃圾回收

// 7. 弱引用和内存泄漏示例
class EventEmitter {
    private listeners: Function[] = [];
    
    addListener(callback: Function): void {
        this.listeners.push(callback);
    }
    
    removeListener(callback: Function): void {
        const index = this.listeners.indexOf(callback);
        if (index > -1) {
            this.listeners.splice(index, 1);
        }
    }
    
    emit(): void {
        this.listeners.forEach(callback => callback());
    }
}

// 潜在的内存泄漏
let emitter = new EventEmitter();
let heavyObject = { data: new Array(1000000).fill(0) };

let callback = () => {
    console.log("Heavy object size:", heavyObject.data.length);
};

emitter.addListener(callback);
// 如果忘记 removeListener，heavyObject 不会被垃圾回收

// 8. 模拟所有权转移
interface Resource {
    id: string;
    data: any[];
}

class ResourceManager {
    private resources: Map<string, Resource> = new Map();
    
    // "移动" 资源的所有权
    transferResource(from: string, to: string): Resource | null {
        const resource = this.resources.get(from);
        if (resource) {
            this.resources.delete(from); // 从原位置删除
            this.resources.set(to, resource); // 添加到新位置
            return resource;
        }
        return null;
    }
    
    addResource(key: string, resource: Resource): void {
        this.resources.set(key, resource);
    }
    
    getResource(key: string): Resource | undefined {
        return this.resources.get(key);
    }
}

// 9. 主函数演示
function main(): void {
    console.log("=== TypeScript 内存管理演示 ===");
    
    // 资源管理示例
    let manager = new ResourceManager();
    let resource: Resource = {
        id: "res001",
        data: [1, 2, 3, 4, 5]
    };
    
    manager.addResource("owner1", resource);
    console.log("Owner1 的资源:", manager.getResource("owner1"));
    
    // 转移所有权
    manager.transferResource("owner1", "owner2");
    console.log("转移后 Owner1 的资源:", manager.getResource("owner1")); // undefined
    console.log("转移后 Owner2 的资源:", manager.getResource("owner2"));
    
    // 展示引用共享问题
    demonstrateReferenceSharing();
}

function demonstrateReferenceSharing(): void {
    console.log("\n=== 引用共享问题 ===");
    
    let sharedData = { count: 0 };
    let users = [
        { name: "Alice", data: sharedData },
        { name: "Bob", data: sharedData },
        { name: "Charlie", data: sharedData }
    ];
    
    // 一个用户修改数据，影响所有用户
    users[0].data.count = 10;
    
    users.forEach(user => {
        console.log(`${user.name} 的计数:`, user.data.count); // 都是 10
    });
    
    console.log("这就是为什么需要仔细管理引用的原因！");
}

// 运行主函数
main();

// 输出结果：
// === TypeScript 内存管理演示 ===
// 原始值: 42
// 复制值: 100
// 原始对象: { name: "Alice", age: 30 }
// 引用对象: { name: "Alice", age: 30 }
// 原始数组: [1, 2, 3, 4, 5, 6]
// 引用数组: [1, 2, 3, 4, 5, 6]
// ... (更多输出)
// 
// === 引用共享问题 ===
// Alice 的计数: 10
// Bob 的计数: 10
// Charlie 的计数: 10
// 这就是为什么需要仔细管理引用的原因！ 