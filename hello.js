function printHelloName(name = "YourName") {
    for (let i = 0; i < 5; i++) {
        console.log(`Hello ${name}`);
    }
}

// Bonus: Check for additional arguments
const args = process.argv.slice(2);
const name = args.length > 0 ? args[0] : "YourName";

printHelloName(name);

