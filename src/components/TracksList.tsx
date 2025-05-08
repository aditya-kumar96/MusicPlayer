import { FlatList } from "react-native"
import library from '@/assets/data/library.json'
import { TracksListItem } from "./TrackListItem"
export const TracksList=()=>{
    return <FlatList
        data={library}
        renderItem={()=> <TracksListItem />}
    />
}