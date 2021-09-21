import React,{useContext} from 'react'
import { UserInfoContext } from '../common/contextInfo/ContextInfo';
import AdjustContract from './adjustContract/AdjustContract';
import ContractDocument from './contractDoucument/ContractDocument';
import SmartAdjustment from './smart adjustment/SmartAdjustment';

const ContractComponents = () => {
  const {contractStep}=useContext(UserInfoContext)

    switch (contractStep) {
        case 1:
          return <ContractDocument />;
        case 2:
          return <AdjustContract />;
        case 3:
          return <SmartAdjustment />;
        case 4:
          return <SmartAdjustment/>;
    
        default:
          break;
      }
    return (
        <div>
            
        </div>
    )
}

export default ContractComponents
