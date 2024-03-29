import { View } from "react-native";
import { styles } from "./styles";
import { Mushroom } from "../Mushroom"
import { IPage } from "../../../App";

export function Footer({setPage, page}:IPage){
    return(
        <View style={styles.footer}>
            <Mushroom color={page == 1} onPressI={() => setPage(1)} />
            <Mushroom color={page == 2} onPressI={() => setPage(2)} />
            <Mushroom color={page == 3} onPressI={() => setPage(3)} />
        </View>
    ) 
}
