# Type Narrowing In TypeScript

## What is Type Narrowing?

Type narrowing is the process where TypeScript refines a variable from a broader, more general type(like a union type) to more specific type based on the logic and flow of your code

```ts
function print(value: string | number){
    if(typeof value === "string"){
        value.toUpperCase();
    }
}
```

## Common Narrowing Techniques

| Technique | Best for | Example check |
| --- | --- | --- |
| `typeof` | Primitives | `typeof x === "string"` |
| `instanceof` | Class instances | `x instanceof Error` |
| `in` | Object shapes in unions | `"meow" in x` |


## Practial Example

```ts

//typeof: narrows primitves
function format(value: string | number): string {
    if (typeof value === "string"){
        return value.toUpperCase();
    }
    retrun value.foFixed(2);
}


//instanceof: narrows class instances
function describe(err: Error | string): string {
    if(error instanceof Error){
        return err.message;
    }
    return err;
}


//in: narrows object unions by property
type Cat = {meow: () => void};
type Dog = {bark: () => void};

function speak(pet: Cat | Dog): void {
    if("meow" in pet){
        pet.meow();
    }
    else{
        pet.bark();
    }
}

```