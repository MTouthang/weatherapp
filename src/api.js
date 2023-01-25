export const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_APIKEY}&q=`;

export const weatherGif = {
  Thunderstorm:
    "https://media3.giphy.com/media/CIYF0RVOmd2qQ/giphy.gif?cid=ecf05e47v7z4cbrr6brf83xsmq5ykfazctzco6phnq84vjjt&rid=giphy.gif&ct=g",
  Drizzle:
    "https://media2.giphy.com/media/s9cu1TZU37KY8/giphy.gif?cid=ecf05e470ort8070n6ayyuj5bliwzk5bj57ruwuh82q9rpp6&rid=giphy.gif&ct=g",
  Rain: "https://media2.giphy.com/media/1ipRdxBacFXBjoov2f/giphy.gif?cid=ecf05e477wdroktfdsnsrq9dhez4vfuqgzrnfksaf3f8jkj8&rid=giphy.gif&ct=g",
  Snow: "https://media3.giphy.com/media/Q9BCtO4LZ8Maq9BAl6/giphy.gif?cid=ecf05e47lm1ukq13kuy9qdlbn3ba7jmj29zc34khh03c6iu1&rid=giphy.gif&ct=g",
  Clear:
    "https://media1.giphy.com/media/1Fm7jEapE18HwS6fkT/giphy.gif?cid=ecf05e47eiim87bquxyzf4hhys2gip583w0u6w8259ft4jit&rid=giphy.gif&ct=g",
  Clouds:
    "https://media2.giphy.com/media/3o6wrm1JXSq5C9EtnG/giphy.gif?cid=ecf05e471l2uzcb8tdt4d0xzl6b5y3n7lh5jguw31c2w1cr5&rid=giphy.gif&ct=g",
  Mist: "https://media2.giphy.com/media/sZmv85pZ8NG60HU9QK/giphy.gif?cid=ecf05e4732c0karqyc7gi0mos3fhinm0jd66vrwsaafw18m4&rid=giphy.gif&ct=g",
  Smoke:
    "https://media2.giphy.com/media/ZrkQwhGK9j0tLQkN0m/giphy.gif?cid=ecf05e470g88w29y1t0obknhb27ud4nx7sf7gcwqzxvzm609&rid=giphy.gif&ct=g",
  Haze: "https://media0.giphy.com/media/r2OMuTCFo0rv2rgAL5/giphy.gif?cid=ecf05e471up06cdc038jjuf2uil5jc7us128480l29egjzi2&rid=giphy.gif&ct=g",
  Dust: "https://media0.giphy.com/media/MfMJvl4DFBiGiSGkji/200.webp?cid=ecf05e47lpnzm2v5b611bklz5utrghu6t6doo9pwk8d4a1fo&rid=200.webp&ct=g",
  Fog: "https://media0.giphy.com/media/ZWRCWdUymIGNW/giphy.gif?cid=ecf05e47ybtanzmdgu19kxe9qffqbax5sixnjs79b8ftmxf0&rid=giphy.gif&ct=g",
  Sand: "https://media1.giphy.com/media/BXPlMrO9cyYTK/giphy.gif?cid=ecf05e47ldngib5hfxelh3z6dq5twkgagcnthbtb5wbrbhos&rid=giphy.gif&ct=g",
  Ash: "https://media3.giphy.com/media/kfp5YSCCCxlxfAeREP/giphy.gif?cid=ecf05e479ivucdh9sixm2a3m3c7b3d5pkycffkzl1kzezfty&rid=giphy.gif&ct=g",
  Squall:
    "https://media1.giphy.com/media/xUOwGoV4fmBd0fiyGI/giphy.gif?cid=ecf05e47nqs9xue4dktebmtdlg4cuctdmgfoxuvlkkqz8yqz&rid=giphy.gif&ct=g",
  Tornado:
    "https://media2.giphy.com/media/MXvDhlmD0eB5qNvvjZ/200w.webp?cid=ecf05e47sn8xnj7n3ye9e6ojn6vx5v9thjoorowl6q9e8t3t&rid=200w.webp&ct=g",
};

export const toastOptions = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};
