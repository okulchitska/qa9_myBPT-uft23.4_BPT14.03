WpfWindow("OpenText MyFlight Sample").WpfTabStrip("WpfTabStrip").Select "SEARCH ORDER"
WpfWindow("OpenText MyFlight Sample").WpfRadioButton("byNumberRadio").Set
WpfWindow("OpenText MyFlight Sample").WpfEdit("byNumberWatermark").Set Parameter("OrderNo")
WpfWindow("OpenText MyFlight Sample").WpfButton("SEARCH").Click
WpfWindow("OpenText MyFlight Sample").WpfEdit("passengerName").Output CheckPoint("passengerName")
