import { StyleSheet, View, Text } from 'react-native'

// export const s = StyleSheet.create({


//     container: {
//         backgroundColor: "white"
//     }

// });


export const s = StyleSheet.create({

  socialBtn: {
    borderRadius: "50%",
    padding: 10,
    backgroundColor: "#eee",
  },


  social: {
    padding: 10,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },

  texts: {
    flex: 1,
    paddingLeft: 15,
  },


  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },


  header: {
    flexDirection: "row",
  },


  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },


    container: {
        borderRadius: 10,
        padding: 20,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
})