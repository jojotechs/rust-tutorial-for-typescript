# 模式匹配 - 完整答案

## Rust 完整实现

```rust
// Rust 中的模式匹配完整实现
// 展示 match 表达式、枚举、Option、Result 和复杂模式匹配

fn main() {
    println!("=== Rust 模式匹配演示 ===");
    
    // 基本 match 表达式
    println!("数字匹配:");
    for num in [0, 1, 2, 5, 42] {
        println!("  {}: {}", num, process_number(num));
    }
    
    // 字符串匹配
    let statuses = ["pending", "approved", "rejected", "unknown"];
    println!("\n状态匹配:");
    for status in statuses {
        println!("  {}: {}", status, process_status_str(status));
    }
    
    // 枚举匹配
    let statuses = [Status::Pending, Status::Approved, Status::Rejected];
    println!("\n枚举状态匹配:");
    for status in statuses {
        println!("  {:?}: {}", status, process_status(status));
    }
    
    // 形状面积计算
    let shapes = vec![
        Shape::Circle { radius: 5.0 },
        Shape::Rectangle { width: 4.0, height: 6.0 },
        Shape::Triangle { base: 3.0, height: 4.0 },
    ];
    
    println!("\n形状面积计算:");
    for shape in shapes {
        println!("  {:?} 面积: {:.2}", shape, calculate_area(shape));
    }
    
    // Option 匹配
    let options = [Some(42), Some(0), None];
    println!("\nOption 匹配:");
    for opt in options {
        println!("  {:?}: {}", opt, process_option(opt));
    }
    
    // Result 匹配
    let results = [Ok(42), Err("Error message".to_string())];
    println!("\nResult 匹配:");
    for result in results {
        println!("  {:?}: {}", result, process_result(result));
    }
    
    // 解构匹配
    let points = [Point { x: 0, y: 0 }, Point { x: 3, y: 4 }, Point { x: -1, y: 5 }];
    println!("\n点的分类:");
    for point in points {
        println!("  {:?}: {}", point, process_point(point));
    }
    
    // 元组匹配
    let tuples = [(0, 0), (1, 0), (0, 1), (3, 4), (-1, -1)];
    println!("\n元组匹配:");
    for tuple in tuples {
        println!("  {:?}: {}", tuple, process_tuple(tuple));
    }
    
    // 守卫条件
    println!("\n数字分类（使用守卫）:");
    for num in [-10, -1, 0, 1, 5, 15, 25, 50, 100] {
        println!("  {}: {}", num, categorize_number(num));
    }
    
    // 范围匹配
    println!("\n范围匹配:");
    for num in [5, 15, 25, 35, 50, 75, 100] {
        println!("  {}: {}", num, match_range(num));
    }
    
    // 消息处理
    let messages = vec![
        Message::Quit,
        Message::Move { x: 10, y: 20 },
        Message::Write("Hello, World!".to_string()),
        Message::ChangeColor(255, 0, 0),
    ];
    
    println!("\n消息处理:");
    for message in messages {
        println!("  {}", process_message(message));
    }
    
    // 复杂模式匹配
    demonstrate_advanced_patterns();
}

// 定义枚举
#[derive(Debug, Clone, Copy)]
enum Status {
    Pending,
    Approved,
    Rejected,
}

#[derive(Debug)]
enum Shape {
    Circle { radius: f64 },
    Rectangle { width: f64, height: f64 },
    Triangle { base: f64, height: f64 },
}

#[derive(Debug)]
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(u8, u8, u8),
}

// 定义结构体
#[derive(Debug, Clone, Copy)]
struct Point {
    x: i32,
    y: i32,
}

// 基本数字匹配
fn process_number(value: i32) -> &'static str {
    match value {
        0 => "零",
        1 => "一",
        2 => "二",
        3 => "三",
        4 => "四",
        5 => "五",
        n if n < 0 => "负数",
        n if n > 100 => "大数",
        _ => "其他数字",
    }
}

// 字符串匹配
fn process_status_str(status: &str) -> &'static str {
    match status {
        "pending" => "等待处理",
        "approved" => "已批准",
        "rejected" => "已拒绝",
        _ => "未知状态",
    }
}

// 枚举匹配
fn process_status(status: Status) -> &'static str {
    match status {
        Status::Pending => "等待处理",
        Status::Approved => "已批准",
        Status::Rejected => "已拒绝",
    }
}

// 形状面积计算（解构枚举）
fn calculate_area(shape: Shape) -> f64 {
    match shape {
        Shape::Circle { radius } => std::f64::consts::PI * radius * radius,
        Shape::Rectangle { width, height } => width * height,
        Shape::Triangle { base, height } => base * height / 2.0,
    }
}

// Option 匹配
fn process_option(opt: Option<i32>) -> String {
    match opt {
        Some(value) if value == 0 => "零值".to_string(),
        Some(value) if value > 0 => format!("正数: {}", value),
        Some(value) => format!("负数: {}", value),
        None => "无值".to_string(),
    }
}

// Result 匹配
fn process_result(result: Result<i32, String>) -> String {
    match result {
        Ok(value) if value > 10 => format!("大数值: {}", value),
        Ok(value) => format!("成功: {}", value),
        Err(error) => format!("错误: {}", error),
    }
}

// 解构结构体
fn process_point(point: Point) -> String {
    match point {
        Point { x: 0, y: 0 } => "原点".to_string(),
        Point { x: 0, y } => format!("y轴上的点: y={}", y),
        Point { x, y: 0 } => format!("x轴上的点: x={}", x),
        Point { x, y } if x == y => format!("对角线上的点: ({}, {})", x, y),
        Point { x, y } if x > 0 && y > 0 => format!("第一象限: ({}, {})", x, y),
        Point { x, y } if x < 0 && y > 0 => format!("第二象限: ({}, {})", x, y),
        Point { x, y } if x < 0 && y < 0 => format!("第三象限: ({}, {})", x, y),
        Point { x, y } => format!("第四象限: ({}, {})", x, y),
    }
}

// 元组匹配
fn process_tuple(tuple: (i32, i32)) -> String {
    match tuple {
        (0, 0) => "原点".to_string(),
        (0, y) => format!("y轴: y={}", y),
        (x, 0) => format!("x轴: x={}", x),
        (x, y) if x == y => format!("对角线: ({}, {})", x, y),
        (x, y) => format!("一般点: ({}, {})", x, y),
    }
}

// 守卫条件
fn categorize_number(num: i32) -> &'static str {
    match num {
        n if n < 0 => "负数",
        0 => "零",
        n if n >= 1 && n <= 10 => "小正数",
        n if n >= 11 && n <= 50 => "中等数",
        n if n > 50 => "大数",
        _ => "未知", // 这行实际上不会到达
    }
}

// 范围匹配
fn match_range(num: i32) -> &'static str {
    match num {
        1..=10 => "1-10",
        11..=20 => "11-20",
        21..=30 => "21-30",
        31..=50 => "31-50",
        51..=100 => "51-100",
        _ => "其他范围",
    }
}

// 消息处理（复杂枚举解构）
fn process_message(msg: Message) -> String {
    match msg {
        Message::Quit => "退出程序".to_string(),
        Message::Move { x, y } => format!("移动到坐标: ({}, {})", x, y),
        Message::Write(text) => format!("写入文本: {}", text),
        Message::ChangeColor(r, g, b) => format!("改变颜色: RGB({}, {}, {})", r, g, b),
    }
}

// 高级模式匹配示例
fn demonstrate_advanced_patterns() {
    println!("\n=== 高级模式匹配 ===");
    
    // 数组/切片模式匹配
    let arrays = [
        vec![],
        vec![1],
        vec![1, 2],
        vec![1, 2, 3],
        vec![1, 2, 3, 4, 5],
    ];
    
    println!("数组模式匹配:");
    for arr in arrays {
        let result = match arr.as_slice() {
            [] => "空数组",
            [x] => "单元素数组",
            [x, y] => "双元素数组",
            [x, y, z] => "三元素数组",
            [first, .., last] => "多元素数组（首尾匹配）",
        };
        println!("  {:?}: {}", arr, result);
    }
    
    // 嵌套模式匹配
    let nested_data = vec![
        Some(Point { x: 0, y: 0 }),
        Some(Point { x: 1, y: 1 }),
        None,
    ];
    
    println!("\n嵌套模式匹配:");
    for data in nested_data {
        let result = match data {
            Some(Point { x: 0, y: 0 }) => "原点的选项",
            Some(Point { x, y }) if x == y => "对角线点的选项",
            Some(Point { x, y }) => "一般点的选项",
            None => "空选项",
        };
        println!("  {:?}: {}", data, result);
    }
    
    // 引用模式匹配
    let values = [&1, &2, &3];
    println!("\n引用模式匹配:");
    for value in values {
        match value {
            &1 => println!("  引用1"),
            &n if n > 2 => println!("  引用大于2的数: {}", n),
            &n => println!("  引用其他数: {}", n),
        }
    }
    
    // 多个模式
    println!("\n多个模式:");
    for num in [1, 2, 3, 4, 5, 6] {
        match num {
            1 | 3 | 5 => println!("  {} 是奇数", num),
            2 | 4 | 6 => println!("  {} 是偶数", num),
            _ => println!("  {} 其他", num),
        }
    }
}

// 实际应用示例：JSON 解析结果处理
#[derive(Debug)]
enum JsonValue {
    Null,
    Bool(bool),
    Number(f64),
    String(String),
    Array(Vec<JsonValue>),
    Object(std::collections::HashMap<String, JsonValue>),
}

fn process_json_value(value: JsonValue) -> String {
    match value {
        JsonValue::Null => "null".to_string(),
        JsonValue::Bool(b) => format!("布尔值: {}", b),
        JsonValue::Number(n) if n.fract() == 0.0 => format!("整数: {}", n as i64),
        JsonValue::Number(n) => format!("浮点数: {}", n),
        JsonValue::String(s) if s.is_empty() => "空字符串".to_string(),
        JsonValue::String(s) => format!("字符串: \"{}\"", s),
        JsonValue::Array(arr) if arr.is_empty() => "空数组".to_string(),
        JsonValue::Array(arr) => format!("数组，长度: {}", arr.len()),
        JsonValue::Object(obj) if obj.is_empty() => "空对象".to_string(),
        JsonValue::Object(obj) => format!("对象，键数量: {}", obj.len()),
    }
}
```

