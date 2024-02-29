import { SafeAreaView, Text, View } from 'react-native';
import SpendBox from './SpendBox';
import { styles } from './LandingBox';



export default function LandingBox() {
    return (
        <SafeAreaView style={styles.safeView}>
            <View style={styles.innerView}>
                {/* Upper Dahsboard */}
                <View style={styles.dashBoardBox}>
                    <Text style={styles.primaryText}>Dashboard</Text>
                </View>
                {/* Daily Spendings */}
                <View style={styles.spendbox}>
                    <SpendBox />
            </View>
            </View>
        </SafeAreaView>
    );
}
