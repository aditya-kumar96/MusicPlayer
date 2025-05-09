import { TracksList } from "@/components/TracksList"
import { screenPadding } from "@/constants/tokens"
import { defaultStyles } from "@/styles"
import { ScrollView, Text, View } from "react-native"

const SongsScreen = () => {
    return (
    
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={[defaultStyles.container,{paddingHorizontal:screenPadding.horizontal}]}>
            <TracksList scrollEnabled={false} />
        </ScrollView>
    
    )
}

export default SongsScreen