// Rust 中的错误处理练习
// 请根据 TypeScript 示例，完成以下 Rust 代码
// Rust 使用 Result 和 Option 类型处理错误

fn main() {
    println!("=== Rust 错误处理演示 ===");
    
    // 练习 1: 基本 Result 处理
    // TODO: 调用 divide 函数并处理结果
    
    
    // 练习 2: Option 处理
    // TODO: 调用 find_user 函数并处理 Option
    
    
    // 练习 3: ? 运算符
    // TODO: 调用使用 ? 运算符的函数
    
    
    // 练习 4: 自定义错误类型
    // TODO: 处理自定义错误
    
    
    // 练习 5: 错误传播
    // TODO: 调用会传播错误的函数
    
    
    // 练习 6: panic! 和 unwrap
    // TODO: 演示 panic 和 unwrap 的使用
    
    
    // 练习 7: 多种错误处理方式
    // TODO: 演示不同的错误处理模式
    
}

// TODO: 实现 divide 函数
// 提示：返回 Result<f64, String>
fn divide(a: f64, b: f64) -> Result<f64, String> {
    // TODO: 检查除零情况
    
}

// TODO: 实现 parse_number 函数
// 提示：解析字符串为数字，返回 Result
fn parse_number(s: &str) -> Result<i32, String> {
    // TODO: 尝试解析字符串
    
}

// TODO: 定义 User 结构体
#[derive(Debug)]
struct User {
    // TODO: 定义用户字段
    
}

// TODO: 实现 find_user 函数
// 提示：返回 Option<User>
fn find_user(id: u32) -> Option<User> {
    // TODO: 模拟查找用户
    
}

// TODO: 定义自定义错误枚举
#[derive(Debug)]
enum MyError {
    // TODO: 定义不同类型的错误
    
}

// TODO: 为 MyError 实现 Display trait
use std::fmt;
impl fmt::Display for MyError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        // TODO: 实现错误显示
        
    }
}

// TODO: 实现 validate_age 函数
fn validate_age(age: i32) -> Result<i32, MyError> {
    // TODO: 验证年龄范围
    
}

// TODO: 实现 validate_email 函数
fn validate_email(email: &str) -> Result<String, MyError> {
    // TODO: 验证邮箱格式
    
}

// TODO: 实现 create_user_safe 函数
// 提示：使用 ? 运算符处理多个可能的错误
fn create_user_safe(name: &str, age: i32, email: &str) -> Result<User, MyError> {
    // TODO: 验证所有字段并创建用户
    
}

// TODO: 实现 process_file 函数
// 提示：模拟文件处理，可能失败
fn process_file(filename: &str) -> Result<String, MyError> {
    // TODO: 模拟文件读取和处理
    
}

// TODO: 实现 safe_divide_and_parse 函数
// 提示：组合多个可能失败的操作
fn safe_divide_and_parse(a: &str, b: &str) -> Result<f64, String> {
    // TODO: 解析两个字符串并执行除法
    
}

// TODO: 实现 unwrap_example 函数
fn unwrap_example() {
    // TODO: 演示 unwrap、expect 等方法
    
}

// TODO: 实现 option_methods 函数
fn option_methods() {
    // TODO: 演示 Option 的各种方法
    // map、and_then、unwrap_or、unwrap_or_else 等
    
}

// TODO: 实现 result_methods 函数
fn result_methods() {
    // TODO: 演示 Result 的各种方法
    // map、map_err、and_then、unwrap_or_else 等
    
}

// 编译并运行：
// rustc demo.rs && ./demo
//
// 或者使用 Cargo：
// cargo run --example error_handling 