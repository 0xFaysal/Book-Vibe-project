import { useEffect, useRef, useState } from "react";
import "./listedbook.css";
import { getItem } from "../../utility/localStorage";
import { useLoaderData } from "react-router-dom";
import BookItemCard from "./BookItemCard";
import sortList from "./../../utility/sortList";

function ListedBooks() {
    const data = useLoaderData();
    const [activeTab, setActiveTab] = useState("read-books");
    const [bookListId, setBookListId] = useState(
        getItem("readBookListId") || []
    );
    const [wishlistBookId, setWishlistBookId] = useState(
        getItem("wishlistBookListId") || []
    );
    const [showData, setShowData] = useState([]);
    const [sortType, setSortType] = useState(""); // ["rating", "totalPages", "yearOfPublishing"
    const refReadBtn = useRef(null);
    const refWishlistBtn = useRef(null);

    useEffect(() => {
        const _showData = data.filter((book) => {
            return bookListId.includes(book.bookId);
        });
        setShowData(_showData);
    }, []);

    useEffect(() => {}, [sortType]);

    useEffect(() => {
        setWishlistBookId(getItem("wishlistBookListId"));
        setBookListId(getItem("readBookListId"));

        if (activeTab === "read-books") {
            refReadBtn.current.classList.add("active-bar");
            refWishlistBtn.current.classList.remove("active-bar");
        } else {
            refWishlistBtn.current.classList.add("active-bar");
            refReadBtn.current.classList.remove("active-bar");
        }
    }, [activeTab]);

    const handleReadBtn = () => {
        setActiveTab("read-books");
        const _showData = data.filter((book) => {
            return bookListId.includes(book.bookId);
        });
        setShowData(_showData);
    };

    const handleWishlistBtn = () => {
        setActiveTab("wishlist-books");
        const _showData = data.filter((book) => {
            return wishlistBookId.includes(book.bookId);
        });
        setShowData(_showData);
    };

    const handleRatingBtnClick = () => {
        const sortData = sortList(showData, "rating");
        setShowData(sortData);
        setSortType("rating");
    };
    const handleNumberOfPagesBtnClick = () => {
        const sortData = sortList(showData, "totalPages");
        setShowData(sortData);
        setSortType("totalPages");
    };
    const handlePublisherYearBtnClick = () => {
        const sortData = sortList(showData, "yearOfPublishing");
        setShowData(sortData);
        setSortType("yearOfPublishing");
    };

    return (
        <>
            <section className='mt-8'>
                <div className='bg-black-5 rounded-2xl py-9 text-3xl font-bold text-center text-black-full'>
                    <p>Books</p>
                </div>
                <div className='flex justify-center mt-8'>
                    <div className='dropdown relative'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn-primary m-1 flex gap-4'>
                            <p>Sort By</p>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'>
                                <path
                                    d='M19.5 8.25L12 15.75L4.5 8.25'
                                    stroke='white'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className='dropdown-content z-[1] menu p-2 shadow rounded-box w-44 bg-stone-100 absolute'>
                            <li onClick={handleRatingBtnClick}>
                                <a>Rating</a>
                            </li>
                            <li onClick={handleNumberOfPagesBtnClick}>
                                <a>Number of pages</a>
                            </li>
                            <li onClick={handlePublisherYearBtnClick}>
                                <a>Publisher year</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='border-b border-black-30 relative mt-14'>
                    <button
                        ref={refReadBtn}
                        onClick={handleReadBtn}
                        className='text-lg font-normal py-[0.88rem] px-4 active-bar'>
                        Read Books
                    </button>
                    <button
                        ref={refWishlistBtn}
                        onClick={handleWishlistBtn}
                        className='text-lg font-normal text-black-full py-[0.88rem] px-4 '>
                        Wishlist Books
                    </button>
                </div>
                <div className='mt-8 space-y-6'>
                    {showData &&
                        showData.map((book, idx) => (
                            <BookItemCard key={idx} book={book} />
                        ))}
                    <p className='text-center text-black-80'>
                        {showData.length == 0 && "No books to show"}
                    </p>
                </div>
            </section>
        </>
    );
}

export default ListedBooks;
