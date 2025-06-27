# Rust 语言学习指南 - 从 TypeScript 到 Rust

## 项目简介

本项目是专为熟悉 TypeScript 的前端工程师设计的 Rust 语言学习指南。通过对比 TypeScript 和 Rust 的语法差异，帮助你快速掌握 Rust 语言的核心概念和系统级编程思维。

## 学习目标

* ✅ 理解 Rust 语言的核心概念：所有权、借用、生命周期
* ✅ 掌握 Rust 的类型系统和模式匹配
* ✅ 学会 Rust 的错误处理和内存安全机制
* ✅ 构建高性能、内存安全的应用程序
* ✅ 开发 Web 服务、桌面应用和系统工具

## 项目结构

```
rust-tutorial-for-typescript/
├── README.md                    # 项目说明
└── basic/                       # 基础语法部分
    ├── variables-constants/     # 变量和常量
    │   ├── example.ts          # TypeScript 示例
    │   ├── demo.rs             # Rust 练习模板
    │   └── answer.md           # 答案和说明
    ├── data-types/             # 数据类型
    │   ├── example.ts
    │   ├── demo.rs
    │   └── answer.md
    ├── ownership-borrowing/    # 所有权和借用 ⭐ Rust 核心
    │   ├── example.ts
    │   ├── demo.rs
    │   └── answer.md
    ├── functions/              # 函数
    │   ├── example.ts
    │   ├── demo.rs
    │   └── answer.md
    ├── pattern-matching/       # 模式匹配 ⭐ Rust 特色
    │   ├── example.ts
    │   ├── demo.rs
    │   └── answer.md
    ├── error-handling/         # 错误处理
    │   ├── example.ts
    │   ├── demo.rs
    │   └── answer.md
    └── loops-iterators/        # 循环和迭代器
        ├── example.ts
        ├── demo.rs
        └── answer.md
```

## 使用方法

### 1. 环境准备

首先确保你已安装 Rust：

```bash
# 安装 Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# 验证安装
rustc --version
cargo --version
```

### 2. 学习流程

每个学习模块包含三个文件：

* **`example.ts`** - TypeScript 示例代码，展示你已经熟悉的语法
* **`demo.rs`** - Rust 练习模板，你需要填写实现
* **`answer.md`** - 完整的 Rust 实现和详细说明

### 3. 学习步骤

1. 📖 **阅读 TypeScript 示例** - 理解要实现的功能
2. 💻 **编写 Rust 代码** - 在 `demo.rs` 中实现相同逻辑
3. 🏃 **运行测试** - 使用 `rustc demo.rs && ./demo` 验证结果
4. 📚 **查看答案** - 对比 `answer.md` 中的标准实现
5. 🔄 **重复练习** - 直到熟练掌握

### 4. 运行代码

```bash
# 进入任意模块目录
cd basic/variables-constants

# 编译并运行 Rust 代码
rustc demo.rs && ./demo

# 或者创建 Cargo 项目（推荐）
cargo init
cargo run
```

## 基础部分学习内容

### 1. 变量和常量 (`variables-constants/`)

学习 Rust 中的变量声明、可变性和常量定义。

**关键差异：**
* 默认不可变 vs TypeScript 的默认可变
* `let` vs `let mut` vs `const`
* 变量遮蔽（shadowing）概念

### 2. 数据类型 (`data-types/`)

了解 Rust 的基本类型、结构体、元组和枚举。

**关键差异：**
* 强类型系统，编译时类型检查
* 结构体 vs TypeScript 的 interface
* 枚举的强大功能（代数数据类型）

### 3. 所有权和借用 (`ownership-borrowing/`) ⭐ Rust 核心

掌握 Rust 的内存管理核心概念。

**关键差异：**
* 所有权系统 vs 垃圾回收
* 借用检查器保证内存安全
* 移动语义 vs 复制语义

### 4. 函数 (`functions/`)

掌握 Rust 的函数定义、参数传递和返回值。

**关键差异：**
* 表达式 vs 语句
* 所有权在函数调用中的转移
* 生命周期参数

### 5. 模式匹配 (`pattern-matching/`) ⭐ Rust 特色

学习 Rust 强大的模式匹配功能。

**关键差异：**
* `match` 表达式 vs TypeScript 的 switch
* 解构赋值的强大功能
* 穷尽性检查

### 6. 错误处理 (`error-handling/`)

理解 Rust 的错误处理哲学和实践。

**关键差异：**
* `Result<T, E>` vs try/catch
* `Option<T>` vs undefined/null
* `?` 运算符的语法糖

### 7. 循环和迭代器 (`loops-iterators/`)

掌握 Rust 的循环和函数式编程风格。

**关键差异：**
* 迭代器的零成本抽象
* 函数式编程方法
* 并发安全的迭代

## TypeScript vs Rust 快速对比

| 特性     | TypeScript              | Rust                           |
|----------|-------------------------|--------------------------------|
| 变量声明 | `let name: string`      | `let name: String`             |
| 可变变量 | `let name = "hello"`    | `let mut name = String::new()` |
| 函数定义 | `function name(): type` | `fn name() -> Type`            |
| 数组     | `number[]`              | `Vec<i32>` 或 `[i32; 5]`       |
| 对象     | `interface Person`      | `struct Person`                |
| 可选值   | `string \| undefined`   | `Option<String>`               |
| 错误处理 | `try/catch`             | `Result<T, E>`                 |
| 内存管理 | 垃圾回收                | 所有权系统                     |
| 并发     | `async/await`           | `async/await` + 所有权         |

## 学习路径规划

### 🎯 基础阶段（当前）
- 语法基础和核心概念
- 内存安全和所有权系统
- 基本数据结构和控制流

### 🚀 中级阶段（计划中）
- 泛型和 Trait 系统
- 生命周期管理
- 智能指针（Box, Rc, Arc）
- 异步编程基础
- 模块系统和包管理
- 错误处理最佳实践

### 💫 高级阶段（计划中）
- Web 服务开发（Axum/Actix-web）
- 数据库集成（SQLx/Diesel）
- 全栈项目：Rust + TypeScript + GraphQL
- Tauri 桌面应用开发
- WebAssembly 集成
- 系统编程和性能优化

## 为什么选择 Rust？

### 🔒 内存安全
- 编译时消除内存泄漏和数据竞争
- 无需垃圾回收器的零成本抽象

### ⚡ 高性能
- 接近 C/C++ 的运行速度
- 零成本抽象，编译时优化

### 🛡️ 类型安全
- 强大的类型系统防止运行时错误
- 模式匹配确保完整性

### 🔄 现代化
- 优秀的包管理器 Cargo
- 活跃的社区生态系统

## 学习建议

1. **理解核心概念** - 所有权系统是 Rust 的精髓，花时间深入理解
2. **多动手实践** - 编译器是最好的老师，让错误信息指导学习
3. **对比思考** - 思考 Rust 和 TypeScript 的设计哲学差异
4. **循序渐进** - 不要急于求成，先掌握基础再进阶
5. **查阅文档** - Rust 官方文档质量很高，是最佳学习资源

## 获取帮助

* [The Rust Programming Language Book](https://doc.rust-lang.org/book/)
* [Rust by Example](https://doc.rust-lang.org/rust-by-example/)
* [Rustlings 练习](https://github.com/rust-lang/rustlings)
* [Rust 官方文档](https://doc.rust-lang.org/)

开始你的 Rust 系统编程之旅吧！🦀✨

---

*"Rust 让你能够编写快速、安全的代码，而无需在性能和安全性之间做出妥协。"* 