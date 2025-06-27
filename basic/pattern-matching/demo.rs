// Rust 中的模式匹配练习
// 请根据 TypeScript 示例，完成以下 Rust 代码
// 这是 Rust 的强大特性！

fn main() {
    println!("=== Rust 模式匹配演示 ===");
    
    // 练习 1: 基本 match 表达式
    // TODO: 使用 match 处理数字
    
    
    // 练习 2: 字符串匹配
    // TODO: 匹配字符串状态
    
    
    // 练习 3: 枚举匹配
    // TODO: 使用 Shape 枚举计算面积
    
    
    // 练习 4: Option 匹配
    // TODO: 处理 Option<T> 类型
    
    
    // 练习 5: Result 匹配
    // TODO: 处理 Result<T, E> 类型
    
    
    // 练习 6: 解构匹配
    // TODO: 解构元组和结构体
    
    
    // 练习 7: 守卫条件
    // TODO: 使用 match 守卫
    
    
    // 练习 8: 范围匹配
    // TODO: 匹配数字范围
    
}

// TODO: 定义 Shape 枚举
// 提示：包含 Circle、Rectangle、Triangle 变体
#[derive(Debug)]
enum Shape {
    // TODO: 定义变体
    
}

// TODO: 定义 Status 枚举
#[derive(Debug)]
enum Status {
    // TODO: 定义变体
    
}

// TODO: 定义 Message 枚举（带数据）
#[derive(Debug)]
enum Message {
    // TODO: 定义不同类型的消息变体
    
}

// TODO: 定义 Point 结构体
#[derive(Debug)]
struct Point {
    // TODO: 定义坐标字段
    
}

// TODO: 实现 process_number 函数
fn process_number(value: i32) -> &'static str {
    // TODO: 使用 match 处理不同数字
    
}

// TODO: 实现 process_status 函数
fn process_status(status: Status) -> &'static str {
    // TODO: 使用 match 处理状态枚举
    
}

// TODO: 实现 calculate_area 函数
fn calculate_area(shape: Shape) -> f64 {
    // TODO: 使用 match 计算不同形状的面积
    
}

// TODO: 实现 process_option 函数
fn process_option(opt: Option<i32>) -> String {
    // TODO: 使用 match 处理 Option
    
}

// TODO: 实现 process_result 函数
fn process_result(result: Result<i32, String>) -> String {
    // TODO: 使用 match 处理 Result
    
}

// TODO: 实现 process_point 函数
fn process_point(point: Point) -> String {
    // TODO: 解构 Point 并分类
    
}

// TODO: 实现 process_tuple 函数
fn process_tuple(tuple: (i32, i32)) -> String {
    // TODO: 解构元组并处理
    
}

// TODO: 实现 categorize_number 函数
fn categorize_number(num: i32) -> &'static str {
    // TODO: 使用 match 和守卫条件分类数字
    
}

// TODO: 实现 match_range 函数
fn match_range(num: i32) -> &'static str {
    // TODO: 使用范围匹配
    
}

// TODO: 实现 process_message 函数
fn process_message(msg: Message) -> String {
    // TODO: 处理不同类型的消息
    
}

// 编译并运行：
// rustc demo.rs && ./demo
//
// 或者使用 Cargo：
// cargo run --example pattern_matching 