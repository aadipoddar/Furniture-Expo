import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons, Fontisto } from '@expo/vector-icons'
import styles from './home.style'
import { Welcome, Carousel } from '../components'

const Home = () => {
    return (
        <SafeAreaView>
            <View style={styles.appBarWrapper}>
                <View style={styles.appBar}>
                    <Ionicons name='location-outline' size={24} />

                    <Text style={styles.location}>India</Text>

                    <View style={{ alignItems: 'flex-end' }}>
                        <View style={styles.cartCount}>
                            <Text style={styles.cartNumber}>8</Text>
                        </View>

                        <TouchableOpacity>
                            <Fontisto name='shopping-bag' size={24} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <ScrollView>
                <Welcome />
                <Carousel />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home
