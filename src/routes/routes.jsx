 import React from 'react'
 import { BrowserRouter as Router, Routes, Route ,Navigate} from "react-router-dom";
 import Home from '../pages/home';
 import WaitlistPage from '../pages/home2';
 import Home3 from '../pages/home3';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsAndConditions from '../pages/TermsAndConditions';
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
        {/* <Route path="/" element={<Navigate to="/waitlist" />} /> */}

        {/* Waitlist page at /waitlist */}
        <Route path="/waitlist" element={<Home3 />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsAndConditions />} />



        {/* Home page at /home (if needed) */}
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </Router>
  );
};

export default RoutesMain