export const articles = [
  {
    id: "tcp-ip-abstractions",
    title: "TCP/IP Abstractions: Demystifying the Network Layer",
    description: "An in-depth look at how packets navigate through hostile networks and the brilliant algorithms that ensure reliability.",
    date: "April 2, 2026",
    tags: ["protocols", "networking", "deep-dive", "algorithms", "architecture"],
    content: `
# TCP/IP Abstractions: Demystifying the Network Layer

When examining the architecture of modern networks, we often overlook the elegant dance happening beneath the surface. The Transmission Control Protocol (TCP) and Internet Protocol (IP) work in tandem to guarantee delivery across the hostile, unpredictable environment of the global internet.

## The Problem of Uncertainty

Networks drop packets. It's not a possibility; it's a certainty. The genius of TCP lies in masking this unreliability from the application layer.

\`\`\`javascript
// A simple conceptual model of a TCP acknowledgment loop
function transmit(packet) {
  let ackReceived = false;
  
  while (!ackReceived) {
    sendPacket(packet);
    ackReceived = waitForAck(timeout = 500); // 500ms timeout
    if (!ackReceived) {
      console.log("Timeout! Retransmitting...");
    }
  }
}
\`\`\`

## Sliding Windows

Instead of waiting for an acknowledgment (ACK) for every single packet, TCP utilizes a sliding window protocol. This keeps the pipe full and maximizes throughput.

> The window size dictates how many bytes can be in-flight before requiring an acknowledgment.

### TCP Congestion Control Algorithms
1. **Slow Start:** Exponential growth of the congestion window.
2. **Congestion Avoidance:** Linear growth to Probe for bandwidth.
3. **Fast Retransmit:** Relying on duplicate ACKs to detect loss early.

## Conclusion
TCP/IP models are foundational to computer science. Understanding them deeply separates superficial web developers from true engineers.
    `
  },
  {
    id: "bloom-filters-go",
    title: "Probabilistic Data Structures: Bloom Filters in Go",
    description: "How to save gigabytes of memory using math and probability when checking for set membership.",
    date: "March 28, 2026",
    tags: ["data-structures", "algorithms", "golang"],
    content: `
# Probabilistic Data Structures: Bloom Filters

A Bloom filter is a space-efficient probabilistic data structure used to test whether an element is a member of a set.

## False Positives vs False Negatives

The defining characteristic of a Bloom filter is this:
* **False positives are possible.** (It might say an item is in the set when it's not)
* **False negatives are impossible.** (If it says an item is not in the set, it is 100% not there)

### Implementation Sketch
\`\`\`go
type BloomFilter struct {
    bitset []bool
    hashes []func(string) uint64
}

func (bf *BloomFilter) Add(item string) {
    for _, hashFunc := range bf.hashes {
        index := hashFunc(item) % uint64(len(bf.bitset))
        bf.bitset[index] = true
    }
}

func (bf *BloomFilter) MightContain(item string) bool {
    for _, hashFunc := range bf.hashes {
        index := hashFunc(item) % uint64(len(bf.bitset))
        if !bf.bitset[index] {
            return false // Definitely not in the set
        }
    }
    return true // Might be in the set
}
\`\`\`

By accepting a small margin of error, we can reduce our memory footprint drastically!
    `
  },
  {
    id: "solid-principles-react",
    title: "Applying SOLID Principles in React Architectures",
    description: "Go beyond component spaghetti by using decades-old OOP principles in a functional frontend world.",
    date: "April 3, 2026",
    tags: ["react", "architecture", "solid"],
    content: `
# Applying SOLID Principles in React

React developers often fall into the trap of giant, monolithic components. But what happens if we apply Robert C. Martin's SOLID principles to a component-based architecture?

## Single Responsibility Principle (SRP)
A component should only have one reason to change. If your component is handling data fetching, form validation, and complex UI rendering, you are violating SRP.

\`\`\`javascript
// Bad: Doing too much
function UserProfile() {
  const [data, setData] = useState(null);
  useEffect(() => { fetch('/api/user').then(res => res.json()).then(setData) }, []);
  // ... renders complex UI
}

// Good: Custom Hook for fetching, pure component for rendering
function useUser() { /* fetching logic */ }
function UserProfileView({ user }) { /* rendering only */ }
\`\`\`

## Open/Closed Principle
Components should be open for extension but closed for modification. Use composition (\`children\`) instead of adding endless props.

By embracing these principles, we create codebases that scale and resist rotting.
    `
  },
  {
    id: "rust-memory-model",
    title: "Understanding the Rust Memory Model",
    description: "Why the borrow checker is your best friend, even when it feels like your worst enemy.",
    date: "April 4, 2026",
    tags: ["rust", "memory", "systems"],
    content: `
# The Rust Memory Model

In languages like C, you have manual control but footguns everywhere. In languages like Java or Go, the Garbage Collector holds your hand but introduces unpredictable latency. Rust offers a third path: Ownership.

## The Three Rules of Ownership
1. Each value in Rust has a variable that’s called its **owner**.
2. There can only be **one owner at a time**.
3. When the owner goes out of scope, the value will be dropped.

\`\`\`rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1; // s1 is MOVED to s2.

    // println!("{}, world!", s1); // Error: value borrowed here after move
    println!("{}, world!", s2); // Works!
}
\`\`\`

## Borrowing
To avoid moving values constantly, Rust allows references. You can have either one mutable reference (\`&mut T\`) OR any number of immutable references (\`&T\`). This completely eliminates data races at compile time!
    `
  },
  {
    id: "system-design-cache",
    title: "System Design: The Art of Caching",
    description: "Strategies for keeping data close to the CPU and optimizing high-throughput distributed systems.",
    date: "April 5, 2026",
    tags: ["system-design", "performance", "caching", "architecture", "algorithms"],
    content: `
# System Design: The Art of Caching

When a system scales, the database quickly becomes the bottleneck. Caching is the ultimate band-aid, but it introduces the hardest problem in computer science: Cache Invalidation.

## Where to Cache?

You can layer caches at almost every stage of a system request:
* **Client-side:** Browser local storage or HTTP Cache-Control.
* **CDN (Content Delivery Network):** Caching static assets at edge nodes closer to the user.
* **API Gateway / Proxy:** Varnish or Nginx caching full HTTP responses.
* **Application Level:** Memcached or Redis storing expensive database query results.

## Eviction Policies

When your cache is full, how do you decide what to throw away?
* **LRU (Least Recently Used):** The standard default. Throw away what hasn't been accessed in a while.
* **LFU (Least Frequently Used):** Throw away items that aren't used often, even if they were used recently.

\`\`\`javascript
// A simple LRU implementation concept uses a Doubly Linked List + HashMap
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // Map in JS preserves insertion order, serving as a simple LRU
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value); // move to back (most recently used)
    return value;
  }
}
\`\`\`
    `
  }
];
