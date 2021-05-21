import 'package:http/http.dart' as http;

class Api {
  static Future<http.Response> call(String path) async {
    String endpoint =
        'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api/' +
            path +
            '.json';
    Future<http.Response> request;

    print(endpoint);
    Map<String, String> headers = {
      'Content-Type': 'application/json',
    };
    request = http.get(Uri.parse('$endpoint'), headers: headers);
    return request;
  }
}
