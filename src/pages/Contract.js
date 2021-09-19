import React,{useContext} from 'react'
import { UserInfoContext } from '../components/common/contextInfo/ContextInfo'
import AdjustContract from '../components/contract/adjustContract/AdjustContract'
import SmartAdjustment from '../components/contract/smart adjustment/SmartAdjustment'

const Contract = () => {
    const {contractStep} = useContext(UserInfoContext)
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
    
}

export default Contract
