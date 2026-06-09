import { createContext, useContext, useEffect , useState} from 'react';
import api from '../api.js';


const UserContext = createContext();
export const useUser = ()=> useContext(UserContext);

export const UserProvider = ({children}) =>{
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const frontendUrl = process.env.REACT_APP_FRONTEND_URL;

// Get user data 
    useEffect(()=>{
       
      const fetchUserProfile = async ()=>{
        try {
            const token = localStorage.getItem('accessToken');
            if(!token){
                setLoading(false);
                return ;
            }
            const response = await api.get(`${backendUrl}/api/profile/me`, {
                     headers: {
                        Authorization: `Bearer ${token}`
                    }
            });
            console.log(response);
         
            setUserData(response.data.user);
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
        finally{
            setLoading(false);
        }
      };
      fetchUserProfile();

    }, [backendUrl]);

   // handle logout 
   const handleLogout = async () => {
        try {
        const refreshToken = localStorage.getItem('refreshToken');
        
        if (refreshToken) {
            await api.post(`${backendUrl}/api/auth/logout`, { 
            refreshToken 
            });
        }
        } catch (error) {
        console.error("Logout error:", error);
        } finally {
        
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        
        
        window.location.href = `${frontendUrl}`; 
        }
    };
  
   return (
    <UserContext.Provider value = {{userData, loading, handleLogout}}>
        {children}
    </UserContext.Provider>
   )


}