
function get_suradata(){
    suradata = [

        { sid:"1", details:{title:"Al-Fatihah[notes 1]", classification: "Meccan", verses: "7", rukus: "1"} },
        { sid:"2", details:{title:"Al-Baqarah", classification: "Medinan", verses: "286", rukus: "40"} },
        { sid:"3", details:{title:"Al Imran", classification: "Medinan", verses: "200", rukus: "20"} },
        { sid:"4", details:{title:"An-Nisa'", classification: "Medinan", verses: "176", rukus: "24"} },
        { sid:"5", details:{title:"Al-Ma'idah", classification: "Medinan", verses: "120", rukus: "16"} },
        { sid:"6", details:{title:"Al-An'am", classification: "Meccan", verses: "165", rukus: "20"} },
        { sid:"7", details:{title:"Al-A'raf", classification: "Meccan", verses: "206", rukus: "24"} },
        { sid:"8", details:{title:"Al-Anfal", classification: "Medinan", verses: "75", rukus: "10"} },
        { sid:"9", details:{title:"At-Tawbah", classification: "Medinan", verses: "129", rukus: "16"} },
        { sid:"10", details:{title:"Yunus", classification: "Meccan", verses: "109", rukus: "11"} },
        { sid:"11", details:{title:"Hud", classification: "Meccan", verses: "123", rukus: "10"} },
        { sid:"12", details:{title:"Yusuf", classification: "Meccan", verses: "111", rukus: "12"} },
        { sid:"13", details:{title:"Ar-Ra'd", classification: "Medinan", verses: "43", rukus: "6"} },
        { sid:"14", details:{title:"Ibraheem", classification: "Meccan", verses: "52", rukus: "7"} },
        { sid:"15", details:{title:"Al-Hijr", classification: "Meccan", verses: "99", rukus: "6"} },
        { sid:"16", details:{title:"An-Nahl", classification: "Meccan", verses: "128", rukus: "16"} },
        { sid:"17", details:{title:"Al-Isra", classification: "Meccan", verses: "111", rukus: "12"} },
        { sid:"18", details:{title:"Al-Kahf", classification: "Meccan", verses: "110", rukus: "12"} },
        { sid:"19", details:{title:"Maryam", classification: "Meccan", verses: "98", rukus: "6"} },
        { sid:"20", details:{title:"Ta-Ha", classification: "Meccan", verses: "135", rukus: "8"} },
        { sid:"21", details:{title:"Al-Anbiya'", classification: "Meccan", verses: "112", rukus: "7"} },
        { sid:"22", details:{title:"Al-Hajj", classification: "Medinan", verses: "78", rukus: "10"} },
        { sid:"23", details:{title:"Al-Mu'minoon", classification: "Meccan", verses: "118", rukus: "6"} },
        { sid:"24", details:{title:"An-Nur", classification: "Medinan", verses: "64", rukus: "9"} },
        { sid:"25", details:{title:"Al-Furqan", classification: "Meccan", verses: "77", rukus: "6"} },
        { sid:"26", details:{title:"Al-Shuara", classification: "Meccan", verses: "227", rukus: "11"} },
        { sid:"27", details:{title:"An-Naml", classification: "Meccan", verses: "93", rukus: "7"} },
        { sid:"28", details:{title:"Al-Qasas", classification: "Meccan", verses: "88", rukus: "9"} },
        { sid:"29", details:{title:"Al-`Ankabut", classification: "Meccan", verses: "69", rukus: "7"} },
        { sid:"30", details:{title:"Ar-Rum", classification: "Meccan", verses: "60", rukus: "6"} },
        { sid:"31", details:{title:"Luqman", classification: "Meccan", verses: "34", rukus: "4"} },
        { sid:"32", details:{title:"As-Sajdah", classification: "Meccan", verses: "30", rukus: "3"} },
        { sid:"33", details:{title:"Al-Ahzab", classification: "Medinan", verses: "73", rukus: "9"} },
        { sid:"34", details:{title:"Saba'", classification: "Meccan", verses: "54", rukus: "6"} },
        { sid:"35", details:{title:"Fatir", classification: "Meccan", verses: "45", rukus: "5"} },
        { sid:"36", details:{title:"Ya seen", classification: "Meccan", verses: "83", rukus: "5"} },
        { sid:"37", details:{title:"As-Saffat", classification: "Meccan", verses: "182", rukus: "5"} },
        { sid:"38", details:{title:"Sad", classification: "Meccan", verses: "88", rukus: "5"} },
        { sid:"39", details:{title:"Az-Zumar", classification: "Meccan", verses: "75", rukus: "8"} },
        { sid:"40", details:{title:"Ghafir", classification: "Meccan", verses: "85", rukus: "9"} },
        { sid:"41", details:{title:"Fussilat", classification: "Meccan", verses: "54", rukus: "14"} },
        { sid:"42", details:{title:"Ash-Shura", classification: "Meccan", verses: "53", rukus: "5"} },
        { sid:"43", details:{title:"Az-Zukhruf", classification: "Meccan", verses: "89", rukus: "7"} },
        { sid:"44", details:{title:"Ad-Dukhan", classification: "Meccan", verses: "59", rukus: "3"} },
        { sid:"45", details:{title:"Al-Jathiyah", classification: "Meccan", verses: "37", rukus: "4"} },
        { sid:"46", details:{title:"Al-Ahqaf", classification: "Meccan", verses: "35", rukus: "4"} },
        { sid:"47", details:{title:"Muhammad", classification: "Medinan", verses: "38", rukus: "0"} },
        { sid:"48", details:{title:"Al-Fath", classification: "Medinan", verses: "29", rukus: "0"} },
        { sid:"49", details:{title:"Al-Hujurat", classification: "Medinan", verses: "18", rukus: "0"} },
        { sid:"50", details:{title:"Qaf", classification: "Meccan", verses: "45", rukus: "0"} },
        { sid:"51", details:{title:"Ad-Dhariyat", classification: "Meccan", verses: "60", rukus: "0"} },
        { sid:"52", details:{title:"At-Tur", classification: "Meccan", verses: "49", rukus: "0"} },
        { sid:"53", details:{title:"An-Najm", classification: "Meccan", verses: "62", rukus: "0"} },
        { sid:"54", details:{title:"Al-Qamar", classification: "Meccan", verses: "55", rukus: "0"} },
        { sid:"55", details:{title:"Ar-Rahman", classification: "Medinan", verses: "78", rukus: "0"} },
        { sid:"56", details:{title:"Al-Waqi'ah", classification: "Meccan", verses: "96", rukus: "0"} },
        { sid:"57", details:{title:"Al-Hadeed", classification: "Medinan", verses: "29", rukus: "0"} },
        { sid:"58", details:{title:"Al-Mujadilah", classification: "Medinan", verses: "22", rukus: "0"} },
        { sid:"59", details:{title:"Al-Hashr", classification: "Medinan", verses: "24", rukus: "0"} },
        { sid:"60", details:{title:"Al-Mumtahanah", classification: "Medinan", verses: "13", rukus: "0"} },
        { sid:"61", details:{title:"As-Saff", classification: "Medinan", verses: "14", rukus: "0"} },
        { sid:"62", details:{title:"Al-Jumu'ah", classification: "Medinan", verses: "11", rukus: "0"} },
        { sid:"63", details:{title:"Al-Munafiqun", classification: "Medinan", verses: "11", rukus: "0"} },
        { sid:"64", details:{title:"At-Taghabun", classification: "Medinan", verses: "18", rukus: "2"} },
        { sid:"65", details:{title:"At-Talaq", classification: "Medinan", verses: "12", rukus: "2"} },
        { sid:"66", details:{title:"At-Tahreem", classification: "Medinan", verses: "12", rukus: "2"} },
        { sid:"67", details:{title:"Al-Mulk", classification: "Meccan", verses: "30", rukus: "2"} },
        { sid:"68", details:{title:"Al-Qalam", classification: "Meccan", verses: "52", rukus: "2"} },
        { sid:"69", details:{title:"Al-Haqqah", classification: "Meccan", verses: "52", rukus: "2"} },
        { sid:"70", details:{title:"Al-Ma'aarij", classification: "Meccan", verses: "44", rukus: "2"} },
        { sid:"71", details:{title:"Nuh", classification: "Meccan", verses: "28", rukus: "2"} },
        { sid:"72", details:{title:"Al-Jinn", classification: "Meccan", verses: "28", rukus: "2"} },
        { sid:"73", details:{title:"Al-Muzzammil", classification: "Meccan", verses: "20", rukus: "2"} },
        { sid:"74", details:{title:"Al-Muddathir", classification: "Meccan", verses: "56", rukus: "2"} },
        { sid:"75", details:{title:"Al-Qiyamah", classification: "Meccan", verses: "40", rukus: "2"} },
        { sid:"76", details:{title:"Al-Insan", classification: "Medinan", verses: "31", rukus: "2"} },
        { sid:"77", details:{title:"Al-Mursalat", classification: "Meccan", verses: "50", rukus: "2"} },
        { sid:"78", details:{title:"An-Naba'", classification: "Meccan", verses: "40", rukus: "2"} },
        { sid:"79", details:{title:"An-Nazi'at", classification: "Meccan", verses: "46", rukus: "2"} },
        { sid:"80", details:{title:"`Abasa", classification: "Meccan", verses: "42", rukus: "1"} },
        { sid:"81", details:{title:"At-Takweer", classification: "Meccan", verses: "29", rukus: "1"} },
        { sid:"82", details:{title:"Al-Infitar", classification: "Meccan", verses: "19", rukus: "1"} },
        { sid:"83", details:{title:"Al-Mutaffifeen", classification: "Meccan", verses: "36", rukus: "1"} },
        { sid:"84", details:{title:"Al-Inshiqaq", classification: "Meccan", verses: "25", rukus: "1"} },
        { sid:"85", details:{title:"Al-Burooj", classification: "Meccan", verses: "22", rukus: "1"} },
        { sid:"86", details:{title:"At-Tariq", classification: "Meccan", verses: "17", rukus: "1"} },
        { sid:"87", details:{title:"Al-A'la", classification: "Meccan", verses: "19", rukus: "1"} },
        { sid:"88", details:{title:"Al-Ghashiyah", classification: "Meccan", verses: "26", rukus: "1"} },
        { sid:"89", details:{title:"Al-Fajr", classification: "Meccan", verses: "30", rukus: "1"} },
        { sid:"90", details:{title:"Al-Balad", classification: "Meccan", verses: "20", rukus: "1"} },
        { sid:"91", details:{title:"Ash-Shams", classification: "Meccan", verses: "15", rukus: "1"} },
        { sid:"92", details:{title:"Al-Lail", classification: "Meccan", verses: "21", rukus: "1"} },
        { sid:"93", details:{title:"Ad-Dhuha", classification: "Meccan", verses: "11", rukus: "1"} },
        { sid:"94", details:{title:"Al-Inshirah", classification: "Meccan", verses: "8", rukus: "1"} },
        { sid:"95", details:{title:"Al-Teen", classification: "Meccan", verses: "8", rukus: "1"} },
        { sid:"96", details:{title:"Al-`Alaq", classification: "Meccan", verses: "19", rukus: "1"} },
        { sid:"97", details:{title:"Al-Qadr", classification: "Meccan", verses: "5", rukus: "1"} },
        { sid:"98", details:{title:"Al-Bayyinah", classification: "Medinan", verses: "8", rukus: "1"} },
        { sid:"99", details:{title:"Az-Zalzala", classification: "Medinan", verses: "8", rukus: "1"} },
        { sid:"100", details:{title:"Al-Adiyat", classification: "Meccan", verses: "11", rukus: "1"} },
        { sid:"101", details:{title:"Al-Qari`ah", classification: "Meccan", verses: "11", rukus: "1"} },
        { sid:"102", details:{title:"At-Takathur", classification: "Meccan", verses: "8", rukus: "1"} },
        { sid:"103", details:{title:"Al-Asr", classification: "Meccan", verses: "3", rukus: "1"} },
        { sid:"104", details:{title:"Al-Humazah", classification: "Meccan", verses: "9", rukus: "1"} },
        { sid:"105", details:{title:"Al-Feel", classification: "Meccan", verses: "5", rukus: "1"} },
        { sid:"106", details:{title:"Al-Quraish", classification: "Meccan", verses: "4", rukus: "1"} },
        { sid:"107", details:{title:"Al-Maa'oun", classification: "Meccan", verses: "7", rukus: "1"} },
        { sid:"108", details:{title:"Al-Kawthar", classification: "Meccan", verses: "3", rukus: "1"} },
        { sid:"109", details:{title:"Al-Kafiroun", classification: "Meccan", verses: "6", rukus: "1"} },
        { sid:"110", details:{title:"An-Nasr", classification: "Medinan", verses: "3", rukus: "1"} },
        { sid:"111", details:{title:"Al-Masad", classification: "Meccan", verses: "5", rukus: "1"} },
        { sid:"112", details:{title:"Al-Ikhlas", classification: "Meccan", verses: "4", rukus: "1"} },
        { sid:"113", details:{title:"Al-Falaq", classification: "Meccan", verses: "5", rukus: "5"} },
        { sid:"114", details:{title:"Al-Nas", classification: "Meccan", verses: "6", rukus: "1"} },
        
        ]
    return suradata;    

}
