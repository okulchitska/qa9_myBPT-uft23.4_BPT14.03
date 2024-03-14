WpfWindow("OpenText MyFlight Sample").WpfEdit("passengerName").Set Parameter("PassengerName")
WpfWindow("OpenText MyFlight Sample").WpfButton("ORDER").Click
 Parameter("OrderNo") = WpfWindow("OpenText MyFlight Sample").WpfObject("Order completed").GetVisibleText
WpfWindow("OpenText MyFlight Sample").WpfButton("NEW SEARCH").Click
