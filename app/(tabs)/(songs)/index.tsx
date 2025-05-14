import { TracksList } from "@/components/TracksList"
import { screenPadding } from "@/constants/tokens"
import { useNavigationSearch } from "@/hooks/useNavigationSearch"
import { defaultStyles } from "@/styles"
import { ScrollView, Text, View } from "react-native"
import library from '@/assets/data/library.json'
import { useMemo } from "react"
import { trackTitleFilter } from "@/helpers/filter"
const SongsScreen = () => {
     //searchbar hook
     const search = useNavigationSearch({
            searchBarOptions:{
                placeholder:'Search in songs'
            }
        })
    

const filteredSongs = useMemo(()=>{
    if(!search) return library;
    return library.filter(trackTitleFilter(search))
},[search,library])

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={[defaultStyles.container,{paddingHorizontal:screenPadding.horizontal}]}>
             
            <TracksList tracks={filteredSongs} scrollEnabled={false} />
        </ScrollView>
    
    )
}

export default SongsScreen
