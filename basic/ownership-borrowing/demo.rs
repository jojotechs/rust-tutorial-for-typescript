// Rust 中的所有权和借用练习
// 请根据 TypeScript 示例，完成以下 Rust 代码
// 这是 Rust 最重要的概念！

fn main() {
    println!("=== Rust 所有权和借用演示 ===");
    
    // 练习 1: 基本所有权
    // 提示：Rust 中每个值都有一个所有者
    // TODO: 创建一个 String 并赋值给另一个变量
    
    
    // TODO: 尝试同时使用两个变量（这会导致编译错误）
    
    
    // 练习 2: 所有权转移 (Move)
    // 提示：当所有权转移后，原变量不再有效
    // TODO: 创建一个 String，然后将其传递给函数
    
    
    // TODO: 尝试在传递后使用原变量（编译错误）
    
    
    // 练习 3: 克隆 (Clone)
    // 提示：使用 clone() 方法创建深拷贝
    // TODO: 创建一个 String 并克隆它
    
    
    // TODO: 证明两个变量都可以使用
    
    
    // 练习 4: 引用和借用
    // 提示：使用 & 创建引用，不转移所有权
    // TODO: 创建一个 String 并借用它
    
    
    // TODO: 通过引用使用数据
    
    
    // 练习 5: 可变引用
    // 提示：使用 &mut 创建可变引用
    // TODO: 创建一个可变 String 并修改它
    
    
    // 练习 6: 借用规则
    // 提示：同一时间只能有一个可变引用，或多个不可变引用
    // TODO: 尝试同时创建多个可变引用（编译错误）
    
    
    // 练习 7: 结构体所有权
    // TODO: 创建结构体实例并演示所有权转移
    
    
    // 练习 8: 函数返回值所有权
    // TODO: 调用返回所有权的函数
    
    
    // 练习 9: 切片 (Slice)
    // 提示：切片是对数据的引用
    // TODO: 创建字符串切片和数组切片
    
    
    // 练习 10: 生命周期预览
    // TODO: 调用带有生命周期的函数
    
}

// TODO: 实现 take_ownership 函数
// 提示：这个函数会取得参数的所有权
fn take_ownership(s: String) {
    // TODO: 打印字符串
    
    // 函数结束时，s 会被销毁
}

// TODO: 实现 borrow_string 函数
// 提示：这个函数借用字符串，不取得所有权
fn borrow_string(s: &String) -> usize {
    // TODO: 返回字符串长度
    
}

// TODO: 实现 borrow_and_modify 函数
// 提示：这个函数可变借用字符串并修改它
fn borrow_and_modify(s: &mut String) {
    // TODO: 向字符串添加内容
    
}

// TODO: 定义 Person 结构体
#[derive(Debug, Clone)]
struct Person {
    // TODO: 添加字段
    
}

// TODO: 实现 create_person 函数
// 提示：函数返回 Person 实例，转移所有权给调用者
fn create_person(name: String, age: u32) -> Person {
    // TODO: 创建并返回 Person 实例
    
}

// TODO: 实现 process_person 函数
// 提示：借用 Person 实例并处理
fn process_person(person: &Person) -> String {
    // TODO: 返回格式化的人员信息
    
}

// TODO: 实现 update_person_age 函数
// 提示：可变借用 Person 并更新年龄
fn update_person_age(person: &mut Person, new_age: u32) {
    // TODO: 更新年龄
    
}

// TODO: 实现 first_word 函数
// 提示：返回字符串中第一个单词的切片
fn first_word(s: &str) -> &str {
    // TODO: 找到第一个空格的位置
    
    // TODO: 返回第一个单词的切片
    
}

// TODO: 实现 longest 函数
// 提示：返回两个字符串切片中较长的一个
// 注意：这需要生命周期参数
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    // TODO: 比较长度并返回较长的字符串
    
}

// TODO: 实现 demonstrate_move_semantics 函数
fn demonstrate_move_semantics() {
    println!("\n=== 移动语义演示 ===");
    
    // TODO: 演示 String 的移动语义
    
    
    // TODO: 演示基本类型的复制语义
    
}

// TODO: 实现 demonstrate_borrowing_rules 函数
fn demonstrate_borrowing_rules() {
    println!("\n=== 借用规则演示 ===");
    
    // TODO: 演示多个不可变引用
    
    
    // TODO: 演示单个可变引用
    
    
    // TODO: 展示借用作用域
    
}

// TODO: 实现 demonstrate_slices 函数
fn demonstrate_slices() {
    println!("\n=== 切片演示 ===");
    
    // TODO: 字符串切片
    
    
    // TODO: 数组切片
    
}

// 编译并运行：
// rustc demo.rs && ./demo
//
// 或者使用 Cargo：
// cargo init
// cargo run
//
// 注意：这个练习中的某些代码故意会产生编译错误，
// 这是为了帮助你理解 Rust 的所有权系统！ 