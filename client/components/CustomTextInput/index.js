import React, { useState } from 'react'
import Spacing from '../../constants/Spacing'
import FontSize from '../../constants/FontSize'
import Colors from '../../constants/Colors'
import Font from '../../constants/Font'
import { TextInput } from 'react-native'

const CustomTextInput = ({...otherProps}) => {

    const [focused, setFocused] = useState(false)
  return (
    <TextInput
    onFocus={()=> setFocused(true)}
    onBlur={()=> setFocused(false)}
    // placeholder='Confirm Password'
    placeholderTextColor={Colors.darkText}
    secureTextEntry
    style={[
        {
        fontFamily: Font['poppins-regular'],
        fontSize: FontSize.small,
        backgroundColor: Colors.lightPrimary,
        color: 'white',
        padding: Spacing * 2,
        borderRadius: Spacing,
        marginVertical: Spacing
    },
focused && { borderWidth: 2, borderColor: Colors.primary,
shadowOffset: {width: 4, height: Spacing},
shadowColor:  Colors.primary,
shadowOpacity: 0.2,
shadowRadius: Spacing
},
]}
{...otherProps}

/>

  )
}

export default CustomTextInput