import CustomTextInput from "@/components/shared/Form/CustomInput";
import { LayoutWithoutScroll } from "@/components/shared/Layout/LayoutWithoutScroll";
import globalUtilStyles from "@/styles";
import { useState } from "react";
import { View } from "react-native";

export default function InitialScreen (){
    const [email, setEmail] = useState("")
return(
    <LayoutWithoutScroll>
        <View style={[globalUtilStyles.py10]}>
            <CustomTextInput 
             labelTitle="Email"        
             value={email}
             onChangeText={val=>setEmail(val)}    
             placeholder="Email"
            />
        </View>
    </LayoutWithoutScroll>
)
}