# 错误处理 - 完整答案

## Rust 完整实现

```rust
// Rust 中的错误处理完整实现
// 展示 Result、Option、自定义错误类型和错误传播

use std::fmt;

fn main() {
    println!("=== Rust 错误处理演示 ===");
    
    // 基本 Result 处理
    println!("\n1. 基本除法操作:");
    let results = [(10.0, 2.0), (15.0, 3.0), (20.0, 0.0)];
    for (a, b) in results {
        match divide(a, b) {
            Ok(result) => println!("  {} ÷ {} = {}", a, b, result),
            Err(error) => println!("  错误: {}", error),
        }
    }
    
    // Option 处理
    println!("\n2. 用户查找:");
    let user_ids = [1, 2, 999];
    for id in user_ids {
        match find_user(id) {
            Some(user) => println!("  找到用户: {:?}", user),
            None => println!("  用户 {} 不存在", id),
        }
    }
    
    // ? 运算符使用
    println!("\n3. 字符串解析和计算:");
    let expressions = [("10", "2"), ("15", "3"), ("20", "0"), ("abc", "5")];
    for (a, b) in expressions {
        match safe_divide_and_parse(a, b) {
            Ok(result) => println!("  {} ÷ {} = {}", a, b, result),
            Err(error) => println!("  错误: {}", error),
        }
    }
    
    // 自定义错误类型
    println!("\n4. 用户验证:");
    let test_data = [
        ("Alice", 25, "alice@example.com"),
        ("", 30, "bob@example.com"),
        ("Charlie", -5, "charlie@example.com"),
        ("David", 25, "invalid-email"),
    ];
    
    for (name, age, email) in test_data {
        match create_user_safe(name, age, email) {
            Ok(user) => println!("  创建用户成功: {:?}", user),
            Err(error) => println!("  创建用户失败: {}", error),
        }
    }
    
    // 错误传播
    println!("\n5. 文件处理模拟:");
    let filenames = ["document.txt", "missing.txt", "empty.txt"];
    for filename in filenames {
        match process_file(filename) {
            Ok(content) => println!("  文件 {}: {}", filename, content),
            Err(error) => println!("  文件 {} 错误: {}", filename, error),
        }
    }
    
    // unwrap 和 expect 示例
    println!("\n6. unwrap 和 expect 示例:");
    unwrap_example();
    
    // Option 方法
    println!("\n7. Option 方法演示:");
    option_methods();
    
    // Result 方法
    println!("\n8. Result 方法演示:");
    result_methods();
    
    // 链式错误处理
    println!("\n9. 链式错误处理:");
    demonstrate_chaining();
}

// 基本除法函数
fn divide(a: f64, b: f64) -> Result<f64, String> {
    if b == 0.0 {
        Err("除零错误：除数不能为零".to_string())
    } else {
        Ok(a / b)
    }
}

// 字符串解析
fn parse_number(s: &str) -> Result<i32, String> {
    s.parse::<i32>()
        .map_err(|_| format!("无法解析 '{}' 为数字", s))
}

// 用户结构体
#[derive(Debug)]
struct User {
    id: u32,
    name: String,
    age: u32,
    email: String,
}

// 查找用户（返回 Option）
fn find_user(id: u32) -> Option<User> {
    match id {
        1 => Some(User {
            id: 1,
            name: "Alice".to_string(),
            age: 25,
            email: "alice@example.com".to_string(),
        }),
        2 => Some(User {
            id: 2,
            name: "Bob".to_string(),
            age: 30,
            email: "bob@example.com".to_string(),
        }),
        _ => None,
    }
}

// 自定义错误枚举
#[derive(Debug)]
enum MyError {
    InvalidName,
    InvalidAge(i32),
    InvalidEmail(String),
    NetworkError(u16),
    ParseError(String),
    FileNotFound(String),
}

// 为自定义错误实现 Display trait
impl fmt::Display for MyError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            MyError::InvalidName => write!(f, "姓名不能为空"),
            MyError::InvalidAge(age) => write!(f, "无效年龄: {}，年龄必须在 0-150 之间", age),
            MyError::InvalidEmail(email) => write!(f, "无效邮箱: {}", email),
            MyError::NetworkError(code) => write!(f, "网络错误，状态码: {}", code),
            MyError::ParseError(msg) => write!(f, "解析错误: {}", msg),
            MyError::FileNotFound(filename) => write!(f, "文件未找到: {}", filename),
        }
    }
}

// 实现 Error trait（可选，但推荐）
impl std::error::Error for MyError {}

// 验证年龄
fn validate_age(age: i32) -> Result<u32, MyError> {
    if age < 0 || age > 150 {
        Err(MyError::InvalidAge(age))
    } else {
        Ok(age as u32)
    }
}

// 验证邮箱
fn validate_email(email: &str) -> Result<String, MyError> {
    if email.contains('@') && email.contains('.') {
        Ok(email.to_string())
    } else {
        Err(MyError::InvalidEmail(email.to_string()))
    }
}

// 创建用户（使用 ? 运算符）
fn create_user_safe(name: &str, age: i32, email: &str) -> Result<User, MyError> {
    if name.is_empty() {
        return Err(MyError::InvalidName);
    }
    
    let validated_age = validate_age(age)?;
    let validated_email = validate_email(email)?;
    
    Ok(User {
        id: 1, // 简化示例
        name: name.to_string(),
        age: validated_age,
        email: validated_email,
    })
}

// 文件处理模拟
fn process_file(filename: &str) -> Result<String, MyError> {
    match filename {
        "document.txt" => Ok("文档内容".to_string()),
        "missing.txt" => Err(MyError::FileNotFound(filename.to_string())),
        "empty.txt" => Ok("".to_string()),
        _ => Err(MyError::FileNotFound(filename.to_string())),
    }
}

// 使用 ? 运算符的复合操作
fn safe_divide_and_parse(a: &str, b: &str) -> Result<f64, String> {
    let num_a = a.parse::<f64>()
        .map_err(|_| format!("无法解析 '{}'", a))?;
    let num_b = b.parse::<f64>()
        .map_err(|_| format!("无法解析 '{}'", b))?;
    
    divide(num_a, num_b)
}

// unwrap 和 expect 示例
fn unwrap_example() {
    // 安全的 unwrap（我们知道这不会 panic）
    let some_value = Some(42);
    println!("  Some(42).unwrap() = {}", some_value.unwrap());
    
    // 使用 expect 提供更好的错误信息
    let ok_value: Result<i32, &str> = Ok(100);
    println!("  Ok(100).expect() = {}", ok_value.expect("这应该是 Ok"));
    
    // 避免直接 unwrap None 或 Err（会 panic）
    // let none_value: Option<i32> = None;
    // none_value.unwrap(); // 这会 panic!
    
    // 更安全的方法
    let none_value: Option<i32> = None;
    println!("  None.unwrap_or(0) = {}", none_value.unwrap_or(0));
}

// Option 方法演示
fn option_methods() {
    let some_value = Some(10);
    let none_value: Option<i32> = None;
    
    // map 方法
    let doubled = some_value.map(|x| x * 2);
    println!("  Some(10).map(|x| x * 2) = {:?}", doubled);
    
    // and_then 方法
    let result = some_value.and_then(|x| if x > 5 { Some(x) } else { None });
    println!("  Some(10).and_then() = {:?}", result);
    
    // unwrap_or 方法
    println!("  None.unwrap_or(42) = {}", none_value.unwrap_or(42));
    
    // unwrap_or_else 方法
    println!("  None.unwrap_or_else(|| 100) = {}", none_value.unwrap_or_else(|| 100));
    
    // ok_or 方法：Option -> Result
    let result: Result<i32, &str> = some_value.ok_or("No value");
    println!("  Some(10).ok_or() = {:?}", result);
}

// Result 方法演示
fn result_methods() {
    let ok_value: Result<i32, String> = Ok(20);
    let err_value: Result<i32, String> = Err("Error message".to_string());
    
    // map 方法
    let doubled = ok_value.map(|x| x * 2);
    println!("  Ok(20).map(|x| x * 2) = {:?}", doubled);
    
    // map_err 方法
    let mapped_err = err_value.map_err(|e| format!("Mapped: {}", e));
    println!("  Err.map_err() = {:?}", mapped_err);
    
    // and_then 方法
    let result = ok_value.and_then(|x| if x > 10 { Ok(x) } else { Err("Too small".to_string()) });
    println!("  Ok(20).and_then() = {:?}", result);
    
    // unwrap_or 方法
    println!("  Err.unwrap_or(0) = {}", err_value.unwrap_or(0));
    
    // unwrap_or_else 方法
    let default_value = err_value.unwrap_or_else(|_| 42);
    println!("  Err.unwrap_or_else() = {}", default_value);
}

// 链式错误处理演示
fn demonstrate_chaining() {
    let numbers = ["10", "20", "abc", "30"];
    
    let results: Vec<Result<i32, String>> = numbers
        .iter()
        .map(|&s| parse_number(s))
        .collect();
    
    for (i, result) in results.iter().enumerate() {
        match result {
            Ok(num) => println!("  解析 '{}' 成功: {}", numbers[i], num),
            Err(err) => println!("  解析 '{}' 失败: {}", numbers[i], err),
        }
    }
    
    // 只处理成功的结果
    let valid_numbers: Vec<i32> = numbers
        .iter()
        .filter_map(|&s| parse_number(s).ok())
        .collect();
    println!("  有效数字: {:?}", valid_numbers);
    
    // 第一个错误就停止
    let first_error_result: Result<Vec<i32>, String> = numbers
        .iter()
        .map(|&s| parse_number(s))
        .collect();
    
    match first_error_result {
        Ok(nums) => println!("  所有解析成功: {:?}", nums),
        Err(err) => println!("  遇到第一个错误: {}", err),
    }
}

// 高级错误处理：错误转换
impl From<std::num::ParseIntError> for MyError {
    fn from(error: std::num::ParseIntError) -> Self {
        MyError::ParseError(error.to_string())
    }
}

// 使用 From trait 自动转换错误
fn advanced_parse(s: &str) -> Result<i32, MyError> {
    let number: i32 = s.parse()?; // 自动转换 ParseIntError -> MyError
    Ok(number)
}

// 错误处理的实际应用：配置文件解析
#[derive(Debug)]
struct Config {
    port: u16,
    host: String,
    debug: bool,
}

fn parse_config(content: &str) -> Result<Config, Box<dyn std::error::Error>> {
    let lines: Vec<&str> = content.lines().collect();
    
    if lines.len() < 3 {
        return Err("配置文件格式错误".into());
    }
    
    let port = lines[0].parse::<u16>()?;
    let host = lines[1].to_string();
    let debug = lines[2].parse::<bool>()?;
    
    Ok(Config { port, host, debug })
}
```

