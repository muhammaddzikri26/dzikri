import { Text, View, StyleSheet, Image } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={style.container}>
      <Image 
        style={style.tinyLogo} 
        source={{
          uri : 'https://reactnative.dev/img/tiny_logo.png',
        }}/>
      <Text style={style.textName}>
        Muhammad Dzikri
      </Text>
      <Text style={[style.subText, style.textWhite]}>
        dzikryakbar8000@gmail.com
      </Text>
      <Link href="/experience" style={[style.subText, style.textWhiteLink]}>
        Experience
      </Link>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#0E627C",
    height: 250,
    borderBottomEndRadius: 32,
    borderEndStartRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  textName: {
    color: "white",
    fontSize: 24,
  },
  subText: {
    fontSize: 14,
  },
  textWhite: {
    color: "white",
  },
  textWhiteLink: {
    color: "white",  
    textDecorationLine: 'underline',  
  },
  tinyLogo:{
    height:100,
    width:100
  }
});
 