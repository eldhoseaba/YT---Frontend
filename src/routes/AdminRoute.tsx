import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayoutPage from "../pages/HomeLayoutPage";
// import Dashboard from "../pages/element/Dashboard";
// import Payment from "../pages/element/Payment";
// import Channel from "../pages/element/Channel";
// import Invoice from "../pages/element/Invoice";
// import Reports from "../pages/element/Reports";
// import Settings from "../pages/element/Settings";
// import Upload from "../components/upload/Upload";

// Lazy-loaded components
const Dashboard = lazy(() => import("../pages/element/Dashboard"));
const Payment = lazy(() => import("../pages/element/Payment"));
const Channel = lazy(() => import("../pages/element/Channel"));
const AddChannel = lazy(() => import("../components/channels/AddChannel"));

const Invoice = lazy(() => import("../pages/element/Invoice"));
const Reports = lazy(() => import("../pages/element/Reports"));
const Settings = lazy(() => import("../pages/element/Settings"));
const Upload = lazy(() => import("../components/upload/Upload"));

const AdminRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<HomeLayoutPage />}>

        <Route index element={<Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense>} />
        <Route path="upload" element={<Suspense fallback={<div>Loading...</div>}><Upload /></Suspense>} />
        <Route path="channels" element={<Suspense fallback={<div>Loading...</div>}><Channel /></Suspense>} />
        <Route path="channels/add-channel" element={<Suspense fallback={<div>Loading...</div>}><AddChannel /></Suspense>} />

        <Route path="invoice" element={<Suspense fallback={<div>Loading...</div>}><Invoice /></Suspense>} />
        <Route path="payment" element={<Suspense fallback={<div>Loading...</div>}><Payment /></Suspense>} />
        <Route path="report" element={<Suspense fallback={<div>Loading...</div>}><Reports /></Suspense>} />
        <Route path="settings" element={<Suspense fallback={<div>Loading...</div>}><Settings /></Suspense>} />
       
        {/* <Route index element={<Dashboard />} /> 

        <Route path="upload" element={<Upload />} />
        
        <Route path="channel" element={<Channel />} />
        
        <Route path="invoice" element={<Invoice />} />
        
        <Route path="payment" element={<Payment />} />
        
        <Route path="report" element={<Reports />} />
        
        <Route path="settings" element={<Settings />} /> */}

      </Route>
    </Routes>
  );
};

export default AdminRoute;