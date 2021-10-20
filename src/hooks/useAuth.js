

import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider"

const useAuth = () => {
    return useContext(AuthContext)
}
export default useAuth;





// import { useContext } from "react";
// import { AuthContext } from "../Context/AuthProvider"

// const useauth = () => {
//     return useContext(AuthContext)
// }
// export default useauth;