# 所有权和借用 - 完整答案

## Rust 完整实现

```rust
// Rust 中的所有权和借用完整实现
// 这是 Rust 最重要的概念！

#[derive(Debug, Clone)]
struct Person {
    name: String,
    age: u32,
}

fn main() {
    println!("=== Rust 所有权和借用演示 ===");
    
    // 练习 1: 基本所有权
    let s1 = String::from("hello");
    let s2 = s1; // s1 的所有权转移给 s2
    // println!("{}", s1); // 编译错误！s1 不再有效
    println!("s2: {}", s2); // 只有 s2 可以使用
    
    // 练习 2: 所有权转移到函数
    let s3 = String::from("world");
    take_ownership(s3);
    // println!("{}", s3); // 编译错误！s3 的所有权已转移
    
    // 练习 3: 克隆避免所有权转移
    let s4 = String::from("clone me");
    let s5 = s4.clone(); // 深拷贝
    println!("s4: {}, s5: {}", s4, s5); // 两个都可以使用
    
    // 练习 4: 引用和借用
    let s6 = String::from("borrow me");
    let len = borrow_string(&s6); // 借用，不转移所有权
    println!("字符串 '{}' 的长度是 {}", s6, len); // s6 仍然可用
    
    // 练习 5: 可变引用
    let mut s7 = String::from("modify me");
    borrow_and_modify(&mut s7);
    println!("修改后: {}", s7);
    
    // 练习 6: 借用规则演示
    demonstrate_borrowing_rules();
    
    // 练习 7: 结构体所有权
    let person1 = create_person(String::from("Alice"), 25);
    println!("创建的人员: {:?}", person1);
    
    let person_info = process_person(&person1); // 借用
    println!("人员信息: {}", person_info);
    
    let mut person2 = person1.clone();
    update_person_age(&mut person2, 30);
    println!("更新后的人员: {:?}", person2);
    
    // 练习 8: 切片
    demonstrate_slices();
    
    // 练习 9: 生命周期
    let str1 = "hello";
    let str2 = "world!";
    let longer = longest(str1, str2);
    println!("较长的字符串: {}", longer);
    
    // 练习 10: 移动语义演示
    demonstrate_move_semantics();
}

fn take_ownership(s: String) {
    println!("取得所有权: {}", s);
} // s 在这里被销毁

fn borrow_string(s: &String) -> usize {
    s.len() // 返回字符串长度，不取得所有权
}

fn borrow_and_modify(s: &mut String) {
    s.push_str(" - modified!");
}

fn create_person(name: String, age: u32) -> Person {
    Person { name, age }
}

fn process_person(person: &Person) -> String {
    format!("{} 今年 {} 岁", person.name, person.age)
}

fn update_person_age(person: &mut Person, new_age: u32) {
    person.age = new_age;
}

fn first_word(s: &str) -> &str {
    let bytes = s.as_bytes();
    
    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[0..i];
        }
    }
    
    &s[..] // 如果没有空格，返回整个字符串
}

fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

fn demonstrate_move_semantics() {
    println!("\n=== 移动语义演示 ===");
    
    // String 有移动语义
    let s1 = String::from("hello");
    let s2 = s1; // s1 移动到 s2
    // println!("{}", s1); // 错误！
    println!("移动后只能使用 s2: {}", s2);
    
    // 基本类型有复制语义
    let x = 5;
    let y = x; // x 被复制到 y
    println!("基本类型可以同时使用 x: {}, y: {}", x, y);
}

fn demonstrate_borrowing_rules() {
    println!("\n=== 借用规则演示 ===");
    
    let mut s = String::from("hello");
    
    // 多个不可变引用是允许的
    let r1 = &s;
    let r2 = &s;
    println!("不可变引用: {}, {}", r1, r2);
    // r1 和 r2 在这里后不再使用
    
    // 可变引用
    let r3 = &mut s;
    r3.push_str(" world");
    println!("可变引用: {}", r3);
    // 注意：不能同时有可变和不可变引用
    
    // 借用作用域
    {
        let r4 = &s;
        println!("块内引用: {}", r4);
    } // r4 在这里超出作用域
    
    println!("块外可以继续使用: {}", s);
}

fn demonstrate_slices() {
    println!("\n=== 切片演示 ===");
    
    // 字符串切片
    let s = String::from("hello world");
    let hello = &s[0..5];  // 或 &s[..5]
    let world = &s[6..11]; // 或 &s[6..]
    let whole = &s[..];    // 整个字符串
    
    println!("原字符串: {}", s);
    println!("hello: {}", hello);
    println!("world: {}", world);  
    println!("whole: {}", whole);
    
    // 使用 first_word 函数
    let first = first_word(&s);
    println!("第一个单词: {}", first);
    
    // 数组切片
    let arr = [1, 2, 3, 4, 5];
    let slice = &arr[1..4];
    println!("数组: {:?}", arr);
    println!("切片: {:?}", slice);
}
```

