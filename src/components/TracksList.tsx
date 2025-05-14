import { FlatList, FlatListProps, View } from "react-native"
import library from '@/assets/data/library.json'
import { TracksListItem } from "./TrackListItem"
import { utilStyles } from "@/styles"
import { Track } from "react-native-track-player"

export type TrackListProps = Partial<FlatListProps<Track>> & {
    tracks:Track[]
}
const ItemDivider=()=>(
       <View style={{
        ...utilStyles.itemSeparator,
        marginVertical:9,
        marginLeft:5

    }}>

    </View>
)

export const TracksList = ({ tracks,...flatlistProps }: TrackListProps) => {
    const handleTrackSelect = (track:Track)=>{
        console.log(track);
        
    }
    return (
        <FlatList
            data={tracks}
            contentContainerStyle={{paddingTop:10,paddingBottom:128}}
            ListFooterComponent={ItemDivider}
            ItemSeparatorComponent={ItemDivider}
            renderItem={({ item: track }) => <TracksListItem track={track} onTrackSelect={handleTrackSelect}
                {...flatlistProps}
            />
            }
        />
    )
}