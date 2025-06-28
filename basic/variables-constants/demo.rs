// Rust 中的变量和常量练习
// 请根据 TypeScript 示例，完成以下 Rust 代码

fn main() {
    println!("=== Rust 中的变量和常量 ===");

    // 练习 1: 基本变量声明
    // 提示：Rust 默认变量是不可变的，使用 let 声明
    // TODO: 声明一个不可变的字符串变量 user_name，值为 "Alice"
    let user_name: &str = "Alice";

    // TODO: 声明一个不可变的整数变量 age，值为 25
    let age: i32 = 25;

    // TODO: 声明一个不可变的布尔变量 is_active，值为 true
    let is_active = true;

    // 练习 2: 类型推断
    // 提示：Rust 也支持类型推断
    // TODO: 声明变量 message，让 Rust 自动推断类型
    let message = "Hello, TypeScript!";

    // TODO: 声明变量 count，让 Rust 自动推断类型
    let count = 42;

    // 练习 3: 常量声明
    // 提示：使用 const 声明常量，必须指定类型
    // TODO: 声明常量 PI，类型为 f64，值为 3.14159
    const PI: f64 = 3.14159;

    // TODO: 声明常量 APP_NAME，类型为 &str，值为 "My App"
    const APP_NAME: &str = "My App";

    // 练习 4: 可变变量
    // 提示：使用 let mut 声明可变变量
    // TODO: 声明可变变量 mutable_data，初始值为 "I can change"
    let mut mutable_data = "I can change";
    println!("Mutable_data before: {mutable_data}");

    // TODO: 修改 mutable_data 的值为 "I changed!"
    mutable_data = "I changed!";

    // 练习 5: 不可变变量
    // TODO: 声明不可变变量 immutable_data，值为 "I cannot change"
    let immutable_data = "I cannot change";
    // error
    // immutable_data = "Try to change";

    // 练习 6: 变量遮蔽 (Shadowing)
    // 提示：Rust 允许用相同名称声明新变量
    // TODO: 声明变量 score，值为 100
    let score = 100;
    println!("Score before: {score}");

    // TODO: 使用 shadowing 重新声明 score，值为 200
    let score = 200.2;

    // 练习 7: 数组和元组
    // 提示：Rust 中数组是 [T; N] 或 Vec<T>
    // TODO: 声明一个包含 5 个整数的数组 numbers
    let numbers = [1, 2, 3, 4, 5];

    // TODO: 声明一个包含 name 和 age 的元组 person
    let person = ("Alice", 35);

    // 练习 8: 函数内变量
    // TODO: 完成函数 calculate_area

    // 练习 9: 作用域演示
    demonstrate_scope();

    // 练习 10: 打印所有变量
    // TODO: 使用 println! 宏打印所有变量
    // 提示：使用 {} 作为占位符
    println!("User_name: {user_name}");
    println!("Age: {age}");
    println!("Is_active: {is_active}");
    println!("Person: {person:?}");
    println!("Numbers: {numbers:?}");
    println!("Score: {score}");
    println!("Message: {message}");
    println!("Count: {count}");
    println!("PI: {PI}");
    println!("APP_NAME: {APP_NAME}");
    println!("Mutable_data: {mutable_data}");
    println!("Immutable_data: {immutable_data}");

    // TODO: 调用 calculate_area 函数并打印结果
    let area = calculate_area(55.0, 22.4);
    println!("Area: {}", area);
}

// TODO: 实现 demonstrate_scope 函数
// 提示：展示变量作用域和遮蔽概念
fn demonstrate_scope() {
    // TODO: 在这里实现作用域演示
    let outer_var = "I'm in the outer scope";
    let condition = true;
    if condition {
        let inner_var = "I'm in the inner scope";
        let outer_var = "I'm shadowing the outer variable";
        println!("Inner:{inner_var}");
        println!("Block scoped:{outer_var}");
    }
    println!("Out Block scoped:{outer_var}");
}

// TODO: 实现 calculate_area 函数
// 提示：接受两个 f64 参数，返回 f64
fn calculate_area(width: f64, height: f64) -> f64 {
    // TODO: 在这里实现面积计算
    width * height
}

// 编译并运行：
// rustc demo.rs && ./demo
//
// 或者使用 Cargo：
// cargo init
// cargo run
