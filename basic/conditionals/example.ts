// TypeScript 中的条件语句示例
// 展示 if/else、switch、三元运算符和条件判断
export {}

// 1. 基本 if/else 语句
function checkAge(age: number): string {
    if (age < 13) {
        return "儿童";
    } else if (age < 18) {
        return "青少年";
    } else if (age < 65) {
        return "成年人";
    } else {
        return "老年人";
    }
}

// 2. switch 语句
function getWeekday(day: number): string {
    switch (day) {
        case 1:
            return "星期一";
        case 2:
            return "星期二";
        case 3:
            return "星期三";
        case 4:
            return "星期四";
        case 5:
            return "星期五";
        case 6:
            return "星期六";
        case 7:
            return "星期日";
        default:
            return "无效的日期";
    }
}

// 3. 三元运算符
function isEven(num: number): string {
    return num % 2 === 0 ? "偶数" : "奇数";
}

function getAbsoluteValue(num: number): number {
    return num >= 0 ? num : -num;
}

// 4. 逻辑运算符
function checkAccess(username: string, password: string, isActive: boolean): string {
    if (username && password && isActive) {
        return "访问允许";
    } else if (!username) {
        return "缺少用户名";
    } else if (!password) {
        return "缺少密码";
    } else if (!isActive) {
        return "账户未激活";
    } else {
        return "访问拒绝";
    }
}

// 5. 复杂条件判断
interface User {
    name: string;
    age: number;
    role: "admin" | "user" | "guest";
    isActive: boolean;
}

function getUserPermissions(user: User): string[] {
    const permissions: string[] = [];
    
    if (user.isActive) {
        permissions.push("login");
        
        if (user.role === "admin") {
            permissions.push("read", "write", "delete", "manage_users");
        } else if (user.role === "user") {
            permissions.push("read", "write");
        } else if (user.role === "guest") {
            permissions.push("read");
        }
        
        if (user.age >= 18) {
            permissions.push("access_adult_content");
        }
    }
    
    return permissions;
}

// 6. 类型守卫
function processValue(value: string | number | boolean): string {
    if (typeof value === "string") {
        return `字符串: ${value.toUpperCase()}`;
    } else if (typeof value === "number") {
        if (value > 0) {
            return `正数: ${value}`;
        } else if (value < 0) {
            return `负数: ${value}`;
        } else {
            return "零";
        }
    } else if (typeof value === "boolean") {
        return value ? "真值" : "假值";
    } else {
        return "未知类型";
    }
}

// 7. 空值检查
function processOptionalValue(value?: string): string {
    if (value != null) { // 检查 null 和 undefined
        if (value.length > 0) {
            return `有值: ${value}`;
        } else {
            return "空字符串";
        }
    } else {
        return "无值";
    }
}

// 8. 数组和对象的条件检查
function analyzeData(data: any[]): string {
    if (!Array.isArray(data)) {
        return "不是数组";
    }
    
    if (data.length === 0) {
        return "空数组";
    } else if (data.length === 1) {
        return "单元素数组";
    } else if (data.length <= 5) {
        return "小数组";
    } else if (data.length <= 100) {
        return "中等数组";
    } else {
        return "大数组";
    }
}

// 9. 嵌套条件和复杂逻辑
function calculateShipping(weight: number, distance: number, isPriority: boolean): number {
    let baseCost = 0;
    
    // 基于重量的基础费用
    if (weight <= 1) {
        baseCost = 5;
    } else if (weight <= 5) {
        baseCost = 10;
    } else if (weight <= 10) {
        baseCost = 20;
    } else {
        baseCost = 30;
    }
    
    // 基于距离的调整
    if (distance > 1000) {
        baseCost *= 2;
    } else if (distance > 500) {
        baseCost *= 1.5;
    }
    
    // 优先配送费用
    if (isPriority) {
        baseCost *= 1.3;
    }
    
    return Math.round(baseCost * 100) / 100; // 四舍五入到两位小数
}

// 10. 条件表达式和短路求值
function getDisplayName(user: { firstName?: string; lastName?: string; username?: string }): string {
    return user.firstName && user.lastName 
        ? `${user.firstName} ${user.lastName}`
        : user.username || "匿名用户";
}

