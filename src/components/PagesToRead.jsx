import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItem } from "../utility/localStorage";
import { PropTypes } from "prop-types";

const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "red",
    "pink",
    "blue",
    "green",
    "orange",
];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
        x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
        x + width
    }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke='none' fill={fill} />;
};

TriangleBar.propTypes = {
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
};

function PagesToRead() {
    const data = useLoaderData();
    const [showData, setShowData] = useState([]);
    const [localData, setLocalData] = useState(getItem("readBookListId") || []);

    useEffect(() => {
        setLocalData(getItem("readBookListId"));
        console.log(localData);
        const _showData = data.filter((book) => {
            return localData.includes(book.bookId);
        });
        setShowData(_showData);
    }, []);

    return (
        <section className='bg-black-5 rounded-2xl grid place-items-center h-screen'>
            <BarChart
                width={1000}
                height={450}
                data={showData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='bookName' />
                <YAxis />
                <Bar
                    dataKey='totalPages'
                    fill='#8884d8'
                    shape={<TriangleBar />}
                    label={{ position: "top" }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </section>
    );
}

export default PagesToRead;