## 核心差异解析

### 1. try/catch vs Result

**TypeScript:**
```typescript
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}

try {
    const result = divide(10, 0);
    console.log(result);
} catch (error) {
    console.log("Error:", error.message);
}
```

**Rust:**
```rust
fn divide(a: f64, b: f64) -> Result<f64, String> {
    if b == 0.0 {
        Err("Division by zero".to_string())
    } else {
        Ok(a / b)
    }
}

match divide(10.0, 0.0) {
    Ok(result) => println!("{}", result),
    Err(error) => println!("Error: {}", error),
}
```

### 2. null/undefined vs Option

**TypeScript:**
```typescript
function findUser(id: number): User | undefined {
    // 返回 User 或 undefined
    return id === 1 ? { name: "Alice" } : undefined;
}

const user = findUser(1);
if (user !== undefined) {
    console.log(user.name);
}
```

**Rust:**
```rust
fn find_user(id: u32) -> Option<User> {
    if id == 1 {
        Some(User { name: "Alice".to_string() })
    } else {
        None
    }
}

match find_user(1) {
    Some(user) => println!("{}", user.name),
    None => println!("User not found"),
}
```

### 3. 错误传播

**TypeScript:**
```typescript
async function processData(): Promise<Result> {
    try {
        const data1 = await fetchData1();
        const data2 = await fetchData2();
        return processResult(data1, data2);
    } catch (error) {
        throw error; // 重新抛出
    }
}
```