## 核心差异解析

### 1. match vs switch

**TypeScript:**
```typescript
switch (status) {
    case "pending":
        return "等待处理";
    case "approved":
        return "已批准";
    default:
        return "未知状态";
}
```

**Rust:**
```rust
match status {
    Status::Pending => "等待处理",
    Status::Approved => "已批准",
    Status::Rejected => "已拒绝",
}
```

### 2. 联合类型 vs 枚举

**TypeScript:**
```typescript
type Shape = 
    | { type: "circle"; radius: number }
    | { type: "rectangle"; width: number; height: number };

function area(shape: Shape): number {
    switch (shape.type) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.width * shape.height;
    }
}
```

**Rust:**
```rust
enum Shape {
    Circle { radius: f64 },
    Rectangle { width: f64, height: f64 },
}

fn calculate_area(shape: Shape) -> f64 {
    match shape {
        Shape::Circle { radius } => std::f64::consts::PI * radius * radius,
        Shape::Rectangle { width, height } => width * height,
    }
}
```

### 3. 可选值处理

**TypeScript:**
```typescript
function processValue(value: number | undefined): string {
    if (value === undefined) {
        return "无值";
    } else if (value > 0) {
        return "正数";
    } else {
        return "零或负数";
    }
}
```

**Rust:**
```rust
fn process_option(opt: Option<i32>) -> String {
    match opt {
        None => "无值".to_string(),
        Some(value) if value > 0 => "正数".to_string(),
        Some(_) => "零或负数".to_string(),
    }
}
```

