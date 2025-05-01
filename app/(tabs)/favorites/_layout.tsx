
import { defaultStyles } from "@/styles/index"
import { Stack } from "expo-router"
import { View } from "react-native"

const FavoritesScreenLayout=()=>{
    return <View
    style={defaultStyles.container}
    >
        <Stack>
            <Stack.Screen name="index"
            options={{
                headerTitle:"Favorites"
            }}
            />
        </Stack>

    </View>
}

export default FavoritesScreenLayout