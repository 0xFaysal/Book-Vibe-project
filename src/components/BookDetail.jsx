import { useLoaderData, useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { useEffect, useState } from "react";
import { getItem, setItem } from "../utility/localStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BookDetail() {
    const { bookId } = useParams();
    const data = useLoaderData();
    const [showData, setShowData] = useState([]);
    const bookIdInt = parseInt(bookId);

    useEffect(() => {
        if (data) {
            const book = data.find((book) => book.bookId === bookIdInt);
            setShowData(book);
        }
    }, []);

    const {
        image,
        bookName,
        author,
        category,
        review,
        tags,
        totalPages,
        rating,
        publisher,
        yearOfPublishing,
    } = showData;

    const notify = (massage) => toast(massage);

    const handleReadBtn = () => {
        // const perviousId = getItem("bookId");
        // setItem("bookId", [...perviousId, bookIdInt]);
        const exist = setItem("readBookListId", bookIdInt);
        if (exist) {
            notify("Already in Read List");
        } else notify("Added to Read List");
    };

    const handleWishlistBtn = () => {
        const readListId = getItem("readBookListId");
        if (readListId.includes(bookIdInt)) {
            notify("Already in Read List");
            return;
        } else {
            const exist = setItem("wishlistBookListId", bookIdInt);

            if (exist) {
                notify("Already in Wishlist");
            } else notify("Added to Wishlist");
        }
    };

    if (bookIdInt < 1 || bookIdInt > 10) {
        return <PageNotFound />;
    }

    if (!showData) {
        return <h1>Loading...</h1>;
    }
    return (
        <section className='flex flex-col md:flex-row mt-12 mb-24 gap-12'>
            <div className='bg-black-5 flex-1 grid place-items-center p-[4.63rem] rounded-2xl'>
                <img
                    className='h-[17.25] md:h-[35.25rem]'
                    src={image}
                    alt={bookName}
                />
            </div>
            <div className='flex-1'>
                <h1 className='font-bold text-[2.5rem] text-black-full mb-4'>
                    {bookName}
                </h1>
                <p className='font-medium text-xl text-black-80'>
                    By : {author}
                </p>
                <hr className='mt-6 mb-4' />
                <p className='font-medium text-xl text-black-80'>{category}</p>
                <hr className='mt-4 mb-6' />
                <p className='text-black-80 text-base'>
                    <span className='font-bold text-base text-black-full'>
                        Review :
                    </span>{" "}
                    {review}
                </p>
                <div className='flex items-center mt-6'>
                    <span className='font-bold text-base text-black-full'>
                        Tag:
                    </span>{" "}
                    {tags &&
                        tags.map((tag, idx) => (
                            <p
                                className='text-base text-primary-full bg-primary-5 px-4 py-2 rounded-3xl'
                                key={idx}>
                                {tag}
                            </p>
                        ))}
                </div>
                <hr className='my-6' />
                <div className='flex gap-14'>
                    <div className='text-black-70 font-normal text-base space-y-3'>
                        <p>Number of Pages : </p>
                        <p>Publisher : </p>
                        <p>Year of Publishing : </p>
                        <p>Rating : </p>
                    </div>
                    <div className='font-semibold text-base text-black-full space-y-3'>
                        <p>{totalPages}</p>
                        <p>{publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                    </div>
                </div>
                <div className='flex gap-4 mt-8'>
                    <button className='btn' onClick={handleReadBtn}>
                        Read
                    </button>
                    <button
                        className='btn-secondary'
                        onClick={handleWishlistBtn}>
                        Wishlist
                    </button>
                </div>
                <ToastContainer />
            </div>
        </section>
    );
}

export default BookDetail;
