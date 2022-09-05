import React from 'react'
import { Image } from "react-bootstrap";





const About = () => {

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-10 mt-5">
                    <p className='text-start'>The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.

                        The iPhone has a user interface built around a multi-touch screen. It connects to cellular networks or Wi-Fi, and can make calls, browse the web, take pictures, play music and send and receive emails and text messages. Since the iPhone's launch further features have been added, including larger screen sizes, shooting video, waterproofing, the ability to install third-party mobile apps through an app store, and many accessibility features. Up to iPhone 8 and 8 Plus, iPhones used a layout with a single button on the front panel that returns the user to the home screen. Since iPhone X, iPhone models have switched to a nearly bezel-less front screen design with app switching activated by gesture recognition. The older layout today is still used for Apple's currently-produced iPhone SE series.

                        The iPhone is one of the two largest smartphone platforms in the world alongside Android, forming a large part of the luxury market. The iPhone has generated large profits for Apple, making it one of the world's most valuable publicly traded companies. The first-generation iPhone was described as "revolutionary" and a "game-changer" for the mobile phone industry and subsequent models have also garnered praise. The iPhone has been credited with popularizing the smartphone and slate form factor, and with creating a large market for smartphone apps, or "app economy". As of January 2017, Apple's App Store contained more than 2.2 million applications for the iPhone.</p>
                    <p className='text-start'>The electrical telegraph systems, developed in the early 19th century, used electrical signals to send text messages. In the late 19th century, the wireless telegraphy was developed using radio waves.

                        In 1933, the German Reichspost (Reich postal service) introduced the first "telex" service.[2][3]

                        The University of Hawaii began using radio to send digital information as early as 1971, using ALOHAnet.[citation needed] Friedhelm Hillebrand conceptualised SMS in 1984 while working for Deutsche Telekom. Sitting at a typewriter at home, Hillebrand typed out random sentences and counted every letter, number, punctuation, and space. Almost every time, the messages contained fewer than 160 characters, thus giving the basis for the limit one could type via text messaging.[4] With Bernard Ghillebaert of France Télécom, he developed a proposal for the GSM (Groupe Spécial Mobile) meeting in February 1985 in Oslo.[5] The first technical solution evolved in a GSM subgroup under the leadership of Finn Trosby. It was further developed under the leadership of Kevin Holley and Ian Harris (see Short Message Service).[6] SMS forms an integral part of Signalling System No. 7 (SS7).[7] Under SS7, it is a "state" with a 160 character data, coded in the ITU-T "T.56" text format, that has a "sequence lead in" to determine different language codes and may have special character codes that permit, for example, sending simple graphs as text. This was part of ISDN (Integrated Services Digital Network) and since GSM is based on this, it made its way to the mobile phone. Messages could be sent and received on ISDN phones, and these can send SMS to any GSM phone. The possibility of doing something is one thing, implementing it another, but systems existed from 1988 that sent SMS messages to mobile phones[citation needed] (compare ND-NOTIS).

                        SMS messaging was used for the first time on 3 December 1992,[8] when Neil Papworth, a 22-year-old test engineer for Sema Group in the UK[9] (now Airwide Solutions),[10] used a personal computer to send the text message "Merry Christmas" via the Vodafone network to the phone of Richard Jarvis,[11][12] who was at a party in Newbury, Berkshire, which had been organized to celebrate the event. Modern SMS text messaging is usually messaging from one mobile phone to another. Finnish Radiolinja became the first network to offer a commercial person-to-person SMS text messaging service in 1994. When Radiolinja's domestic competitor, Telecom Finland (now part of TeliaSonera) also launched SMS text messaging in 1995 and the two networks offered cross-network SMS functionality, Finland became the first nation where SMS text messaging was offered on a competitive as well as on a commercial basis. GSM was allowed[by whom?] in the United States and the radio frequencies were blocked and awarded to US "Carriers" to use US technology. Hence there is no "development" in the US in mobile messaging service. The GSM in the US had to use a frequency allocated for private communication services (PCS) – what the ITU frequency régime had blocked for DECT – Digital Enhanced Cordless Telecommunications – 1000-feet range picocell, but survived. American Personal Communications (APC), the first GSM carrier in America, provided the first text-messaging service in the United States. Sprint Telecommunications Venture, a partnership of Sprint Corp. and three large cable-TV companies, owned 49 percent of APC. The Sprint venture was the largest single buyer at a government-run spectrum auction that raised $7.7 billion in 2005 for PCS licenses. APC operated under the brand name of Sprint Spectrum and launched its service on 15 November 1995, in Washington, D.C. and in Baltimore, Maryland. Vice President Al Gore in Washington, D.C. made the initial phone-call to launch the network, calling Mayor Kurt Schmoke in Baltimore.[13]

                    </p>
                </div>
                <div className="col-md-2 mt-5">
                    <Image className='w-100 mb-5' src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg" rounded />
                    <Image className='mt-5 w-100' src="https://phonedady.com/uploads/model_images/apple_iphone_13_pro.webp" rounded />
                </div>
            </div>
        </div>
    );
};

export default About;