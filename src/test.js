fetch("https://streambucket.net/?play=TEdHWlNEbUcxTVlkN0xyT1RGb0tTaXFWVStiSnNRakdNcXVsOWtBdGljQ0tnQ1JHd210Z2dreTN5VHF6REh3a2RiSVcvZU9YSUo1V1J5SndUSytheUl3M2c0YThvTGhDUDhRTFIyTll3Qnl4d0YzekRsNE9hSTlvL3hlc3NvRW50SkxlVmJTWTl1Z2RDVUtNRjBYbjNDMD0=").then(async function(res){
    console.log(await res.text());
    console.error("hey");
});