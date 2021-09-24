import { CHOOSED_CONTRACT } from "../Constants";

const initialState={
     contract:{
        made:[
          {title:"bime",number:1,bands:[
            {type:"select",title:"chand salete?",value:["15sal","20sal"]},
            {type:"jaye khali",title:"mavarde khas",value:["injaneb",{name:"fullname"},"sadere az" , {name:"origin"}]},
            {type:"text",title:"text content",value:null},
            {type:"QA",title:"soale man ?",value:null},
            {type:"SQA",title:"soale kotah ?",value:null},
            {type:"SQA",title:"soale kotah ?",value:null},
            {type:"SQA",title:"soale kotah ?",value:null},
            {type:"SQA",title:"soale kotah ?",value:null},
           
          ]}
        ]
      },
      choosedContract:"قرارداد استخدام کارشناس تولید محتوا",
      suggestedContracts:[
        {title:"تفاهمنامه سهامداران" ,id:1,className:"docs1"},
        {title:"قرارداد همبنیانگذاران" ,id:2,className:"docs2"},
        {title:"قرارداد استخدام برنامه نویس اندروید" ,id:3,className:"docs3"},
        {title:"قرارداد محرمانگی" ,id:4,className:"docs4"},
        {title:"قرارداد استخدام مدیر مارکتینگ" ,id:5,className:"docs5"},
    ]


}



export const contractReducer=(state=initialState,{type,payload})=>{

  switch (type) {
    case CHOOSED_CONTRACT:return{...state,choosedContract:payload}
      
    
  
    default:
      return state
  }
  

}