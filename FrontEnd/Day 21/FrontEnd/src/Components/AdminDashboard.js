import React, { useState, useEffect } from 'react';
import './Admin.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as LineChartTooltip,
  Legend as LineChartLegend,
} from 'recharts';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  const pieChartData = [
    { name: 'Adventure', value: 30 },
    { name: 'Action', value: 25 },
    { name: 'Strategy', value: 20 },
  ];
  const lineChartData = [
    { name: 'January', value: 500 },
    { name: 'February', value: 750 },
    { name: 'March', value: 650 },
    { name: 'April', value: 850 },
    { name: 'May', value: 600 },
    { name: 'June', value: 800 },
  ];

  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const storedPlayers = JSON.parse(localStorage.getItem('playersData')) || [];
    setPlayers(storedPlayers);
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const publishers = [
    { id: 1, name: 'Game Co.', department: 'Adventure Games' },
    { id: 2, name: 'GamerTech', department: 'Action Games' },
  ];

  const nav=useNavigate();
  const token=localStorage.getItem("jwtToken")
  if(token===null){
    nav("/")
   
  }
  const [user, setuser] = useState([]);
  useEffect(() => {
    const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
    setuser(storeduser);
 }, []);
  return (
    <div class="content">
    <div id="main">
      <div class="over">
        <div id="det">
          <h2>OVERVIEW</h2>
        </div>
        <div id="overview">
          <Link to="/players">
            <div className="one">
              <img
                id="player-image"
                src="https://wallpapers.com/images/featured/gaming-profile-pictures-xpcd6q5uud2i45v8.jpg"
              />
              <h5>Total number of Gamers</h5>
              <h6>1000</h6>
            </div>
          </Link>
          <Link to="/games">
            <div className="one">
              <img
                id="player-image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS3OXlT70QDZybHu7JmIUOvQUKpTFuMoz2OQ&usqp=CAU"
              />
              <h5>Total Games Available</h5>
              <h6>50</h6>
            </div>
          </Link>
          <div className="one">
            <img
              id="player-image"
              src="data:image/jpeg;base64,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"
            />
            <h5>Genres Covered</h5>
            <h6>15</h6>
          </div>
          <Link to="/publishers">
            <div className="one">
              <img
                id="player-image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGFzgzqBx3pFL3se28qu7JTJrrwg-A7DFSA&usqp=CAU"
              />
              <h5>Total number of Publishers</h5>
              <h6>20</h6>
            </div>
          </Link>
        </div>
      </div>

      <div id="div2"></div>
      <div class="heads">
        <h2 class="head1">Gamers List</h2>
      </div>
      <div class="row1">
        <div id="players-list">
          <table className='tablu '>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Favorite Genre</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={player.id}>
                  <td>{player.id}</td>
                  <td>{player.name}</td>
                  <td>{player.favoriteGenre}</td>
                  <td>{player.contactnum}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <h2 id="det another">GAMERS ENROLLMENT AND GENRE OVERVIEW</h2>
      <div class="row2">
        <div className="line">
          <LineChart width={500} height={300} data={lineChartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#ccc" />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <LineChartTooltip />
            <LineChartLegend />
          </LineChart>
        </div>
        <h2 id="insa" class="fac-head">Publishers List</h2>
        <br />
        <div id="faculties-list">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Genre</th>
              </tr>
            </thead>
            <tbody>
              {publishers.map((publisher) => (
                <tr key={publisher.id}>
                  <td>{publisher.id}</td>
                  <td>{publisher.name}</td>
                  <td>{publisher.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AdminDashboard;
