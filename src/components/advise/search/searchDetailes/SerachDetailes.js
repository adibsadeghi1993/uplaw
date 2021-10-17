import React, { useState,useEffect,useRef } from "react";
import FingerImgae from "../../../common/fingerImgae/FingerImgae";
import axios from "axios"
import arrowImage from "../../../../asstes/blue arrow.svg"
import searchImage from "../../../../asstes/serchIcon.svg"
import styles from "./searchDetailes.module.css"

const SerachDetailes = () => {
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
    }, 400);
  }, [input, inputRef]);

  useEffect(() => {
    if (books) {
      filterHandler(books);
    }
  }, [books]);








  return (
    <div className={styles.search_special_team}>
      <h3>/تیم های من/ساخت تیم جدید</h3>
      <div className={styles.finger}>
      <FingerImgae>
        تو این صفحه میتونی تیم هایی که توشون عضو هستی یا داری رو ببینی.میتونی
        اون هارو مدیریت کنی یا تیم جدید ایجاد کنی.
      </FingerImgae>
      </div>
      <section className={styles.teams}>
        <div>
          <p className={styles.selectedTeam}>تیم آپلا</p>
          <p className={styles.myTeam}> تیم های من</p>
        </div>
        <div>
          <p className={styles.specialTeam}>به دنبال تیم خاصی میگردم</p>
        </div>
      </section>

     
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
                 <p>{item.volumeInfo.title}</p>
                <button><span>درخواست عضویت</span><img src={arrowImage} alt="درخواست عضویت"/></button>
              </div>

          })}
      </section>
      
      :null}
    </div>
  );
};

export default SerachDetailes;
