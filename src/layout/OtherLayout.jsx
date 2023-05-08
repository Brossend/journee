import { Outlet } from 'react-router';
import { OtherHeader } from '../components/OtherHeader';

function OtherLayout() {
  return (
    <div>
      <OtherHeader />
      <Outlet />
    </div>
  );
}

export { OtherLayout };
