import { Route, Routes } from "react-router-dom";
import Main from './components/screens/main'

export default function App(){
  return(
    <Routes>
        <Route path="/" element={<Main/>} />
    </Routes>
    )
}



