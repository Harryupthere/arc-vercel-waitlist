 import React from 'react'
 import { BrowserRouter as Router, Routes, Route ,Navigate} from "react-router-dom";
 import Home from '../pages/home';
 import WaitlistPage from '../pages/home2';
 import Home3 from '../pages/home3';
 import Home4 from '../pages/home4';

import PrivacyPolicy from '../pages/privacyPolicy';
import TermsAndConditions from '../pages/TermsAndConditions';
import Waitlist4Success from '../pages/waitlist4success';
import Tnc from '../pages/tnc'
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
        {/* <Route path="/" element={<Navigate to="/" />} /> */}

        {/* Waitlist page at /waitlist */}
        {/* <Route path="/waitlist" element={<Home3 />} /> */}
        <Route path="/" element={<Home4 />} />
        <Route path="/success" element={<Waitlist4Success />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsAndConditions />} />
        <Route path="/terms-and-condition" element={<Tnc />} />




        {/* Home page at /home (if needed) */}
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </Router>
  );
};

export default RoutesMain