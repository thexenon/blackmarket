import 'package:blackmarket/models/OrderedProduct.dart';
import 'package:blackmarket/services/data_streams/data_stream.dart';
import 'package:blackmarket/services/database/orders_database_helper.dart';

class MyOrderedProductsStream extends DataStream<OrderedProduct> {
  @override
  void reload() {
    final myOrderedProductsFuture = MyOrdersDatabaseHelper().myOrdersProductsList;
    myOrderedProductsFuture.then((data) {
      addData(data);
    }).catchError((e) {
      addError(e);
    });
  }
}
