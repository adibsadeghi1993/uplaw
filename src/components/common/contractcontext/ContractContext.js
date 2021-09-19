import React,{useState} from 'react'

export const ContextForContract = React.createContext();

const ContractContext = ({children}) => {
    const [contractStep, setContractStep] = useState(2);
    return (
        <ContextForContract.Provider value={{
            contractStep,
            setContractStep
        }}>
            {children}
        </ContextForContract.Provider>
    )
}

export default ContractContext