// 11. 主函数演示
function main(): void {
    console.log("=== TypeScript 条件语句演示 ===");
    
    // 年龄分类
    console.log("\n1. 年龄分类:");
    const ages = [5, 15, 25, 70];
    ages.forEach(age => {
        console.log(`  年龄 ${age}: ${checkAge(age)}`);
    });
    
    // 星期几
    console.log("\n2. 星期几:");
    for (let day = 1; day <= 8; day++) {
        console.log(`  ${day}: ${getWeekday(day)}`);
    }
    
    // 奇偶判断
    console.log("\n3. 奇偶判断:");
    const numbers = [1, 2, 3, 4, 5];
    numbers.forEach(num => {
        console.log(`  ${num} 是 ${isEven(num)}`);
    });
    
    // 绝对值
    console.log("\n4. 绝对值:");
    const values = [-5, -1, 0, 3, 7];
    values.forEach(val => {
        console.log(`  abs(${val}) = ${getAbsoluteValue(val)}`);
    });
    
    // 访问控制
    console.log("\n5. 访问控制:");
    const accessTests = [
        { username: "alice", password: "123", isActive: true },
        { username: "", password: "123", isActive: true },
        { username: "bob", password: "", isActive: true },
        { username: "charlie", password: "456", isActive: false },
    ];
    
    accessTests.forEach((test, index) => {
        console.log(`  测试 ${index + 1}: ${checkAccess(test.username, test.password, test.isActive)}`);
    });
    
    // 用户权限
    console.log("\n6. 用户权限:");
    const users: User[] = [
        { name: "Admin", age: 30, role: "admin", isActive: true },
        { name: "User", age: 25, role: "user", isActive: true },
        { name: "Guest", age: 16, role: "guest", isActive: true },
        { name: "Inactive", age: 35, role: "user", isActive: false },
    ];
    
    users.forEach(user => {
        const permissions = getUserPermissions(user);
        console.log(`  ${user.name} (${user.role}): [${permissions.join(", ")}]`);
    });
    
    // 值处理
    console.log("\n7. 值处理:");
    const testValues: (string | number | boolean)[] = ["hello", 42, true, -10, false, ""];
    testValues.forEach(val => {
        console.log(`  ${JSON.stringify(val)}: ${processValue(val)}`);
    });
    
    // 可选值处理
    console.log("\n8. 可选值处理:");
    const optionalValues = ["hello", "", undefined, null];
    optionalValues.forEach(val => {
        console.log(`  ${JSON.stringify(val)}: ${processOptionalValue(val)}`);
    });
    
    // 数组分析
    console.log("\n9. 数组分析:");
    const arrays = [[], [1], [1, 2, 3], new Array(10).fill(0), new Array(200).fill(0)];
    arrays.forEach((arr, index) => {
        console.log(`  数组 ${index + 1} (长度 ${arr.length}): ${analyzeData(arr)}`);
    });
    
    // 运费计算
    console.log("\n10. 运费计算:");
    const shipments = [
        { weight: 0.5, distance: 100, isPriority: false },
        { weight: 3, distance: 600, isPriority: true },
        { weight: 8, distance: 1200, isPriority: false },
        { weight: 15, distance: 300, isPriority: true },
    ];
    
    shipments.forEach((shipment, index) => {
        const cost = calculateShipping(shipment.weight, shipment.distance, shipment.isPriority);
        console.log(`  货物 ${index + 1}: ${shipment.weight}kg, ${shipment.distance}km, 优先: ${shipment.isPriority} -> $${cost}`);
    });
    
    // 显示名称
    console.log("\n11. 显示名称:");
    const nameTests = [
        { firstName: "John", lastName: "Doe", username: "johndoe" },
        { firstName: "Jane", username: "jane" },
        { username: "anonymous" },
        {},
    ];
    
    nameTests.forEach((user, index) => {
        console.log(`  用户 ${index + 1}: ${getDisplayName(user)}`);
    });
}

// 运行主函数
main();

// 输出结果：
// === TypeScript 条件语句演示 ===
// 
// 1. 年龄分类:
//   年龄 5: 儿童
//   年龄 15: 青少年
//   年龄 25: 成年人
//   年龄 70: 老年人
// 
// 2. 星期几:
//   1: 星期一
//   2: 星期二
//   ...
//   8: 无效的日期
// 
// ... (更多输出) 