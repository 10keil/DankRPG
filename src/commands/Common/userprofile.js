module.exports = {
name : "p",
aliases : ["profile", "user", "stats", "bal"],
code: `
$onlyIf[$isBot[$findUser[$message;yes]]!=true;You cannot check a bot's profile.]
$onlyIf[$getGlobalUserVar[UserInt;$findUser[$message;no]]!=False;This user has interaction commands disabled from their settings.]
$title[1;$username[$findUser[$message;yes]]'s profile]
$description[1;
<:RPGCoin:855767372534906920>**$getGlobalUserVar[Coins;$findUser[$message;yes]]** \`Coins\`
<:RPGHeart:855755205102534686>**$getGlobalUserVar[HP;$findUser[$message;yes]]** \`HP\`
<:ATKF:915551150093250592>**$getGlobalUserVar[ATK;$findUser[$message;yes]]** \`ATK\`
]
$thumbnail[1;$userAvatar[$findUser[$message;yes]]]
$image[1;$replaceText[$getUserBanner[$findUser[$message;yes];1024];null;;1]]
$color[1;$getGlobalUserVar[EmbedColor]]
$globalCooldown[5s;Please wait before running this command again. This helps us enforce ratelimits. %time%]
$onlyIf[$isBot[$authorID]!=true;]
`
}