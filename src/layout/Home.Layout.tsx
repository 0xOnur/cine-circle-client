import { RootState } from '@redux/config/store';
import { useSelector } from 'react-redux';
import Navbar from "@components/Navbar"

const HomeLayout = () => {
  const reduxIsAuth = useSelector((state: RootState) => state.isAuth);

  return (
    <div>
      <Navbar isAuth={reduxIsAuth} />
      <h1>Home Layout</h1>
    </div>
  )
}

export default HomeLayout