### 4. 错误处理

**TypeScript:**
```typescript
try {
    const result = riskyOperation();
    console.log("成功:", result);
} catch (error) {
    console.log("错误:", error.message);
}
```

**Rust:**
```rust
match risky_operation() {
    Ok(result) => println!("成功: {}", result),
    Err(error) => println!("错误: {}", error),
}
```

## 重要概念

### 1. 穷尽性检查

Rust 编译器确保 match 表达式覆盖所有可能的情况：

```rust
enum Status {
    Pending,
    Approved,
    Rejected,
}

// 编译错误：缺少 Rejected 分支
fn process_status(status: Status) -> &'static str {
    match status {
        Status::Pending => "等待",
        Status::Approved => "批准",
        // 编译器会报错：模式不完整
    }
}
```

### 2. 所有权和模式匹配

```rust
let opt = Some(String::from("hello"));

match opt {
    Some(s) => println!("{}", s), // s 获得 String 的所有权
    None => println!("无值"),
}
// opt 在这里不再可用

// 使用引用避免移动
match &opt {
    Some(s) => println!("{}", s), // s 是 &String
    None => println!("无值"),
}
// opt 仍然可用
```

### 3. 守卫条件

```rust
match number {
    n if n < 0 => "负数",
    n if n == 0 => "零",
    n if n > 100 => "大数",
    _ => "普通数",
}
```

