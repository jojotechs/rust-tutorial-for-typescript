# 变量和常量 - 完整答案

## Rust 完整实现

```rust
// Rust 中的变量和常量完整实现
// 展示 Rust 的变量声明、可变性和作用域概念

fn main() {
    println!("=== Rust 中的变量和常量 ===");
    
    // 练习 1: 基本变量声明
    // Rust 默认变量是不可变的
    let user_name: String = String::from("Alice");
    // 或者使用字符串切片：let user_name = "Alice";
    
    let age: i32 = 25;
    let is_active: bool = true;
    
    // 练习 2: 类型推断
    // Rust 编译器可以自动推断类型
    let message = "Hello, Rust!"; // 推断为 &str
    let count = 42; // 推断为 i32
    
    // 练习 3: 常量声明
    // 常量必须指定类型，通常使用大写字母
    const PI: f64 = 3.14159;
    const APP_NAME: &str = "My App";
    
    // 练习 4: 可变变量
    // 使用 mut 关键字声明可变变量
    let mut mutable_data = "I can change";
    mutable_data = "I changed!";
    
    // 练习 5: 不可变变量
    let immutable_data = "I cannot change";
    // immutable_data = "This would cause an error"; // 编译错误！
    
    // 练习 6: 变量遮蔽 (Shadowing)
    // Rust 允许用相同名称声明新变量
    let score = 100;
    println!("原始分数: {}", score);
    
    let score = 200; // 遮蔽前一个 score
    println!("遮蔽后分数: {}", score);
    
    // 练习 7: 数组和元组
    let numbers: [i32; 5] = [1, 2, 3, 4, 5]; // 固定大小数组
    // 或者使用 Vec：let numbers: Vec<i32> = vec![1, 2, 3, 4, 5];
    
    let person: (String, i32) = (String::from("Bob"), 30);
    // 或者使用字符串切片：let person = ("Bob", 30);
    
    // 练习 8: 函数内变量作用域
    demonstrate_scope();
    
    // 练习 9: 打印所有变量
    println!("用户名: {}", user_name);
    println!("年龄: {}", age);
    println!("活跃状态: {}", is_active);
    println!("消息: {}", message);
    println!("计数: {}", count);
    println!("PI: {}", PI);
    println!("应用名: {}", APP_NAME);
    println!("可变数据: {}", mutable_data);
    println!("不可变数据: {}", immutable_data);
    println!("最终分数: {}", score);
    println!("数字数组: {:?}", numbers);
    println!("人员信息: {:?}", person);
    
    // 练习 10: 调用函数
    let area = calculate_area(10.0, 5.0);
    println!("区域计算: {}", area);
}

fn demonstrate_scope() {
    let outer_var = "I'm in the outer scope";
    
    {
        let inner_var = "I'm in the inner scope";
        let outer_var = "I'm shadowing the outer variable"; // 遮蔽外部变量
        println!("内部作用域: {}", outer_var);
        println!("块作用域: {}", inner_var);
    } // inner_var 在这里被销毁
    
    println!("外部作用域: {}", outer_var);
    // println!("{}", inner_var); // 编译错误！inner_var 不在作用域内
}

fn calculate_area(width: f64, height: f64) -> f64 {
    let area = width * height; // 函数内部变量
    area // 返回 area，这是一个表达式（没有分号）
}
```

## 核心差异解析

### 1. 默认不可变性

**TypeScript:**
```typescript
let data = "hello";
data = "world"; // 默认可变
```

**Rust:**
```rust
let data = "hello";
// data = "world"; // 编译错误！默认不可变

let mut data = "hello";
data = "world"; // 必须显式声明可变
```

**为什么这样设计？**
- 提高代码安全性，防止意外修改
- 编译器优化更容易
- 并发安全性更好

### 2. 变量遮蔽 (Shadowing)

**TypeScript:**
```typescript
let x = 5;
let x = "hello"; // 重新声明，改变类型
```

**Rust:**
```rust
let x = 5;
let x = "hello"; // 遮蔽前一个变量，可以改变类型
```

**遮蔽 vs 可变性：**
```rust
// 遮蔽：创建新变量
let spaces = "   ";
let spaces = spaces.len(); // 改变类型：str -> usize

// 可变性：修改同一变量
let mut spaces = "   ";
// spaces = spaces.len(); // 错误！不能改变类型
```

### 3. 常量声明

**TypeScript:**
```typescript
const PI = 3.14159; // 类型推断
```

**Rust:**
```rust
const PI: f64 = 3.14159; // 必须指定类型
```

**Rust 常量特点：**
- 必须在编译时计算
- 可以在任何作用域声明
- 通常使用大写字母命名

### 4. 字符串类型

**TypeScript:**
```typescript
let name: string = "Alice"; // 只有一种字符串类型
```

**Rust:**
```rust
let name: &str = "Alice";        // 字符串切片（不可变引用）
let name: String = String::from("Alice"); // 拥有的字符串（可变）
```

## 重要概念

### 1. 所有权预览
```rust
let s1 = String::from("hello");
let s2 = s1; // s1 的所有权转移给 s2
// println!("{}", s1); // 编译错误！s1 不再有效
```

### 2. 作用域
```rust
{
    let x = 5; // x 在这个块中有效
} // x 在这里被销毁
// println!("{}", x); // 编译错误！
```

### 3. 内存安全
- Rust 在编译时检查内存安全
- 没有空指针异常
- 没有内存泄漏（在安全 Rust 中）

## 最佳实践

### 1. 优先使用不可变变量
```rust
// 好的做法
let data = calculate_something();

// 只在必要时使用可变
let mut counter = 0;
counter += 1;
```

### 2. 使用有意义的变量名
```rust
// 好的做法
let user_count = 42;
let is_authenticated = true;

// 避免
let n = 42;
let flag = true;
```

### 3. 常量用于配置值
```rust
const MAX_CONNECTIONS: usize = 100;
const DEFAULT_TIMEOUT: u64 = 30;
```

## 编译器错误信息

Rust 编译器会提供详细的错误信息：

```rust
let x = 5;
x = 6; // 错误
```

错误信息：
```
error[E0384]: cannot assign twice to immutable variable `x`
 --> src/main.rs:3:5
  |
2 |     let x = 5;
  |         -
  |         |
  |         first assignment to `x`
  |         help: consider making this binding mutable: `mut x`
3 |     x = 6;
  |     ^^^^^ cannot assign twice to immutable variable
```

## 小结

Rust 的变量系统设计哲学：
- **安全第一**：默认不可变，防止意外修改
- **明确意图**：必须显式声明可变性
- **零成本抽象**：编译时检查，运行时无开销
- **内存安全**：所有权系统保证内存安全

这些特性使 Rust 成为一门既安全又高效的系统编程语言！ 