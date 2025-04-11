function ContactUs() {
    return (
        <section>
            <div className='container mx-auto py-8'>
                <h2 className='text-4xl font-semibold text-center text-black-full mb-6'>
                    Contact Us
                </h2>
                <p className='text-center text-gray-700 w-3/5 mx-auto mb-6'>
                    Welcome to the Contact Us page of Book Vibe! We value your
                    feedback and inquiries and are here to assist you in any way
                    we can. Whether you have questions about our website,
                    suggestions for improving your experience, or simply want to
                    share your thoughts with us, we&apos;re all ears. Please
                    feel free to fill out the form below with your name, email
                    address, and message, and we&apos;ll get back to you as soon
                    as possible. Your input is essential to us as we strive to
                    create the best possible platform for book lovers like you.
                    Thank you for choosing Book Vibe, and we look forward to
                    hearing from you!
                </p>
                <form
                    className='max-w-md mx-auto mt-8'
                    action='#'
                    method='POST'>
                    <div className='mb-4'>
                        <label
                            htmlFor='name'
                            className='block text-gray-700 font-medium'>
                            Name:
                        </label>
                        <input
                            type='text'
                            placeholder='Type your name here'
                            className='input input-bordered w-full mt-4'
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='email'
                            className='block text-gray-700 font-medium'>
                            Email:
                        </label>
                        <input
                            type='email'
                            placeholder='Type your email here'
                            className='input input-bordered w-full mt-4'
                            id='email'
                            name='email'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='message'
                            className='block text-gray-700 font-medium'>
                            Message:
                        </label>
                        <textarea
                            className='textarea textarea-bordered w-full mt-4'
                            placeholder='Bio'
                            id='message'
                            name='message'
                            rows='5'
                            required></textarea>
                    </div>
                    <button
                        type='submit'
                        className='w-full bg-primary-full text-white py-2 px-4 rounded-md hover:bg-green-400 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50'>
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ContactUs;
