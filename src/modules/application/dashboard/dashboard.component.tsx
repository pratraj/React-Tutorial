import { Link, Outlet } from 'react-router-dom';
import { APP_ROUTER, DASHBOARD_ROUTER } from '../../general/constants/route-constant/route.constant';

const Dashboard = () => {
  
  return (
    <div>
      <ul>
          <li><Link to={DASHBOARD_ROUTER.GREETINGS}>Greet</Link></li>
          <li><Link to={`../${APP_ROUTER.LANDING}`}>Logout</Link></li>
      </ul>
      <main>
        <Outlet /> {/* Nested routes render here */}
      </main>
      <footer>Footer Content</footer>
    </div>
  );
}

  export default Dashboard;