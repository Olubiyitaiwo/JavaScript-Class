import React, { useState } from 'react'
import styles from "./BookList.module.css"

export const BookList = () => {

    const bookList = [
        "Name of the Wind",
        "The Wise Man's Fear",
        "Kafka on the Shore",
        "The Master and the Margarita"
    ];

    // const deleteHandler = (item) =>{
    //     bookList.filter((book)=> book !== item)
    // }

    const[] = useState(bookList)

    return (

  	<div id={styles.wrapper}>
	    <header>
	    	<div id={styles.pageBanner}>
	    		<h1 className={styles.title}> Book Collections</h1>
          <p>Books</p>
          <form id={styles.bookSearch}>
            <input type="text" placeholder="Search-books..." />
          </form>
	    	</div>
	    </header>
	    <div id={styles.booklist}>
	    	<h2 className={styles.title}>Books to Read</h2>
	    	<ul>
	    		{/* <li>
	    			<span className={styles.name}>Name of the Wind</span>
	    			<span className={styles.delete}>delete</span>
	    		</li>
	    		<li>
	    			<span className={styles.name}>The Wise Man's Fear</span>
	    			<span className={styles.delete}>delete</span>
	    		</li>
	    		<li>
	    			<span className={styles.name}>Kafka on the Shore</span>
	    			<span className={styles.delete}>delete</span>
	    		</li>
	    		<li>
	    			<span className={styles.name}>The Master and the Margarita</span>
	    			<span className={styles.delete}>delete</span>
	    		</li> */}
                {
                    bookList.map((book, index)=>(
                        <li key= {index}>
                            <span className={styles.name}>{book}</span>
                            <span className={styles.delete} onClick={()=> deleteHandler(book)}>delete</span>
                        </li>
                    ))
                }
	    	</ul>
	    </div>
	    <form id={styles.addBook}>
	    	<input type="text" placeholder="Add a book..." />
	    	<button>Add</button>
	    </form>

    </div>
    )
}

export default BookList