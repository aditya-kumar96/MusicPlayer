import { FlatList, FlatListProps, View } from "react-native"
import library from '@/assets/data/library.json'
import { TracksListItem } from "./TrackListItem"
import { utilStyles } from "@/styles"

export type TrackListProps = Partial<FlatListProps<unknown>> & {
    tracks:any[]
}
const ItemDivider=()=>(
       <View style={{
        ...utilStyles.itemSeparator,
        marginVertical:9,
        marginLeft:60

    }}>

    </View>
)

export const TracksList = ({ tracks,...flatlistProps }: TrackListProps) => {
    return (
        <FlatList
            data={tracks}
            contentContainerStyle={{paddingTop:10,paddingBottom:128}}
            ListFooterComponent={ItemDivider}
            ItemSeparatorComponent={ItemDivider}
            renderItem={({ item: track }) => <TracksListItem track={{
                ...track,
                image: track.artwork
            }}
                {...flatlistProps}
            />
            }
        />
    )
}