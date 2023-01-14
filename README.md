# Online-Minecraft-Plyaer-API-Namemc-Server-Hypixel
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
![image](https://user-images.githubusercontent.com/74735976/212465931-853c22a5-d800-410e-99ca-a3e4e8bdc4c9.png)
###
Special thanks to the OpenAi ChatGPT development staff who helped design this project
![image](https://user-images.githubusercontent.com/74735976/212466003-6bdfba43-b175-48a9-bd0b-f0b3d0ab114c.png)
#
