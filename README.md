---

# Merge Function

This project provides a TypeScript implementation of a function called `merge`, which merges three sorted collections into one sorted collection. The function signature is as follows:

```typescript
merge(collection1: number[], collection2: number[], collection3: number[]): number[]
```

## Getting Started

To use this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd merge-function
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. If you make changes to `merge.ts` or `merge.test.ts`, compile the TypeScript files by running:

   ```bash
   npx tsc --init
   npx tsc
   ```

## Running Tests

This project uses Jest for unit testing. You can run the tests with the following command:

```bash
npm test
```

## Test Cases

The test cases for the `merge` function can be found in the `merge.test.ts` file. These test cases cover scenarios such as merging three sorted collections into one sorted collection, handling empty collections, and handling duplicate values correctly.