## 核心概念解析

### 1. 所有权三大规则

1. **每个值都有一个所有者**
2. **同一时间只能有一个所有者**  
3. **所有者超出作用域时，值被销毁**

```rust
{
    let s = String::from("hello"); // s 拥有字符串
} // s 超出作用域，字符串被自动销毁
```

### 2. 移动 vs 复制

**移动（堆数据）:**
```rust
let s1 = String::from("hello");
let s2 = s1; // s1 移动到 s2，s1 不再有效
```

**复制（栈数据）:**
```rust
let x = 5;
let y = x; // x 被复制到 y，x 仍然有效
```

### 3. 借用规则

1. **任何时候，你可以有一个可变引用或任意数量的不可变引用**
2. **引用必须总是有效的**

```rust
let mut s = String::from("hello");

// 情况1：多个不可变引用
let r1 = &s;
let r2 = &s; // OK

// 情况2：一个可变引用
let r3 = &mut s; // OK，但不能与 r1, r2 同时存在
```

### 4. 生命周期

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}
```

- `'a` 是生命周期参数
- 确保返回值的生命周期不超过任何输入参数

## 与 TypeScript 的对比

| 概念 | TypeScript | Rust |
|------|------------|------|
| 内存管理 | 垃圾回收 | 所有权系统 |
| 引用 | 隐式，共享 | 显式，借用 |
| 内存安全 | 运行时检查 | 编译时保证 |
| 空指针 | 可能出现 | 编译时防止 |

## 常见错误和解决方案

### 1. 使用已移动的值

```rust
// 错误
let s1 = String::from("hello");
let s2 = s1;
println!("{}", s1); // 错误！

// 解决方案1：克隆
let s1 = String::from("hello");
let s2 = s1.clone();
println!("{} {}", s1, s2); // OK

// 解决方案2：借用
let s1 = String::from("hello");
let s2 = &s1;
println!("{} {}", s1, s2); // OK
```

### 2. 借用冲突

```rust
// 错误
let mut s = String::from("hello");
let r1 = &s;
let r2 = &mut s; // 错误！不能同时有可变和不可变引用
println!("{} {}", r1, r2);

// 解决方案：分离作用域
let mut s = String::from("hello");
{
    let r1 = &s;
    println!("{}", r1);
} // r1 超出作用域
let r2 = &mut s; // OK
println!("{}", r2);
```

## 最佳实践

### 1. 优先使用借用

```rust
// 好的做法
fn process_string(s: &str) -> usize {
    s.len()
}

// 避免不必要的所有权转移
fn process_string_bad(s: String) -> usize {
    s.len()
} // s 被销毁，浪费
```

### 2. 使用切片而不是整个集合

```rust
// 好的做法
fn first_word(s: &str) -> &str { /* ... */ }

// 不够灵活
fn first_word_bad(s: &String) -> &str { /* ... */ }
```

### 3. 返回所有权而不是借用（当合适时）

```rust
// 好的做法：构造函数
fn create_string() -> String {
    String::from("hello")
}

// 好的做法：处理函数
fn process_data(data: &[i32]) -> Vec<i32> {
    data.iter().map(|x| x * 2).collect()
}
```

## 小结

Rust 的所有权系统：
- **内存安全**：编译时防止内存错误
- **零成本**：运行时无额外开销
- **并发安全**：防止数据竞争
- **显式**：明确数据的所有权关系

这是 Rust 最重要也是最独特的特性！ 