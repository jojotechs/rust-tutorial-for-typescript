// Rust 中的数据类型练习
// 请根据 TypeScript 示例，完成以下 Rust 代码

fn main() {
    println!("=== Rust 数据类型演示 ===");

    // 练习 1: 基本数据类型
    // 提示：Rust 有 i32, f64, bool, char 等基本类型
    // TODO: 声明基本类型变量
    let age = 25;
    let name: &str = "Alice";
    let is_active: bool = true;
    // rust没有空指针，必须显式声明Option
    let value: Option<i32> = None;
    let not_defined: Option<String> = None;

    // 练习 2: 数组和向量
    // 提示：[T; N] 是固定大小数组，Vec<T> 是动态数组
    // TODO: 声明一个包含 5 个整数的数组
    let numbers: [i32; 5] = [1, 2, 3, 4, 5];
    let strings: [&str; 3] = ["hello", "world", "typescript"];
    let mixed = ("Alice", 25, "Bob", 30);

    // TODO: 声明一个包含字符串的向量
    let strings: Vec<String> = vec![String::from("hello"), String::from("world")];

    // 练习 3: 元组类型
    // 提示：元组可以包含不同类型的值
    // TODO: 声明一个包含姓名和年龄的元组
    let person: (String, i32) = (String::from("Alice"), 25);

    // TODO: 声明一个三维坐标元组
    let coordinates = (10, 20, 30);

    // 练习 4: 结构体 (struct)
    // 提示：结构体类似 TypeScript 的 interface
    // TODO: 定义 User 结构体（在 main 函数外面）

    // TODO: 创建 User 实例
    let user = User {
        id: 1,
        name: String::from("Alice"),
        email: String::from("alice@example.com"),
        age: Some(25),
        is_active: true,
    };

    // 练习 5: 枚举类型
    // 提示：Rust 的枚举比 TypeScript 更强大
    // TODO: 定义 Status 枚举（在 main 函数外面）

    // TODO: 创建 Status 实例
    let current_status = Status::PENDING;

    // 练习 6: Option 类型
    // 提示：Option<T> 用于表示可能为空的值
    // TODO: 声明一个可选的年龄变量

    // 练习 7: 嵌套结构体
    // TODO: 创建带地址的用户实例
    let user_with_address = UserWithAddress {
        id: 1,
        name: String::from("Bob"),
        address: Address {
            street: String::from("123 Main St"),
            city: String::from("New York"),
            zip_code: String::from("10001"),
        },
    };

    // 练习 8: 函数类型和闭包
    // TODO: 定义一个接受两个整数并返回整数的函数变量
    let add = |a: i32, b: i32| a + b;
    let multiply = |a: i32, b: i32| a * b;

    // 练习 9: 泛型结构体
    // TODO: 创建泛型容器实例
    let string_container = Container::new(String::from("hello"));
    let int_container = Container::new(42);

    // 练习 10: 复杂数据结构
    // TODO: 创建产品数组
    let products = vec![
        Product {
            id: 1,
            name: String::from("Laptop"),
            price: 999.99,
            tags: vec![String::from("electronics"), String::from("computer")],
            category: Category {
                id: 1,
                name: String::from("Electronics"),
            },
        },
        Product {
            id: 2,
            name: String::from("Book"),
            price: 29.99,
            tags: vec![String::from("education"), String::from("reading")],
            category: Category {
                id: 2,
                name: String::from("Books"),
            },
        },
    ];

    // 练习 11: 打印所有数据
    // TODO: 使用 println! 宏打印所有变量
    // 提示：使用 {:?} 打印复杂类型
    println!("User: {:?}", user);
    println!("User with address: {:?}", user_with_address);
    println!("Current status: {:?}", current_status);
    println!("Products: {:?}", products);
    println!("String container: {:?}", string_container.get_value());
    println!("Int container: {:?}", int_container.get_value());
    println!("Add: {:?}", add(1, 2));

    // 练习 12: 调用处理函数
    // TODO: 调用数据处理函数
    println!("Process user: {:?}", process_user(&user));
    println!("Calculate total: {:?}", calculate_total(&products));
    println!("Match status: {:?}", match_status(&current_status));
}

// TODO: 定义 User 结构体
// 提示：使用 #[derive(Debug)] 来自动实现 Debug trait
#[derive(Debug)]
struct User {
    // TODO: 添加字段
    id: i32,
    name: String, // 长度不确定，用String可以动态赋值
    email: String,
    age: Option<i32>,
    is_active: bool,
}

// TODO: 定义 Address 结构体
#[derive(Debug)]
struct Address {
    // TODO: 添加字段
    street: String,
    city: String,
    zip_code: String,
}

// TODO: 定义 UserWithAddress 结构体
#[derive(Debug)]
struct UserWithAddress {
    // TODO: 添加字段
    id: i32,
    name: String,
    address: Address,
}

// TODO: 定义 Status 枚举
#[derive(Debug)]
enum Status {
    // TODO: 添加变体
    PENDING,
    APPROVED,
    REJECTED,
}

// TODO: 定义 Product 结构体
#[derive(Debug)]
struct Product {
    // TODO: 添加字段
    id: i32,
    name: String,
    price: f64,
    tags: Vec<String>,
    category: Category,
}

// TODO: 定义 Category 结构体
#[derive(Debug)]
struct Category {
    // TODO: 添加字段
    id: i32,
    name: String,
}

// TODO: 定义泛型 Container 结构体
#[derive(Debug)]
struct Container<T> {
    // TODO: 添加字段
    value: T,
}

// TODO: 为 Container 实现方法
impl<T> Container<T> {
    // TODO: 实现 new 方法
    fn new(value: T) -> Self {
        Self { value }
    }

    // TODO: 实现 get_value 方法
    fn get_value(&self) -> &T {
        &self.value
    }
}

// TODO: 实现 process_user 函数
// 提示：返回格式化的用户信息字符串
fn process_user(user: &User) -> String {
    // TODO: 实现函数体
    let age_text = match user.age {
        Some(age) => format!(" (age: {})", age),
        None => String::from(""),
    };
    format!("{} - {}", user.name, age_text)
}

// TODO: 实现 calculate_total 函数
// 提示：计算所有产品的总价
fn calculate_total(products: &[Product]) -> f64 {
    // TODO: 实现函数体
    products.iter().map(|product| product.price).sum()
}

// TODO: 实现 match_status 函数
// 提示：使用 match 表达式处理不同的状态
fn match_status(status: &Status) -> &'static str {
    // TODO: 实现函数体
    match status {
        Status::PENDING => "Pending",
        Status::APPROVED => "Approved",
        Status::REJECTED => "Rejected",
    }
}

// 编译并运行：
// rustc demo.rs && ./demo
//
// 或者使用 Cargo：
// cargo init
// cargo run
