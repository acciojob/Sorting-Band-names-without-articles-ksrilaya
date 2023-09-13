//your code here

let mp={};
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let articleless=[];
let articlelessitem=[];
for(let i=0;i<touristSpots.length;i++){
	articlelessitem=touristSpots[i].replace(/\bthe\b|\ban\b|\ba\b/gi," ").trim();
	articleless.push(articlelessitem);
	mp[articlelessitem]=touristSpots[i];
}
articleless.sort();
let ans=[];
for(let i of articleless){
	ans.push(mp[i]);
}
console.log(ans);