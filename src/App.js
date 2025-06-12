import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import {info} from "./info/Info"; // Assuming App.js is in src, and info is in src/info/Info.js

function App() {
   const websiteUrl = "https://kimana.dev"; // From CNAME
   const webSiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": `${info.firstName} ${info.lastName} Portfolio`,
      "url": websiteUrl
   };

   return (
      <div>
         <Helmet>
            <script type="application/ld+json">
               {JSON.stringify(webSiteSchema)}
            </script>
         </Helmet>
         <BrowserRouter>
            <BaseLayout/>
         </BrowserRouter>
      </div>
   );
}


export default App;
