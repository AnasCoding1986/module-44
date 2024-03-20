import { LineChart, Line, XAxis, YAxis} from 'recharts';


const Rechart = () => {
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
        <div>
        <LineChart
          width={500}
          height={300}
          data={studentData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
            <XAxis dataKey="name" />
            <YAxis></YAxis>
            <Line type="monotone" dataKey="math" stroke="#8884d8"></Line>
            <Line type="monotone" dataKey="physics" stroke="yellow"></Line>
        </LineChart>
        </div>
    );
};

export default Rechart;