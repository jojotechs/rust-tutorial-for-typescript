# 函数 - 完整答案

## Rust 完整实现

```rust
// Rust 中的函数完整实现
// 展示函数定义、参数、返回值、闭包和高阶函数

fn main() {
    println!("=== Rust 函数演示 ===");
    
    // 基本函数调用
    println!("问候: {}", greet("Alice"));
    println!("乘法: {} × {} = {}", 5, 3, multiply(5, 3));
    
    // 可选参数（使用 Option）
    println!("创建用户1: {}", create_user("Bob".to_string(), None));
    println!("创建用户2: {}", create_user("Charlie".to_string(), Some(25)));
    
    // 默认参数（函数重载）
    println!("幂运算1: {}^2 = {}", 5.0, power_default(5.0));
    println!("幂运算2: {}^3 = {}", 5.0, power(5.0, 3.0));
    
    // 变长参数（使用切片）
    let numbers = [1, 2, 3, 4, 5];
    println!("求和: {:?} = {}", numbers, sum(&numbers));
    
    // 高阶函数和闭包
    let add = |a, b| a + b;
    let subtract = |a, b| a - b;
    
    println!("高阶函数加法: {}", apply_operation(10, 5, add));
    println!("高阶函数减法: {}", apply_operation(10, 5, subtract));
    
    // 函数指针
    println!("函数指针加法: {}", apply_fn_pointer(10, 5, add_numbers));
    println!("函数指针乘法: {}", apply_fn_pointer(10, 5, multiply));
    
    // 错误处理
    match divide(10.0, 2.0) {
        Ok(result) => println!("除法成功: {}", result),
        Err(error) => println!("除法错误: {}", error),
    }
    
    match divide(10.0, 0.0) {
        Ok(result) => println!("除法成功: {}", result),
        Err(error) => println!("除法错误: {}", error),
    }
    
    // 递归函数
    println!("阶乘: 5! = {}", factorial(5));
    println!("斐波那契: fib(8) = {}", fibonacci(8));
    
    // 闭包捕获环境
    let factor = 3;
    let multiplier = |x| x * factor;
    println!("闭包捕获: {} × {} = {}", 7, factor, multiplier(7));
    
    // 函数组合
    let add_one = |x| x + 1;
    let double = |x| x * 2;
    let composed = compose(double, add_one);
    println!("函数组合: (5 + 1) × 2 = {}", composed(5));
    
    // 迭代器和闭包
    let numbers = vec![1, 2, 3, 4, 5];
    let doubled: Vec<i32> = numbers.iter().map(|&x| x * 2).collect();
    println!("迭代器映射: {:?} -> {:?}", numbers, doubled);
    
    // 错误处理链式调用
    demonstrate_error_chaining();
}

// 基本函数定义
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

// 带参数的函数
fn multiply(a: i32, b: i32) -> i32 {
    a * b
}

// 可选参数（使用 Option）
fn create_user(name: String, age: Option<u32>) -> String {
    match age {
        Some(age) => format!("User: {} (age: {})", name, age),
        None => format!("User: {} (age: unknown)", name),
    }
}

// 默认参数的实现方式
fn power(base: f64, exponent: f64) -> f64 {
    base.powf(exponent)
}

fn power_default(base: f64) -> f64 {
    power(base, 2.0) // 默认指数为 2
}

// 变长参数（使用切片）
fn sum(numbers: &[i32]) -> i32 {
    numbers.iter().sum()
}

// 高阶函数
fn apply_operation<F>(x: i32, y: i32, op: F) -> i32 
where 
    F: Fn(i32, i32) -> i32,
{
    op(x, y)
}

// 函数指针
fn add_numbers(a: i32, b: i32) -> i32 {
    a + b
}

fn apply_fn_pointer(x: i32, y: i32, f: fn(i32, i32) -> i32) -> i32 {
    f(x, y)
}

// 错误处理
fn divide(a: f64, b: f64) -> Result<f64, String> {
    if b == 0.0 {
        Err("除零错误：除数不能为零".to_string())
    } else {
        Ok(a / b)
    }
}

// 递归函数
fn factorial(n: u32) -> u32 {
    if n <= 1 {
        1
    } else {
        n * factorial(n - 1)
    }
}

fn fibonacci(n: u32) -> u32 {
    if n <= 1 {
        n
    } else {
        fibonacci(n - 1) + fibonacci(n - 2)
    }
}

// 函数组合
fn compose<T, F, G>(f: F, g: G) -> impl Fn(T) -> T
where
    F: Fn(T) -> T,
    G: Fn(T) -> T,
{
    move |x| f(g(x))
}

// 复杂错误处理示例
fn parse_and_calculate(a: &str, b: &str) -> Result<f64, String> {
    let num_a = a.parse::<f64>()
        .map_err(|_| format!("无法解析 '{}'", a))?;
    let num_b = b.parse::<f64>()
        .map_err(|_| format!("无法解析 '{}'", b))?;
    
    divide(num_a, num_b)
}

fn demonstrate_error_chaining() {
    println!("\n=== 错误处理链式调用 ===");
    
    let results = [
        ("10", "2"),
        ("15", "3"),
        ("20", "0"),
        ("abc", "5"),
    ];
    
    for (a, b) in results.iter() {
        match parse_and_calculate(a, b) {
            Ok(result) => println!("{} ÷ {} = {}", a, b, result),
            Err(error) => println!("错误: {}", error),
        }
    }
}

// 泛型函数
fn max<T: PartialOrd>(a: T, b: T) -> T {
    if a > b { a } else { b }
}

// 生命周期参数
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}
```

