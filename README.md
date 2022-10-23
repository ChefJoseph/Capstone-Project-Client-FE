<h1>Stadium Delivery App</h1>
Client View (iOS):
https://www.figma.com/file/CpSa8Ov4jd6rZ1nlc9UwjU/GOOGLE-UX--STADIUM-DELIVERY-APP?node-id=145%3A422


Purpose: Food and merchandise delivery app for Dodgers Stadium (sporting event).

Languages: React Native, Rails

User Stories: a) A Spectator that doesn’t want to miss the action, or is buying for the group.
b) A Parent with toddlers or children who will pay for the convenience of having food delivered. 
c) An Elderly or Disabled spectator that struggles with access (e.g. stadium stairs).

MVP goals: Login Auth, Create profile, Model/validations, CRUD, Database, Shopping cart, Separate Client and Restaurant Views/Authorization, Camera access for avatar and ID, Pop-out Menu: Referral page, Help page

Stretch goals: QR code scanning for ticket confirmation, Photo Storage, Checking if ticket is valid, Push notification, E-mail or text confirmation for signup/receipt, Payment type input, Mock Payment processing(Stripe?), Icon animations, Multiple vendors, Multiple stadiums, Analytics for Vendor UI, Google maps library for location/delivery rendering




Implementing a camera for ticket scanning. I used a react-vision-camera library. It crashed my app and luckily I was able to roll back saved data on github. After completing the food delivery app portion, I want to include the camera so that the user can quickly provide information to their seat. 

Further development: I am working on DRYing the code. The bulk of React and Native was similar enough like using reusable declarative components. However there were many differences including syntax, react-router vs react native naivation, local storage vs async storage, and CSS formatting. Native doesn’t leverage CSS and HTML so I learned to utilize Stylesheet. Some element tags were also different <p> as <text>, and <div> as <view>
