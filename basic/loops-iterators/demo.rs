// Rust 中的循环和迭代器练习
// 请根据 TypeScript 示例，完成以下 Rust 代码
// Rust 的迭代器是零成本抽象！

fn main() {
    println!("=== Rust 循环和迭代器演示 ===");
    
    // 练习 1: 基本 for 循环
    // TODO: 使用 for 循环遍历范围
    
    
    // 练习 2: for 循环遍历集合
    // TODO: 遍历数组和向量
    
    
    // 练习 3: while 循环
    // TODO: 使用 while 循环
    
    
    // 练习 4: loop 循环
    // TODO: 使用 loop 和 break
    
    
    // 练习 5: 迭代器基础
    // TODO: 使用 iter()、into_iter()、iter_mut()
    
    
    // 练习 6: 迭代器适配器
    // TODO: 使用 map、filter、enumerate
    
    
    // 练习 7: 迭代器消费者
    // TODO: 使用 collect、reduce、for_each
    
    
    // 练习 8: 链式调用
    // TODO: 组合多个迭代器操作
    
    
    // 练习 9: 自定义迭代器
    // TODO: 实现自己的迭代器
    
}

// TODO: 实现 basic_for_loop 函数
fn basic_for_loop() {
    println!("\n=== 基本 for 循环 ===");
    // TODO: 遍历 0..5 范围
    
    
    // TODO: 遍历 1..=10 包含范围
    
}

// TODO: 实现 iterate_collections 函数
fn iterate_collections() {
    println!("\n=== 遍历集合 ===");
    
    let numbers = vec![1, 2, 3, 4, 5];
    
    // TODO: 遍历数组（不取得所有权）
    
    
    // TODO: 遍历向量（取得所有权）
    
    
    // TODO: 遍历向量的可变引用
    
}

// TODO: 实现 while_loop_demo 函数
fn while_loop_demo() {
    println!("\n=== while 循环 ===");
    // TODO: 使用 while 循环计数
    
}

// TODO: 实现 loop_demo 函数
fn loop_demo() {
    println!("\n=== loop 循环 ===");
    // TODO: 使用 loop 和 break
    
    
    // TODO: loop 返回值
    
}

// TODO: 实现 iterator_basics 函数
fn iterator_basics() {
    println!("\n=== 迭代器基础 ===");
    
    let numbers = vec![1, 2, 3, 4, 5];
    
    // TODO: 使用 iter() 创建不可变引用迭代器
    
    
    // TODO: 使用 into_iter() 取得所有权
    
    
    // TODO: 使用 iter_mut() 创建可变引用迭代器
    
}

// TODO: 实现 iterator_adapters 函数
fn iterator_adapters() {
    println!("\n=== 迭代器适配器 ===");
    
    let numbers = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    // TODO: 使用 map 转换元素
    
    
    // TODO: 使用 filter 筛选元素
    
    
    // TODO: 使用 enumerate 获取索引
    
    
    // TODO: 使用 zip 组合两个迭代器
    
}

// TODO: 实现 iterator_consumers 函数
fn iterator_consumers() {
    println!("\n=== 迭代器消费者 ===");
    
    let numbers = vec![1, 2, 3, 4, 5];
    
    // TODO: 使用 collect 收集结果
    
    
    // TODO: 使用 reduce 聚合
    
    
    // TODO: 使用 for_each 遍历
    
    
    // TODO: 使用 find 查找
    
}

// TODO: 实现 chaining_example 函数
fn chaining_example() {
    println!("\n=== 链式调用 ===");
    
    let numbers = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    // TODO: 链式调用：筛选偶数、平方、求和
    
}

// TODO: 定义 Counter 结构体
struct Counter {
    // TODO: 定义计数器字段
    
}

// TODO: 为 Counter 实现构造函数
impl Counter {
    fn new(max: usize) -> Counter {
        // TODO: 创建新的计数器
        
    }
}

// TODO: 为 Counter 实现 Iterator trait
impl Iterator for Counter {
    type Item = usize;
    
    fn next(&mut self) -> Option<Self::Item> {
        // TODO: 实现迭代器逻辑
        
    }
}

// TODO: 实现 custom_iterator_demo 函数
fn custom_iterator_demo() {
    println!("\n=== 自定义迭代器 ===");
    
    // TODO: 使用自定义迭代器
    
}

// TODO: 实现 nested_loops 函数
fn nested_loops() {
    println!("\n=== 嵌套循环 ===");
    
    // TODO: 嵌套循环处理二维数据
    
}

// TODO: 实现 performance_comparison 函数
fn performance_comparison() {
    println!("\n=== 性能对比 ===");
    
    let large_vec: Vec<i32> = (0..1_000_000).collect();
    
    // TODO: 对比传统循环和迭代器的性能
    
}

// 编译并运行：
// rustc demo.rs && ./demo
//
// 或者使用 Cargo：
// cargo run --example loops_iterators 