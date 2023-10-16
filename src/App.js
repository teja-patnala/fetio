import React, { useState } from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { PieChart, Pie } from 'recharts';
import { RiSettingsLine } from 'react-icons/ri';
import { BiSolidDashboard, BiSolidOffer, BiSearch } from 'react-icons/bi';
import { HiCube } from 'react-icons/hi';
import { PiSmileyDuotone } from 'react-icons/pi';
import { IoIosContact } from 'react-icons/io';
import { FaHireAHelper } from 'react-icons/fa';
import { WiDirectionRight } from 'react-icons/wi';
import { AiOutlineWallet, AiOutlineUser, AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { BsBag } from 'react-icons/bs';
import {CgNotes} from "react-icons/cg"
import { GiReceiveMoney } from 'react-icons/gi';
import './App.css';

function App() {
  const [status, setStatus] = useState(true);
  const sideBarData = [
    { icon: <HiCube className="side-bar-icon" />, text: 'Product' },
    { icon: <IoIosContact className="side-bar-icon" />, text: 'Customers' },
    { icon: <AiOutlineWallet className="side-bar-icon" />, text: 'Income' },
    { icon: <BiSolidOffer className="side-bar-icon" />, text: 'Promote' },
    { icon: <FaHireAHelper className="side-bar-icon" />, text: 'Help' },
  ];
  const mainBarData = [
    { title: 'Earning', icon: <GiReceiveMoney className="card-icon" />, money: '$198k', arrow: <AiOutlineArrowUp />, text: '37.6% this month' },
    { title: 'Orders', icon: <CgNotes className="card-icon" />, money: '$2.4k', arrow: <AiOutlineArrowDown />, text: '2% this month' },
    { title: 'Balance', icon: <MdOutlineAccountBalanceWallet className="card-icon" />, money: '$2.4k', arrow: <AiOutlineArrowDown />, text: '2% this month' },
    { title: 'Total', icon: <BsBag className="card-icon" />, money: '$89k', arrow: <AiOutlineArrowUp />, text: '11% this week' },
  ];

  const gridData = [
    {imgUrl:"https://res.cloudinary.com/dxx7ni6cl/image/upload/c_thumb,w_200,g_face/v1697467011/mascot-logo-design_fb-img_1200x800_joec7n.jpg",head:"Abstarch 3D",para:"it is view that show structurre in 3d",stock:"32 in stock",price:"$ 45.99",sales:"20"},
    {imgUrl:"https://res.cloudinary.com/dxx7ni6cl/image/upload/c_thumb,w_200,g_face/v1697467010/istockphoto-682485942-612x612_g0sbhi.jpg",head:"Abstarch 3D",para:"it is view that show structurre in 3d",stock:"32 in stock",price:"$ 45.99",sales:"20"}
  ]

  const data = [
    { month: 'Jan', value: 90 },
    { month: 'Feb', value: 200 },
    { month: 'Mar', value: 150 },
    { month: 'Apr', value: 300 },
    { month: 'May', value: 250 },
    { month: 'Jun', value: 350 },
    { month: 'July', value: 350 },
    { month: 'Aug', value: 500 },
    { month: 'Sep', value: 300 },
    { month: 'Oct', value: 100 },
    { month: 'Nov', value: 150 },
    { month: 'Dec', value: 350 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const barData = [
    { count: 809680, language: 'Telugu',innerRadius:"30%",outerRadius:"90%" },
    { count: 4555697, language: 'Hindi',innerRadius:"40%",outerRadius:"70%"  },
    { count: 12345657, language: 'English',innerRadius:"30%",outerRadius:"80%"  },
  ];

  const sideBar = () => (
    <div className={`side-bar ${status ? '' : 'collapsed'}`}>
      <div className="side-one-container">
        <div style={{ margin: 'auto' }}>
          <button className="head-button" onClick={() => setStatus((prevStatus) => !prevStatus)}>
            <RiSettingsLine className="head-icon" />
          </button>
        </div>
        <h1 className="sidebar-heading">{status ? 'Dashboard' : ''}</h1>
      </div>
      {status && (
        <div className="side-bar-four">
          <div>
            <div className="side-two-container one">
              <BiSolidDashboard className="side-bar-icon" />
              <h3 className="h31">Dashboard</h3>
            </div>
            {sideBarData.map((eachItem) => (
              <div key={eachItem.text} className="head-one">
                <div className="side-two-container">
                  {eachItem.icon}
                  <h3 className="h31">{eachItem.text}</h3>
                </div>
                <WiDirectionRight className="side-bar-icon" />
              </div>
            ))}
          </div>
          <div className="side-two-container two-one">
            <AiOutlineUser className="side-bar-icon" />
            <div>
              <h5 className="h31">Teja</h5>
              <p className="p12">Project Manager</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <div className="app-container">
        {sideBar()}
        <div className="section-one">
          <div className="head-section">
            <h1 className="section-one-head">
              Hello shahrukh <PiSmileyDuotone className='search-icon' />
            </h1>
            <div className="input-container">
              <BiSearch style={{color:"white",height:"30px",width:"30px"}} className="search-icon" />
              <input type="text" id="inputField" className="custom-input" placeholder="Search" />
            </div>
          </div>
          <div className="section-two">
            <ul>
              {mainBarData.map((each) => (
                <li key={each.text} className='li-item'>
                  <div className="card-image">{each.icon}</div>
                  <div className="sub-card-one">
                    <p className="p1">{each.title}</p>
                    <h3 className="h3">{each.money}</h3>
                    <p className="p2">
                      {each.arrow}
                      {each.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="section-twoo">
            <div className="bar-container">
              <div className="chart-container">
                <div className='chart-sub'>
                  <div>
                    <h4>Monthly Sales</h4>
                    <p className='p2'>Monthly Earning</p>
                  </div>
                  <select className='secltion-three-select'>
                    <option value = "30">Quatarly</option>
                    <option value = "30">20 Days</option>
                    <option value = "30">10 Days</option>
                  </select>
                </div>
                <BarChart width={600} height={300} data={data}>
                  <CartesianGrid vertical={false} horizontal={false} />
                  <XAxis dataKey="month" />
                  <Tooltip cursor={{ fill: 'transparent' }} />
                  <Bar dataKey="value" fill="#8884d8" barSize={30} radius={5} />
                </BarChart>
              </div>
            </div>
            <div className="pie-container">
              <div>
                <h4>Customers</h4>
                <p className='p2'>Customers that buy products</p>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    cx="50%"
                    cy="50%"
                    data={barData}
                    startAngle={0}
                    endAngle={360}
                    // innerRadius={barData.innerRadius}
                    // outerRadius={barData.innerRadius}
                    dataKey="count"
                  >
                    {barData.map((entry, index) => (
                      <Cell key={entry.language} outerRadius={entry.innerRadius} innerRadius={entry.innerRadius}  name={entry.language} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className='section-three'>
            <div className="section-three-head">
              <h4>Product Sell</h4>
              <div className='section-three-sub-head'>
                <div className="input-container">
                  <BiSearch style={{color:"white",height:"30px",width:"30px"}} className="search-icon" />
                  <input type="text" style={{color:"white"}} id="inputField" className="custom-input" placeholder="Search" />
                </div>
                <select className='secltion-three-select'>
                  <option value = "30">30 Days</option>
                  <option value = "30">20 Days</option>
                  <option value = "30">10 Days</option>
                </select>
              </div>
            </div>
            <div style={{width:"100%",overflow:"scroll"}}>
              <div style={{width:"100%"}}>
                <div className='row'>
                  <p className='p2 g1'>Product name</p>
                  <div className='row-head'>
                    <p className='p2 g2'>Stock</p>
                    <p className='p2 g2'>Price</p>
                    <p className='p2 g2'>Total Sales</p>
                  </div>
                </div>
              </div>
              {gridData.map(item=>(
                <div style={{width:"100%"}}>
                  <div className='row'>
                    <div>
                      <img alt = {item.price} className='img' src = {item.imgUrl}/>
                      <p className='p2 g1'>{item.head}</p>
                    </div>
                    <div className='row-head'>
                      <p className='p2 g2'>{item.stock}</p>
                      <p className='p2 g2'>{item.price}</p>
                      <p className=  'p2 g2'>{item.sales}</p>
                    </div>
                  </div>
              </div>
              ))}
            </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
