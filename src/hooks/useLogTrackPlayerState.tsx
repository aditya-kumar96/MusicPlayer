import { Event,useTrackPlayerEvents } from "react-native-track-player";
const events = [Event.PlaybackError,Event.PlaybackState,Event.PlaybackActiveTrackChanged]

export const useLogTrackPlayerState = ()=>{
    useTrackPlayerEvents(events,async (event)=>{
        if (event.type === Event.PlaybackError) {
            console.warn('An Error Occured: ',event)
        }
        if (event.type === Event.PlaybackState) {
            console.warn('An Error Occured Plaback state: ',event.state)
        }
        if (event.type === Event.PlaybackActiveTrackChanged) {
            console.warn('Track Changed : ',event.index)
        }
    })
}