import { CHOOSED_CONTRACT } from "../Constants"


export const choosedContractAction=(contractName)=>{
    return {
        type:CHOOSED_CONTRACT,
        payload:contractName
    }

}