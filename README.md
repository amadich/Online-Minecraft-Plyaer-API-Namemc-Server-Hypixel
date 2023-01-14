# Online Minecraft Plyaer API-Namemc Server **Hypixel**
I decided to design a user interface that indicates whether a Minecraft player is on a Hypixel server or not by relying on the UUID 🍃
![image](https://user-images.githubusercontent.com/74735976/212465811-3356e66f-7ae9-4a29-bee2-9353c8713a4f.png)
I'm going to rely on the api namemc that will provide us the users on the Hypixel server with the UUID
```url
https://api.namemc.com/server/mc.hypixel.net/likes
```
We will learn about this API in JavaScript through this script
```js
async function search(query) {
  try {
    // Perform search
    const results = await fetch(`https://api.namemc.com/server/mc.hypixel.net/likes?profile=${query}`);
    const data = await results.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
```
It will show **True** if the player was found and **False** if it was not found
![image](https://user-images.githubusercontent.com/74735976/212466147-4b2919b0-0806-4701-a905-231e5fc89414.png)

###
Special thanks to the OpenAi ChatGPT ![image](https://user-images.githubusercontent.com/74735976/212466526-754ee9ee-408d-4bcc-a574-30eaa09f9e65.png) development staff who helped design this project . 
Thanks ** NameMc ** ![image](https://user-images.githubusercontent.com/74735976/212466701-6fb3a514-a259-40e2-b13b-dc5ca0fea31a.png) for making the api accessible 🌹🍂 
#
If you are a Minecraft player on the Hypixel server, you can find me through this information
```
Minecraft Name : 6iw
Minecraft UUID : 1a3b4eb3-b24b-4222-94b6-4ef0ffa62198
NameMc URL : https://namemc.com/profile/6iw
Hypixel Profile : https://hypixel.net/members/amadich.2841540/
Hypixel Rank : [VIP+]
```
![image](https://user-images.githubusercontent.com/74735976/212466003-6bdfba43-b175-48a9-bd0b-f0b3d0ab114c.png)
#
