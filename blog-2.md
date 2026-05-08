
When working on large-scale TypeScript applications, writing the same properties again and again can make the code difficult to maintain. This is where TypeScript utility types like Pick and Omit become very useful. They help developers create smaller, specialized versions of a master interface without duplicating code, which keeps the project DRY (Don't Repeat Yourself).

Suppose we have a main interface called User:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
```

Instead of creating separate interfaces manually for every situation, we can use Pick and Omit.

## Using Pick

Pick allows us to select only specific properties from an existing interface.

```typescript
type UpdateUser = Pick<User, "name" | "email">;
```

Here, UpdateUser contains only the name and email properties from User.

```typescript
{
  name: string;
  email: string;
}
```

This is useful when updating user information because we only need the fields that can be edited.

## Using Omit

Omit does the opposite. It removes unwanted properties from an interface.

```typescript
type UserResponse = Omit<User, "password">;
```

Now UserResponse contains all properties except password.

```typescript
{
  id: number;
  name: string;
  email: string;
}
```

This is commonly used when sending user data to the frontend because sensitive information like passwords should not be exposed.

## How Pick and Omit Prevent Code Duplication

Without Pick and Omit, developers would need to create multiple interfaces manually:

```typescript
interface UpdateUser {
  name: string;
  email: string;
}

interface UserResponse {
  id: number;
  name: string;
  email: string;
}
```

This creates repeated code. If the main User interface changes later, developers must update every related interface manually, which increases maintenance cost and the chance of errors.

By using Pick and Omit, all specialized types stay connected to the master interface. Any change in the original interface is automatically reflected everywhere. This improves code reusability, readability, and maintainability.

Pick and Omit utility types help TypeScript developers create reusable and maintainable code by generating smaller "slices" of a master interface. They reduce repetition, simplify large codebases, and follow the DRY (Don't Repeat Yourself) principle, making applications easier to manage and scale.