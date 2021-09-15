import NetInfo from "@react-native-community/netinfo";
export default class NetworkUtils {
  static async isNetworkAvailable() {
    const response = await NetInfo.fetch();
    return response.isConnected;
}}