**Rust:**
```rust
fn process_data() -> Result<String, MyError> {
    let data1 = fetch_data1()?; // ? 运算符自动传播错误
    let data2 = fetch_data2()?;
    Ok(process_result(data1, data2))
}
```

### 4. 自定义错误类型

**TypeScript:**
```typescript
class ValidationError extends Error {
    constructor(message: string, public field: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

function validateAge(age: number): void {
    if (age < 0) {
        throw new ValidationError("Age cannot be negative", "age");
    }
}
```

**Rust:**
```rust
#[derive(Debug)]
enum ValidationError {
    InvalidAge(i32),
    InvalidEmail(String),
}

impl fmt::Display for ValidationError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            ValidationError::InvalidAge(age) => 
                write!(f, "Invalid age: {}", age),
            ValidationError::InvalidEmail(email) => 
                write!(f, "Invalid email: {}", email),
        }
    }
}

fn validate_age(age: i32) -> Result<u32, ValidationError> {
    if age < 0 {
        Err(ValidationError::InvalidAge(age))
    } else {
        Ok(age as u32)
    }
}
```

## 重要概念

### 1. Result<T, E> 类型

```rust
enum Result<T, E> {
    Ok(T),    // 成功值
    Err(E),   // 错误值
}
```

### 2. Option<T> 类型

