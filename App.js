import { createDrawerNavigator } from '@react-navigation/drawer';
import bangdiemdanh from './pages/bangdiemdanh';
import tonghopdulieu from './pages/tonghopdulieu';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();

function App () {
  return (
    <NavigationContainer>
    <Drawer.Navigator useLegacyImplementation={true} initialRouteName='Bảng điểm danh'>
      <Drawer.Screen name = "Bảng điểm danh" component = {bangdiemdanh}/>
      <Drawer.Screen name = "Tổng hợp dữ liệu" component = {tonghopdulieu}/>
    </Drawer.Navigator>
    </NavigationContainer>
  )
}
export default App;
