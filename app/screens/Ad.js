import { AdMobBanner } from 'expo-ads-admob';
import { View } from 'react-native';
import colors from "../config/colors";
  
  function bannerError() {
    console.log("Banner error");
    return;
  }

const Ad = () => {
    return (
      <View style={style}>
        <AdMobBanner 
            bannerSize="mediumRectangle"
            adUnitID="ca-app-pub-3940256099942544/6300978111"
            onDidFailToReceiveAdWithError={bannerError}
        />
      </View>
    );
}

const style = {
  borderRadius: 15,
  backgroundColor: colors.white,
  marginBottom: 20,
  overflow: "hidden",
  alignItems: "center",
}

export default Ad;
