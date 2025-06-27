// Rust Tutorial for TypeScript Developers
// 主入口文件 - 项目介绍和使用指南

fn main() {
    println!("🦀 欢迎来到 Rust Tutorial for TypeScript Developers! ✨");
    println!();
    println!("这个教程专为熟悉 TypeScript 的开发者设计，");
    println!("帮助你通过对比学习快速掌握 Rust 语言。");
    println!();
    
    println!("📚 基础课程模块:");
    println!("  1. variables-constants  - 变量和常量");
    println!("  2. data-types          - 数据类型");
    println!("  3. ownership-borrowing - 所有权和借用 ⭐ Rust 核心");
    println!("  4. functions           - 函数");
    println!("  5. pattern-matching    - 模式匹配 ⭐ Rust 特色");
    println!("  6. error-handling      - 错误处理");
    println!("  7. loops-iterators     - 循环和迭代器");
    println!();
    
    println!("🚀 如何使用:");
    println!("  1. 进入任意模块目录：cd basic/variables-constants");
    println!("  2. 阅读 TypeScript 示例：查看 example.ts");
    println!("  3. 完成 Rust 练习：编辑 demo.rs");
    println!("  4. 运行代码测试：rustc demo.rs && ./demo");
    println!("  5. 查看完整答案：阅读 answer.md");
    println!();
    
    println!("💡 或者使用 Cargo 运行示例:");
    println!("  cargo run --example variables_constants");
    println!("  cargo run --example data_types");
    println!("  cargo run --example ownership_borrowing");
    println!("  cargo run --example functions");
    println!("  cargo run --example pattern_matching");
    println!("  cargo run --example error_handling");
    println!("  cargo run --example loops_iterators");
    println!();
    
    println!("🎯 学习建议:");
    println!("  • 按顺序完成每个模块");
    println!("  • 动手编写代码，不要只看");
    println!("  • 理解 Rust 编译器的错误信息");
    println!("  • 对比 TypeScript 和 Rust 的设计哲学");
    println!();
    
    println!("📖 重要概念:");
    println!("  • 所有权系统 - Rust 的核心特性");
    println!("  • 借用检查器 - 内存安全保证");
    println!("  • 模式匹配 - 强大的控制流");
    println!("  • 错误处理 - Result 和 Option 类型");
    println!("  • 零成本抽象 - 性能与安全并重");
    println!();
    
    println!("开始你的 Rust 学习之旅吧！🎉");
    
    // 显示一个简单的 Rust 代码示例
    demonstrate_rust_features();
}

fn demonstrate_rust_features() {
    println!();
    println!("🔍 Rust 特性预览:");
    
    // 所有权系统
    let owned_string = String::from("Hello, Rust!");
    let borrowed_string = &owned_string;
    println!("  所有权: {} (借用: {})", owned_string, borrowed_string);
    
    // 模式匹配
    let number = 42;
    let result = match number {
        0 => "零",
        1..=10 => "小数",
        11..=100 => "中数",
        _ => "大数",
    };
    println!("  模式匹配: {} 是 {}", number, result);
    
    // 错误处理
    let division = safe_divide(10.0, 2.0);
    match division {
        Ok(result) => println!("  错误处理: 10 ÷ 2 = {}", result),
        Err(e) => println!("  错误处理: {}", e),
    }
    
    // 迭代器
    let numbers: Vec<i32> = (1..=5).collect();
    let doubled: Vec<i32> = numbers.iter().map(|x| x * 2).collect();
    println!("  迭代器: {:?} → {:?}", numbers, doubled);
}

fn safe_divide(a: f64, b: f64) -> Result<f64, String> {
    if b == 0.0 {
        Err("不能除以零".to_string())
    } else {
        Ok(a / b)
    }
} 