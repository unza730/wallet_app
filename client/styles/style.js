import { StyleSheet } from "react-native"
import Colors from "../constants/Colors"
import Spacing from "../constants/Spacing"
import Font from "../constants/Font"
import FontSize from "../constants/FontSize"

export const customStyles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textField: {
        fontFamily: Font['poppins-regular'],
        fontSize: FontSize.small,
        backgroundColor: Colors.lightPrimary,
        color: Colors.primary,
        paddingVertical: Spacing + 2,
        paddingHorizontal: Spacing * 2,
        borderRadius: 2,
        marginVertical: Spacing,
    },
    smallText: {
        fontFamily: Font['poppins-semiBold'],
        fontSize: FontSize.xsmall,
        color: '#5A5A5A',
    },
    bottomButtonWrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 20, // Adjust padding as needed
        paddingBottom: 20, // Adjust padding as needed
        backgroundColor: 'transparent', // Change this to any color if you want a background behind the button
    },
    btnContainer: {
        paddingVertical: Spacing + 5,
        backgroundColor: Colors.primary,
        shadowColor: Colors.primary,
        shadowOffset: {
            width: 0,
            height: Spacing
        },
        shadowOpacity: 0.3,
        shadowRadius: Spacing,
    },
    btnText: {
        textTransform: 'capitalize',
        fontFamily: Font['poppins-bold'],
        color: Colors.onPrimary,
        textAlign: 'center',
        fontSize: FontSize.medium
    },
    errorText: {
        fontFamily: Font['poppins-semiBold'],
        fontSize: FontSize.xsmall,
        color: Colors.error,
    },
    fab: {
        position: 'absolute',
        marginHorizontal: 20,
        marginVertical: 30,
        right: 0,
        bottom: 0,
        borderRadius: 50,
        backgroundColor: Colors.onPrimary,
      },
      line: {
        height: 1,
        width: '100%',
        backgroundColor: 'gray',
        marginVertical: Spacing,
      },
})