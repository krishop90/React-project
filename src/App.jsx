function App() {
  return (
    <div>
      
    </div>
  );
}

export default App;


/**********************************************     PROPS    ******************************************************************* */
// const Message = (props) => {

//   return <div style={{background: props.bgColor}}>
//     {"hi this is krish"}
//   </div>
// }


// function App() {
//   return (
//     <div>
//       <Message text="Hello, World!" bgColor="orange" />
//       <Message text="Hi" bgColor="white" />
//       <Message text="bye" bgColor="green" />
//     </div>
//   );
// }




// const Box = (props) => {

//   return <div style={{
//     backgroundColor: props.bgColor,
//     color: props.fontColor,
//     fontSize : props.large ? "40px" : "20px"
//   }}>
//     {props.label}
//   </div>
// }


// function App() {
//   return (
//     <div>
//       <Box 
//         bgColor="lavender" 
//         fontColor="purple"
//         label="krish here"
//         large = {true}
//       />
//     </div>
//   );
// }


// import MyComp from "./components/MyComp";
 
// function App() {
//   return (
//     <div>
//       <MyComp bgColor="lavender" height="100">
//         Krish
//       </MyComp>
//       <MyComp bgColor="lightblue" height="90">
//         Krish 2
//       </MyComp>
//     </div>
//   );
// }


//***********************************************  Tailwinid  **************************************************************** */

// border-x-4 border-y-4 for horizontal and vertical borders
//border-l-4 border-r-4 border-t-4 border-b-4 to give border in any direction


// function App() {
//   return (
//     <div>
//       <div className="text-blue-900 text-xl bg-red-400">
//         Krish 1
//       </div> 
//       <div className="text-slate-500 text-l border-black bg-amber-200 border-4"> 
//         Krish 2                                                                        
//       </div>
//       <div className="text-purple-400 bg-amber-100">
//         <div className="text-l  bg-rose-300 border-y-3 border-white">Krish 3</div>
//         <div className="text-xl bg-rose-300 border-l-3 border-black">Krish 4</div>
//       </div>
//     </div>
//   );
// }

// export default App;



//****************************  Tailwind  Padding Margin  ******************************************************** */


// Padding is used to create space inside an element, between the content and the border.
// Margin is used to create space outside an element, between the element and other elements around it.


//<div className="border-4 border-black bg-amber-50 text-black p-2 m-2">Krish</div>
// <div className="border-4 border-black bg-amber-50 text-black px-2 m-2">Krish 2</div>


// function App() {
//   return (
//     <div>
//       <div>
//         <button className="border-2 border-red-500 p-2 m-3 rounded-md">
//           Click
//         </button>
//         <button className="border-3 border-blue-900 px-8 p-2 m-3 rounded-md bg-rose-300 text-blue-600">
//           Second
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;


// import FancyButton from "./components/FancyButton";
// function App() {
//   return (
//     <div>
//       <FancyButton large>
//         Click Me
//       </FancyButton>
//     </div>
//   );
// }

// export default App;

/********************************** FLEX BOX ********************************************************** */

// function App() {
//   return (
//     <div className="flex p-20 px-80 border-2 border-amber-300 rounded-md">
//       <div className="justify-between p-10 m-10 border-2 border-amber-500 rounded-md"></div>
//       <div className="justify-between p-10 m-10 border-2 border-amber-500 rounded-md"></div>
//       <div className="justify-between p-10 m-10 border-2 border-amber-500 rounded-md"></div>
//     </div>
//   );
// }

// export default App;

