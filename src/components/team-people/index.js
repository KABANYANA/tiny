// import React, { useState } from 'react';


// const TeamC= ({ Team }) => {
//   const [translateX, setTranslateX] = useState(0);

//   const goToNextSlide = () => {
//     const containerWidth = document.querySelector('.team-container').offsetWidth;
//     const numContainers = Team.length;
//     const maxTranslateX = -(containerWidth * (numContainers - 1));

//     if (translateX === maxTranslateX) {
//       setTranslateX(0);
//     } else {
//       setTranslateX(translateX - containerWidth);
//     }
//   };

//   return (
//     <div className="team">
//       <div
//         className="team-content"
//         style={{
//           transform: `translateX(${translateX}px)`, // Adjust as needed
//         }}
//       >
//         {Team.map((team, index) => (
//           <div key={index} className="team-container">
//             <div>
//               <img src={team.image} alt={team.name} className="img-menu" />
//             </div>
//             <div>
//               <h1>{team.name}</h1>
//               <p>{team.linkedin}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button onClick={goToNextSlide}>Next</button> {/* Replace with your next icon */}
//     </div>
//   );
// };

// export default TeamC;
