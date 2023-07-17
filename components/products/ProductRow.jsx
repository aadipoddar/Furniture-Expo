import { FlatList, Text, View } from 'react-native'
import styles from './productRow.style'
import { SIZES } from '../../constants'
import ProductCartView from './ProductCartView'

const ProductRow = () => {
    const products = [1, 2, 3, 4]

    return (
        <View style={{ marginTop: SIZES.medium }}>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductCartView />}
                horizontal
                contentContainerStyle={{ columnGap: SIZES.medium }}
            />
        </View>
    )
}

export default ProductRow