define(["sugar-web/activity/activity"], function (activity) {

	// Manipulate the DOM only when it is ready.
	require(['domReady!'], function (doc) {
		var div = document.getElementById("capitals");
        var answer_div = document.getElementById("answer");
        var result_div = document.getElementById("result");

		var capital = {
			'Afghanistan':'Kabul',
			'Albania':'Tirana',
			'Algeria':'Algiers',
			'Andorra':'Andorra la Vella',
			'Angola':'Luanda',
			'Antigua and Barbuda':'Saint John’s',
			'Argentina':'Buenos Aires',
			'Armenia':'Yerevan',
			'Australia':'Canberra',
			'Austria':'Vienna',
			'Azerbaijan':'Baku',
			'Bahamas':'Nassau',
			'Bahrain':'Manama',
			'Bangladesh':'Dhaka',
			'Barbados':'Bridgetown',
			'Belarus':'Minsk',
			'Belgium':'Brussels',
			'Belize':'Belmopan',
			'Benin':'Porto-Novo',
			'Bhutan':'Thimphu',
			'Bolivia':'Sucre (de jure) andLa Paz (seat of government)',
			'Bosnia and Herzegovina':'Sarajevo',
			'Botswana':'Gaborone',
			'Brazil':'Brasilia',
			'Brunei':'Bandar Seri Begawan',
			'Bulgaria':'Sofia',
			'Burkina Faso':'Ouagadougou',
			'Burundi':'Bujumbura',
			'Cabo Verde':'Praia',
			'Cambodia':'Phnom Penh',
			'Cameroon':'Yaounde',
			'Canada':'Ottawa',
			'Central African Republic':'Bangui',
			'Chad':'N’Djamena',
			'Chile':'Santiago',
			'China':'Beijing',
			'Colombia':'Bogotá',
			'Comoros':'Moroni',
			'Democratic Republic of the Congo':'Kinshasa',
			'Republic of the Congo':'Brazzaville',
			'Costa Rica':'San Jose',
			'Cote d’Ivoire':'Yamoussoukro',
			'Croatia':'Zagreb',
			'Cuba':'Havana',
			'Cyprus':'Nicosia',
			'Czech Republic':'Prague',
			'Denmark':'Copenhagen',
			'Djibouti':'Djibouti (city)',
			'Dominica':'Roseau',
			'Dominican Republic':'Santo Domingo',
			'Ecuador':'Quito',
			'Egypt':'Cairo',
			'El Salvador':'San Salvador',
			'Equatorial Guinea':'Malabo (de jure) and Oyala (seat of government)',
			'Eritrea':'Asmara',
			'Estonia':'Tallinn',
			'Ethiopia':'Addis Ababa',
			'Fiji':'Suva',
			'Finland':'Helsinki',
			'France':'Paris',
			'Gabon':'Libreville',
			'Gambia':'Banjul',
			'Georgia':'Tbilisi',
			'Germany':'Berlin',
			'Ghana':'Accra',
			'Greece':'Athens',
			'Grenada':'Saint George’s',
			'Guatemala':'Guatemala City',
			'Guinea':'Conakry',
			'Guinea-Bissau':'Bissau',
			'Guyana':'Georgetown',
			'Haiti':'Port-au-Prince',
			'Honduras':'Tegucigalpa',
			'Hungary':'Budapest',
			'Iceland':'Reykjavik',
			'India':'New Delhi',
			'Indonesia':'Jakarta',
			'Iran':'Tehran',
			'Iraq':'Baghdad',
			'Ireland':'Dublin',
			'Israel':'Jerusalem',
			'Italy':'Rome',
			'Jamaica':'Kingston',
			'Japan':'Tokyo',
			'Jordan':'Amman',
			'Kazakhstan':'Astana',
			'Kenya':'Nairobi',
			'Kiribati':'Tarawa',
			'Kosovo':'Pristina',
			'Kuwait':'Kuwait City',
			'Kyrgyzstan':'Bishkek',
			'Laos':'Vientiane',
			'Latvia':'Riga',
			'Lebanon':'Beirut',
			'Lesotho':'Maseru',
			'Liberia':'Monrovia',
			'Libya':'Tripoli',
			'Liechtenstein':'Vaduz',
			'Lithuania':'Vilnius',
			'Luxembourg':'Luxembourg (city)',
			'Macedonia (FYROM)':'Skopje',
			'Madagascar':'Antananarivo',
			'Malawi':'Lilongwe',
			'Malaysia':'Kuala Lumpur',
			'Maldives':'Male',
			'Mali':'Bamako',
			'Malta':'Valletta',
			'Marshall Islands':'Majuro',
			'Mauritania':'Nouakchott',
			'Mauritius':'Port Louis',
			'Mexico':'Mexico City',
			'Micronesia':'Palikir',
			'Moldova':'Chisinau',
			'Monaco':'Monaco',
			'Mongolia':'Ulaanbaatar',
			'Montenegro':'Podgorica',
			'Morocco':'Rabat',
			'Mozambique':'Maputo',
			'Myanmar (Burma)':'Naypyidaw',
			'Namibia':'Windhoek',
			'Nauru':'Yaren District (de facto)',
			'Nepal':'Kathmandu',
			'Netherlands':'Amsterdam',
			'New Zealand':'Wellington',
			'Nicaragua':'Managua',
			'Niger':'Niamey',
			'Nigeria':'Abuja',
			'North Korea':'Pyongyang',
			'Norway':'Oslo',
			'Oman':'Muscat',
			'Pakistan':'Islamabad',
			'Palau':'Ngerulmud',
			'Palestine':'Jerusalem (East)',
			'Panama':'Panama City',
			'Papua New Guinea':'Port Moresby',
			'Paraguay':'Asunción',
			'Peru':'Lima',
			'Philippines':'Manila',
			'Poland':'Warsaw',
			'Portugal':'Lisbon',
			'Qatar':'Doha',
			'Romania':'Bucharest',
			'Russia':'Moscow',
			'Rwanda':'Kigal',
			'Saint Kitts and Nevis':'Basseterre',
			'Saint Lucia':'Castries',
			'Saint Vincent and the Grenadines':'Kingstown',
			'Samoa':'Apia',
			'San Marino':'San Marino',
			'Sao Tome and Principe':'São Tomé',
			'Saudi Arabia':'Riyadh',
			'Senegal':'Dakar',
			'Serbia':'Belgrade',
			'Seychelles':'Victoria',
			'Sierra Leone':'Freetown',
			'Singapore':'Singapore',
			'Slovakia':'Bratislava',
			'Slovenia':'Ljubljana',
			'Solomon Islands':'Honiara',
			'Somalia':'Mogadishu',
			'South Africa':'Pretoria (administrative), Cape Town (legislative) and Bloemfontein (judicial)',
			'South Korea':'Seoul',
			'South Sudan':'Juba',
			'Spain':'Madrid',
			'Sri Lanka':'Sri Jayawardenepura Kotte',
			'Sudan':'Khartoum',
			'Suriname':'Paramaribo',
			'Swaziland':'Mbabane (administrative) and Lobamba (legislative, royal)',
			'Sweden':'Stockholm',
			'Switzerland':'Bern',
			'Syria':'Damascus',
			'Taiwan':'Taipei',
			'Tajikistan':'Dushanbe',
			'Tanzania':'Dodoma',
			'Thailand':'Bangkok',
			'Timor-Leste':'Dili',
			'Togo':'Lomé',
			'Tonga':'Nukuʻalofa',
			'Trinidad and Tobago':'Port of Spain',
			'Tunisia':'Tunis',
			'Turkey':'Ankara',
			'Turkmenistan':'Ashgabat',
			'Tuvalu':'Funafuti',
			'Uganda':'Kampala',
			'Ukraine':'Kyiv (also known as Kiev)',
			'United Arab Emirates':'Abu Dhabi',
			'United Kingdom':'London',
			'United States of America':'Washington, D.C.',
			'Uruguay':'Montevideo',
			'Uzbekistan':'Tashkent',
			'Vanuatu':'Port Vila',
			'Vatican City (Holy See)':'Vatican City',
			'Venezuela':'Caracas',
			'Vietnam':'Hanoi',
			'Yemen':'Sana’a',
			'Zambia':'Lusaka',
			'Zimbabwe':'Harare',
						


		};


        var Countries = Object.keys(capital);
		var indexRandom = Math.floor(Math.random()*Countries.length);
		var motRandom = Countries[indexRandom];
		Countries.splice(indexRandom, 1);
		var choices = [motRandom];
		div.innerHTML += "<p>What is the capital of " + motRandom+ " ?</p>";


		var i = 1;    
		while(i <= 3  )  
		{ 	i=i+1;
			var other_indexRandom = Math.floor(Math.random()*Countries.length);
			var others_capitals = Countries[other_indexRandom];
			Countries.splice(other_indexRandom, 1);
            choices.push(others_capitals);
        }

		function shuffleArray(array) {
		    for (var i = array.length - 1; i > 0; i--) {
		        var j = Math.floor(Math.random() * (i + 1));
		        var temp = array[i];
		        array[i] = array[j];
		        array[j] = temp;
		    }
		}
        shuffleArray(choices);

        for (var i in choices) {
		    div.innerHTML += 
		    '<INPUT type="radio" name="results" value="' + capital[choices[i]]+'">'+ capital[choices[i]];
        }


		var myButton = document.getElementById("my-button");
		myButton.onclick = function () {
			var choice = document.querySelector('input[name="results"]:checked').value;
		   		answer_div.innerHTML="You clicked: "+choice;
			if (choice == capital[motRandom]){
				result_div.innerHTML=" Yes! The capital of " + motRandom + " is " + choice + "."
			}else{
				result_div.innerHTML="Your answer is wrong. Try again !"
		};
		}


    });
});
