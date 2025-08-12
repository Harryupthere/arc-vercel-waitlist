 import React from 'react'
 import { BrowserRouter as Router, Routes, Route ,Navigate} from "react-router-dom";
 import Home from '../pages/home';
 import WaitlistPage from '../pages/home2';
 import Home3 from '../pages/home3';
// const RoutesMain = () => {
//   return (
//     <Router>
//       <Routes>
//           <Route index element={<WaitlistPage />} />
//       </Routes>
//     </Router>
//   )
// }

// export default RoutesMain

const RoutesMain = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect root "/" to "/waitlist" */}
        <Route path="/" element={<Navigate to="/waitlist" />} />

        {/* Waitlist page at /waitlist */}
        <Route path="/waitlist" element={<Home3 />} />

        {/* Home page at /home (if needed) */}
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </Router>
  );
};

export default RoutesMain