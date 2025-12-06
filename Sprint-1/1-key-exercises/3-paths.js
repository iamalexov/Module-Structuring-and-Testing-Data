// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
const lastSlashIndex = filePath.lastIndexOf("/");
const base = filePath.slice(lastSlashIndex + 1);
console.log(`The base part of ${filePath} is ${base}`)

// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable

const firstPath = "/home/user/dir/file.txt";
const firstPartIndex = firstPath.lastIndexOf("/");
const dir = firstPath.slice(0, firstPartIndex);
console.log(`The dir part of ${firstPath} is ${dir}`)

/* const ext = ;*/ 
const randomPath = "/home/user/dir/file.txt";
const dotIndex = randomPath.lastIndexOf(".");
const ext = randomPath.slice(dotIndex);
console.log(`The ext part of ${randomPath} is ${ext}`)


// https://www.google.com/search?q=slice+mdn