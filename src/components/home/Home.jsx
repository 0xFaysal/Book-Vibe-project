import { Link, useLoaderData } from "react-router-dom";
import img from "../../assets/cover.png";
import BooksGallery from "./BooksGallery";
function Home() {
    const books = useLoaderData();
    return (
        <>
            <section className='bg-black-5 rounded-3xl grid grid-cols-1 md:grid-cols-5 py-20 max-sm:gap-y-8 mt-14'>
                <div className='col-span-3 mt-0  md:mt-[3.5rem] ml-8 md:ml-[7.5rem]'>
                    <h1 className='md:text-6xl font-bold text-5xl mb-12 md:leading-[5rem]'>
                        Books to freshen up your bookshelf
                    </h1>
                    <Link to='/listed-books'>
                        <button className='btn-primary'>Listed Books</button>
                    </Link>
                </div>
                <div className='col-span-2  grid place-items-center'>
                    <img src={img} alt='' />
                </div>
            </section>
            <BooksGallery data={books} />
        </>
    );
}

export default Home;
