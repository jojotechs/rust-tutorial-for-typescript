# 循环和迭代器 - 完整答案

## Rust 完整实现

```rust
// Rust 中的循环和迭代器完整实现
// 展示各种循环方式、迭代器和零成本抽象

fn main() {
    println!("=== Rust 循环和迭代器演示 ===");
    
    basic_for_loop();
    iterate_collections();
    while_loop_demo();
    loop_demo();
    iterator_basics();
    iterator_adapters();
    iterator_consumers();
    chaining_example();
    custom_iterator_demo();
    nested_loops();
    performance_comparison();
}

// 基本 for 循环
fn basic_for_loop() {
    println!("\n=== 基本 for 循环 ===");
    
    // 遍历范围 (不包含末尾)
    print!("0..5: ");
    for i in 0..5 {
        print!("{} ", i);
    }
    println!();
    
    // 遍历包含范围
    print!("1..=10: ");
    for i in 1..=10 {
        print!("{} ", i);
    }
    println!();
    
    // 反向遍历
    print!("reverse(1..=5): ");
    for i in (1..=5).rev() {
        print!("{} ", i);
    }
    println!();
}

// 遍历集合
fn iterate_collections() {
    println!("\n=== 遍历集合 ===");
    
    let numbers = vec![1, 2, 3, 4, 5];
    
    // 遍历不可变引用（不取得所有权）
    print!("iter(): ");
    for num in &numbers {
        print!("{} ", num);
    }
    println!();
    
    // 遍历取得所有权
    let numbers_clone = numbers.clone();
    print!("into_iter(): ");
    for num in numbers_clone {
        print!("{} ", num);
    }
    println!();
    // numbers_clone 在这里已经不可用
    
    // 遍历可变引用
    let mut numbers = vec![1, 2, 3, 4, 5];
    print!("iter_mut() (doubled): ");
    for num in &mut numbers {
        *num *= 2;
        print!("{} ", num);
    }
    println!();
    
    // 带索引的遍历
    print!("enumerate(): ");
    for (index, value) in numbers.iter().enumerate() {
        print!("{}:{} ", index, value);
    }
    println!();
}

// while 循环
fn while_loop_demo() {
    println!("\n=== while 循环 ===");
    
    let mut count = 0;
    print!("while count: ");
    while count < 5 {
        print!("{} ", count);
        count += 1;
    }
    println!();
    
    // while let 模式匹配
    let mut stack = vec![1, 2, 3];
    print!("while let pop: ");
    while let Some(value) = stack.pop() {
        print!("{} ", value);
    }
    println!();
}

// loop 循环
fn loop_demo() {
    println!("\n=== loop 循环 ===");
    
    let mut counter = 0;
    print!("loop with break: ");
    loop {
        counter += 1;
        print!("{} ", counter);
        if counter >= 5 {
            break;
        }
    }
    println!();
    
    // loop 返回值
    let result = loop {
        counter += 1;
        if counter >= 10 {
            break counter * 2;
        }
    };
    println!("loop return value: {}", result);
    
    // 带标签的 loop
    let mut i = 0;
    'outer: loop {
        let mut j = 0;
        loop {
            j += 1;
            if j > 3 {
                break;
            }
            if i == 2 && j == 2 {
                break 'outer;
            }
        }
        i += 1;
        if i > 5 {
            break;
        }
    }
    println!("nested loop with label: i={}, j={}", i, 2);
}

// 迭代器基础
fn iterator_basics() {
    println!("\n=== 迭代器基础 ===");
    
    let numbers = vec![1, 2, 3, 4, 5];
    
    // iter() 创建不可变引用迭代器
    println!("iter() - 借用元素:");
    let iter = numbers.iter();
    for num in iter {
        println!("  &{}: {}", num, num);
    }
    // numbers 仍然可用
    println!("  numbers 仍可用: {:?}", numbers);
    
    // into_iter() 取得所有权
    println!("into_iter() - 拥有元素:");
    let numbers_copy = numbers.clone();
    let iter = numbers_copy.into_iter();
    for num in iter {
        println!("  {}: {}", num, num);
    }
    // numbers_copy 不再可用
    
    // iter_mut() 创建可变引用迭代器
    let mut numbers = vec![1, 2, 3, 4, 5];
    println!("iter_mut() - 可变引用:");
    for num in numbers.iter_mut() {
        *num *= 10;
        println!("  &mut {}: {}", num, num);
    }
    println!("  修改后的 numbers: {:?}", numbers);
}

// 迭代器适配器
fn iterator_adapters() {
    println!("\n=== 迭代器适配器 ===");
    
    let numbers = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    // map 转换元素
    let doubled: Vec<i32> = numbers.iter().map(|x| x * 2).collect();
    println!("map (doubled): {:?}", doubled);
    
    // filter 筛选元素
    let evens: Vec<&i32> = numbers.iter().filter(|&&x| x % 2 == 0).collect();
    println!("filter (evens): {:?}", evens);
    
    // enumerate 获取索引
    let indexed: Vec<(usize, &i32)> = numbers.iter().enumerate().collect();
    println!("enumerate: {:?}", indexed);
    
    // zip 组合两个迭代器
    let letters = vec!['a', 'b', 'c', 'd'];
    let zipped: Vec<(i32, char)> = numbers.iter()
        .take(4)
        .cloned()
        .zip(letters.iter().cloned())
        .collect();
    println!("zip: {:?}", zipped);
    
    // take 和 skip
    let taken: Vec<&i32> = numbers.iter().take(3).collect();
    let skipped: Vec<&i32> = numbers.iter().skip(7).collect();
    println!("take(3): {:?}", taken);
    println!("skip(7): {:?}", skipped);
    
    // step_by 步长
    let stepped: Vec<&i32> = numbers.iter().step_by(2).collect();
    println!("step_by(2): {:?}", stepped);
}

// 迭代器消费者
fn iterator_consumers() {
    println!("\n=== 迭代器消费者 ===");
    
    let numbers = vec![1, 2, 3, 4, 5];
    
    // collect 收集结果
    let doubled: Vec<i32> = numbers.iter().map(|x| x * 2).collect();
    println!("collect: {:?}", doubled);
    
    // reduce 聚合
    let sum = numbers.iter().fold(0, |acc, x| acc + x);
    println!("fold (sum): {}", sum);
    
    let product = numbers.iter().fold(1, |acc, x| acc * x);
    println!("fold (product): {}", product);
    
    // reduce（Rust 1.51+）
    let sum_reduce = numbers.iter().reduce(|acc, x| acc + x);
    println!("reduce: {:?}", sum_reduce);
    
    // for_each 遍历
    print!("for_each: ");
    numbers.iter().for_each(|x| print!("{} ", x));
    println!();
    
    // find 查找
    let found = numbers.iter().find(|&&x| x > 3);
    println!("find (>3): {:?}", found);
    
    // any 和 all
    let has_even = numbers.iter().any(|&x| x % 2 == 0);
    let all_positive = numbers.iter().all(|&x| x > 0);
    println!("any even: {}, all positive: {}", has_even, all_positive);
    
    // count
    let count = numbers.iter().filter(|&&x| x % 2 == 0).count();
    println!("count of evens: {}", count);
    
    // max 和 min
    let max = numbers.iter().max();
    let min = numbers.iter().min();
    println!("max: {:?}, min: {:?}", max, min);
}

// 链式调用示例
fn chaining_example() {
    println!("\n=== 链式调用 ===");
    
    let numbers = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    // 筛选偶数、平方、求和
    let result = numbers
        .iter()
        .filter(|&&x| x % 2 == 0)    // 筛选偶数：[2, 4, 6, 8, 10]
        .map(|x| x * x)              // 平方：[4, 16, 36, 64, 100]
        .fold(0, |acc, x| acc + x);  // 求和：220
    
    println!("偶数平方和: {}", result);
    
    // 复杂的链式操作
    let processed: Vec<String> = numbers
        .iter()
        .enumerate()                    // (index, value)
        .filter(|(i, _)| i % 2 == 0)   // 偶数索引
        .map(|(_, value)| *value)      // 提取值
        .filter(|&x| x > 3)            // 值大于3
        .map(|x| format!("num_{}", x)) // 格式化
        .collect();
    
    println!("复杂处理结果: {:?}", processed);
}

// 自定义迭代器
struct Counter {
    current: usize,
    max: usize,
}

impl Counter {
    fn new(max: usize) -> Counter {
        Counter { current: 0, max }
    }
}

impl Iterator for Counter {
    type Item = usize;
    
    fn next(&mut self) -> Option<Self::Item> {
        if self.current < self.max {
            let current = self.current;
            self.current += 1;
            Some(current)
        } else {
            None
        }
    }
}

fn custom_iterator_demo() {
    println!("\n=== 自定义迭代器 ===");
    
    let counter = Counter::new(5);
    let values: Vec<usize> = counter.collect();
    println!("自定义计数器: {:?}", values);
    
    // 使用自定义迭代器进行链式操作
    let result: i32 = Counter::new(10)
        .filter(|&x| x % 2 == 0)
        .map(|x| x as i32 * x as i32)
        .sum();
    println!("自定义迭代器链式操作结果: {}", result);
}

// 嵌套循环
fn nested_loops() {
    println!("\n=== 嵌套循环 ===");
    
    let matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];
    
    println!("矩阵遍历:");
    for (i, row) in matrix.iter().enumerate() {
        for (j, &value) in row.iter().enumerate() {
            print!("matrix[{}][{}]={} ", i, j, value);
        }
        println!();
    }
    
    // 使用迭代器的嵌套处理
    let flattened: Vec<i32> = matrix
        .iter()
        .flatten()
        .cloned()
        .collect();
    println!("展平的矩阵: {:?}", flattened);
    
    // 笛卡尔积
    let cartesian: Vec<(i32, char)> = (1..=3)
        .flat_map(|x| ['a', 'b', 'c'].iter().map(move |&y| (x, y)))
        .collect();
    println!("笛卡尔积: {:?}", cartesian);
}

// 性能对比
fn performance_comparison() {
    println!("\n=== 性能对比 ===");
    
    let large_vec: Vec<i32> = (0..1_000_000).collect();
    
    // 传统循环方式
    let start = std::time::Instant::now();
    let mut sum1 = 0;
    for &item in &large_vec {
        if item % 2 == 0 {
            sum1 += item * item;
        }
    }
    let duration1 = start.elapsed();
    
    // 迭代器方式
    let start = std::time::Instant::now();
    let sum2: i32 = large_vec
        .iter()
        .filter(|&&x| x % 2 == 0)
        .map(|x| x * x)
        .sum();
    let duration2 = start.elapsed();
    
    println!("传统循环: sum={}, 时间={:?}", sum1, duration1);
    println!("迭代器: sum={}, 时间={:?}", sum2, duration2);
    println!("结果相等: {}", sum1 == sum2);
    
    // 展示零成本抽象
    println!("注意：在优化构建中，两种方式的性能基本相同！");
}

// 实际应用示例：处理文本
fn text_processing_example() {
    println!("\n=== 文本处理示例 ===");
    
    let text = "hello world rust programming language";
    
    // 统计词频
    let word_count: std::collections::HashMap<&str, usize> = text
        .split_whitespace()
        .fold(std::collections::HashMap::new(), |mut acc, word| {
            *acc.entry(word).or_insert(0) += 1;
            acc
        });
    
    println!("词频统计: {:?}", word_count);
    
    // 查找最长的单词
    let longest_word = text
        .split_whitespace()
        .max_by_key(|word| word.len());
    
    println!("最长单词: {:?}", longest_word);
    
    // 处理行数据
    let lines = vec![
        "Alice,25,Engineer",
        "Bob,30,Designer", 
        "Charlie,35,Manager",
    ];
    
    let people: Vec<(String, u32, String)> = lines
        .iter()
        .filter_map(|line| {
            let parts: Vec<&str> = line.split(',').collect();
            if parts.len() == 3 {
                if let Ok(age) = parts[1].parse::<u32>() {
                    return Some((
                        parts[0].to_string(),
                        age,
                        parts[2].to_string(),
                    ));
                }
            }
            None
        })
        .collect();
    
    println!("解析的人员数据: {:?}", people);
}
```

