OpenApp "C:\Program Files (x86)\OpenText\UFT One\samples\Flights Application\FlightsGUI.exe"
WpfWindow("OpenText MyFlight Sample").WpfEdit("agentName").Set Parameter("AgentName")
WpfWindow("OpenText MyFlight Sample").WpfEdit("password").Set Parameter("AgentPassword")
WpfWindow("OpenText MyFlight Sample").WpfButton("OK").Click
