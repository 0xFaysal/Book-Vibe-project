import { Link } from "react-router-dom";
function PageNotFound() {
    return (
        <div className='w-full h-full  mt-40 flex items-center justify-center flex-col'>
            <h1 className='text-9xl font-medium text-black-full'>404</h1>
            <p className='text-2xl mt-8 capitalize text-black-80'>
                Page not found
            </p>
            <Link to='/'>
                <button className='font-medium text-2xl px-6 py-2 border rounded border-black-70 mt-8 text-black-80 hover:bg-black-80 hover:text-white'>
                    Home
                </button>
            </Link>
        </div>
    );
}

export default PageNotFound;