## 核心差异解析

### 1. for 循环语法

**TypeScript:**
```typescript
// 基本 for 循环
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// for...of 循环
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
    console.log(num);
}

// for...in 循环
const obj = { a: 1, b: 2 };
for (const key in obj) {
    console.log(key, obj[key]);
}
```

**Rust:**
```rust
// 范围循环
for i in 0..5 {
    println!("{}", i);
}

// 集合循环
let numbers = vec![1, 2, 3, 4, 5];
for num in &numbers {
    println!("{}", num);
}

// 带索引的循环
for (index, value) in numbers.iter().enumerate() {
    println!("{}: {}", index, value);
}
```

### 2. 数组方法 vs 迭代器

**TypeScript:**
```typescript
const numbers = [1, 2, 3, 4, 5];

// map 转换
const doubled = numbers.map(x => x * 2);

// filter 筛选
const evens = numbers.filter(x => x % 2 === 0);

// reduce 聚合
const sum = numbers.reduce((acc, x) => acc + x, 0);

// 链式调用
const result = numbers
    .filter(x => x % 2 === 0)
    .map(x => x * x)
    .reduce((sum, x) => sum + x, 0);
```

**Rust:**
```rust
let numbers = vec![1, 2, 3, 4, 5];

// map 转换
let doubled: Vec<i32> = numbers.iter().map(|x| x * 2).collect();

// filter 筛选
let evens: Vec<&i32> = numbers.iter().filter(|&&x| x % 2 == 0).collect();

// fold 聚合
let sum = numbers.iter().fold(0, |acc, x| acc + x);

// 链式调用
let result = numbers
    .iter()
    .filter(|&&x| x % 2 == 0)
    .map(|x| x * x)
    .fold(0, |acc, x| acc + x);
```

