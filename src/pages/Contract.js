import React  from 'react'
import ContractContext from '../components/common/contractcontext/ContractContext'
import ContractComponents from '../components/contract/ContractComponents'


const Contract = () => {
    return (
        <ContractContext>
            <ContractComponents/>
        </ContractContext>
    )
    
    
}

export default Contract
