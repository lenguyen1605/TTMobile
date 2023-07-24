import { createDrawerNavigator } from '@react-navigation/drawer';
import Bangdiemdanh from './pages/bangdiemdanh';
import Tonghopdulieu from './pages/tonghopdulieu';
import Thoikhoabieu from './pages/thoikhoabieu';
import Bangchamcong from './pages/bangchamcong';
import Doanhthu from './pages/quanlydoanhthu';

import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();

function App () {
  return (
    <NavigationContainer>
    <Drawer.Navigator useLegacyImplementation={true} initialRouteName='Thời khóa biểu'>
      <Drawer.Screen name = "Thời khóa biểu" component = {Thoikhoabieu}/>
      <Drawer.Screen name = "Bảng điểm danh" component = {Bangdiemdanh}/>
      <Drawer.Screen name = "Bảng chấm công" component = {Bangchamcong}/>
      <Drawer.Screen name = "Tổng hợp dữ liệu" component = {Tonghopdulieu}/>
      <Drawer.Screen name = "Quản lý doanh thu" component = {Doanhthu}/>

    </Drawer.Navigator>
    </NavigationContainer>
  )
}
export default App;
