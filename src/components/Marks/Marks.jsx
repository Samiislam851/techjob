import React, { useEffect, useContext, PureComponent, useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer,ComposedChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar,Line } from 'recharts';
import { MyContext } from '../HomePage/HomePage';

const Marks = () => {
    //     const [loading, setLoading] = useState(true)
    const [assignmentMarks, setAssignmentMarks] = useState([]);


    const bundle = useContext(MyContext);

    useEffect(() => {
        bundle.titleHandler('Assignment Mark Analysis');
    }, []);




    async function getData(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    useEffect(() => {


        getData('/public/marks.json').then(data => {
            setAssignmentMarks(data.data)

        });
     




    }, []);


    const [activeIndex, setActiveIndex] = useState(0);
    const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value, unitId } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';

        return (
            <g>
                <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                 
                    {unitId.name}
                </text>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 6}
                    outerRadius={outerRadius + 10}
                    fill={fill}
                />
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />

                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Marks ${value}`}</text>
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                    {`(Rate ${((value / 60) * 100).toFixed(2)}%)`}
                </text>
            </g>
        );
    };
    const onPieEnter = (_, index) => {
        setActiveIndex(index)
    };

    return (<>
        {<section className="w-11/12 md:w-4/5 mx-auto mt-0">


            <div className="w-full flex flex-col items-center justify-center  ">

                <div className="w-full space-y-12">

                    <div className="h-[350px]  w-full md:w-[500px] mx-auto flex flex-col justify-center items-center p-x-10 py-8 mt-10">
                        <h1 className='text-center text-xl font-semibold '>Pie Chart</h1>

                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={400} height={400}>
                                <Pie
                                    activeIndex={activeIndex}
                                    activeShape={renderActiveShape}
                                    data={assignmentMarks}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="obtainMark"
                                    name="Assignment Marks"
                                    onMouseEnter={onPieEnter}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>




                </div>
                <div className='h-[300px] flex flex-col justify-center items-center p-x-10 py-10'>
                    <h1 className='text-center text-xl font-semibold mb-10 pt-20'>Composed Chart</h1>
                    <ResponsiveContainer width={900} height={350}>
                        <ComposedChart
                            width={500}
                            height={400}
                            data={assignmentMarks}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="unitId.name" scale="band" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="obtainMark" barSize={50} fill="#413ea0" />
                            <Line type="monotone" dataKey="obtainMark" stroke="#ff7300" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>

            </div>






        </section>

        }
    </>

    );
}

export default Marks;
