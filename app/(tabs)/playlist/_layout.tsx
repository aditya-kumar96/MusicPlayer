
import { StackScreenWithSearchBar } from "@/constants/layout"
import { defaultStyles } from "@/styles/index"
import { Stack } from "expo-router"
import { View } from "react-native"

const PlaylistScreenLayout=()=>{
    return <View
    style={defaultStyles.container}
    >
        <Stack>
            <Stack.Screen name="index"
            options={{
                ...StackScreenWithSearchBar,
                headerTitle:"Playlist"
            }}
            />
        </Stack>

    </View>
}

export default PlaylistScreenLayout