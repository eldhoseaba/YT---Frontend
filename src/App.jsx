import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AdminRoute from "./routes/AdminRoute"


function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AdminRoute />} />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  )
}

export default App