### 3. 迭代器状态

**TypeScript:**
```typescript
const numbers = [1, 2, 3];
const iterator = numbers[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

**Rust:**
```rust
let numbers = vec![1, 2, 3];
let mut iterator = numbers.iter();

println!("{:?}", iterator.next()); // Some(1)
println!("{:?}", iterator.next()); // Some(2)
println!("{:?}", iterator.next()); // Some(3)
println!("{:?}", iterator.next()); // None
```

### 4. 生成器 vs 自定义迭代器

**TypeScript:**
```typescript
function* fibonacciGenerator() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fib = fibonacciGenerator();
console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
```

**Rust:**
```rust
struct Fibonacci {
    a: u64,
    b: u64,
}

impl Fibonacci {
    fn new() -> Self {
        Fibonacci { a: 0, b: 1 }
    }
}

impl Iterator for Fibonacci {
    type Item = u64;

    fn next(&mut self) -> Option<Self::Item> {
        let current = self.a;
        self.a = self.b;
        self.b = current + self.b;
        Some(current)
    }
}

let mut fib = Fibonacci::new();
println!("{}", fib.next().unwrap()); // 0
println!("{}", fib.next().unwrap()); // 1
println!("{}", fib.next().unwrap()); // 1
```

## 重要概念

### 1. 三种迭代器类型

```rust
let vec = vec![1, 2, 3];

