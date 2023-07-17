import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from './productCartView.style'
import { COLORS } from '../../constants'

const ProductCartView = () => {
    return (
        <TouchableOpacity onPress={() => {}}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1686043207697-e801b603f956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' }}
                        style={styles.image}
                    />
                </View>

                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>Product</Text>
                    <Text style={styles.supplier} numberOfLines={1}>This is a long Subtitle and it will be wrapped around.</Text>
                    <Text style={styles.price}>$499</Text>
                </View>

                <TouchableOpacity style={styles.addBtn}>
                    <Ionicons name='add-circle' size={34} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCartView