import React,{useState,useEffect,useRef} from 'react'
import styles from "./searchSpecialTeam.module.css"
import axios from "axios"
import arrowImage from "../../../asstes/blue arrow.svg"
import searchImage from "../../../asstes/serchIcon.svg"

const SearchSpecialTeam = ({request,setRequest}) => {

    const [input, setInput] = useState("");

    const [books, setBooks] = useState("");
    const [filteredBooks, setFilteredBooks] = useState([]);
  
    
    const inputRef = useRef();
      const handleChange = (e) => {
        setInput(e.target.value);
     
        console.log(input)
      };
    
      
      const filterHandler = (items) => {
        const filteredData = items.filter((item) => {
          return item.volumeInfo.title.toLowerCase().includes(input.toLowerCase())
        });
        setFilteredBooks(filteredData);
      };
    
      console.log(filteredBooks);
    
      useEffect(() => {
        setTimeout(() => {
          if (input === inputRef.current.value && input.length >= 3) {
            axios
              .get(
                `https://www.googleapis.com/books/v1/volumes?country
                =US&projection=lite&printType=books&key=AIzaSyD6SlU9JUr7Z
                -3SOOy0TfZTJtqv_EEqfZY&q=intitle:${input}&startIndex=0&maxResults=5`
              )
              .then((res) => {
                console.log(res.data.items);
                setBooks(res.data.items);
                // filterHandler(books)
              });
          }
        }, 500);
      }, [input, inputRef]);
    
      useEffect(() => {
        if (books) {
          filterHandler(books);
        }
      }, [books]);
    
    
    
    
    const requestHandler=(item)=>{
     setRequest(item)
     console.log(item)
    }
    return (
        <>
        
      <div className={styles.search} >
        <input
          type="text"
          placeholder="تیم مورد نظر را در آپلا جستجو کنید."
          value={input}
          onChange={handleChange}
          className="input"
          ref={inputRef}
        />
        <div className={styles.search_icon}>
        <img src={searchImage} alt="جستجو"/>
        </div>
      </div>
      {filteredBooks.length !==0 ?
      <section className={styles.all_team}>
          {filteredBooks.map((item,index)=>{
              return <div key={index} className={styles.each_team}>
                 <p className={request?.volumeInfo.title===item.volumeInfo.title?styles.activeRequest:null}>{item.volumeInfo.title}</p>
                <button onClick={()=>requestHandler(item)}><span>درخواست عضویت</span><img src={arrowImage} alt="درخواست عضویت"/></button>
              </div>

          })}
      </section>
      
      :null}
            
        </>
    )
}

export default SearchSpecialTeam
