import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather, Ionicons } from '@expo/vector-icons'
import styles from './search.style'
import { COLORS, SIZES } from '../constants'

const Search = () => {
    return (
        <SafeAreaView>
            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Ionicons name='camera-outline' size={24} style={styles.searchIcon} />
                </TouchableOpacity>

                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value=''
                        onPressIn={() => { }}
                        placeholder='What are you looking for'
                    />
                </View>

                <View>
                    <TouchableOpacity style={styles.searchBtn}>
                        <Feather name='search' size={SIZES.xLarge} color={COLORS.offwhite} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Search