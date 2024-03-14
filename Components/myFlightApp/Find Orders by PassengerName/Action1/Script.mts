WpfWindow("OpenText MyFlight Sample").WpfTabStrip("WpfTabStrip").Select "SEARCH ORDER"
WpfWindow("OpenText MyFlight Sample").WpfEdit("byNameWatermark").Set Parameter("PassengerName")
WpfWindow("OpenText MyFlight Sample").WpfButton("SEARCH").Click
