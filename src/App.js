//React Native components
import { Text, View, StatusBar } from 'react-native';
import {Header, ProductsListScreen} from './index';

//styles
import {styles} from './styles';

//
//Component start
//
export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Header/>
            <ProductsListScreen/>
        </View>
    );
}
