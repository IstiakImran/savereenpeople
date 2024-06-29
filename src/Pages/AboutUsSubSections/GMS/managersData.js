import PersonPlaceholder from '/PersonPlaceholder.png';
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
import fortynine from '/Others/49.jpg';
import fifty from '/Others/50.jpg';
import fiftyone from '/Others/51.jpg';
import fiftytwo from '/Others/52.jpg';
import fiftythree from '/Others/53.jpg';
import fiftyfour from '/Others/54.jpg';



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
                    { name: "Dhaka Thana Manager", image: "" }
                ]
            }
        }
    },
    "রাজশাহী-১": {
        "AGM": [
            { name: "মোহাম্মদ সিরাজুল ইসলাম", image: thirtytwo }
        ],
        "Zilla Managers": {
            "জয়পুরহাট": {
                "Zilla Manager": { name: "মোঃ রাকিব হাসান", image: fiftyone },
                "Thana Managers": [
                    { name: "জয়পুরহাট Thana Manager", image: "" }
                ]
            },
            'চাঁপাইনবাবগঞ্জ': {
                "Zilla Manager": { name: "সাজেদুর রহমান", image: fiftythree },
                "Thana Managers": [
                    { name: "জয়পুরহাট Thana Manager", image: "" }
                ]
            },
            'পাবনা': {
                "Zilla Manager": { name: "ইকবাল হাসান", image: fifty },
                "Thana Managers": [
                    { name: "জয়পুরহাট Thana Manager", image: "" }
                ]
            },
            'নাটোর': {
                "Zilla Manager": { name: "মোহাম্মদ আজিজুর রহমান", image: fortynine },
                "Thana Managers": [
                    { name: "জয়পুরহাট Thana Manager", image: "" }
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
            { name: "মোহাম্মদ মাফিকুল ইসলাম", image: PersonPlaceholder }
        ],
        "Zilla Managers": {
            "মাগুরা": {
                "Zilla Manager": { name: "খাইরুল আলম", image: fortyfive },
                "Thana Managers": [
                    { thana: "শালিকা থানা", name: "মোহাম্মদ খুরশিদ আলম", image: fortyfour },
                    { thana: "শ্রীপুর থানা", name: "ওমর ফারুক", image: fortyeight },
                    { thana: "মোহাম্মদপুর", name: "মাসুম পারভেজ", image: fourtysix },
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
            "জামালপুর": {
                "Zilla Manager": { name: "আমিনুল ইসলাম", image: fiftytwo },
                "Thana Managers": [
                    { name: "Pahartali Thana Manager", image: "" }
                ]
            }
        }
    },
    "বগুড়া": {
        "AGM": [
            { name: "মোহাম্মদ রবিউল ইসলাম", image: thirtyone }
        ],
        "Zilla Managers": {
            "বগুড়া": {
                "Zilla Manager": { name: "মোহাম্মদ শহীদুল ইসলাম", image: fiftyfour },
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
