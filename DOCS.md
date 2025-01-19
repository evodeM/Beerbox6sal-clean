
It includes all the clarified requirements, functionality, and UI elements you need:
The project folder: mockups, contains mockups of the different views  
**Dormitory Sales Management PWA on a Samsung tab a7 lite**
**Last Updated**: _(19/jan)_

**1. Overview**
This PWA is designed to manage dormitory sales of **4 fixed products** (Beer, Soda, Snacks, Water). It serves two main user interfaces:

1.  **Tablet Interface** (for managing purchases and admin actions).

2.  **Mobile PWA** (for dorm residents to view balances, receive notifications, and make payments via MobilePay deeplink integration).

The app supports **offline sync**, ensuring purchases and updates are stored locally and synced once Wi-Fi is restored.

**2. Key Features**

**Tablet Interface**

•  **Room Grid**:

•  Displays rooms **601–628** in a grid format.

•  Each tile shows the room number and occupant name.

•  Tapping a tile opens the **Room View**.

•  **Room View**:

•  Editable occupant name.

•  Displays total balance owed and the last purchase (product name, amount, timestamp).

•  Includes 4 fixed product buttons: Beer, Soda, Snacks, Water.

•  **Admin Panel** (password-protected):

•  Edit product names and prices.

•  Generate and export monthly sales reports (CSV format).

•  Send push notifications (end-of-month reminders or custom announcements).

•  Perform monthly resets (clears balances and resets data).

  

**Mobile PWA**

•  **Home Screen**:

•  Displays the user’s room number, total balance, and last purchase.

•  Provides a “Pay Now” button that triggers a MobilePay deeplink.

•  **Push Notifications**:

•  Personalized reminders in Danish for payments at the end of the month.

•  Custom notifications for announcements (e.g., dorm meetings).

First time they open the mobileview, they should choose their room

**3. User Roles**

**Resident (User)**

•  Views balance and last purchase.

•  Pays via MobilePay.

•  Receives notifications.

**Admin**

•  Accesses admin panel with a simple password.

•  Performs monthly resets and sends notifications.

•  Edits product details and generates sales reports.

**4. Data Model (Firestore)**

**Rooms Collection**

•  **Collection**: Rooms

•  **Document**: {roomId} (e.g., “601”, “602”, … “628”)

•  occupantName: _String_ (editable by anyone in Room View).

•  balance: _Number_ (total owed by the room).

•  lastPurchase: _Object_

•  productName: _String_ (“Beer” / “Soda” / “Snacks” / “Water”).

•  amount: _Number_ (price of the product).

•  timestamp: _Firestore Timestamp_.

  

**Products Collection**

•  **Collection**: Products

•  **Document**: e.g., “beer”

•  name: “Beer”

•  price: 7

•  **Document**: “soda”

•  name: “Soda”

•  price: 5

•  **Document**: “snacks”

•  name: “Snacks”

•  price: 10

•  **Document**: “water”

•  name: “Water”

•  price: 3


**Purchases Collection (For Reporting)**

•  **Collection**: purchases

•  **Document**: Auto-generated ID

•  roomId: _String_ (e.g., “601”).

•  productName: _String_ (e.g., “Beer”).

•  amount: _Number_ (price of the product).

•  timestamp: _Firestore Timestamp_.


**Admin Config**

•  **Collection**: adminConfig

•  **Document**: “general”

•  mobilePayPhoneNumber: _String_ (e.g., “12345678”).

•  adminPassword: _String_ (e.g., “password123”).

 
**Tokens Collection (Push Notifications)**

•  **Collection**: tokens

•  **Document**: _Unique Token ID_

•  token: _String_ (unique FCM token).

•  roomId: _String_ (associated room).

  

**5. User Flows**

**Tablet View: Room Grid**

•  Displays a 7x4 grid for rooms **601–628**.

•  Each tile shows:

•  Room number.

•  Editable occupant name.

•  Tapping a room opens the **Room View**.

 
**Tablet View: Room View**

•  Displays:

•  Editable occupant name.

•  Total balance owed.

•  Last purchase (product name, amount, timestamp).

•  Provides 4 fixed product buttons:

•  Beer, Soda, Snacks, Water.

•  Tapping a product button:

•  Adds the product’s price to the room balance.

•  Updates lastPurchase.

•  Creates a record in the purchases collection for reporting.


**Admin Panel**

•  Accessed via a password prompt.

•  Features:

1.  **Edit Products**: Change names/prices in the Products collection.

2.  **Generate Reports**: Export CSV with:

•  Total sales (overall, per product, per room).

3.  **Send Notifications**:

•  End-of-month reminders: Personalized or generic.
4. **Settings**
admin kan change receiver mobilephone for MobilePay payments

•  Custom announcements (e.g., dorm meetings).

4.  **Monthly Reset**:

•  Sets all room balances to 0.

•  Clears lastPurchase.

•  Deletes or archives documents in the purchases collection.

•  Sends notifications.

**Mobile PWA**

•  **Home Screen**:

•  Displays:

•  Welcome message (e.g., “Hej Room 601”).

•  Total balance owed.

•  Last purchase.

•  Provides a “Pay Now” button:
•  Launches MobilePay with the amount owed and admin’s phone number.

•  **Notifications**:

•  End-of-month payment reminders in Danish.

•  Custom announcements.

**6. Notifications**

**End-of-Month Reminder**

•  Example (in Danish):

“Hej [Room 601 / occupantName], du skylder [Amount] DKK. Venligst overfør via MobilePay.”

**Custom Announcement**

•  Example (in Danish):

“Vi afholder fællesmøde på tirsdag kl. 19.30. Mød op i fællesrummet.”


**7. Monthly Reset & Data Cleanup**

1.  **Before Reset**:
•  Admin generates a CSV report.
•  Report includes total sales overall, per product, and per room.

2.  **Reset Process**:

•  Updates all rooms:
•  balance = 0.

•  lastPurchase = {}.

•  Deletes or archives documents in purchases.

•  Sends end-of-month notifications.

**8. Tech Stack Summary**

1.  **Hosting**: GitHub Pages for the PWA.
2.  **Database**: Firebase: Firestore for real-time updates and offline sync.
3.  **Push Notifications**: Firebase Cloud Messaging.
4.  **Offline Support**: Enabled for purchases and updates on the tablet.

5.  **Optional Cloud Functions**:
•  For secure notification sending.

•  For email-based CSV delivery.

 
**9. Development Checklist**
1.  read docs.md and mockups found in folder mockups.
2.  Create changelog
3.  Configure:
•  Tablet views (Room Grid, Room View, Admin Panel).
•  Mobile PWA (Home Screen, Notifications).
4.  Test:
•  Push notifications.
•  Offline sync functionality.
•  MobilePay deeplink.
5.  Deploy the PWA.

 
