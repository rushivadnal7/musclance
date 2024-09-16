import React ,{createContext , useState} from 'react'

export const Context = createContext();

const MyContext = ({children}) => {
    const [ WorkOutData, setWorkoutData] = useState({});
    const [ MBresult, setMBresult] = useState(null);

    
  return (
    <Context.Provider value={{WorkOutData , setWorkoutData , MBresult, setMBresult}}>
      {children}
    </Context.Provider>
  )
}

export default MyContext