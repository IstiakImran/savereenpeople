import twentyeight from '/Others/28.jpg';
import twentynine from '/Others/29.jpg';
import six from '/Others/6.jpg';
import thirtyone from '/Others/31.jpg';
import thirtytwo from '/Others/32.jpg';
import thirtythree from '/Others/33.jpg';
import thirtyfive from '/Others/35.jpg';
import thirtysix from '/Others/36.jpg';
import thirtyseven from '/Others/37.jpg';
import fortyone from '/Others/41.jpg';
import fortytwo from '/Others/42.jpg';
import fortythree from '/Others/43.jpg';
import fortyfour from '/Others/44.jpg';
import fortyfive from '/Others/45.jpg';
import fourtysix from '/Others/46.jpg';
import fortyeight from '/Others/48.jpg';

const managersData = {
    "ঢাকা": {
        "AGM": [
            { name: "মোহাম্মদ মকবুল হোসেন", image: twentyeight },
            { name: "মোঃ সহিদুল ইসলাম", image: twentynine }
        ],
        "Zilla Managers": {
            "Dhaka": {
                "Zilla Manager": { name: "Dhaka Zilla Manager", image: "" },
                "Thana Managers": [
                    { thana: "মোহাম্মদপুর", name: "মাসুম পারভেজ", image: fourtysix },
                ]
            }
        }
    },
    "রাজশাহী-১": {
        "AGM": [
            { name: "মোহাম্মদ সিরাজুল ইসলাম", image: thirtytwo }
        ],
        "Zilla Managers": {
            "Rajshahi": {
                "Zilla Manager": { name: "Rajshahi Zilla Manager", image: "" },
                "Thana Managers": [
                    { name: "Boalia Thana Manager", image: "" }
                ]
            }
        }
    },
    "রাজশাহী-২": {
        "AGM": [
            { name: "মোঃ সোহেল রানা", image: thirtysix }
        ],
        "Zilla Managers": {
            "Naogaon": {
                "Zilla Manager": { name: "Naogaon Zilla Manager", image: "" },
                "Thana Managers": [
                    { name: "Naogaon Sadar Thana Manager", image: "" }
                ]
            }
        }
    },
    "খুলনা-১": {
        "AGM": [
            { name: "মোহাম্মদ মাফিকুল ইসলাম", image: six }
        ],
        "Zilla Managers": {
            "মাগুরা": {
                "Zilla Manager": { name: "খাইরুল আলম", image: fortyfive },
                "Thana Managers": [
                    { thana: "শালিকা থানা", name: "মোহাম্মদ খুরশিদ আলম", image: fortyfour },
                    { thana: "শ্রীপুর থানা", name: "ওমর ফারুক", image: fortyeight }
                ]
            }
        }
    },
    "খুলনা-২": {
        "AGM": [
            { name: "মোঃ কামরুজ্জামান", image: fortytwo }
        ],
        "Zilla Managers": {
            "Khulna": {
                "Zilla Manager": { name: "Khulna Zilla Manager", image: "" },
                "Thana Managers": [
                    { name: "Khalishpur Thana Manager", image: "" }
                ]
            }
        }
    },
    "ময়মনসিংহ": {
        "AGM": [
            { name: "মোহাম্মদ মকবুল হোসেন", image: twentyeight },
            { name: "মোঃ সহিদুল ইসলাম", image: twentynine }
        ],
        "Zilla Managers": {
            "Mymensingh": {
                "Zilla Manager": { name: "Mymensingh Zilla Manager", image: "" },
                "Thana Managers": [
                    { name: "Muktagachha Thana Manager", image: "" }
                ]
            }
        }
    },
    "বগুড়া": {
        "AGM": [
            { name: "মোহাম্মদ রবিউল ইসলাম", image: thirtyone }
        ],
        "Zilla Managers": {
            "Bogura": {
                "Zilla Manager": { name: "Bogura Zilla Manager", image: "" },
                "Thana Managers": [
                    { name: "Sherpur Thana Manager", image: "" }
                ]
            }
        }
    },
    "ফরিদপুর": {
        "AGM": [
            { name: "মোহাম্মদ আবুল কালাম আজাদ", image: thirtyfive }
        ],
        "Zilla Managers": {
            "Faridpur": {
                "Zilla Manager": { name: "Faridpur Zilla Manager", image: "" },
                "Thana Managers": [
                    { name: "Bhanga Thana Manager", image: "" }
                ]
            }
        }
    },
    "রংপুর": {
        "AGM": [
            { name: "মোহাম্মদ বাইজিদ আলম", image: thirtythree }
        ],
        "Zilla Managers": {
            "লালমনিরহাট": {
                "Zilla Manager": { name: "আসাদুজ্জামান", image: fortyone },
                "Thana Managers": [
                    { name: "Gangachara Thana Manager", image: "" }
                ]
            },
            "গাইবান্ধা": {
                "Zilla Manager": { name: "ওমর ফারুক", image: fortythree },
                "Thana Managers": [
                    { name: "Gangachara Thana Manager", image: "" }
                ]
            }
        }
    },
    "চট্টগ্রাম": {
        "AGM": [
            { name: "এ.বি.এম. নাদিম আলম", image: thirtyseven }
        ],
        "Zilla Managers": {
            "Chattogram": {
                "Zilla Manager": { name: "Chattogram Zilla Manager", image: "" },
                "Thana Managers": [
                    { name: "Pahartali Thana Manager", image: "" }
                ]
            }
        }
    }
};

export default managersData;
