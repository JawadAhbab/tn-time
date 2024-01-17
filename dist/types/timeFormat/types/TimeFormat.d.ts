export type TimeFormat = (date: Date, format?: string | null, opts?: TimeFormatOpts) => string;
export interface TimeFormatOpts {
    zone?: TimeZone;
}
export type FormatArr = {
    iskey: boolean;
    char: string;
}[];
export type Converters = {
    [keys in Charkeylist]: Function;
};
export type Charkeylist = 'd' | 'dd' | 'D' | 'DD' | 'm' | 'mm' | 'M' | 'MM' | 'y' | 'Y' | 'h' | 'hh' | 'H' | 'HH' | 'i' | 'ii' | 's' | 'ss' | 'S' | 'SS' | 'a' | 'A';
type TimeZone = 'Africa/Abidjan' | 'Africa/Nairobi' | 'Africa/Algiers' | 'Africa/Lagos' | 'Africa/Bissau' | 'Africa/Maputo' | 'Africa/Cairo' | 'Africa/Casablanca' | 'Africa/Ceuta' | 'Africa/El_Aaiun' | 'Africa/Johannesburg' | 'Africa/Juba' | 'Africa/Khartoum' | 'Africa/Monrovia' | 'Africa/Ndjamena' | 'Africa/Sao_Tome' | 'Africa/Tripoli' | 'Africa/Tunis' | 'Africa/Windhoek' | 'America/Adak' | 'America/Anchorage' | 'America/Puerto_Rico' | 'America/Araguaina' | 'America/Argentina/Buenos_Aires' | 'America/Argentina/Catamarca' | 'America/Argentina/Cordoba' | 'America/Argentina/Jujuy' | 'America/Argentina/La_Rioja' | 'America/Argentina/Mendoza' | 'America/Argentina/Rio_Gallegos' | 'America/Argentina/Salta' | 'America/Argentina/San_Juan' | 'America/Argentina/San_Luis' | 'America/Argentina/Tucuman' | 'America/Argentina/Ushuaia' | 'America/Asuncion' | 'America/Panama' | 'America/Bahia_Banderas' | 'America/Bahia' | 'America/Barbados' | 'America/Belem' | 'America/Belize' | 'America/Boa_Vista' | 'America/Bogota' | 'America/Boise' | 'America/Cambridge_Bay' | 'America/Campo_Grande' | 'America/Cancun' | 'America/Caracas' | 'America/Cayenne' | 'America/Chicago' | 'America/Chihuahua' | 'America/Ciudad_Juarez' | 'America/Costa_Rica' | 'America/Phoenix' | 'America/Cuiaba' | 'America/Danmarkshavn' | 'America/Dawson_Creek' | 'America/Dawson' | 'America/Denver' | 'America/Detroit' | 'America/Edmonton' | 'America/Eirunepe' | 'America/El_Salvador' | 'America/Tijuana' | 'America/Fort_Nelson' | 'America/Fort_Wayne' | 'America/Fortaleza' | 'America/Glace_Bay' | 'America/Godthab' | 'America/Goose_Bay' | 'America/Grand_Turk' | 'America/Guatemala' | 'America/Guayaquil' | 'America/Guyana' | 'America/Halifax' | 'America/Havana' | 'America/Hermosillo' | 'America/Indiana/Knox' | 'America/Indiana/Marengo' | 'America/Indiana/Petersburg' | 'America/Indiana/Tell_City' | 'America/Indiana/Vevay' | 'America/Indiana/Vincennes' | 'America/Indiana/Winamac' | 'America/Inuvik' | 'America/Iqaluit' | 'America/Jamaica' | 'America/Juneau' | 'America/Kentucky/Louisville' | 'America/Kentucky/Monticello' | 'America/La_Paz' | 'America/Lima' | 'America/Los_Angeles' | 'America/Maceio' | 'America/Managua' | 'America/Manaus' | 'America/Martinique' | 'America/Matamoros' | 'America/Mazatlan' | 'America/Menominee' | 'America/Merida' | 'America/Metlakatla' | 'America/Mexico_City' | 'America/Miquelon' | 'America/Moncton' | 'America/Monterrey' | 'America/Montevideo' | 'America/Toronto' | 'America/New_York' | 'America/Nome' | 'America/Noronha' | 'America/North_Dakota/Beulah' | 'America/North_Dakota/Center' | 'America/North_Dakota/New_Salem' | 'America/Ojinaga' | 'America/Paramaribo' | 'America/Port-au-Prince' | 'America/Rio_Branco' | 'America/Porto_Velho' | 'America/Punta_Arenas' | 'America/Winnipeg' | 'America/Rankin_Inlet' | 'America/Recife' | 'America/Regina' | 'America/Resolute' | 'America/Santarem' | 'America/Santiago' | 'America/Santo_Domingo' | 'America/Sao_Paulo' | 'America/Scoresbysund' | 'America/Sitka' | 'America/St_Johns' | 'America/Swift_Current' | 'America/Tegucigalpa' | 'America/Thule' | 'America/Vancouver' | 'America/Whitehorse' | 'America/Yakutat' | 'Antarctica/Casey' | 'Antarctica/Davis' | 'Pacific/Port_Moresby' | 'Antarctica/Macquarie' | 'Antarctica/Mawson' | 'Pacific/Auckland' | 'Antarctica/Palmer' | 'Antarctica/Rothera' | 'Asia/Riyadh' | 'Antarctica/Troll' | 'Antarctica/Vostok' | 'Europe/Berlin' | 'Asia/Almaty' | 'Asia/Amman' | 'Asia/Anadyr' | 'Asia/Aqtau' | 'Asia/Aqtobe' | 'Asia/Ashgabat' | 'Asia/Atyrau' | 'Asia/Baghdad' | 'Asia/Qatar' | 'Asia/Baku' | 'Asia/Bangkok' | 'Asia/Barnaul' | 'Asia/Beirut' | 'Asia/Bishkek' | 'Asia/Brunei' | 'Asia/Kolkata' | 'Asia/Chita' | 'Asia/Choibalsan' | 'Asia/Shanghai' | 'Asia/Colombo' | 'Asia/Dhaka' | 'Asia/Damascus' | 'Asia/Dili' | 'Asia/Dubai' | 'Asia/Dushanbe' | 'Asia/Famagusta' | 'Asia/Gaza' | 'Asia/Hebron' | 'Asia/Ho_Chi_Minh' | 'Asia/Hong_Kong' | 'Asia/Hovd' | 'Asia/Irkutsk' | 'Europe/Istanbul' | 'Asia/Jakarta' | 'Asia/Jayapura' | 'Asia/Jerusalem' | 'Asia/Kabul' | 'Asia/Kamchatka' | 'Asia/Karachi' | 'Asia/Urumqi' | 'Asia/Kathmandu' | 'Asia/Khandyga' | 'Asia/Krasnoyarsk' | 'Asia/Kuala_Lumpur' | 'Asia/Macau' | 'Asia/Magadan' | 'Asia/Makassar' | 'Asia/Manila' | 'Asia/Nicosia' | 'Asia/Novokuznetsk' | 'Asia/Novosibirsk' | 'Asia/Omsk' | 'Asia/Oral' | 'Asia/Pontianak' | 'Asia/Pyongyang' | 'Asia/Qostanay' | 'Asia/Qyzylorda' | 'Asia/Rangoon' | 'Asia/Sakhalin' | 'Asia/Samarkand' | 'Asia/Seoul' | 'Asia/Srednekolymsk' | 'Asia/Taipei' | 'Asia/Tashkent' | 'Asia/Tbilisi' | 'Asia/Tehran' | 'Asia/Thimphu' | 'Asia/Tokyo' | 'Asia/Tomsk' | 'Asia/Ulaanbaatar' | 'Asia/Ust-Nera' | 'Asia/Vladivostok' | 'Asia/Yakutsk' | 'Asia/Yekaterinburg' | 'Asia/Yerevan' | 'Atlantic/Azores' | 'Atlantic/Bermuda' | 'Atlantic/Canary' | 'Atlantic/Cape_Verde' | 'Atlantic/Faroe' | 'Atlantic/Madeira' | 'Atlantic/South_Georgia' | 'Atlantic/Stanley' | 'Australia/Sydney' | 'Australia/Adelaide' | 'Australia/Brisbane' | 'Australia/Broken_Hill' | 'Australia/Hobart' | 'Australia/Darwin' | 'Australia/Eucla' | 'Australia/Lord_Howe' | 'Australia/Lindeman' | 'Australia/Melbourne' | 'Australia/Perth' | 'CET' | 'Pacific/Easter' | 'CST6CDT' | 'EET' | 'Europe/Dublin' | 'EST' | 'EST5EDT' | 'Etc/GMT-0' | 'Etc/GMT-1' | 'Etc/GMT-10' | 'Etc/GMT-11' | 'Etc/GMT-12' | 'Etc/GMT-13' | 'Etc/GMT-14' | 'Etc/GMT-2' | 'Etc/GMT-3' | 'Etc/GMT-4' | 'Etc/GMT-5' | 'Etc/GMT-6' | 'Etc/GMT-7' | 'Etc/GMT-8' | 'Etc/GMT-9' | 'Etc/GMT+1' | 'Etc/GMT+10' | 'Etc/GMT+11' | 'Etc/GMT+12' | 'Etc/GMT+2' | 'Etc/GMT+3' | 'Etc/GMT+4' | 'Etc/GMT+5' | 'Etc/GMT+6' | 'Etc/GMT+7' | 'Etc/GMT+8' | 'Etc/GMT+9' | 'Etc/UTC' | 'Europe/Brussels' | 'Europe/Andorra' | 'Europe/Astrakhan' | 'Europe/Athens' | 'Europe/London' | 'Europe/Belgrade' | 'Europe/Prague' | 'Europe/Bucharest' | 'Europe/Budapest' | 'Europe/Zurich' | 'Europe/Chisinau' | 'Europe/Gibraltar' | 'Europe/Helsinki' | 'Europe/Kaliningrad' | 'Europe/Kiev' | 'Europe/Kirov' | 'Europe/Lisbon' | 'Europe/Madrid' | 'Europe/Malta' | 'Europe/Minsk' | 'Europe/Paris' | 'Europe/Moscow' | 'Europe/Riga' | 'Europe/Rome' | 'Europe/Samara' | 'Europe/Saratov' | 'Europe/Simferopol' | 'Europe/Sofia' | 'Europe/Tallinn' | 'Europe/Tirane' | 'Europe/Ulyanovsk' | 'Europe/Vienna' | 'Europe/Vilnius' | 'Europe/Volgograd' | 'Europe/Warsaw' | 'HST' | 'Indian/Chagos' | 'Indian/Maldives' | 'Indian/Mauritius' | 'Pacific/Kwajalein' | 'MET' | 'MST' | 'MST7MDT' | 'Pacific/Chatham' | 'Pacific/Apia' | 'Pacific/Bougainville' | 'Pacific/Efate' | 'Pacific/Enderbury' | 'Pacific/Fakaofo' | 'Pacific/Fiji' | 'Pacific/Tarawa' | 'Pacific/Galapagos' | 'Pacific/Gambier' | 'Pacific/Guadalcanal' | 'Pacific/Guam' | 'Pacific/Honolulu' | 'Pacific/Kiritimati' | 'Pacific/Kosrae' | 'Pacific/Marquesas' | 'Pacific/Pago_Pago' | 'Pacific/Nauru' | 'Pacific/Niue' | 'Pacific/Norfolk' | 'Pacific/Noumea' | 'Pacific/Palau' | 'Pacific/Pitcairn' | 'Pacific/Rarotonga' | 'Pacific/Tahiti' | 'Pacific/Tongatapu' | 'PST8PDT' | 'WET';
export {};
