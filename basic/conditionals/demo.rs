// Rust 中的条件语句练习
// 请根据 TypeScript 示例，完成以下 Rust 代码

fn main() {
    println!("=== Rust 条件语句演示 ===");
    
    // 练习 1: 年龄分类
    // TODO: 调用 check_age 函数
    
    
    // 练习 2: 星期几判断
    // TODO: 调用 get_weekday 函数
    
    
    // 练习 3: 奇偶判断
    // TODO: 调用 is_even 函数
    
    
    // 练习 4: 绝对值计算
    // TODO: 调用 get_absolute_value 函数
    
    
    // 练习 5: 访问控制
    // TODO: 调用 check_access 函数
    
    
    // 练习 6: 用户权限
    // TODO: 调用 get_user_permissions 函数
    
    
    // 练习 7: 值处理
    // TODO: 调用 process_value 函数
    
    
    // 练习 8: 可选值处理
    // TODO: 调用 process_optional_value 函数
    
    
    // 练习 9: 运费计算
    // TODO: 调用 calculate_shipping 函数
    
}

// TODO: 实现 check_age 函数
// 提示：使用 if/else if/else 条件链
fn check_age(age: u32) -> &'static str {
    // TODO: 根据年龄返回分类
    // 0-12: 儿童, 13-17: 青少年, 18-64: 成年人, 65+: 老年人
    
}

// TODO: 实现 get_weekday 函数
// 提示：使用 match 表达式
fn get_weekday(day: u32) -> &'static str {
    // TODO: 1-7 对应星期一到星期日，其他返回无效
    
}

// TODO: 实现 is_even 函数
// 提示：使用条件表达式
fn is_even(num: i32) -> &'static str {
    // TODO: 判断奇偶性
    
}

// TODO: 实现 get_absolute_value 函数
fn get_absolute_value(num: i32) -> i32 {
    // TODO: 返回绝对值
    
}

// TODO: 定义 Role 枚举
#[derive(Debug)]
enum Role {
    // TODO: 定义 Admin, User, Guest 角色
    
}

// TODO: 定义 User 结构体
#[derive(Debug)]
struct User {
    // TODO: 定义字段：name, age, role, is_active
    
}

// TODO: 实现 check_access 函数
fn check_access(username: &str, password: &str, is_active: bool) -> &'static str {
    // TODO: 检查访问权限
    
}

// TODO: 实现 get_user_permissions 函数
fn get_user_permissions(user: &User) -> Vec<&'static str> {
    // TODO: 根据用户角色和状态返回权限列表
    
}

// TODO: 定义 Value 枚举
#[derive(Debug)]
enum Value {
    // TODO: 定义 Text(String), Number(i32), Boolean(bool) 变体
    
}

// TODO: 实现 process_value 函数
fn process_value(value: Value) -> String {
    // TODO: 根据值类型进行不同处理
    
}

// TODO: 实现 process_optional_value 函数
fn process_optional_value(value: Option<&str>) -> &'static str {
    // TODO: 处理 Option 类型
    
}

// TODO: 实现 analyze_data 函数
fn analyze_data(data: &[i32]) -> &'static str {
    // TODO: 根据数组长度返回描述
    
}

// TODO: 实现 calculate_shipping 函数
fn calculate_shipping(weight: f64, distance: f64, is_priority: bool) -> f64 {
    // TODO: 计算运费
    
}

// TODO: 实现 get_display_name 函数
fn get_display_name(first_name: Option<&str>, last_name: Option<&str>, username: Option<&str>) -> String {
    // TODO: 根据可用信息返回显示名称
    
}

// TODO: 实现其他辅助函数
fn calculate_base_cost(weight: f64) -> f64 {
    // TODO: 根据重量计算基础费用
    
}

fn apply_distance_multiplier(cost: f64, distance: f64) -> f64 {
    // TODO: 根据距离调整费用
    
}

fn apply_priority_fee(cost: f64, is_priority: bool) -> f64 {
    // TODO: 应用优先配送费用
    
}

// 编译并运行：
// rustc demo.rs && ./demo
//
// 或者使用 Cargo：
// cargo run --example conditionals 