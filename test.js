// // function StringChallenge(str1, str2) {
// //   const a = str1.split("");
// //   const b = str2.split("");
// //   const c = b.filter((e) => );
// //   console.log("c", c);
// //   return str1;
// // }

// // // keep this function call here
// // console.log(StringChallenge("rkqodlw", "world"));

// // function ArrayChallenge(arr) {
// //   // code goes here
// //   const sorted = arr.sort((a, b) => a - b)[arr.length - 1];
// //   console.log(sorted);

// //   const sum = arr.reduce((acc, current) => acc + current);
// //   console.log(sum);

// //   return arr;
// // }

// // // keep this function call here
// // const arr = [4, 6, 23, 10, 1, 3];
// // console.log(ArrayChallenge(arr));

// // const https = require("https");

// // https.get(
// //   "https://coderbyte.com/api/challenges/json/rest-get-simple",
// //   (resp) => {
// //     resp.on("data", (chunk) => {
// //       data + chunk.toString();
// //     });
// //     let data = "";
// //     resp.on("data", (chunk) => {
// //       data = data + chunk.toString();
// //     });

// //     resp.on("end", () => {
// //       const body = JSON.parse(data);
// //       const hobbiesToString = body.hobbies.toString();
// //       const result = hobbiesToString.replace(/[e0laxi9k6]/gi, "");
// //       console.log(result);
// //     });
// //     // parse json data here...
// //   }
// // );

// function StringChallenge(str1, str2) {
//   const arr1 = str1.split("").sort();
//   const arr2 = str2.split("").sort();

//   let result;

//   for (let i = 0; i <= arr1.length; i++) {
//     if (arr1[i] === arr2[i]) {
//       result = true;
//     } else {
//       result = false;
//       break;
//     }
//   }
//   return result;
// }
// console.log(StringChallenge("rkqodlw", "world"));
// console.log(StringChallenge("katas", "steak"));

// function scramble(str1, str2) {
//   const grouped = {};
//   for (const char of str1) {
//     grouped[char] = (grouped[char] || 0) + 1;
//   }
//   for (const char of str2) {
//     if (!grouped[char]) return false;
//     grouped[char]--;
//   }
//   return true;
// }

// // console.log(scramble("rkqodlw", "world"));
// // console.log(scramble("katas", "steak"));

// import React, { useState, useRef } from "react";
// import ReactDOM from "react-dom";

// function PhoneBookForm(props) {
//   const nameInputRef = useRef(null);
//   const lastNameInputRef = useRef(null);
//   const phoneNumberInputRef = useRef(null);

//   const bookSubmitHandler = (e) => {
//     e.preventDefault();
//     const enteredtext = textInputRef.current.value;
//     const obj = {
//       firstName: nameInputRef,
//       lastName: lastNameInputRef,
//       phone: phoneNumberInputRef,
//     };
//     props.onAddBook(obj);
//   };
//   return (
//     <form onSubmit={bookSubmitHandler} style={style.form.container}>
//       <label>First name:</label>
//       <br />
//       <input
//         style={style.form.inputs}
//         className="userFirstname"
//         name="userFirstname"
//         type="text"
//         ref={nameInputRef}
//       />
//       <br />
//       <label>Last name:</label>
//       <br />
//       <input
//         style={style.form.inputs}
//         className="userLastname"
//         name="userLastname"
//         type="text"
//         ref={lastNameInputRef}
//       />
//       <br />
//       <label>Phone:</label>
//       <br />
//       <input
//         style={style.form.inputs}
//         className="userPhone"
//         name="userPhone"
//         type="text"
//         ref={phoneNumberInputRef}
//       />
//       <br />
//       <input
//         style={style.form.submitBtn}
//         className="submitButton"
//         type="submit"
//         value="Add User"
//       />
//     </form>
//   );
// }

// function InformationTable(props) {
//   return (
//     <table style={style.table} className="informationTable">
//       <thead>
//         {props.books.map((book) => (
//           <tr>
//             <th style={style.tableCell}>{book.firstName}</th>
//             <th style={style.tableCell}>{book.lastName}</th>
//             <th style={style.tableCell}>{book.phone}</th>
//           </tr>
//         ))}
//       </thead>
//     </table>
//   );
// }

// function Application(props) {
//   const [books, setBooks] = useState([]);

//   const bookAddHandler = (text) => {
//     setBooks((prevBooks) => [...prevBooks, { text }]);
//   };
//   return (
//     <section>
//       <PhoneBookForm onAddBook={bookAddHandler} />
//       <InformationTable books={books} />
//     </section>
//   );
// }

// ReactDOM.render(<Application />, document.getElementById("root"));

let employees = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 27,
    joinedDate: "December 15, 2017",
  },

  {
    firstName: "Ana",
    lastName: "Rosy",
    age: 25,
    joinedDate: "January 15, 2019",
  },

  {
    firstName: "Zion",
    lastName: "Albert",
    age: 30,
    joinedDate: "February 15, 2011",
  },
];

const a = employees.sort((a, b) => {
  return a.lastName - b.lastName;
});

console.log(a);
