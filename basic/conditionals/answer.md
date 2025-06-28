# 条件语句 - 完整答案

## Rust 完整实现

```rust
// Rust 中的条件语句完整实现
// 展示 if/else、match、模式匹配和条件表达式

fn main() {
    println!("=== Rust 条件语句演示 ===");
    
    // 年龄分类
    println!("\n1. 年龄分类:");
    let ages = [5, 15, 25, 70];
    for age in ages {
        println!("  年龄 {}: {}", age, check_age(age));
    }
    
    // 星期几判断
    println!("\n2. 星期几:");
    for day in 1..=8 {
        println!("  {}: {}", day, get_weekday(day));
    }
    
    // 奇偶判断
    println!("\n3. 奇偶判断:");
    let numbers = [1, 2, 3, 4, 5];
    for num in numbers {
        println!("  {} 是 {}", num, is_even(num));
    }
    
    // 绝对值
    println!("\n4. 绝对值:");
    let values = [-5, -1, 0, 3, 7];
    for val in values {
        println!("  abs({}) = {}", val, get_absolute_value(val));
    }
    
    // 访问控制
    println!("\n5. 访问控制:");
    let access_tests = [
        ("alice", "123", true),
        ("", "123", true),
        ("bob", "", true),
        ("charlie", "456", false),
    ];
    
    for (i, (username, password, is_active)) in access_tests.iter().enumerate() {
        println!("  测试 {}: {}", i + 1, check_access(username, password, *is_active));
    }
    
    // 用户权限
    println!("\n6. 用户权限:");
    let users = [
        User {
            name: "Admin".to_string(),
            age: 30,
            role: Role::Admin,
            is_active: true,
        },
        User {
            name: "User".to_string(),
            age: 25,
            role: Role::User,
            is_active: true,
        },
        User {
            name: "Guest".to_string(),
            age: 16,
            role: Role::Guest,
            is_active: true,
        },
        User {
            name: "Inactive".to_string(),
            age: 35,
            role: Role::User,
            is_active: false,
        },
    ];
    
    for user in &users {
        let permissions = get_user_permissions(user);
        println!("  {} ({:?}): [{}]", user.name, user.role, permissions.join(", "));
    }
    
    // 值处理
    println!("\n7. 值处理:");
    let test_values = [
        Value::Text("hello".to_string()),
        Value::Number(42),
        Value::Boolean(true),
        Value::Number(-10),
        Value::Boolean(false),
        Value::Text("".to_string()),
    ];
    
    for val in test_values {
        println!("  {:?}: {}", val, process_value(val));
    }
    
    // 可选值处理
    println!("\n8. 可选值处理:");
    let optional_values = [Some("hello"), Some(""), None];
    for val in optional_values {
        println!("  {:?}: {}", val, process_optional_value(val));
    }
    
    // 数组分析
    println!("\n9. 数组分析:");
    let arrays = [
        vec![],
        vec![1],
        vec![1, 2, 3],
        vec![0; 10],
        vec![0; 200],
    ];
    
    for (i, arr) in arrays.iter().enumerate() {
        println!("  数组 {} (长度 {}): {}", i + 1, arr.len(), analyze_data(arr));
    }
    
    // 运费计算
    println!("\n10. 运费计算:");
    let shipments = [
        (0.5, 100.0, false),
        (3.0, 600.0, true),
        (8.0, 1200.0, false),
        (15.0, 300.0, true),
    ];
    
    for (i, (weight, distance, is_priority)) in shipments.iter().enumerate() {
        let cost = calculate_shipping(*weight, *distance, *is_priority);
        println!(
            "  货物 {}: {}kg, {}km, 优先: {} -> ${:.2}",
            i + 1, weight, distance, is_priority, cost
        );
    }
    
    // 显示名称
    println!("\n11. 显示名称:");
    let name_tests = [
        (Some("John"), Some("Doe"), Some("johndoe")),
        (Some("Jane"), None, Some("jane")),
        (None, None, Some("anonymous")),
        (None, None, None),
    ];
    
    for (i, (first, last, username)) in name_tests.iter().enumerate() {
        println!("  用户 {}: {}", i + 1, get_display_name(*first, *last, *username));
    }
    
    // 复杂条件演示
    demonstrate_complex_conditions();
}

// 年龄分类
fn check_age(age: u32) -> &'static str {
    if age < 13 {
        "儿童"
    } else if age < 18 {
        "青少年"
    } else if age < 65 {
        "成年人"
    } else {
        "老年人"
    }
}

// 星期几判断 - 使用 match
fn get_weekday(day: u32) -> &'static str {
    match day {
        1 => "星期一",
        2 => "星期二",
        3 => "星期三",
        4 => "星期四",
        5 => "星期五",
        6 => "星期六",
        7 => "星期日",
        _ => "无效的日期",
    }
}

// 奇偶判断
fn is_even(num: i32) -> &'static str {
    if num % 2 == 0 { "偶数" } else { "奇数" }
}

// 绝对值
fn get_absolute_value(num: i32) -> i32 {
    if num >= 0 { num } else { -num }
}

// 定义角色枚举
#[derive(Debug, Clone)]
enum Role {
    Admin,
    User,
    Guest,
}

// 定义用户结构体
#[derive(Debug)]
struct User {
    name: String,
    age: u32,
    role: Role,
    is_active: bool,
}

// 访问控制
fn check_access(username: &str, password: &str, is_active: bool) -> &'static str {
    if !username.is_empty() && !password.is_empty() && is_active {
        "访问允许"
    } else if username.is_empty() {
        "缺少用户名"
    } else if password.is_empty() {
        "缺少密码"
    } else if !is_active {
        "账户未激活"
    } else {
        "访问拒绝"
    }
}

// 用户权限
fn get_user_permissions(user: &User) -> Vec<&'static str> {
    let mut permissions = Vec::new();
    
    if user.is_active {
        permissions.push("login");
        
        match user.role {
            Role::Admin => {
                permissions.extend_from_slice(&["read", "write", "delete", "manage_users"]);
            }
            Role::User => {
                permissions.extend_from_slice(&["read", "write"]);
            }
            Role::Guest => {
                permissions.push("read");
            }
        }
        
        if user.age >= 18 {
            permissions.push("access_adult_content");
        }
    }
    
    permissions
}

// 定义值枚举
#[derive(Debug)]
enum Value {
    Text(String),
    Number(i32),
    Boolean(bool),
}

// 值处理
fn process_value(value: Value) -> String {
    match value {
        Value::Text(s) => {
            if s.is_empty() {
                "空字符串".to_string()
            } else {
                format!("字符串: {}", s.to_uppercase())
            }
        }
        Value::Number(n) => {
            if n > 0 {
                format!("正数: {}", n)
            } else if n < 0 {
                format!("负数: {}", n)
            } else {
                "零".to_string()
            }
        }
        Value::Boolean(b) => {
            if b { "真值" } else { "假值" }.to_string()
        }
    }
}

// 可选值处理
fn process_optional_value(value: Option<&str>) -> &'static str {
    match value {
        Some(s) if !s.is_empty() => "有值",
        Some(_) => "空字符串",
        None => "无值",
    }
}

// 数组分析
fn analyze_data(data: &[i32]) -> &'static str {
    match data.len() {
        0 => "空数组",
        1 => "单元素数组",
        2..=5 => "小数组",
        6..=100 => "中等数组",
        _ => "大数组",
    }
}

// 运费计算
fn calculate_shipping(weight: f64, distance: f64, is_priority: bool) -> f64 {
    let base_cost = calculate_base_cost(weight);
    let cost_with_distance = apply_distance_multiplier(base_cost, distance);
    let final_cost = apply_priority_fee(cost_with_distance, is_priority);
    
    (final_cost * 100.0).round() / 100.0 // 四舍五入到两位小数
}

fn calculate_base_cost(weight: f64) -> f64 {
    if weight <= 1.0 {
        5.0
    } else if weight <= 5.0 {
        10.0
    } else if weight <= 10.0 {
        20.0
    } else {
        30.0
    }
}

fn apply_distance_multiplier(cost: f64, distance: f64) -> f64 {
    if distance > 1000.0 {
        cost * 2.0
    } else if distance > 500.0 {
        cost * 1.5
    } else {
        cost
    }
}

fn apply_priority_fee(cost: f64, is_priority: bool) -> f64 {
    if is_priority {
        cost * 1.3
    } else {
        cost
    }
}

// 显示名称
fn get_display_name(first_name: Option<&str>, last_name: Option<&str>, username: Option<&str>) -> String {
    match (first_name, last_name) {
        (Some(first), Some(last)) => format!("{} {}", first, last),
        _ => username.unwrap_or("匿名用户").to_string(),
    }
}

// 复杂条件演示
fn demonstrate_complex_conditions() {
    println!("\n=== 复杂条件演示 ===");
    
    // 模式匹配与守卫
    let point = (3, 4);
    let description = match point {
        (0, 0) => "原点",
        (0, _) => "y轴上",
        (_, 0) => "x轴上",
        (x, y) if x == y => "对角线上",
        (x, y) if x > 0 && y > 0 => "第一象限",
        (x, y) if x < 0 && y > 0 => "第二象限",
        (x, y) if x < 0 && y < 0 => "第三象限",
        (_, _) => "第四象限",
    };
    println!("点 {:?}: {}", point, description);
    
    // 多重条件判断
    let score = 85;
    let grade = match score {
        90..=100 => "A",
        80..=89 => "B",
        70..=79 => "C",
        60..=69 => "D",
        _ => "F",
    };
    println!("分数 {}: 等级 {}", score, grade);
    
    // 嵌套条件
    let weather = "sunny";
    let temperature = 25;
    let activity = match weather {
        "sunny" => {
            if temperature > 30 {
                "游泳"
            } else if temperature > 20 {
                "远足"
            } else {
                "散步"
            }
        }
        "rainy" => "在家读书",
        "snowy" => "滑雪",
        _ => "待在室内",
    };
    println!("天气: {}, 温度: {}°C -> 建议活动: {}", weather, temperature, activity);
    
    // Option 和 Result 的条件处理
    let maybe_number = Some(42);
    let result = maybe_number
        .filter(|&x| x > 0)
        .map(|x| x * 2)
        .unwrap_or(0);
    println!("条件处理结果: {}", result);
}

// 实际应用示例：状态机
#[derive(Debug, PartialEq)]
enum TrafficLight {
    Red,
    Yellow,
    Green,
}

impl TrafficLight {
    fn next(&self) -> TrafficLight {
        match self {
            TrafficLight::Red => TrafficLight::Green,
            TrafficLight::Yellow => TrafficLight::Red,
            TrafficLight::Green => TrafficLight::Yellow,
        }
    }
    
    fn action(&self) -> &'static str {
        match self {
            TrafficLight::Red => "停止",
            TrafficLight::Yellow => "准备",
            TrafficLight::Green => "通行",
        }
    }
}

// 错误处理的条件逻辑
fn divide_safe(a: f64, b: f64) -> Result<f64, &'static str> {
    if b == 0.0 {
        Err("除零错误")
    } else if a.is_nan() || b.is_nan() {
        Err("输入包含 NaN")
    } else if a.is_infinite() || b.is_infinite() {
        Err("输入包含无穷大")
    } else {
        Ok(a / b)
    }
}
```

