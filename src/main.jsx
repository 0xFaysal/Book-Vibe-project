import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import ListedBooks from "./components/listedBooks/ListedBooks.jsx";
import PagesToRead from "./components/PagesToRead.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import BookDetail from "./components/BookDetail.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ContactUs from "./components/ContactUs.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <PageNotFound />,
        children: [
            {
                path: "/",
                loader: () => fetch("./data.json"),
                element: <Home />,
            },
            {
                path: "/listed-books",
                loader: () => fetch("./data.json"),
                element: <ListedBooks />,
            },
            {
                path: "/pages-to-read",
                loader: () => fetch("./pageNumberData.json"),
                element: <PagesToRead />,
            },
            {
                path: "/contact-us",
                element: <ContactUs />,
            },
            {
                path: "/about-us",
                element: <AboutUs />,
            },
            {
                path: "/:bookId",
                loader: () => fetch("../data.json"),
                element: <BookDetail />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
