import BookCard from "./BookCard";
import { PropTypes } from "prop-types";

function BooksGallery({ data }) {
    console.log(data);
    return (
        <section className='mt-20 mb-32'>
            <h2 className='text-center font-bold text-4xl'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-9'>
                {data &&
                    data?.map((book, idx) => (
                        <BookCard key={idx} data={book} />
                    ))}
            </div>
        </section>
    );
}

BooksGallery.propTypes = {
    data: PropTypes.array.isRequired,
};

export default BooksGallery;