## 核心差异解析

### 1. if/else 语法

**TypeScript:**
```typescript
function checkAge(age: number): string {
    if (age < 13) {
        return "儿童";
    } else if (age < 18) {
        return "青少年";
    } else {
        return "成年人";
    }
}
```

**Rust:**
```rust
fn check_age(age: u32) -> &'static str {
    if age < 13 {
        "儿童"
    } else if age < 18 {
        "青少年"
    } else {
        "成年人"
    }
}
```

### 2. switch vs match

**TypeScript:**
```typescript
function getWeekday(day: number): string {
    switch (day) {
        case 1:
            return "星期一";
        case 2:
            return "星期二";
        default:
            return "无效日期";
    }
}
```

**Rust:**
```rust
fn get_weekday(day: u32) -> &'static str {
    match day {
        1 => "星期一",
        2 => "星期二",
        _ => "无效日期",
    }
}
```

### 3. 三元运算符

**TypeScript:**
```typescript
const result = condition ? "true" : "false";
const value = num >= 0 ? num : -num;
```

**Rust:**
```rust
let result = if condition { "true" } else { "false" };
let value = if num >= 0 { num } else { -num };
```

### 4. 类型检查

**TypeScript:**
```typescript
function processValue(value: string | number): string {
    if (typeof value === "string") {
        return `字符串: ${value}`;
    } else {
        return `数字: ${value}`;
    }
}
```

