
import './App.css'
import Card from './Card';
import {
  FaPlaneDeparture,
  FaBed,
  FaRoute,
  FaCalendarAlt,
  FaHome,
  FaGlobeAmericas,
  FaSuitcaseRolling,
  FaMapMarkedAlt,
  FaLanguage

} from 'react-icons/fa';
import { MdFlight } from 'react-icons/md';
function App() {
  return (
    <div className="App">
      <header>
        <h1>✈️ Travel Planning Resources</h1>
        <p>Helpful websites and tools to plan your next adventure!</p>
      </header>

      <div className="card-container">
       < Card 
       title = "Skyscanner"
       description = "Compare flight prices and find great travel deals."
       link = "https://www.skyscanner.com"
       icon={FaPlaneDeparture}
       />
       <Card
       title = "Goggle Flights"
       description = "Quickly search and compare airline tickets."
       link = "https://www.google.com/flights"
        icon={MdFlight} />
       <Card
  title="Hostelworld"
  description="Find budget hostels and accommodations worldwide."
  link="https://www.hostelworld.com"
   icon={FaBed}
/>
<Card
  title="Rome2Rio"
  description="Discover how to get anywhere by plane, train, bus, or ferry."
  link="https://www.rome2rio.com"
  icon={FaRoute}
/>
<Card
  title="TripIt"
  description="Plan and organize all your travel details in one place."
  link="https://www.tripit.com"
   icon={FaCalendarAlt}
/>
<Card
  title="Airbnb"
  description="Book unique homes and experiences across the world."
  link="https://www.airbnb.com"
  icon={FaHome}
/>
<Card
  title="Travel.State.Gov"
  description="Official US government travel advisories and visa info."
  link="https://travel.state.gov"
  icon={FaGlobeAmericas}
/>
<Card
  title="PackPoint"
  description="Smart packing list generator based on your destination."
  link="https://www.packpnt.com"
icon={FaSuitcaseRolling}
/>
<Card
  title="Rick Steves Europe"
  description="Expert tips and travel guides for exploring Europe."
  link="https://www.ricksteves.com"
  icon={FaMapMarkedAlt}
/>
<Card
  title="Microsoft Translator"
  description="Instantly translate languages while traveling."
  link="https://www.microsoft.com/en-us/translator/"
   icon={FaLanguage}
/>
      </div>
    </div>
  );
}

export default App
