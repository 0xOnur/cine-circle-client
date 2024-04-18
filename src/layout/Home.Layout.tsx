import { RootState } from '@redux/config/store';
import { useSelector } from 'react-redux';
import Navbar from "@components/Navbar"

const HomeLayout = () => {
  const reduxUser = useSelector((state: RootState) => state.user);

  return (
    <div>
      <Navbar isAuth={reduxUser.isAuth} />
      <h1>Home Layout</h1>
    </div>
  )
}

export default HomeLayout