//React Native components
import { Text, View, StatusBar } from 'react-native';
import {Header} from './index';

//styles
import {styles} from './styles';

//
//Component start
//
export default function App() {
    return (
        <View style={styles.container}>
            <Header/>
            <Text>Cumbia</Text>
            <StatusBar style="auto" />
        </View>
    );
}
