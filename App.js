import { createDrawerNavigator } from '@react-navigation/drawer';
import bangdiemdanh from './pages/bangdiemdanh';
import tonghopdulieu from './pages/tonghopdulieu';
import thoikhoabieu from './pages/thoikhoabieu';
import bangchamcong from './pages/bangchamcong';

import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();

function App () {
  return (
    <NavigationContainer>
    <Drawer.Navigator useLegacyImplementation={true} initialRouteName='Thời khóa biểu'>
      <Drawer.Screen name = "Thời khóa biểu" component = {thoikhoabieu}/>
      <Drawer.Screen name = "Bảng điểm danh" component = {bangdiemdanh}/>
      <Drawer.Screen name = "Bảng chấm công" component = {bangchamcong}/>
      <Drawer.Screen name = "Tổng hợp dữ liệu" component = {tonghopdulieu}/>
    </Drawer.Navigator>
    </NavigationContainer>
  )
}
export default App;
