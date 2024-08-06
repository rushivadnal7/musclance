import React ,{createContext , useState} from 'react'

export const Context = createContext();

const MyContext = ({children}) => {
    const [ WorkOutData, setWorkoutData] = useState({});

    
  return (
    <Context.Provider value={{WorkOutData , setWorkoutData}}>
      {children}
    </Context.Provider>
  )
}

export default MyContext