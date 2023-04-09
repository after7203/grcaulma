const performance = {
  "GTX 1660 SUPER": { FHD: 0.7772, QHD: 0.6685, UHD: 0 },
  "RTX 3050": { FHD: 0.840662491, QHD: 0.7333445, UHD: 0 },
  "RTX 3060": { FHD: 1.1536, QHD: 1.0185, UHD: 0.890559733 },
  "RTX 3060 Ti": { FHD: 1.499803748, QHD: 1.388421897, UHD: 1.234774209 },
  "RTX 3070": { FHD: 1.5861, QHD: 1.4708, UHD: 1.342522974 },
  "RTX 3070 Ti": { FHD: 1.6908, QHD: 1.566, UHD: 1.465329992 },
  "RTX 3080": { FHD: 1.9154, QHD: 1.8944, UHD: 1.858 },
  "RTX 3080 Ti": { FHD: 1.9794, QHD: 1.9872, UHD: 1.976 },
  "RTX 3090": { FHD: 2, QHD: 2, UHD: 2 },
  "RTX 3090 Ti": { FHD: 2.0712, QHD: 2.1, UHD: 2.203 },
};

export const GFLOPS = [
  ["GeForce RTX 4090 24GB", "October 2022", "AD102", "16384", "2520", "46,794"],
  ["GeForce RTX 4080 16GB", "November 2022", "AD103", "9728", "2510", "41,648"],
  ["GeForce RTX 3090 Ti", "March 2022", "GA102", "10752", "1860", "39,997"],
  ["GeForce RTX 3090", "September 2020", "GA102", "10496", "1695", "35,581"],
  ["GeForce RTX 3080 Ti", "June 2021", "GA102", "10240", "1665", "34,099"],
  ["GeForce RTX 3080 12GB", "January 2022", "GA102", "8960", "1710", "30,643"],
  ["GeForce RTX 3080", "September 2020", "GA102", "8704", "1710", "29,768"],
  ["Radeon RX 6900 XT", "December 2020", "Navi 21", "5120", "2250", "23,040"],
  ["GeForce RTX 3070 Ti", "June 2021", "GA104", "6144", "1770", "21,750"],
  ["Radeon RX 6800 XT", "November 2020", "Navi 21", "4608", "2250", "20,736"],
  ["GeForce RTX 3070", "October 2020", "GA104", "5888", "1725", "20,314"],
  ["Nvidia Titan RTX", "December 2018", "TU102", "4608", "1770", "16,312"],
  ["GeForce RTX 3060 Ti", "December 2020", "GA104", "4864", "1665", "16,197"],
  ["Radeon RX 6800", "November 2020", "Navi 21", "3840", "2105", "16,166"],
  ["Nvidia Titan V", "December 2017", "GV100", "5120", "1455", "14,899"],
  ["GeForce RTX 2080 Ti", "September 2018", "TU102", "4352", "1545", "13,448"],
  ["Radeon VII", "February 2019", "Vega 20", "3840", "1750", "13,440"],
  ["Radeon RX 6700 XT", "March 2021", "Navi 22", "2560", "2581", "13,215"],
  ["GeForce RTX 3060", "February 2021", "GA106", "3584", "1777", "12,738"],
  ["Radeon RX Vega 64", "August 2017", "Vega 10", "4096", "1546", "12,665"],
  ["Radeon R9 295X2", "April 2014", "Vesuvius (x2)", "5632", "1018", "11,467"],
  ["Nvidia Titan Xp", "April 2017", "GP102", "3840", "1480", "11,366"],
  ["GeForce GTX 1080 Ti", "March 2017", "GP102", "3584", "1582", "11,340"],
  ["GeForce RTX 2080 Super", "July 2019", "TU104", "3072", "1815", "11,151"],
  ["Nvidia Titan X (Pascal)", "August 2016", "GP102", "3584", "1531", "10,974"],
  ["Radeon RX 6600 XT", "August 2021", "Navi 23", "2048", "2589", "10,605"],
  ["Radeon RX Vega 56", "August 2017", "Vega 10", "3584", "1471", "10,544"],
  ["GeForce GTX Titan Z", "May 2014", "2x GK110", "5760", "876", "10,092"],
  ["GeForce RTX 2080", "September 2018", "TU104", "2944", "1710", "10,068"],
  ["Radeon RX 5700 XT", "July 2019", "Navi 10", "2560", "1905", "9,754"],
  ["GeForce RTX 3050", "January 2022", "GA106", "2560", "1777", "9,098"],
  ["GeForce RTX 2070 Super", "July 2019", "TU104", "2560", "1770", "9,062"],
  ["Radeon RX 6600", "October 2021", "Navi 23", "1792", "2491", "8,928"],
  ["GeForce GTX 1080", "May 2016", "GP104", "2560", "1733", "8,873"],
  ["Radeon R9 Fury X", "June 2015", "Fiji", "4096", "1050", "8,602"],
  ["Radeon R9 Nano", "August 2015", "Fiji", "4096", "1000", "8,192"],
  ["Radeon HD 7990", "April 2013", "New Zealand (x2)", "4096", "1000", "8,192"],
  ["GeForce GTX 1070 Ti", "November 2017", "GP104", "2432", "1683", "8,186"],
  ["Radeon RX 5600 XT", "January 2020", "Navi 10", "2304", "1750", "8,064"],
  ["Radeon RX 5700", "July 2019", "Navi 10", "2304", "1725", "7,949"],
  ["GeForce RTX 2070", "October 2018", "TU106", "2304", "1620", "7,465"],
  ["GeForce RTX 2060 Super", "July 2019", "TU106", "2176", "1650", "7,181"],
  ["Radeon R9 Fury", "July 2015", "Fiji", "3584", "1000", "7,168"],
  ["Radeon RX 590", "November 2018", "Polaris 30", "2304", "1545", "7,119"],
  [
    "GeForce GTX Titan X (Maxwell)",
    "March 2015",
    "GM200",
    "3072",
    "1075",
    "6,605",
  ],
  ["GeForce GTX 1070", "June 2016", "GP104", "1920", "1683", "6,463"],
  ["GeForce RTX 2060", "January 2019", "TU106", "1920", "1680", "6,451"],
  ["GeForce GTX 690", "April 2012", "2x GK104", "3072", "1019", "6,261"],
  ["Radeon RX 580 8GB", "April 2017", "Polaris 20", "2304", "1340", "6,175"],
  ["Radeon RX 580 4GB", "April 2017", "Polaris 20", "2304", "1340", "6,175"],
  ["GeForce GTX 980 Ti", "June 2015", "GM200", "2816", "1075", "6,054"],
  ["Radeon R9 390X", "June 2015", "Grenada", "2816", "1050", "5,914"],
  ["Radeon RX 480 8GB", "June 2016", "Ellesmere", "2304", "1266", "5,834"],
  ["Radeon RX 480 4GB", "June 2016", "Ellesmere", "2304", "1266", "5,834"],
  ["Radeon RX 6500 XT", "January 2022", "Navi 24", "1024", "2815", "5,765"],
  ["GeForce GTX Titan Black", "February 2014", "GK110", "2880", "980", "5,645"],
  ["Radeon R9 290X", "October 2013", "Hawaii", "2816", "1000", "5,632"],
  ["GeForce GTX 1660 Ti", "February 2019", "TU116", "1536", "1770", "5,437"],
  ["GeForce GTX 780 Ti", "November 2013", "GK110", "2880", "928", "5,345"],
  [
    "Radeon RX 5500 XT 8GB",
    "December 2019",
    "Navi 14",
    "1408",
    "1845",
    "5,196",
  ],
  [
    "Radeon RX 5500 XT 4GB",
    "December 2019",
    "Navi 14",
    "1408",
    "1845",
    "5,196",
  ],
  ["Radeon R9 390", "June 2015", "Grenada", "2560", "1000", "5,120"],
  ["Radeon HD 6990", "March 2011", "Antilles (2x)", "3072", "830", "5,100"],
  ["Radeon RX 570 8GB", "April 2017", "Polaris 20", "2048", "1244", "5,095"],
  ["Radeon RX 570 4GB", "April 2017", "Polaris 20", "2048", "1244", "5,095"],
  ["GeForce GTX 1660 Super", "October 2019", "TU116", "1408", "1785", "5,027"],
  ["GeForce GTX 980", "September 2014", "GM204", "2048", "1216", "4,981"],
  ["Radeon RX 470 4GB", "August 2016", "Ellesmere", "2048", "1206", "4,940"],
  ["GeForce GTX 1660", "March 2019", "TU116", "1408", "1725", "4,858"],
  ["Radeon R9 290", "November 2013", "Hawaii", "2560", "947", "4,849"],
  ["GeForce GTX Titan", "February 2013", "GK110", "2688", "876", "4,709"],
  ["Radeon HD 5970", "November 2009", "Hemlock (2x)", "3200", "725", "4,640"],
  ["GeForce GTX 1060 6GB", "July 2016", "GP106", "1280", "1708", "4,372"],
  [
    "Radeon HD 7970 GHz Edition",
    "June 2012",
    "Tahiti",
    "2048",
    "1050",
    "4,301",
  ],
  ["GeForce GTX 780", "May 2013", "GK110", "2304", "900", "4,147"],
  ["Radeon R9 280X", "August 2013", "Tahiti", "2048", "1000", "4,096"],
  ["GeForce GTX 1650 Super", "November 2019", "TU116", "1280", "1590", "4,070"],
  ["Radeon R9 380X", "November 2015", "Tonga", "2048", "970", "3,973"],
  ["GeForce GTX 1060 3GB", "August 2016", "GP106", "1152", "1708", "3,935"],
  ["GeForce GTX 970", "September 2014", "GM204", "1664", "1178", "3,920"],
  ["Radeon R9 380", "June 2015", "Tonga", "1792", "970", "3,476"],
  ["Radeon R9 280", "March 2014", "Tahiti", "1792", "933", "3,344"],
  ["GeForce GTX 770", "May 2013", "GK104", "1536", "1085", "3,333"],
  ["Radeon R9 285", "September 2014", "Tonga", "1792", "918", "3,290"],
  ["GeForce GTX 680", "March 2012", "GK104", "1536", "1058", "3,250"],
  ["Radeon HD 7870 XT", "November 2012", "Tahiti", "1536", "975", "2,995"],
  ["GeForce GTX 1650", "April 2019", "TU117", "896", "1665", "2,984"],
  ["Radeon HD 7950", "January 2012", "Tahiti", "1792", "800", "2,867"],
  ["GeForce GTX 1650 GDDR6", "April 2020", "TU117", "896", "1590", "2,849"],
  ["Radeon HD 5870", "September 2009", "Cypress", "1600", "850", "2,720"],
  ["Radeon HD 6970", "December 2010", "Cayman", "1536", "880", "2,703"],
  ["Radeon R9 270X", "August 2013", "Pitcairn", "1280", "1050", "2,688"],
  ["GeForce GTX 760 Ti", "September 2013", "GK104", "1344", "980", "2,634"],
  ["GeForce GTX 670", "May 2012", "GK104", "1344", "980", "2,634"],
  ["GeForce GTX 660 Ti", "August 2012", "GK104", "1344", "980", "2,634"],
  ["Radeon RX 560 4GB", "May 2017", "Baffin", "1024", "1275", "2,611"],
  ["Radeon R9 370X", "August 2015", "Pitcairn", "1280", "1000", "2,560"],
  ["Radeon HD 7870", "March 2012", "Pitcairn", "1280", "1000", "2,560"],
  ["GeForce GTX 590", "March 2011", "2x GF110", "1024", "607", "2,486"],
  ["GeForce GTX 960", "January 2015", "GM206", "1024", "1178", "2,413"],
  ["Radeon HD 4870 X2", "August 2008", "2x RV770", "1600", "750", "2,400"],
  ["GeForce GTX 760", "June 2013", "GK104", "1152", "1033", "2,380"],
  ["Radeon R9 270", "November 2013", "Pitcairn", "1280", "925", "2,368"],
  ["Radeon HD 6950 2GB", "December 2010", "Cayman", "1408", "800", "2,253"],
  ["Radeon HD 6950 1GB", "December 2010", "Cayman", "1408", "800", "2,253"],
  ["Radeon RX 460 4GB", "August 2016", "Baffin", "896", "1200", "2,150"],
  ["Radeon RX 460 2GB", "August 2016", "Baffin", "896", "1200", "2,150"],
  ["GeForce GTX 1050 Ti", "October 2016", "GP107", "768", "1392", "2,138"],
  ["Radeon RX 560 4GB", "October 2017", "Baffin", "896", "1175", "2,106"],
  ["Radeon HD 5850", "September 2009", "Cypress", "1440", "725", "2,088"],
  ["Radeon HD 6870", "October 2010", "Barts", "1120", "900", "2,016"],
  ["Radeon HD 4850 X2", "November 2008", "2x RV770", "1600", "625", "2,000"],
  ["Radeon R9 370", "June 2015", "Pitcairn", "1024", "975", "1,997"],
  ["GeForce GTX 660", "September 2012", "GK106", "960", "1032", "1,981"],
  ["Radeon R7 260X", "August 2013", "Bonaire", "896", "1100", "1,971"],
  ["GeForce GTX 1050", "October 2016", "GP107", "640", "1518", "1,943"],
  ["Radeon R7 265", "February 2014", "Pitcairn", "1024", "925", "1,894"],
  ["GeForce GTX 950", "August 2015", "GM206", "768", "1188", "1,825"],
  ["Radeon HD 7790", "March 2013", "Pitcairn", "896", "1000", "1,792"],
  ["Radeon HD 5830", "February 2010", "Cypress", "1120", "800", "1,792"],
  ["Radeon HD 7850", "March 2012", "Pitcairn", "1024", "860", "1,761"],
  ["Radeon R7 360", "June 2015", "Bonaire", "768", "1050", "1,613"],
  ["GeForce GTX 650 Ti Boost", "March 2013", "GK106", "768", "1032", "1,585"],
  ["GeForce GTX 580", "November 2010", "GF110", "512", "772", "1,581"],
  ["Radeon R7 260", "December 2013", "Bonaire", "768", "1000", "1,536"],
  ["Radeon RX 550", "April 2017", "Lexa", "640", "1183", "1,514"],
  ["Radeon HD 6850", "October 2010", "Barts", "960", "775", "1,488"],
  ["GeForce GTX 650 Ti", "October 2012", "GK106", "768", "928", "1,425"],
  ["GeForce GTX 570", "December 2010", "GF110", "480", "732", "1,405"],
  ["GeForce GTX 750 Ti", "February 2014", "GK107", "640", "1085", "1,389"],
  ["Radeon HD 6770", "April 2011", "Juniper", "800", "850", "1,360"],
  ["Radeon HD 5770", "October 2009", "Juniper", "800", "850", "1,360"],
  ["Radeon HD 4890", "April 2009", "RV790", "800", "850", "1,360"],
  ["GeForce GTX 480", "March 2010", "GF100", "480", "701", "1,346"],
  ["Radeon HD 6790", "April 2011", "Barts", "800", "840", "1,344"],
  [
    "GeForce GTX 560 Ti (448 Core)",
    "November 2011",
    "GF110",
    "448",
    "732",
    "1,312",
  ],
  ["Radeon HD 7770", "February 2012", "Cape Verde", "640", "1000", "1,280"],
  ["GeForce GTX 560 Ti", "January 2011", "GF114", "384", "822", "1,263"],
  ["Radeon HD 4870", "June 2008", "RV770", "800", "750", "1,200"],
  ["GeForce GT 1030 (GDDR5)", "May 2017", "GP108", "384", "1468", "1,127"],
  ["GeForce GTX 750", "February 2014", "GK107", "512", "1085", "1,111"],
  ["GeForce GTX 470", "March 2010", "GF100", "448", "608", "1,090"],
  ["GeForce GTX 560", "May 2011", "GF114", "336", "810", "1,089"],
  ["GeForce GT 1030 (DDR4)", "March 2018", "GP108", "384", "1379", "1,059"],
  ["Radeon HD 3870 X2", "January 2008", "2x R680", "640", "825", "1,056"],
  ["Radeon HD 6750", "January 2011", "Juniper", "720", "700", "1,008"],
  ["Radeon HD 5750", "October 2009", "Juniper", "720", "700", "1,008"],
  ["Radeon HD 4850", "June 2008", "RV770", "800", "625", "1,000"],
  ["Radeon HD 4770", "April 2009", "RV740", "640", "750", "960"],
  ["Radeon R7 350", "February 2016", "Cape Verde", "512", "925", "947"],
  [
    "Radeon HD 7750 (GDDR5)",
    "February 2012",
    "Cape Verde",
    "512",
    "900",
    "922",
  ],
  ["Radeon HD 7750 (DDR3)", "February 2012", "Cape Verde", "512", "900", "922"],
  ["GeForce GTX 460 (256-bit)", "July 2010", "GF104", "336", "675", "907"],
  ["GeForce GTX 460 (192-bit)", "July 2010", "GF104", "336", "675", "907"],
  ["GeForce GTX 465", "May 2010", "GF100", "352", "608", "856"],
  ["GeForce GTX 560 SE", "February 2012", "GF114", "288", "736", "848"],
  ["Radeon R7 250E", "December 2013", "Cape Verde", "512", "800", "819"],
  ["GeForce GTX 650", "September 2012", "GK107", "384", "1058", "813"],
  ["Radeon R7 250 (GDDR5)", "August 2013", "Oland", "384", "1050", "806"],
  ["Radeon R7 250 (DDR3)", "August 2013", "Oland", "384", "1050", "806"],
  ["Radeon HD 6670 (GDDR5)", "April 2011", "Turks", "480", "800", "768"],
  ["Radeon HD 6670 (DDR3)", "April 2011", "Turks", "480", "800", "768"],
  ["GeForce 9800 GX2", "March 2008", "2x G92", "256", "1500", "768"],
  ["GeForce GT 740 (GDDR5)", "May 2014", "GK107", "384", "993", "763"],
  ["GeForce GT 740 (DDR3)", "May 2014", "GK107", "384", "993", "763"],
  ["GeForce GTX 460 SE", "November 2010", "GF104", "288", "650", "749"],
  ["Radeon HD 4830", "October 2008", "RV770", "640", "575", "736"],
  ["GeForce GT 640 (GDDR5)", "April 2012", "GK107", "384", "950", "730"],
  ["GeForce GT 730 (64-bit, GDDR5)", "June 2014", "GK208", "384", "902", "693"],
  ["GeForce GT 730 (64-bit, DDR3)", "June 2014", "GK208", "384", "902", "693"],
  ["GeForce GTX 550 Ti", "March 2011", "GF116", "192", "900", "691"],
  ["Radeon HD 6570 (GDDR5)", "April 2011", "Turks", "480", "650", "624"],
  ["Radeon HD 6570 (DDR3)", "April 2011", "Turks", "480", "650", "624"],
  ["Radeon HD 5670", "January 2010", "Redwood", "400", "775", "620"],
  ["Radeon HD 7730 (GDDR5)", "April 2013", "Cape Verde", "384", "800", "614"],
  ["Radeon HD 7730 (DDR3)", "April 2013", "Cape Verde", "384", "800", "614"],
  ["GeForce GT 640 (DDR3)", "April 2012", "GK107", "384", "797", "612"],
  ["GeForce GTS 450", "September 2010", "GF106", "192", "783", "601"],
  ["GeForce GTX 295", "January 2009", "2x GT200", "480", "576", "553"],
  ["Radeon HD 5570 (GDDR5)", "February 2010", "Redwood", "400", "650", "520"],
  ["Radeon HD 5570 (DDR3)", "February 2010", "Redwood", "400", "650", "520"],
  ["GeForce GT 545 (GDDR5)", "May 2011", "GF116", "144", "870", "501"],
  ["Radeon R7 240", "August 2013", "Oland", "320", "780", "499"],
  ["Radeon HD 3870", "November 2007", "RV670", "320", "777", "497"],
  ["Radeon HD 4670", "September 2008", "RV730", "320", "750", "480"],
  ["Radeon HD 2900 XT", "May 2007", "R600", "320", "743", "476"],
  ["GeForce GTS 250", "March 2009", "G92b", "128", "1836", "470"],
  ["GeForce 9800 GTX+", "July 2008", "G92b", "128", "1836", "470"],
  ["GeForce 9800 GTX", "April 2008", "G92", "128", "1688", "432"],
  ["Radeon HD 3850 (512MB)", "November 2007", "RV670", "320", "668", "428"],
  ["Radeon HD 3850 (256MB)", "November 2007", "RV670", "320", "668", "428"],
  ["Radeon HD 3830", "April 2008", "RV670", "320", "668", "428"],
  ["Radeon HD 4650 (DDR3)", "September 2008", "RV730", "320", "650", "416"],
  ["GeForce 8800 GTS (512MB)", "December 2007", "G92", "128", "1625", "416"],
  ["GeForce GT 545 (DDR3)", "May 2011", "GF116", "144", "720", "415"],
  ["Radeon HD 4650 (DDR2)", "September 2008", "RV730", "320", "600", "384"],
  ["Radeon HD 2900 Pro", "September 2007", "R600", "320", "600", "384"],
  ["GeForce 8800 Ultra", "May 2007", "G80", "128", "1500", "384"],
  ["Radeon HD 5550 (GDDR5)", "February 2010", "Redwood", "320", "550", "352"],
  ["Radeon HD 5550 (DDR3)", "February 2010", "Redwood", "320", "550", "352"],
  ["Radeon HD 5550 (DDR2)", "February 2010", "Redwood", "320", "550", "352"],
  ["GeForce 8800 GTX", "November 2006", "G80", "128", "1350", "346"],
  ["GeForce GT 630 (DDR3)", "April 2012", "GK107", "192", "875", "336"],
  ["GeForce 9800 GT", "July 2008", "G92a/G92b", "112", "1500", "336"],
  ["GeForce 8800 GT (512MB)", "October 2007", "G92", "112", "1500", "336"],
  ["GeForce 8800 GT (256MB)", "December 2007", "G92", "112", "1500", "336"],
  ["GeForce GTX 285", "January 2009", "GT200", "240", "648", "311"],
  ["GeForce GT 630 (GDDR5)", "May 2012", "GF108", "96", "810", "311"],
  ["GeForce GT 440 (GDDR5)", "February 2011", "GF108", "96", "810", "311"],
  ["GeForce GT 440 (GDDR3)", "February 2011", "GF108", "96", "810", "311"],
  ["GeForce GTX 275", "April 2009", "GT200", "240", "633", "304"],
  ["GeForce GTX 280", "June 2008", "GT200", "240", "602", "289"],
  ["Radeon HD 2900 GT", "November 2007", "R600", "240", "600", "288"],
  ["GeForce GT 730 (128-bit, DDR3)", "June 2014", "GF108", "96", "700", "269"],
  ["GeForce GT 530", "May 2011", "GF118", "96", "700", "269"],
  ["GeForce GT 430", "October 2010", "GF108", "96", "700", "269"],
  ["GeForce 9600 GSO", "May 2008", "G92", "96", "1375", "264"],
  ["GeForce 8800 GS", "January 2008", "G92", "96", "1375", "264"],
  ["GeForce GT 240 (GDDR5)", "November 2009", "GT215", "96", "1340", "257"],
  ["GeForce GT 240 (DDR3)", "November 2009", "GT215", "96", "1340", "257"],
  ["GeForce GTX 260", "September 2008", "GT200", "216", "576", "249"],
  ["Radeon HD 6450", "April 2011", "Caicos", "160", "750", "240"],
  ["GeForce 8800 GTS (640MB)", "November 2006", "G80", "96", "1188", "228"],
  ["GeForce 8800 GTS (320MB)", "February 2007", "G80", "96", "1188", "228"],
  ["GeForce GTX 260", "June 2008", "GT200", "192", "576", "221"],
  ["GeForce 9600 GT", "February 2008", "G94", "64", "1625", "208"],
  ["Radeon R5 230", "April 2014", "Caicos", "160", "625", "200"],
  ["Radeon HD 2600 XT", "June 2007", "RV630", "120", "800", "192"],
  ["Radeon HD 3650 (DDR3)", "January 2008", "RV635", "120", "725", "174"],
  ["Radeon HD 3650 (DDR2)", "January 2008", "RV635", "120", "725", "174"],
  ["GeForce GT 520", "April 2011", "GF119", "48", "810", "156"],
  ["Radeon HD 2600 Pro", "June 2007", "RV630", "120", "600", "144"],
  ["GeForce GT 220 (DDR3)", "October 2009", "GT216", "48", "1360", "131"],
  ["GeForce GT 220 (DDR2)", "October 2009", "GT216", "48", "1335", "128"],
  ["Radeon HD 5450", "February 2010", "Cedar", "80", "650", "104"],
  ["Radeon HD 4550", "September 2008", "RV710", "80", "600", "96"],
  ["Radeon HD 4350", "September 2008", "RV710", "80", "600", "96"],
  ["GeForce 8600 GTS", "April 2007", "G84", "32", "1450", "93"],
  ["GeForce 9500 GT (GDDR3)", "July 2008", "G96", "32", "1400", "90"],
  ["GeForce 9500 GT (DDR2)", "July 2008", "G96", "32", "1400", "90"],
  ["GeForce 8600 GT (GDDR3)", "April 2007", "G84", "32", "1188", "76"],
  ["GeForce 8600 GT (DDR2)", "April 2007", "G84", "32", "1188", "76"],
  ["GeForce GT 420", "September 2010", "GF108", "48", "700", "67"],
  ["Radeon HD 2400 XT", "June 2007", "RV610", "40", "650", "52"],
  ["GeForce 9400 GT", "August 2008", "G96", "16", "1400", "45"],
  ["Radeon HD 2400 Pro", "June 2007", "RV610", "40", "525", "42"],
  ["Radeon HD 2300", "June 2007", "RV610", "40", "525", "42"],
  ["GeForce 8600 GS", "April 2007", "G84", "16", "1180", "38"],
  ["Radeon X1950 XTX *", "October 2006", "R580+", "48", "650", "31.2 *"],
  ["Radeon X1900 XTX *", "January 2006", "R580", "48", "650", "31.2 *"],
  ["Radeon X1950 XT *", "October 2006", "R580+", "48", "625", "30.0 *"],
  ["Radeon X1900 XT *", "January 2006", "R580", "48", "625", "30.0 *"],
  ["GeForce 8500 GT", "April 2007", "G86", "16", "900", "29"],
  ["GeForce 8400 GS", "June 2007", "G86", "16", "900", "29"],
  ["GeForce 7950 GX2 *", "June 2006", "2x G71", "48", "500", "24.0 *"],
  ["GeForce 9300 GS", "June 2008", "G98", "8", "1400", "22"],
  ["GeForce 9300 GE", "June 2008", "G98", "8", "1300", "21"],
  ["Radeon X1950 Pro *", "October 2006", "RV570", "36", "575", "20.7 *"],
  ["Radeon X1900 GT *", "May 2006", "R580", "36", "575", "20.7 *"],
  ["Radeon X1950 GT *", "January 2007", "RV570", "36", "500", "18.0 *"],
  ["GeForce 7900 GTX *", "March 2006", "G71", "24", "650", "15.6 *"],
  ["GeForce 7900 GTO *", "October 2006", "G71", "24", "650", "15.6 *"],
  ["GeForce 8300 GS", "July 2007", "G86", "8", "900", "14"],
  ["GeForce 7950 GT *", "September 2006", "G71", "24", "550", "13.2 *"],
  ["GeForce 7800 GTX (512MB) *", "November 2005", "G70", "24", "550", "13.2 *"],
  ["Radeon X1650 XT *", "October 2006", "RV560", "24", "525", "12.6 *"],
  ["GeForce 7900 GT *", "March 2006", "G71", "24", "450", "10.8 *"],
  ["GeForce 7800 GTX (256MB) *", "June 2005", "G70", "24", "430", "10.3 *"],
  ["Radeon X1800 XT *", "October 2005", "R520", "16", "625", "10.0 *"],
  ["Radeon X1650 GT *", "May 2007", "RV560", "24", "400", "9.6 *"],
  ["GeForce 7900 GS *", "May 2006", "G71", "20", "450", "9.0 *"],
  ["Radeon X850 XT Platinum *", "December 2004", "R480", "16", "540", "8.6 *"],
  ["Radeon X850 XT *", "December 2004", "R480", "16", "520", "8.3 *"],
  ["Radeon X800 XT Platinum *", "May 2004", "R423", "16", "520", "8.3 *"],
  ["Radeon X800 XT *", "December 2004", "R423", "16", "500", "8.0 *"],
  ["Radeon X1800 XL *", "October 2005", "R520", "16", "500", "8.0 *"],
  ["GeForce 7800 GT *", "August 2005", "G70", "20", "400", "8.0 *"],
  ["Radeon X1650 Pro *", "August 2006", "RV535", "12", "600", "7.2 *"],
  ["Radeon X1600 XT *", "October 2005", "RV530", "12", "590", "7.1 *"],
  ["GeForce 7600 GT *", "March 2006", "G73", "12", "560", "6.7 *"],
  ["Radeon X800 XL *", "December 2004", "R430", "16", "400", "6.4 *"],
  ["GeForce 6800 Ultra *", "June 2004", "NV45", "16", "400", "6.4 *"],
  ["Radeon X850 Pro *", "December 2004", "R480", "12", "507", "6.1 *"],
  ["Radeon X1800 GTO *", "March 2006", "R520", "12", "500", "6.0 *"],
  ["Radeon X1600 Pro *", "October 2005", "RV530", "12", "500", "6.0 *"],
  ["Radeon X1300 XT *", "August 2006", "RV530", "12", "500", "6.0 *"],
  ["GeForce 7800 GS *", "February 2006", "G70", "16", "375", "6.0 *"],
  ["Radeon X800 Pro *", "May 2004", "R423", "12", "475", "5.7 *"],
  ["GeForce 6800 GT *", "June 2004", "NV45", "16", "350", "5.6 *"],
  ["GeForce 6800 GS (PCIe) *", "November 2005", "NV42", "12", "425", "5.1 *"],
  [
    "Radeon X800 GTO (256MB) *",
    "September 2005",
    "R423/R480",
    "12",
    "400",
    "4.8 *",
  ],
  [
    "Radeon X800 GTO (128MB) *",
    "September 2005",
    "R423/R480",
    "12",
    "400",
    "4.8 *",
  ],
  ["GeForce 7600 GS *", "March 2006", "G73", "12", "400", "4.8 *"],
  ["Radeon X800 *", "December 2004", "R430", "12", "392", "4.7 *"],
  ["GeForce 6800 GS (AGP) *", "December 2005", "NV40", "12", "350", "4.2 *"],
  ["GeForce 6600 GT *", "November 2004", "NV43", "8", "500", "4.0 *"],
  ["GeForce 6800 *", "November 2004", "NV41/NV42", "12", "325", "3.9 *"],
  ["Radeon X800 GT *", "December 2005", "R423/R480", "8", "475", "3.8 *"],
  ["Radeon X800 SE *", "October 2004", "R420", "8", "425", "3.4 *"],
  ["Radeon X700 Pro *", "December 2004", "RV410", "8", "425", "3.4 *"],
  ["Radeon 9800 XT *", "September 2003", "R360", "8", "412", "3.3 *"],
  ["Radeon X700 *", "September 2005", "RV410", "8", "400", "3.2 *"],
  ["Radeon 9800 Pro *", "March 2003", "R350", "8", "380", "3.0 *"],
  ["GeForce 7300 GT (GDDR3) *", "May 2006", "G73", "8", "350", "2.8 *"],
  ["GeForce 7300 GT (DDR2) *", "May 2006", "G73", "8", "350", "2.8 *"],
  ["Radeon 9800 SE (128-bit) *", "March 2003", "R350", "8", "325", "2.6 *"],
  ["Radeon 9800 *", "March 2003", "R350", "8", "325", "2.6 *"],
  ["Radeon 9700 Pro *", "July 2002", "R300", "8", "325", "2.6 *"],
  ["GeForce 6800 XT *", "September 2005", "NV42", "8", "325", "2.6 *"],
  ["GeForce 6800 LE *", "January 2005", "NV41/NV42", "8", "325", "2.6 *"],
  ["Radeon X1300 Pro *", "October 2005", "RV515", "4", "600", "2.4 *"],
  ["GeForce 6600 (128-bit) *", "August 2004", "NV43", "8", "300", "2.4 *"],
  ["Radeon 9700 *", "October 2002", "R300", "8", "275", "2.2 *"],
  ["Radeon 9500 Pro *", "October 2002", "R300", "8", "275", "2.2 *"],
  ["GeForce 7300 GS *", "January 2006", "G72", "4", "550", "2.2 *"],
  ["Radeon X600 XT *", "September 2004", "RV380", "4", "500", "2.0 *"],
  ["Radeon X1550 *", "January 2007", "RV516", "4", "500", "2.0 *"],
  ["Radeon 9600 XT *", "September 2003", "RV360", "4", "500", "2.0 *"],
  ["GeForce FX 5800 Ultra *", "January 2003", "NV30", "4", "500", "2.0 *"],
  ["GeForce FX 5950 Ultra *", "October 2003", "NV38", "4", "475", "1.9 *"],
  ["GeForce FX 5700 Ultra *", "October 2003", "NV36", "4", "475", "1.9 *"],
  ["GeForce FX 5900 Ultra *", "May 2003", "NV35", "4", "450", "1.8 *"],
  ["GeForce FX 5700 *", "October 2003", "NV36", "4", "425", "1.7 *"],
  ["Radeon X600 Pro *", "September 2004", "RV370", "4", "400", "1.6 *"],
  ["Radeon X600 Pro *", "September 2004", "RV380", "4", "400", "1.6 *"],
  ["Radeon X600 *", "September 2004", "RV370", "4", "400", "1.6 *"],
  ["Radeon 9600 Pro *", "March 2003", "RV350", "4", "400", "1.6 *"],
  ["GeForce FX 5900 XT *", "December 2003", "NV35", "4", "390", "1.6 *"],
  ["GeForce FX 5900 *", "May 2003", "NV35", "4", "400", "1.6 *"],
  ["GeForce FX 5800 *", "January 2003", "NV30", "4", "400", "1.6 *"],
  ["GeForce FX 5600 Ultra *", "March 2003", "NV31", "4", "400", "1.6 *"],
  ["Radeon 9800 SE (256-bit) *", "March 2003", "R350", "4", "380", "1.5 *"],
  ["GeForce 7300 LE *", "March 2006", "G72", "4", "350", "1.4 *"],
  ["GeForce 6200 TurboCache *", "December 2004", "NV44", "4", "350", "1.4 *"],
  ["Radeon 9600 SE *", "September 2003", "RV350", "4", "325", "1.3 *"],
  ["Radeon 9600 *", "September 2003", "RV350", "4", "325", "1.3 *"],
  ["GeForce FX 5600 *", "March 2003", "NV31", "4", "325", "1.3 *"],
  ["GeForce FX 5200 Ultra *", "March 2003", "NV34", "4", "325", "1.3 *"],
  ["GeForce 6600 LE *", "June 1905", "NV43", "4", "325", "1.3 *"],
  ["Radeon X300 SE *", "September 2004", "RV370", "4", "300", "1.2 *"],
  ["GeForce 6200 *", "October 2004", "NV43", "4", "300", "1.2 *"],
  ["GeForce 4 Ti4800 *", "January 2003", "NV28", "4", "300", "1.2 *"],
  ["GeForce 4 Ti4600 *", "February 2002", "NV25", "4", "300", "1.2 *"],
  ["Radeon 9500 *", "October 2002", "R300", "4", "275", "1.1 *"],
  ["Radeon 8500 *", "August 2001", "R200", "4", "275", "1.1 *"],
  ["GeForce FX 5500 *", "March 2004", "NV34B", "4", "270", "1.1 *"],
  ["GeForce 4 Ti4800 SE *", "January 2003", "NV28", "4", "275", "1.1 *"],
  ["GeForce 4 Ti4400 *", "February 2002", "NV25", "4", "275", "1.1 *"],
  ["Radeon X1050 (128-bit) *", "December 2006", "RV350", "4", "250", "1.0 *"],
  ["Radeon 9550 *", "January 2004", "RV350", "4", "250", "1.0 *"],
  ["Radeon 9250 *", "March 2004", "RV280", "4", "240", "1.0 *"],
  ["Radeon 9200 *", "April 2003", "RV280", "4", "250", "1.0 *"],
  ["Radeon 9100 *", "April 2003", "R200", "4", "250", "1.0 *"],
  ["Radeon 9000 *", "August 2002", "RV250", "4", "250", "1.0 *"],
  ["GeForce FX 5700 LE *", "March 2004", "NV36", "4", "250", "1.0 *"],
  ["GeForce FX 5200 (64-bit) *", "March 2003", "NV34", "4", "250", "1.0 *"],
  ["GeForce FX 5200 (128-bit) *", "March 2003", "NV34", "4", "250", "1.0 *"],
  ["GeForce 4 Ti4200 *", "April 2002", "NV25", "4", "250", "1.0 *"],
  ["GeForce 3 Ti500 *", "October 2001", "NV20", "4", "240", "1.0 *"],
  ["GeForce 2 Ultra *", "August 2000", "NV16", "4", "250", "1.0 *"],
  ["GeForce 2 Ti *", "October 2001", "NV15", "4", "250", "1.0 *"],
  ["GeForce 7200 GS *", "January 2006", "G72", "2", "450", "0.9 *"],
  ["Radeon X300 *", "September 2004", "RV370", "4", "200", "0.8 *"],
  ["Radeon 9200 SE *", "March 2003", "RV280", "4", "200", "0.8 *"],
  ["GeForce 3 *", "February 2001", "NV20", "4", "200", "0.8 *"],
  ["GeForce 2 GTS *", "April 2000", "NV15", "4", "200", "0.8 *"],
  ["GeForce 3 Ti200 *", "October 2001", "NV20", "4", "175", "0.7 *"],
  ["Radeon 7500 *", "August 2001", "RV200", "2", "290", "0.6 *"],
  ["GeForce 4 MX460 *", "February 2002", "NV17", "2", "300", "0.6 *"],
  ["GeForce 4 MX440 *", "February 2002", "NV17", "2", "275", "0.6 *"],
  ["Rage Fury MAXX *", "October 1999", "2x ATI Rage", "4", "125", "0.5 *"],
  ["GeForce 4 MX420 *", "February 2002", "NV17", "2", "250", "0.5 *"],
  ["GeForce 256 SDR *", "October 1999", "NV10", "4", "120", "0.5 *"],
  ["GeForce 256 DDR *", "December 1999", "NV10", "4", "120", "0.5 *"],
  ["GeForce 2 MX400 *", "March 2001", "NV11", "2", "200", "0.4 *"],
  ["GeForce 2 MX200 *", "March 2001", "NV11", "2", "175", "0.4 *"],
  ["Rage 128 Ultra *", "August 1999", "ATI Rage", "2", "130", "0.3 *"],
  ["Rage 128 Pro *", "August 1999", "ATI Rage", "2", "125", "0.3 *"],
  ["Radeon SDR *", "June 2000", "R100", "2", "166", "0.3 *"],
  ["Radeon LE *", "May 2001", "R100", "2", "150", "0.3 *"],
  ["Radeon DDR *", "April 2000", "R100", "2", "166", "0.3 *"],
  ["Radeon 7200 SDR *", "June 2000", "R100", "2", "166", "0.3 *"],
  ["Radeon 7200 DDR *", "April 2000", "R100", "2", "166", "0.3 *"],
  ["Nvidia Riva TNT2 Ultra *", "March 1999", "NV5", "2", "150", "0.3 *"],
  ["Nvidia Riva TNT2 Pro *", "October 1999", "NV5", "2", "143", "0.3 *"],
  ["Nvidia Riva TNT2", "March 1999", "NV5", "2", "125", "0.3 *"],
  ["Rage 128 GL", "August 1998", "ATI Rage", "2", "103", "0.2 *"],
  ["Radeon 7000", "February 2001", "RV100", "1", "183", "0.2 *"],
  ["Nvidia Riva TNT", "June 1998", "NV4", "2", "90", "0.2 *"],
  ["Nvidia Riva 128", "August 1997", "NV3", "1", "100", "0.1 *"],
];
export default performance;
