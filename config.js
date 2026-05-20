

module.exports = {
  TOKEN: "MTUwNjM3ODMyOTU0MzAyMDYwNA.GYeGWR.TvKFg9ZOI5dzyBTr7YQoFrAK8s0ex6P6gjIYSs",
  language: "fr",
  ownerID: ["1390122526251946005", ""], 
  mongodbUri : "mongodb+srv://ruscicakyllian_db_user:<db_password>@killplayer.zzhstia.mongodb.net/?appName=KillPlayer",
  spotifyClientId : "d92baed9605a45a39ed7c2a2d960b1c1",
  spotifyClientSecret : "e9b29f6739de4315bc03b6d8a8e93b03",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#e11d2e",
  customEmoji: true,  // true = use custom emoji IDs from emoji.js, false = use default unicode
  emojiTheme: "redwhite", // active custom emoji theme key in emoji.js
  helpBannerUrl: "https://i.ibb.co/GfTxbJfC/7-edited.png", // Optional: set a direct image URL to show an inline banner in /help
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5,
  showProgressBar: true,  // Show progress bar in track embed
  showVisualizer: true,  // Show visualizer on music card (disabled for low-memory optimization)
  generateSongCard: true,  // custom song card image, if false uses thumbnail
  metadataTag: true,  // If true, always show Song Details even when the card image is present
  lowMemoryMode: true,   // Performance optimizations for low-memory environments (512MB RAM)
  errorLog: "", 
  nodes: [
  {
  name: "GlaceYT",
  password: "glace",
  host: "de-01.strixnodes.com",
  port: 2010,
  secure: false
}
  ]
}