**Rust:**
```rust
enum Value {
    Text(String),
    Number(i32),
}

fn process_value(value: Value) -> String {
    match value {
        Value::Text(s) => format!("字符串: {}", s),
        Value::Number(n) => format!("数字: {}", n),
    }
}
```

### 5. 空值检查

**TypeScript:**
```typescript
function processOptional(value?: string): string {
    if (value != null) {
        return `有值: ${value}`;
    } else {
        return "无值";
    }
}
```

**Rust:**
```rust
fn process_optional(value: Option<&str>) -> String {
    match value {
        Some(s) => format!("有值: {}", s),
        None => "无值".to_string(),
    }
}
```

## 重要概念

### 1. 表达式 vs 语句

```rust
// Rust 中 if 是表达式，可以返回值
let result = if condition {
    "success"
} else {
    "failure"
};

// match 也是表达式
let message = match status {
    0 => "OK",
    1 => "Warning",
    _ => "Error",
};
```

### 2. 模式匹配的强大功能

```rust
// 范围匹配
match score {
    90..=100 => "A",
    80..=89 => "B",
    70..=79 => "C",
    _ => "F",
}

// 守卫条件
match point {
    (x, y) if x == y => "对角线",
    (x, y) if x > y => "x 轴上方",
    _ => "其他",
}

// 解构匹配
match user {
    User { name, age: 18..=65, is_active: true } => "成年活跃用户",
    User { is_active: false, .. } => "非活跃用户",
    _ => "其他用户",
}
```

