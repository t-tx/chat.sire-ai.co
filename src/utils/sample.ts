import { User } from "@/dto/user";

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Caroline" },
  { id: 104, name: "Dave" },
];

let firstName : string = "Trung";
let lastName = "Truong";
const json = JSON.parse("55");
console.log(typeof json);

let w: unknown = 1; 
w = "string"; // no error

w = { 
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  } 
} as { runANonExistentMethod: () => number }

// How can we avoid the error for the code commented out below when we don't know the type? 
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'. 

if(typeof w === 'object' && w !== null) {
  console.log((w as { runANonExistentMethod: Function }).runANonExistentMethod()); 
} 