## 核心差异解析

### 1. 函数定义语法

**TypeScript:**
```typescript
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// 或箭头函数
const multiply = (a: number, b: number): number => a * b;
```

**Rust:**
```rust
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

// Rust 没有箭头函数，但有闭包
let multiply = |a: i32, b: i32| a * b;
```

### 2. 可选参数

**TypeScript:**
```typescript
function createUser(name: string, age?: number): object {
    return age ? { name, age } : { name };
}
```

**Rust:**
```rust
fn create_user(name: String, age: Option<u32>) -> String {
    match age {
        Some(age) => format!("User: {} (age: {})", name, age),
        None => format!("User: {} (age: unknown)", name),
    }
}
```

### 3. 默认参数

**TypeScript:**
```typescript
function power(base: number, exponent: number = 2): number {
    return Math.pow(base, exponent);
}
```

**Rust:**
```rust
// Rust 没有默认参数，需要函数重载
fn power(base: f64, exponent: f64) -> f64 {
    base.powf(exponent)
}

fn power_default(base: f64) -> f64 {
    power(base, 2.0)
}
```

### 4. 变长参数

**TypeScript:**
```typescript
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}
```

**Rust:**
```rust
// 使用切片
fn sum(numbers: &[i32]) -> i32 {
    numbers.iter().sum()
}

// 调用方式
let nums = [1, 2, 3, 4, 5];
sum(&nums);
```

### 5. 高阶函数

**TypeScript:**
```typescript
function apply(x: number, y: number, op: (a: number, b: number) => number): number {
    return op(x, y);
}
```

**Rust:**
```rust
fn apply_operation<F>(x: i32, y: i32, op: F) -> i32 
where 
    F: Fn(i32, i32) -> i32,
{
    op(x, y)
}
```

### 6. 错误处理

**TypeScript:**
```typescript
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}
```

**Rust:**
```rust
fn divide(a: f64, b: f64) -> Result<f64, String> {
    if b == 0.0 {
        Err("除零错误".to_string())
    } else {
        Ok(a / b)
    }
}
```

## 重要概念

### 1. 所有权和借用

```rust
fn process_string(s: String) -> String {
    // 取得所有权
    s.to_uppercase()
}

fn process_string_ref(s: &str) -> String {
    // 借用，不取得所有权
    s.to_uppercase()
}
```

### 2. 生命周期

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}
```

### 3. 闭包捕获

```rust
let factor = 10;
let multiply_by_factor = |x| x * factor; // 捕获环境变量

// 不同的捕获方式
let multiply_move = move |x| x * factor; // 移动捕获
```

### 4. 函数指针 vs 闭包

```rust
// 函数指针
fn add(a: i32, b: i32) -> i32 { a + b }
let f: fn(i32, i32) -> i32 = add;

// 闭包
let add_closure = |a, b| a + b;
```

## 最佳实践

### 1. 选择合适的参数类型

```rust
// 好的做法：使用 &str 用于只读字符串
fn process_name(name: &str) -> String {
    format!("Hello, {}", name)
}

// 避免：不必要地取得所有权
fn process_name_bad(name: String) -> String {
    format!("Hello, {}", name)
}
```

### 2. 错误处理

```rust
// 好的做法：使用 Result 类型
fn divide(a: f64, b: f64) -> Result<f64, &'static str> {
    if b == 0.0 {
        Err("Division by zero")
    } else {
        Ok(a / b)
    }
}

// 避免：使用 panic!（除非真的需要）
fn divide_bad(a: f64, b: f64) -> f64 {
    if b == 0.0 {
        panic!("Division by zero");
    }
    a / b
}
```

### 3. 使用 ? 运算符简化错误处理

```rust
fn parse_and_divide(a: &str, b: &str) -> Result<f64, Box<dyn std::error::Error>> {
    let num_a: f64 = a.parse()?;
    let num_b: f64 = b.parse()?;
    if num_b == 0.0 {
        return Err("Division by zero".into());
    }
    Ok(num_a / num_b)
}
```

### 4. 泛型函数设计

```rust
// 好的做法：使用 trait bounds
fn max<T: PartialOrd + Copy>(a: T, b: T) -> T {
    if a > b { a } else { b }
}

// 更灵活：返回引用
fn max_ref<T: PartialOrd>(a: &T, b: &T) -> &T {
    if a > b { a } else { b }
}
```

## 性能特点

### 1. 零成本抽象
- 闭包编译时内联
- 函数指针零运行时开销
- 泛型单态化

### 2. 内存安全
- 编译时借用检查
- 无悬垂指针
- 无内存泄漏

## 小结

Rust 函数系统的特点：

- **类型安全**：编译时类型检查
- **内存安全**：所有权系统保证
- **零成本抽象**：高性能函数式编程
- **表达力强**：模式匹配、Result 类型
- **并发安全**：Send/Sync trait 保证线程安全

相比 TypeScript，Rust 的函数系统更注重编译时安全性和性能，虽然语法稍显复杂，但提供了更强的保证和更好的性能！ 