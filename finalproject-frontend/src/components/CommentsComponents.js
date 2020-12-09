// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function CommentsComponent() {
//   const [POSTData, setPOSTData] = useState([]);
//   useEffect(() => {
//     axios
//       // .get(`https://stormy-temple-10357.herokuapp.com/findCat/bracelet`)
//       .get(`http://localhost:4000/findComment/`)

//       .then(function (response) {
//         if (response.data) {
//           setPOSTData(response.data);

//           console.log(response.data);
//         }
//       })
//       .catch(function (error) {
//         console.log("error", error);
//       });
//   }, []);

//   return (
//     <div>
//       <div className="postWrap">
//         {POSTData.map((item, i) => (
//           <div className="Item" key={i}>
//             <p className="Name">{item.name}</p>
//             <div className="photoContainer">
//               <img className="Photo" src={item.photo} />
//             </div>
//             <p className="Text">{item.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CommentsComponent;
