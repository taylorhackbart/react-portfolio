import brightland from "./images/brightland.png"
import pila from "./images/pila.png"
import hotelmotel from "./images/hotelmotel.png"
import scheduler from "./images/scheduler.png"
import mern from "./images/mern.png"

const data = [
  {
    title: "BrightLand Properties",
    image: brightland,
    description: "For my first freelance project, I have put together a template for small rental businesses to display all of the owners properties in one location. Each property has their own page that is displayed on the home page and menu dropdown, as well as the 'Properties' page. When the Admin logs into the portal, they can update the photos and descriptions for each rental from the client side browser.",
    repoLink: "https://github.com/taylorhackbart/BrightLand-Properties",
    liveLink: "https://brightlandproperties.com"
  },
  {
    title: "MERN Auth Template",
    image: mern,
    description: "I have created a MERN AUTH template that allows users to register and login to a website. This authentication template pushes users info directly into a DB collection created by the site owner rather than using a third party authentication DB portal (Auth0, Firebase, etc.). This allows easy access to all data for the site owner.",
    repoLink: "https://github.com/taylorhackbart/MERN-AUTH",
    liveLink: "https://auth-template.herokuapp.com/"
  },
  {
    title: "MERN Image Upload Template",
    image: mern,
    description: " I have created a drag and drop image uploader that allows multiple image uploads from a desktop, tablet or mobile device. This allows a user to delete photos upon upload, as well as rearrange the order in which images will be displayed. The first image on the list will always be the image displayed on the 'View Uploads' page.",
    repoLink: "https://github.com/taylorhackbart/IMAGE-UPLOAD",
    liveLink: "https://image-upload-template.herokuapp.com/"
  },
  {
    title: "Let's Hit The Slopes",
    image: pila,
    description: " To the left is my first project I generated with a team. We created a website that will show the weather conditions of a mountain in Italy, along with a currency converter from Euros to your home currency.",
    repoLink: "https://github.com/Matt-Boggs/Lets-Hit-the-Slopes",
    liveLink: "https://matt-boggs.github.io/Lets-Hit-the-Slopes/"
  },
  {
    title: "Hotel Motel",
    image: hotelmotel,
    description: "Hotel Motel is a guest management system designed for small occupancy hotels and motels. The application is simple to use, and allows the user to see all of the guest information and hotel occupancy on one screen. The user can input information about a guest when they want to save a reservation (guest name, number of guests, number of rooms, check-in date, check-out date, and guest phone number). This information is sent to the database and stored, a new guest is created and added to the guest check-in column. Once a guest is ready to check in the user can click the check in button and the guest is moved to the guest check-out column. The daily-occupancy updates the hotel data so the user can easily see how many rooms are still available for reservation. When a guest is checked-out, the the guest is removed from the database and the room occupancy is updated accordingly.",
    repoLink: "https://github.com/taylorhackbart/hotel_motel",
    liveLink: "https://hotelmotel.herokuapp.com/"
  },
  {
    title: "Day Planner",
    image: scheduler,
    description: " This Work Day Planner will allow you to write in plans for the day by the hour, and save them so you can access them throughout the day by clicking 'save'. This website will highlight the current time in red, have the past times in grey, and the future tasks highlighted in green.",
    repoLink: "https://github.com/taylorhackbart/DayPlannerForYou",
    liveLink: "https://taylorhackbart.github.io/DayPlannerForYou/"
  },
]
export default data;