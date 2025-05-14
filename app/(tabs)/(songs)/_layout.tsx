
import { StackScreenWithSearchBar } from "@/constants/layout"
import { useNavigationSearch } from "@/hooks/useNavigationSearch"
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
                ...StackScreenWithSearchBar,
                headerTitle:"Songs",
            }}
            />
        </Stack>

    </View>
}

export default SongsScreenLayout