// Rust 中的函数练习
// 请根据 TypeScript 示例，完成以下 Rust 代码

fn main() {
    println!("=== Rust 函数演示 ===");
    
    // 练习 1: 基本函数调用
    // TODO: 调用 greet 函数
    
    
    // 练习 2: 带参数的函数
    // TODO: 调用 multiply 函数
    
    
    // 练习 3: 可选参数（使用 Option）
    // TODO: 调用 create_user 函数
    
    
    // 练习 4: 默认参数（函数重载）
    // TODO: 调用 power 函数
    
    
    // 练习 5: 变长参数（使用 Vec 或切片）
    // TODO: 调用 sum 函数
    
    
    // 练习 6: 高阶函数和闭包
    // TODO: 创建并使用闭包
    
    
    // 练习 7: 函数指针
    // TODO: 使用函数指针
    
    
    // 练习 8: 错误处理
    // TODO: 调用可能失败的函数
    
    
    // 练习 9: 递归函数
    // TODO: 调用递归函数
    
}

// TODO: 实现 greet 函数
// 提示：接受 &str 参数，返回 String
fn greet(name: &str) -> String {
    // TODO: 返回问候语
    
}

// TODO: 实现 multiply 函数
// 提示：接受两个 i32 参数，返回 i32
fn multiply(a: i32, b: i32) -> i32 {
    // TODO: 返回乘积
    
}

// TODO: 实现 create_user 函数
// 提示：使用 Option<T> 处理可选参数
fn create_user(name: String, age: Option<u32>) -> String {
    // TODO: 根据是否有年龄返回不同格式
    
}

// TODO: 实现 power 函数（基础版本）
fn power(base: f64, exponent: f64) -> f64 {
    // TODO: 计算幂
    
}

// TODO: 实现带默认值的 power 函数
fn power_default(base: f64) -> f64 {
    // TODO: 使用默认指数 2.0
    
}

// TODO: 实现 sum 函数
// 提示：接受切片 &[i32]，返回 i32
fn sum(numbers: &[i32]) -> i32 {
    // TODO: 计算所有数字的和
    
}

// TODO: 实现 apply_operation 函数
// 提示：接受一个函数作为参数
fn apply_operation<F>(x: i32, y: i32, op: F) -> i32 
where 
    F: Fn(i32, i32) -> i32,
{
    // TODO: 应用操作函数
    
}

// TODO: 实现 divide 函数
// 提示：返回 Result<f64, String> 处理除零错误
fn divide(a: f64, b: f64) -> Result<f64, String> {
    // TODO: 安全除法，处理除零情况
    
}

// TODO: 实现 factorial 函数
// 提示：递归计算阶乘
fn factorial(n: u32) -> u32 {
    // TODO: 递归实现
    
}

// TODO: 实现 fibonacci 函数
// 提示：递归计算斐波那契数列
fn fibonacci(n: u32) -> u32 {
    // TODO: 递归实现
    
}

// 编译并运行：
// rustc demo.rs && ./demo
//
// 或者使用 Cargo：
// cargo run --example functions 