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
    ],
    allContracts:[
      {name:"تفاهمنامه سهامداران",id:1, className:"contract",},
      {name:"قرارداد همبنیانگذاران" ,id:2,className:"contract"},
      {name:"قرارداد استخدام برنامه نویس اندروید" ,id:3,className:"contract"},
      {name:"قرارداد محرمانگی",id:4, className:"contract"},
      {name:"قرارداد استخدام مدیر مارکتینگ" ,id:5,className:"contract"},
      {name:"قرارداد استخدام برنامه نویس موبایل" ,id:6,className:"contract"},
      {name:"قرارداد استخدام مدیر محصول",id:7, className:"contract"},
      {name:"قرارداد استخدام کارشناس تولید محتوا" ,id:8,className:"contract"},
      {name:"همکاری با سئوکار",id:4, className:"contract"}
       
  ],

  myContract:[
    {id:1,contractName:"تفاهمنامه سهامداران"},
    {id:2,contractName:"قرارداد استخدام برنامه نویس"},
    {id:3,contractName:"اساسنامه شرکت آپلا"},
    {id:4,contractName:"اساسنامه شرکت آپلا"},
  
  ]


}



export const contractReducer=(state=initialState,{type,payload})=>{

  switch (type) {
    case CHOOSED_CONTRACT:return{...state,choosedContract:payload}
      
    
  
    default:
      return state
  }
  

}