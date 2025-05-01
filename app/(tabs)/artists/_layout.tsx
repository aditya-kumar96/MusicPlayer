
import { defaultStyles } from "@/styles/index"
import { Stack } from "expo-router"
import { View } from "react-native"

const ArtistsScreenLayout=()=>{
    return <View
    style={defaultStyles.container}
    >
        <Stack>
            <Stack.Screen name="index"
            options={{
                headerTitle:"Artists"
            }}
            />
        </Stack>

    </View>
}

export default ArtistsScreenLayout