### 4. 解构赋值

```rust
let point = Point { x: 3, y: 4 };
let Point { x, y } = point; // 解构到变量

// 或在 match 中
match point {
    Point { x: 0, y } => println!("y轴上: {}", y),
    Point { x, y: 0 } => println!("x轴上: {}", x),
    Point { x, y } => println!("普通点: ({}, {})", x, y),
}
```

## 最佳实践

### 1. 优先使用 match 而不是 if let

```rust
// 好的做法：使用 match
match option_value {
    Some(value) => process_value(value),
    None => handle_none(),
}

// 仅当只关心一种情况时使用 if let
if let Some(value) = option_value {
    process_value(value);
}
```

### 2. 利用编译器的穷尽性检查

```rust
// 好的做法：不使用 _ 通配符，让编译器检查
match status {
    Status::Pending => "等待",
    Status::Approved => "批准",
    Status::Rejected => "拒绝",
}

// 避免：过早使用通配符
match status {
    Status::Pending => "等待",
    _ => "其他", // 可能遗漏新增的枚举变体
}
```

### 3. 使用守卫条件增强表达力

```rust
match user_age {
    age if age < 13 => "儿童",
    age if age < 18 => "青少年", 
    age if age < 65 => "成年人",
    _ => "老年人",
}
```

### 4. 合理使用 @ 绑定

```rust
match some_value {
    x @ 1..=5 => println!("小数: {}", x),
    x @ 6..=10 => println!("中数: {}", x),
    x => println!("其他: {}", x),
}
```

## 性能特点

### 1. 零成本抽象
- match 编译为跳转表或条件分支
- 无运行时类型检查开销
- 编译时优化

### 2. 内存安全
- 编译时保证所有情况被处理
- 无空指针异常
- 所有权系统保证内存安全

## 小结

Rust 模式匹配的特点：

- **穷尽性**：编译器确保处理所有情况
- **类型安全**：编译时类型检查
- **表达力强**：支持复杂的解构和守卫
- **性能优异**：零成本抽象
- **内存安全**：配合所有权系统

相比 TypeScript 的 switch 语句，Rust 的 match 提供了更强的类型安全性和表达能力，是 Rust 最强大的特性之一！
</rewritten_file> 