```rust
enum Option<T> {
    Some(T),  // 有值
    None,     // 无值
}
```

### 3. ? 运算符

```rust
fn complex_operation() -> Result<String, MyError> {
    let step1 = risky_step1()?;  // 如果错误，立即返回
    let step2 = risky_step2(step1)?;
    let step3 = risky_step3(step2)?;
    Ok(step3)
}
```

### 4. 错误转换

```rust
impl From<ParseIntError> for MyError {
    fn from(error: ParseIntError) -> Self {
        MyError::ParseError(error.to_string())
    }
}
```

## 最佳实践

### 1. 选择合适的错误类型

```rust
// 简单错误：使用 String 或 &'static str
fn simple_operation() -> Result<i32, &'static str> {
    Err("Something went wrong")
}

// 复杂错误：使用自定义枚举
fn complex_operation() -> Result<Data, MyError> {
    // ...
}

// 库函数：使用 Box<dyn Error>
fn library_function() -> Result<Data, Box<dyn std::error::Error>> {
    // ...
}
```

### 2. 使用 ? 运算符简化代码

```rust
// 好的做法
fn process() -> Result<String, MyError> {
    let data = fetch_data()?;
    let processed = process_data(data)?;
    Ok(format!("Result: {}", processed))
}

// 避免：手动 match 每个 Result
fn process_verbose() -> Result<String, MyError> {
    let data = match fetch_data() {
        Ok(d) => d,
        Err(e) => return Err(e),
    };
    let processed = match process_data(data) {
        Ok(p) => p,
        Err(e) => return Err(e),
    };
    Ok(format!("Result: {}", processed))
}
```

### 3. 合理使用 unwrap 和 expect

```rust
// 好的做法：在确定不会失败时使用
let config = std::env::var("HOME").expect("HOME environment variable must be set");

// 避免：在可能失败的地方使用 unwrap
// let user_input = get_user_input().unwrap(); // 可能 panic

// 更好的做法
let user_input = get_user_input().unwrap_or_else(|| {
    println!("Using default input");
    "default".to_string()
});
```

### 4. 错误信息要有意义

```rust
// 好的做法
fn parse_config(path: &str) -> Result<Config, String> {
    let content = std::fs::read_to_string(path)
        .map_err(|e| format!("Failed to read config file '{}': {}", path, e))?;
    
    parse_config_content(&content)
        .map_err(|e| format!("Failed to parse config file '{}': {}", path, e))
}

// 避免：模糊的错误信息
fn parse_config_bad(path: &str) -> Result<Config, String> {
    let content = std::fs::read_to_string(path)
        .map_err(|_| "File error".to_string())?;
    
    parse_config_content(&content)
        .map_err(|_| "Parse error".to_string())
}
```

## 性能特点

### 1. 零成本抽象
- Result 和 Option 编译时优化
- 无运行时异常栈展开开销
- 内存布局优化

### 2. 编译时保证
- 强制错误处理
- 无未捕获异常
- 类型安全

## 小结

Rust 错误处理的特点：

- **显式性**：错误必须在类型中明确表示
- **安全性**：编译器强制处理所有错误情况
- **高效性**：零成本抽象，无异常开销
- **可组合性**：? 运算符使错误传播简洁
- **类型安全**：错误类型在编译时检查

相比 TypeScript 的 try/catch 机制，Rust 的错误处理更加明确和安全，虽然需要更多的前期思考，但能在编译时消除大部分运行时错误！ 