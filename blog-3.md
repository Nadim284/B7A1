TypeScript Generics help developers create reusable functions, interfaces, and components without losing type safety.
Instead of writing separate code for every data type, Generics allow one piece of code to work with multiple types while still keeping strict typing.

Generics use a placeholder type such as T.

Example Without Generic

```typescript
function identity(value: any): any {
    return value;
}

const result = identity("Hello");

```

Here, any removes type safety. TypeScript cannot understand the actual type of result.

Example With Generic

```typescript
function identity<T>(value: T): T {
    return value;
}

const result = identity<string>("Hello");

Now TypeScript knows that result is a string.

result.toUpperCase();

This works safely because the type is strictly maintained.

Generic Array Example
function getFirstItem<T>(items: T[]): T {
    return items[0];
}

const firstNumber = getFirstItem([1, 2, 3]);
const firstString = getFirstItem(["A", "B", "C"]);
```

The same function works for both number and string arrays.

Generic Interface Example

```typescript
interface ApiResponse<T> {
    success: boolean;
    data: T;
}

const user: ApiResponse<string> = {
    success: true,
    data: "Mahfuj"
};
```

Here, the interface can handle different data types while keeping strong type safety.

`Generics` make TypeScript code reusable, scalable, and type-safe. They help developers write cleaner code that can work with different data structures without losing strict typing.