### 3. 穷尽性检查

```rust
enum Color {
    Red,
    Green,
    Blue,
}

// 编译器确保所有情况都被处理
fn describe_color(color: Color) -> &'static str {
    match color {
        Color::Red => "红色",
        Color::Green => "绿色",
        Color::Blue => "蓝色",
        // 如果缺少任何分支，编译器会报错
    }
}
```

### 4. if let 语法糖

```rust
// 当只关心一种情况时
if let Some(value) = optional_value {
    println!("值是: {}", value);
}

// 等价于
match optional_value {
    Some(value) => println!("值是: {}", value),
    None => {}
}
```

## 最佳实践

### 1. 优先使用 match 而不是 if/else 链

```rust
// 好的做法：使用 match
fn get_grade(score: u32) -> &'static str {
    match score {
        90..=100 => "A",
        80..=89 => "B",
        70..=79 => "C",
        60..=69 => "D",
        _ => "F",
    }
}

// 避免：长 if/else 链
fn get_grade_bad(score: u32) -> &'static str {
    if score >= 90 {
        "A"
    } else if score >= 80 {
        "B"
    } else if score >= 70 {
        "C"
    } else if score >= 60 {
        "D"
    } else {
        "F"
    }
}
```

### 2. 利用模式匹配的表达力

```rust
// 好的做法：使用模式匹配
fn analyze_point(point: (i32, i32)) -> &'static str {
    match point {
        (0, 0) => "原点",
        (0, _) => "y轴",
        (_, 0) => "x轴",
        (x, y) if x == y => "对角线",
        (x, y) if x.abs() == y.abs() => "副对角线",
        _ => "一般点",
    }
}
```

### 3. 使用 if let 简化单一模式匹配

```rust
// 好的做法：使用 if let
if let Some(value) = get_optional_value() {
    process_value(value);
}

// 而不是冗长的 match
match get_optional_value() {
    Some(value) => process_value(value),
    None => {}
}
```

### 4. 合理使用守卫条件

```rust
// 守卫条件增强表达力
match user_input {
    n if n < 0 => "负数",
    0 => "零",
    n if n > 1000 => "大数",
    _ => "普通数",
}
```

## 性能特点

### 1. 零成本抽象
- match 编译为高效的跳转表
- 编译时优化条件分支
- 无运行时类型检查开销

### 2. 编译时优化
- 死代码消除
- 分支预测优化
- 模式匹配编译时展开

### 3. 内存安全
- 穷尽性检查防止遗漏情况
- 模式匹配保证类型安全
- 编译时借用检查

## 小结

Rust 条件语句的特点：

- **表达式导向**：if 和 match 都是表达式，可以返回值
- **穷尽性检查**：编译器确保所有情况都被处理
- **模式匹配**：强大的解构和守卫功能
- **类型安全**：编译时类型检查
- **性能优异**：零成本抽象和编译时优化

相比 TypeScript 的条件语句，Rust 提供了更强的类型安全性和表达能力，特别是 match 表达式的模式匹配功能是 Rust 的一大特色！ 