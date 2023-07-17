import { Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons, Fontisto } from '@expo/vector-icons'
import styles from './home.style'
import { Welcome, Carousel, Headings, ProductRow } from '../components'

const Home = () => {
    return (
        <SafeAreaView style= { {flex: 1}}>
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
                <Headings />
                <ProductRow />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home