// iter() - 借用元素
for item in &vec {          // 等价于 vec.iter()
    println!("{}", item);   // item 是 &i32
}

// into_iter() - 拥有元素
for item in vec {           // 等价于 vec.into_iter()
    println!("{}", item);   // item 是 i32
}
// vec 在这里不再可用

// iter_mut() - 可变借用
let mut vec = vec![1, 2, 3];
for item in &mut vec {      // 等价于 vec.iter_mut()
    *item *= 2;             // item 是 &mut i32
}
```

### 2. 惰性求值

```rust
let numbers = vec![1, 2, 3, 4, 5];

// 迭代器适配器是惰性的，直到消费者被调用才执行
let iter = numbers
    .iter()
    .map(|x| {
        println!("Processing {}", x); // 这不会立即执行
        x * 2
    })
    .filter(|&&x| x > 4);

// 只有调用消费者时才开始执行
let result: Vec<i32> = iter.collect();
```

### 3. 零成本抽象

```rust
// 这两种写法编译后的代码几乎相同
fn manual_loop(vec: &[i32]) -> i32 {
    let mut sum = 0;
    for &item in vec {
        if item % 2 == 0 {
            sum += item * item;
        }
    }
    sum
}

fn iterator_version(vec: &[i32]) -> i32 {
    vec.iter()
        .filter(|&&x| x % 2 == 0)
        .map(|x| x * x)
        .sum()
}
```

### 4. 迭代器组合子

```rust
let numbers = vec![1, 2, 3, 4, 5];

