import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Barchart = () => {
    const studentData = [
        { id: 101, name: "John", physics: 85, chemistry: 78, math: 90 },
        { id: 102, name: "Emily", physics: 75, chemistry: 82, math: 88 },
        { id: 103, name: "Michael", physics: 90, chemistry: 85, math: 92 },
        { id: 104, name: "Sarah", physics: 80, chemistry: 75, math: 85 },
        { id: 105, name: "David", physics: 88, chemistry: 90, math: 89 },
        { id: 106, name: "Jessica", physics: 92, chemistry: 88, math: 91 },
        { id: 107, name: "Andrew", physics: 78, chemistry: 79, math: 80 },
        { id: 108, name: "Rachel", physics: 86, chemistry: 83, math: 87 },
        { id: 109, name: "Daniel", physics: 82, chemistry: 87, math: 84 },
        { id: 110, name: "Olivia", physics: 79, chemistry: 81, math: 83 }
    ];

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={studentData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="physics" stackId="a" fill="#8884d8" />
                <Bar dataKey="chemistry" stackId="a" fill="#82ca9d" />
                <Bar dataKey="math" stackId="a" fill="#ffc658" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Barchart;
