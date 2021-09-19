import React,{useContext} from 'react'
import { ContextForContract } from '../common/contractcontext/ContractContext';
import AdjustContract from './adjustContract/AdjustContract';
import SmartAdjustment from './smart adjustment/SmartAdjustment';

const ContractComponents = () => {
  const {contractStep}=useContext(ContextForContract)

    switch (contractStep) {
        case 1:
          return <SmartAdjustment />;
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
