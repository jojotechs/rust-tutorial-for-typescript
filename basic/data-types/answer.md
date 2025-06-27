# 数据类型 - 完整答案

## Rust 完整实现

```rust
// Rust 中的数据类型完整实现
// 展示结构体、枚举、泛型等类型系统

// 定义结构体
#[derive(Debug, Clone)]
struct User {
    id: u32,
    name: String,
    email: String,
    age: Option<u32>, // 可选字段使用 Option
    is_active: bool,
}

#[derive(Debug, Clone)]
struct Address {
    street: String,
    city: String,
    zip_code: String,
}

#[derive(Debug, Clone)]
struct UserWithAddress {
    id: u32,
    name: String,
    address: Address,
}

// 定义枚举
#[derive(Debug, Clone, PartialEq)]
enum Status {
    Pending,
    Approved,
    Rejected,
}

#[derive(Debug, Clone)]
struct Category {
    id: u32,
    name: String,
}

#[derive(Debug, Clone)]
struct Product {
    id: u32,
    name: String,
    price: f64,
    tags: Vec<String>,
    category: Category,
}

// 泛型结构体
#[derive(Debug)]
struct Container<T> {
    value: T,
}

impl<T> Container<T> {
    fn new(value: T) -> Self {
        Container { value }
    }
    
    fn get_value(&self) -> &T {
        &self.value
    }
}

fn main() {
    println!("=== Rust 数据类型演示 ===");
    
    // 基本数据类型
    let age: i32 = 25;
    let name: &str = "Alice";
    let is_active: bool = true;
    let height: f64 = 5.8;
    
    // 数组和向量
    let numbers: [i32; 5] = [1, 2, 3, 4, 5];
    let strings: Vec<String> = vec![
        String::from("hello"),
        String::from("world"),
        String::from("rust")
    ];
    
    // 元组
    let person: (&str, i32) = ("Alice", 25);
    let coordinates: (f64, f64, f64) = (10.0, 20.0, 30.0);
    
    // 创建结构体实例
    let user = User {
        id: 1,
        name: String::from("Alice"),
        email: String::from("alice@example.com"),
        age: Some(25), // 使用 Some 包装值
        is_active: true,
    };
    
    let user_without_age = User {
        id: 2,
        name: String::from("Bob"),
        email: String::from("bob@example.com"),
        age: None, // 表示没有年龄信息
        is_active: false,
    };
    
    // 嵌套结构体
    let user_with_address = UserWithAddress {
        id: 1,
        name: String::from("Bob"),
        address: Address {
            street: String::from("123 Main St"),
            city: String::from("New York"),
            zip_code: String::from("10001"),
        },
    };
    
    // 枚举
    let current_status = Status::Pending;
    
    // 函数变量（闭包）
    let add = |a: i32, b: i32| a + b;
    let multiply = |a: i32, b: i32| a * b;
    
    // 泛型容器
    let string_container = Container::new(String::from("hello"));
    let number_container = Container::new(42);
    
    // 复杂数据结构
    let products = vec![
        Product {
            id: 1,
            name: String::from("Laptop"),
            price: 999.99,
            tags: vec![String::from("electronics"), String::from("computer")],
            category: Category {
                id: 1,
                name: String::from("Electronics"),
            },
        },
        Product {
            id: 2,
            name: String::from("Book"),
            price: 29.99,
            tags: vec![String::from("education"), String::from("reading")],
            category: Category {
                id: 2,
                name: String::from("Books"),
            },
        },
    ];
    
    // 打印所有数据
    println!("基本类型:");
    println!("  年龄: {} (类型: i32)", age);
    println!("  姓名: {} (类型: &str)", name);
    println!("  活跃: {} (类型: bool)", is_active);
    println!("  身高: {} (类型: f64)", height);
    
    println!("\n数组和向量:");
    println!("  数字数组: {:?}", numbers);
    println!("  字符串向量: {:?}", strings);
    
    println!("\n元组:");
    println!("  人员信息: {}, {}岁", person.0, person.1);
    println!("  坐标: ({}, {}, {})", coordinates.0, coordinates.1, coordinates.2);
    
    println!("\n结构体:");
    println!("  用户信息: {}", process_user(&user));
    println!("  无年龄用户: {}", process_user(&user_without_age));
    println!("  带地址用户: {} 住在 {}", user_with_address.name, user_with_address.address.city);
    
    println!("\n枚举:");
    println!("  当前状态: {}", match_status(&current_status));
    
    println!("\n函数变量:");
    println!("  加法: {} + {} = {}", 5, 3, add(5, 3));
    println!("  乘法: {} * {} = {}", 5, 3, multiply(5, 3));
    
    println!("\n泛型:");
    println!("  字符串容器: {}", string_container.get_value());
    println!("  数字容器: {}", number_container.get_value());
    
    println!("\n复杂结构:");
    println!("  产品总价: ${:.2}", calculate_total(&products));
    for product in &products {
        println!("  {}: ${:.2} ({})", product.name, product.price, product.category.name);
    }
}

fn process_user(user: &User) -> String {
    let age_text = match user.age {
        Some(age) => format!(" (年龄: {})", age),
        None => String::new(),
    };
    format!("{}{} - {}", user.name, age_text, user.email)
}

fn calculate_total(products: &[Product]) -> f64 {
    products.iter().map(|p| p.price).sum()
}

fn match_status(status: &Status) -> &'static str {
    match status {
        Status::Pending => "等待中",
        Status::Approved => "已批准",
        Status::Rejected => "已拒绝",
    }
}
```

