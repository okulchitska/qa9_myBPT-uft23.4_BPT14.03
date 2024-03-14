WpfWindow("OpenText MyFlight Sample").WpfComboBox("fromCity").Select Parameter("FlyFrom")
WpfWindow("OpenText MyFlight Sample").WpfComboBox("toCity").Select Parameter("FlyTo")
WpfWindow("OpenText MyFlight Sample").WpfCalendar("datePicker").SetDate Parameter("FlightDate")
WpfWindow("OpenText MyFlight Sample").WpfComboBox("Class").Select Parameter("Class")
WpfWindow("OpenText MyFlight Sample").WpfComboBox("numOfTickets").Select Parameter("Tickets")
WpfWindow("OpenText MyFlight Sample").WpfButton("FIND FLIGHTS").Click
