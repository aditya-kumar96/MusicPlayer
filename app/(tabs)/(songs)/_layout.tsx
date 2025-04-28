
import { defaultStyles } from "@/styles/index"
import { Stack } from "expo-router"
import { View } from "react-native"

const SongsScreenLayout=()=>{
    return <View
    style={defaultStyles.container}
    >
        <Stack>
            <Stack.Screen name="index"
            options={{
                headerTitle:"Songs"
            }}
            />
        </Stack>

    </View>
}

export default SongsScreenLayout