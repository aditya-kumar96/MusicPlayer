import { FlatList, FlatListProps, View } from "react-native"
import library from '@/assets/data/library.json'
import { TracksListItem } from "./TrackListItem"
import { utilStyles } from "@/styles"

export type TrackListProps = Partial<FlatListProps<unknown>>
const ItemDivider=()=>(
       <View style={{
        ...utilStyles.itemSeparator,
        marginVertical:9,
        marginLeft:60

    }}>

    </View>
)

export const TracksList = ({ ...flatlistProps }: TrackListProps) => {
    return (
        <FlatList
            data={library}
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