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



//****************************  Tailwind  Padding Margin  ************************************************************************************************* */


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

/************************************************** FLEX BOX ************************************************************************************** */

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


// import QuoteBook1 from "./components/QuoteBook1";
// import QuoteBox2 from "./components/QuoteBox2";


// const quote1 = {
//     "quote": "Be yourself; everyone else is already taken.",
//     "author": "Oscar Wilde",
//     "bio": "Oscar Wilde (1854–1900) was an Irish poet"
// }

// const quote2 = {
//     "quote": "In the middle of every difficulty lies opportunity.",
//     "author": "Albert Einstein",
//     "bio": "Albert Einstein (1879–1955) was a theoretical physicist, widely regarded as one of the greatest minds in science, best known for his theory of relativity."
//   }


// function App() {
//   return (
//     <div className="flex flex-row gap-10">
//       <QuoteBook1 quote = {quote1}/>
      
//       <QuoteBox2 quote = {quote2}/>

//     </div>
//   );
// }

// export default App;


/****************************************************CREATED A MAIN PAGE (WITH HEADER, SEARCH AND FOOTER)***********************************************/

// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Search from "./components/Search";


// function App() {
//   return (
//     <div className="flex flex-col h-screen">
//       <Header />
//       <Search />
//       <Footer />
//     </div>
//   );
// }

// export default App;


/************************************************** STATE Learning************************************************************************************ */
// import State from "./components/State";

// function App() {
//   return (
//     <div className="flex flex-col h-screen items-center justify-center">
//       <State />
//     </div>
//   );
// }

// export default App;



/********************************************Conditional Rendering**************************************************************************************** */


// import Widget1 from "./components/Widget1";
// import Widget2 from "./components/Widget2";
// import Widget3 from "./components/Widget3";

// function App() {
//   return (
//     <div className="justify-center flex h-screen items-center">
//       <Widget1 />
//       <Widget2 />
//       <Widget3 />
//     </div>
//   );
// }

// export default App;


/*************************************************CONDITIONAL RENDERING COUNTER PROGRAM********************************************************************************************* */
// import Counter from "./components/Counter";


// function App() {
//   return (
//     <div className="justify-center flex h-screen items-center">
//       <Counter />
//     </div>
//   );
// }

// export default App;


/************************************************************Switch Button conditional rendering using******************************************************************************** */
// import Switch from "./components/Switch";


// function App() {
//   return (
//     <div className="justify-center flex h-screen items-center">
//       <Switch />
//     </div>
//   );
// }

// export default App;


/***************************************** IMAGE CAROUSEL **************************************************************************************************************************** */
// import { useState } from "react";

// const IMAGE_URL = [
//   "https://images.unsplash.com/photo-1525253086316-d0c936c814f8", 
//   "https://images.unsplash.com/photo-1507149833265-60c372daea22",
//   "https://images.unsplash.com/photo-1517849845537-4d257902454a",
//   "https://images.unsplash.com/photo-1507149833265-60c372daea22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D",
//   "https://images.unsplash.com/photo-1558788353-f76d92427f16"
// ];

// function App() {
//   const [imgIndx, setImgIndx] = useState(0);

//   const prevImage = () => {
//     setImgIndx((prev) => (prev === 0 ? IMAGE_URL.length - 1 : prev - 1));
//   };

//   const nextImage = () => {
//     setImgIndx((prev) => (prev === IMAGE_URL.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <button 
//         className="mr-9 bg-teal-400 p-3 rounded-full hover:bg-teal-500 transition"
//         onClick={prevImage}
//       >
//         <i className="fa-solid fa-less-than font-bold" />
//       </button>

//       <div className="relative flex justify-center">
//         <img
//           src={IMAGE_URL[imgIndx]}
//           alt="Cute Dog"
//           className="rounded-2xl shadow-lg w-[500px] h-[350px] object-cover"
//         />
//         <div className="absolute bottom-3 bg-black/50 text-white px-4 py-1 rounded-lg text-xl font-semibold">
//           Dog {imgIndx + 1}
//         </div>
//       </div>

//       <button 
//         className="ml-9 bg-teal-400 p-3 rounded-full hover:bg-teal-500 transition"
//         onClick={nextImage}
//       >
//         <i className="fa-solid fa-greater-than" />
//       </button>
//     </div>
//   );
// }

// export default App;


/**************************************IMAGE CAROUSEL WITH CONDITIONAL RENDERING************************************************************************************************************************** */
// import { useState } from "react";
// import CatCard from "./components/CatCard";
// import NavButton from "./components/NavButton";
// import CATS from "./data/cats";

// function App() {
//   const [catIndex, setCatIndex] = useState(3);
//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <NavButton 
//         icon="fa-caret-left"
//         show = {catIndex > 0}
//         onClick={() => setCatIndex(catIndex - 1)}
//       />
      
//       <CatCard cats={CATS[catIndex]} />
      
//       <NavButton 
//           icon="fa-caret-right"
//           show={catIndex < CATS.length - 1}
//           onClick={() => setCatIndex(catIndex + 1)}
//       />

//     </div>
//   );
// }

// export default App;