## 核心差异解析

### 1. 结构体 vs 接口

**TypeScript:**
```typescript
interface User {
    id: number;
    name: string;
    age?: number; // 可选属性
}
```

**Rust:**
```rust
#[derive(Debug)]
struct User {
    id: u32,
    name: String,
    age: Option<u32>, // 使用 Option 表示可选
}
```

### 2. 枚举的强大功能

**TypeScript:**
```typescript
enum Status {
    Pending = "pending",
    Approved = "approved"
}
```

**Rust:**
```rust
#[derive(Debug)]
enum Status {
    Pending,
    Approved,
    Rejected,
}

// Rust 枚举还可以携带数据
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}
```

### 3. Option 类型替代 null/undefined

**TypeScript:**
```typescript
let age: number | undefined = undefined;
if (age !== undefined) {
    console.log(age);
}
```

**Rust:**
```rust
let age: Option<u32> = None;
match age {
    Some(value) => println!("{}", value),
    None => println!("No age provided"),
}
```

### 4. 字符串类型

**TypeScript:**
```typescript
let name: string = "Alice";
```

**Rust:**
```rust
let name: &str = "Alice";        // 字符串切片
let name: String = String::from("Alice"); // 拥有的字符串
```

## 重要概念

### 1. 所有权和借用

```rust
fn process_user(user: &User) -> String {
    // 借用 user，不取得所有权
    format!("{}", user.name)
}

let user = User { /* ... */ };
let info = process_user(&user); // 传递引用
// user 仍然可用
```

### 2. 模式匹配

```rust
match user.age {
    Some(age) if age >= 18 => println!("成年人"),
    Some(age) => println!("未成年人: {}", age),
    None => println!("年龄未知"),
}
```

### 3. 泛型

```rust
struct Container<T> {
    value: T,
}

impl<T> Container<T> {
    fn new(value: T) -> Self {
        Self { value }
    }
}
```

## 最佳实践

### 1. 使用 derive 宏

```rust
#[derive(Debug, Clone, PartialEq)]
struct User {
    // ...
}
```

### 2. 字段命名

```rust
// 好的做法
struct User {
    user_id: u32,
    full_name: String,
    is_active: bool,
}

// 避免
struct User {
    id: u32,
    name: String,
    active: bool,
}
```

### 3. 使用 Option 而不是空值

```rust
// 好的做法
struct User {
    email: Option<String>,
}

// 避免使用空字符串表示无值
struct User {
    email: String, // 空字符串表示无邮箱？
}
```

## 编译时检查

Rust 的类型系统在编译时保证：
- 没有空指针异常
- 没有数据竞争
- 内存安全

## 小结

Rust 的类型系统特点：
- **内存安全**：Option 类型消除空指针
- **表达力强**：枚举可以携带数据
- **零成本抽象**：编译时优化
- **并发安全**：类型系统保证线程安全

这使得 Rust 既安全又高效！ 