// 各种有用的迭代器方法
let result: Vec<i32> = numbers
    .iter()
    .cloned()           // 克隆元素
    .cycle()            // 无限重复
    .take(10)           // 取前10个
    .skip(2)            // 跳过前2个
    .step_by(2)         // 每隔2个取一个
    .collect();
```

## 最佳实践

### 1. 选择合适的迭代方式

```rust
let vec = vec![1, 2, 3];

// 好的做法：明确意图
for item in &vec {          // 借用，vec 仍可用
    println!("{}", item);
}

for item in vec.iter() {    // 显式借用
    println!("{}", item);
}

for item in vec {           // 移动，vec 不再可用
    println!("{}", item);
}
```

### 2. 优先使用迭代器而不是索引

```rust
let vec = vec![1, 2, 3, 4, 5];

// 好的做法：使用迭代器
for (i, item) in vec.iter().enumerate() {
    println!("{}: {}", i, item);
}

// 避免：手动索引
for i in 0..vec.len() {
    println!("{}: {}", i, vec[i]);  // 可能越界
}
```

### 3. 利用类型推导

```rust
let numbers = vec![1, 2, 3, 4, 5];

// 好的做法：让编译器推导类型
let doubled = numbers.iter().map(|x| x * 2).collect::<Vec<_>>();

// 或者明确指定返回类型
let doubled: Vec<i32> = numbers.iter().map(|x| x * 2).collect();
```

### 4. 合理使用收集器

```rust
use std::collections::HashMap;

let words = vec!["hello", "world", "hello"];

// 收集到不同的容器
let vec: Vec<&str> = words.iter().cloned().collect();
let set: std::collections::HashSet<&str> = words.iter().cloned().collect();
let map: HashMap<&str, usize> = words
    .iter()
    .enumerate()
    .map(|(i, &word)| (word, i))
    .collect();
```

## 性能特点

### 1. 零成本抽象
- 迭代器在优化构建中会被内联
- 与手写循环性能相当
- 编译时优化消除临时分配

### 2. 惰性求值
- 迭代器适配器不立即执行
- 只在需要时计算
- 避免不必要的中间分配

### 3. 内存效率
- 不创建临时集合（除非调用 collect）
- 流式处理大数据集
- 编译器优化内存布局

## 小结

Rust 循环和迭代器的特点：

- **零成本抽象**：迭代器性能与手写循环相当
- **表达力强**：丰富的迭代器组合子
- **内存安全**：编译时检查防止越界访问
- **函数式风格**：支持链式调用和组合
- **惰性求值**：只在需要时计算

相比 TypeScript 的数组方法，Rust 的迭代器提供了更好的性能和内存安全性，同时保持了函数式编程的表达力！ 