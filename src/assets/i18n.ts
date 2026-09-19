import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        navigation: {
          about: 'About Us',
          contact: 'Contact Us',
          cooperation: 'Collaboration',
          copy: '© 2024 Hell’s Kitchen',
          emeil: 'hellskitchenukraine.org@gmail.com',
          home: 'Home',
          news: 'News',
          newsAndEvents: 'News and events',
          phone: '+38 050 560 78 94',
          projects: 'Projects',
          support: 'Donate',
          textRibbon: `A small donation can help feed someone or even save a life + Support us + `,
          userAgreement: 'User agreement',
          reports: 'Reports',
          donate: 'Donate',
        },
        footer: {
          publicOffer: 'Public Offer',
          privacyPolicy: 'Privacy Policy',
          refundPolicy: 'Refund Policy',
        },
        aboutPage: {
          teamSection: {
            title: 'Our command',
            section1: {
              name: 'Egor Goroshenko',
              position: `Co-founder of Hell's Kitchen`,
              text: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
            },
            section2: {
              name: 'Hnat Holyk',
              position: `Project coordinator`,
              text: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
            },
            section3: {
              name: 'Luda Goroshko',
              position: `Project coordinator`,
              text: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
            },
            section4: {
              name: 'Galya',
              position: `Project coordinator`,
              text: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
            },
            section5: {
              name: 'Sveta',
              position: 'Co-founder of Hell’s Kitchen',
              text: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
            },
            section6: {
              name: 'Romchik',
              position: 'Project coordinator',
              text: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
            },
          },
        },

        inProgressPage: {
          text: 'This page is under development and will be available soon.',
        },

        homePage: {
          aboutUs: {
            buttonText: 'Donate',
            copy: `Since the beginning of the full-scale invasion, "Hell's Kitchen" has been preparing about 1,300 meals per day for doctors, patients, critical infrastructure workers, the elderly, and other people affected by the military aggression in Kharkiv.`,
            copy2: `Every day, we invest our efforts to keep people fed, healthy and safe.`,
            label: 'About us',
            title: `A community of people who care and support Kharkiv residents`,
          },
          ourProjects: {
            projectsSectionTitle: 'Projects in which we put our heart and soul',
            card1: {
              buttonText: 'Support',
              copy: `We design and build mechanisms for civil demining`,
              title: 'Demining territories',
            },
            card2: {
              buttonText: 'Support',
              copy: `We prepare meals and provide humanitarian aid to Kharkiv residents`,
              title: 'Feeding people',
            },
            card3: {
              buttonText: 'Support',
              copy: `We repair volunteer cars, medical and evacuation vehicles`,
              title: 'Service stations',
            },
          },
          bannerSection: {
            section1: {
              buttonText: 'Join as a partner',
              copy: `Get involved in joint projects to help civilians suffering from the consequences of war crimes.`,
              copy2: 'We provide regular reports on completed projects.',
              label: "Let's work together",
              title: 'Charity funds',
            },
            section2: {
              buttonText: 'Join',
              copy: `Are you skilled at cooking? You could become a chef or a kitchen assistant. Do you drive a car? We always need drivers for delivery.`,
              copy2: `Do you work in accounting or in the media industry? We need new coordinators and social media operators.`,
              label: "Let's work together",
              title: 'Independent volunteers',
            },
          },
          donateSection: {
            buttonText: 'Donate',
            copy: 'Your donations enable us to feed more than a thousand of Ukrainians daily.',
            copy2: `Thanks to you, we provide vital support to those affected by the war on a daily basis.`,
            title: 'Can you help us financially?',
          },

          helpSection: {
            section1: {
              title: 'Kharkiv residents',
              text: 'Elderly people, people with disabilities, women and children, those who are in a difficult situation caused by russia’s invasion of Ukraine',
            },
            section2: {
              title: 'Hospitals',
              text: 'Doctors who heroically fight for the life of every patient daily',
            },
            section3: {
              title: 'Rescuers',
              text: 'Critical infrastructure services, employees of the State Emergency Service, other volunteers',
            },
            sliders: {
              clinic4: 'Clinic #4',
              childrensHospice: 'Children’s Hospice',
              mentalHealthClinic: 'Mental Health Clinic',
              stateEmergencyService: 'State Emergency Service',
              kononenkoClinic: 'Kononenko Chuguyivska Clinic',
              sytenkoInstitute: 'M.I.Sytenko institute',
              psychiatricClinic3: 'Psychiatric Clinic #3',
              holyTrinity: 'Holy Trinity',
              medcenter:'Center for Emergency Medical Care and Disaster Medicine in Kharkiv Region',
              multihospital:'City Clinical Multidisciplinary Hospital No. 25',
              kharkivregionalhospital:'Kharkiv Regional Clinical Hospital',
              psyinstitutngu:'P. V. Voloshyn Institute of Neurology, Psychiatry and Narcology of the National Academy of Medical Sciences of Ukraine'
            },
            slidersTitle: 'We help',
          },
          mainSection: {
            title: 'Compassion unifies',
            copy: "Hell's Kitchen is a volunteer organization that helps Kharkiv residents during the war. We cook, transport, distribute and order. We help.",
            buttonText: 'Donate',
          },
          mediaSection: {
            title: 'About us in the media',
          },
          newsSection: {
            buttonText: 'More news',
            title: 'News and events',
            section1: {
              date: 'January 5, 2024',
              title: `Delivered food to the village of Maksymivka, Sakhnovshchynska hromada, Kharkiv Oblast`,
            },
            section2: {
              date: 'January 3, 2024',
              title: `Donated raincoats and umbrellas to the girls of the sports club “Vostok”`,
            },
            section3: {
              date: 'January 1, 2024',
              title: `We bake up to 1500 buns despite the bombing of Kharkiv`,
            },
            section4: {
              date: 'December 15, 2023',
              title: `The volunteer organization "Hell’s Kitchen" has been cooperating with Nova Poshta on a permanent basis for many months`,
            },
          },
          partnersSection: {
            title: 'Our partners',
          },
          resultsSection: {
            title: 'Results of our efforts',
            seeInteresting:
              'See interesting reports and news on our social media networks',
            projectCompleted: 'Assistance provided',
            peopleFed: 'People fed',
            mealsPrepared: 'Meals prepared',
            joinInToHelp: 'Join in to help',
            supportBtn: 'Support',
          },
          rewardsSection: {
            title: 'Our recognition',
          },
        },

        notFoundPage: {
          text: `This page wasn't found.`,
        },

        projectsPage: {
          tab1: {
            aboutUs: {
              buttonText: 'Support us',
              label: 'Minefield сlearance',
              title: 'We save lives of our citizens',
              copy1: `We have built a team of engineers, construction developers, and mechanics to create an efficient and low-cost remotely controlled demining vehicle.
Our mission is to enhance the safety of those who clear our land of mines and other dangerous devices. We aspire to assist war-displaced individuals in returning to their homes and feeling secure on their own land.`,
            },
            coordinator: {
              label: 'Project coordinator',
              title: 'Yegor Goroshko',
            },
            label: 'Minefield сlearance',
            mainSection: {
              buttonText: 'Support us',
              copy1: 'We build mechanisms for civilian demining.',
              copy2: `Thousands of citizens' lives remain at risk in certain communities of Kharkiv Oblast.`,
              copy3: `We design and manufacture a demining trawl to clear de-occupied areas of Kharkiv Oblast.`,
              copy4: `We are developing and manufacturing a remote-controlled mine clearance vehicle to enhance the safety of sappers' operations.`,
              title: 'Development of remote security equipment',
            },
          },
          tab2: {
            aboutUs: {
              label: 'Social enterprises',
              title: `Revitalizing the Vilcha village bakery and social service station in Kharkiv`,
              copy1: `In the heart of Vilcha village, we have successfully revived a bakery that has been producing around 50 kg of fresh bread daily for nearly a year. Thanks to investments from foreign partners and a smart distribution of production profits, we have reduced the cost of the end product.`,
              copy2: `This bakery serves as a lifeline for a vital segment of the community: those who are unable to leave the village. The majority of these employees are elderly residents who take pride in crafting high-quality bread. By providing them with meaningful employment opportunities, we are not only fostering a positive work culture but also contributing to the economic revitalization of the region.`,
            },
            coordinator: {
              label: 'Project coordinator',
              title: 'Hnat Holyk',
            },
            label: 'Social enterprises',
            mainSection: {
              buttonText: 'Support us',
              copy1: 'We are restoring businesses in the Kharkiv oblast.',
              copy2: `Thousands of people are returning to their hometowns and villages every day with dreams of restarting a stable life.`,
              copy3: `We are assisting businesses that were forced to cease operations due to the full-scale invasion.`,
              copy4: `This initiative goes beyond creating new jobs; it also supports the economy in the frontline communities of the region.`,
              title: 'Social enterprises in de-occupied territories',
            },
          },
          tab3: {
            aboutUs: {
              label: 'Feeding hospitals and civilians',
              title: `We prepare 1000+ complex meals daily for patients of 8 hospitals in Kharkiv.`,
              copy1: `We cook soups, prepare porridge with meat and bake bread.`,
              copy2: `Since the onset of the full-scale invasion, the demand for nourishing meals has remained relentless. In 2022, Hell’s Kitchen provided over 400,000 meals to 20,000 individuals, and this number continues to grow. Last summer, as hospitals endured relentless shelling, we delivered 10.5 tons of essential food supplies. In addition, we have established a humanitarian hub that distributes clothes, underwear, personal hygiene items and household chemicals to civilians in the border settlements.`,
            },
            coordinator: {
              label: 'Project coordinator',
              title: 'Lyuda Goroshko',
            },
            label: 'Feeding people',
            mainSection: {
              buttonText: 'Support us',
              title: 'Feeding patients in hospitals',
            },
          },
        },
        joinusPage: {
          page: {
            title: 'Fund Reports',
            descriptionText:
              'Here you can review the financial reports and activity reports of the fund for the respective years.',
          },
          },
        reportsPage: {
          page: {
            title: 'Fund Reports',
            descriptionText:
              'Here you can review the financial reports and activity reports of the fund for the respective years.',
          },
          card: {
            year: 'year',
            activity: 'Activity Report',
            financial: 'Financial Report',
            inProgress: 'in progress',
            comingSoon: 'Coming soon',
          },
        },

        donatePage: {
          page: {
            title: 'Support the Foundation',
            description:
              'Your donation helps us continue our work and support those in need.',
          },

          form: {
            submit: 'DONATE',
            loading: 'Processing...',
            redirecting: 'Redirecting...',
          },
          qr: {
            title: 'QR codes for support',
            mono: 'Scan via mono to pay',
            privat: 'Scan via Privat24 or Privat24 for Business to pay',
          },
        },
        payment: {
          successTitle: 'Thank you for your support ❤️',
          pendingTitle: 'Payment is processing',
          errorTitle: 'Payment failed',

          successDesc:
            'Your contribution has been successfully received. Together to victory!',
          pendingDesc:
            'The transaction is under bank verification. This may take a few minutes.',
          errorDesc: 'Unfortunately, an error occurred. No funds were debited.',

          loading: 'Processing...',
          redirecting: 'Redirecting...',

          btnMain: 'Back to Home',
          btnRetry: 'Try Again',
          btnBack: 'Back to Project',

          detailsTitle: 'Transaction details:',
          statusLabel: 'Status:',
          statusSuccess: 'Success',
          statusPending: 'Pending',
          statusError: 'Declined',

          amountLabel: 'Amount:',
          reasonLabel: 'Reason:',
          orderLabel: 'Order ID:',
          copyTooltip: 'Copy ID',
          copied: 'Copied!',

          reasons: {
            approved: 'Approved',
            invalidCard: 'Invalid card number',
            bankDeclined: 'Declined by bank',
            insufficientFunds: 'Insufficient funds',
            expiredCard: 'Card has expired',
            unknown: 'An unknown error occurred',
            onVerification: 'Transaction is under bank verification',
          },
        },
      },
    },
    uk: {
      translation: {
        navigation: {
          about: 'Про нас',
          contact: 'Контакти',
          cooperation: 'Співпраця',
          copy: '© 2024 Hell’s Kitchen',
          email: 'hellskitchenukraine.org@gmail.com',
          home: 'Головна',
          news: 'Новини',
          newsAndEvents: 'Новини та події',
          phone: '+38 050 560 78 94',
          projects: 'Проєкти',
          textRibbon: `Навіть маленький донат може допомогти когось нагодувавати або навіть врятувати життя + Підтримай нас + `,
          support: 'Підтримати',
          userAgreement: 'Угода користувача',
          reports: 'Звітність',
          donate: 'Задонатити',
        },
        aboutPage: {
          teamSection: {
            title: {
              label: 'Наша команда',
            },
            section1: {
              name: 'Єгор Горошко',
              position: `Cпівзасновник Пекельної кухні`,
              text: 'В минулому директор IT компанії, PhD по радіофізиці.',
            },
            section2: {
              name: 'Гнат Голик',
              position: `Координатор проєктів`,
              text: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
            },
            section3: {
              name: 'Люда Горошко',
              position: `Координатор проєктів`,
              text: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
            },
            section4: {
              name: 'Галя',
              position: `Координаторка проєкту`,
              text: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
            },
            section5: {
              name: 'Свєта',
              position: 'Cпівзасновник Пекельної кухні',
              text: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
            },
            section6: {
              name: 'Ромчік',
              position: 'Координатор проєктів',
              text: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
            },
          },
        },

        inProgressPage: {
          text: 'Ця сторінка вже в розробці, і скоро буде доступна.',
        },

        homePage: {
          aboutUs: {
            buttonText: 'Підтримати',
            copy: 'Від початку повномасштабного вторгнення “Пекельна Кухня” щоденно готує близько 1300 обідів для лікарів, пацієнтів, працівників критичних інфраструктур, людям похилого віку, та іншим постраждалим від воєнної агресії людей у м. Харків.',
            copy2: `Ми кожен день вкладаємо сили, щоб люди були нагодовані, здорові та у безпеці.`,
            label: 'Про нас',
            title: 'Об’єднання небайдужих,що підтримують харків’ян',
          },
          ourProjects: {
            card1: {
              buttonText: 'Підтримати',
              copy: `Проектуємо та будуємо механізми для цивільного розмінування`,
              title: 'Розмінування територій',
            },
            card2: {
              buttonText: 'Підтримати',
              copy: `Готуємо обіди та надаємо гуманітарну допомогу харків’янам`,
              title: 'Годування людей',
            },
            card3: {
              buttonText: 'Підтримати',
              copy: `Ремонтуємо автомобілі волонтерів, медичні та евакуаційні авто`,
              title: 'Проєкт СТО',
            },
            projectsSectionTitle: 'Проєкти, в які вкладаємо душу',
          },
          bannerSection: {
            section1: {
              buttonText: 'Приєднатися',
              copy: `Долучайтесь до роботи над спільними проєктами по допомозі цивільним, що страждають від наслідків воєнних злочинів.`,
              copy2: 'Ми надаємо регулярну звітність по виконаним проєктам.',
              label: 'Запрошуємо до співпраці',
              title: 'Благодійні фонди',
            },
            section2: {
              buttonText: 'Приєднатися',
              copy: `Вправно готуєш? Ти міг би стати кухарем або помічником.Водиш автомобіль? Завжди є потреба у водіях на розвозки.`,
              copy2: `Працюєш з бухгалтерію або у сфері медіа? Нам потрібні нові координатори та оператори соц. сторінок.`,
              label: 'Запрошуємо до співпраці',
              title: 'Незалежних волонтерів',
            },
          },
          donateSection: {
            buttonText: 'Підтримати',
            copy: 'Ваші пожертви підтримують діяльність кухні,що годує більше тисячі українців щоденно.',
            copy2: `Завдяки Вам, ми кожен день допомагаємо людям,що потерпають від війни.`,
            title: 'Маєш змогу допомогти коштами?',
          },
          helpSection: {
            section1: {
              title: 'Харків’янам',
              text: 'Похилі люди, інваліди, жінки та діти, що опинилися в важкій ситуації в результаті вторгнення рф в Україну',
            },
            section2: {
              title: 'Лікарням',
              text: 'Лікарі, які щоденно героїчно борються за життя кожного пацієнта',
            },
            section3: {
              title: 'Рятувальникам',
              text: 'Служби критичних інфраструктур, працівники ДСНС та інші волонтери',
            },
            sliders: {
              clinic4: '4-а полiклiника',
              childrensHospice: 'Дитячий хоспiс',
              mentalHealthClinic: 'Псих Диспансер',
              stateEmergencyService: 'ДСНС',
              kononenkoClinic: 'Чугуївська лікарня ім.Кононенка',
              sytenkoInstitute: 'Інститут ім. М.I.Ситенко',
              psychiatricClinic3: '3-я психiатрична лiкарня',
              holyTrinity: 'Свята Трiйця',
              medcenter:'Центр екстреної медичної допомоги та медицини катастроф у Харківській області',
              multihospital:'Міська клінічна багатопрофільна лікарня № 25',
              kharkivregionalhospital:'Харківська обласна клінічна лікарня',
              psyinstitutngu:'Інститут неврології, психіатрії та наркології ім. П. В. Волошина Національної академії медичних наук України'
            },
            slidersTitle: 'Ми допомагаємо',
          },
          mainSection: {
            title: "Небайдужість об'єднує",
            copy: `Пекельна Кухня – це волонтерська організація, що допомагає харків’янам у військовий час. Готуємо, возимо, носимо, замовляємо. Допомагаємо.`,
            buttonText: 'Підтримати',
          },
          mediaSection: {
            title: 'Ми в медіа',
          },
          newsSection: {
            buttonText: 'Усі новини',
            title: 'Новини та події',
            section1: {
              date: '5 січня 2024',
              title: `Доставили їжу у с.Максимівка Сахновщинської ОТГ Харківської області`,
            },
            section2: {
              date: '3 січня 2024',
              title: `Подарували дівчатам зі спортивного клубу «Восток» дощовики та парасольки`,
            },
            section3: {
              date: '1 січня 2024',
              title: `Випікаємо до 1500 паляничок незважаючи на обстріли Харкова`,
            },
            section4: {
              date: '15 грудня 2023',
              title: `Волонтерська організація "Пекельна Кухня" вже багато місяців на постійній основі співпрацює з Новою Поштою`,
            },
          },
          partnersSection: {
            title: 'Наші партнери',
          },
          resultsSection: {
            title: 'Результати роботи',
            seeInteresting:
              'Дивись цікаві звіти та нову інформацію в наших соц мережах',
            projectCompleted: 'Оказаної допомоги',
            peopleFed: 'Людей нагодовано',
            mealsPrepared: 'Порцій виготовлено',
            joinInToHelp: 'Долучитися до допомоги',
            supportBtn: 'Підтримати',
          },
          rewardsSection: {
            title: 'Наші нагороди',
          },
        },

        notFoundPage: {
          text: `Ця сторінка не знайдена.`,
        },

        projectsPage: {
          tab1: {
            aboutUs: {
              buttonText: 'Підтримати',
              label: 'Розмінування територій',
              title: 'Зберігаємо життя нашим громадянам',
              copy1: `Ми зібрали команду інженерів, конструкторів та механіків щоб створити ефективну та дешеву дистанційно керовану машину розмінування. Наша мета — підвищити безпеку тих, хто розчищає нашу землю від мін та інших небезпечних предметів. Ми хочемо допомогти людям, яких вигнала війна повернутися в свої домівки та почувати себе в безпеці на своїй землі.`,
            },
            coordinator: {
              label: 'Керівник проєкту',
              title: 'Єгор Горошко',
            },
            label: 'Розмінування територій',
            mainSection: {
              buttonText: 'Підтримати',
              copy1: 'Будуємо механізми для цивільного розмінування.',
              copy2: `Деякі громади Харківської області залишаються небезпечними для життя тисячі громадян.`,
              copy3: `Ми проектуємо та виробляємо трал для розмінування деокупованих ділянок Харківської області.`,
              copy4: `Ми розробляємо та виготовляємо дистанційно керовану машину розмінування, щоб підвищити безпеку роботи саперів.`,
              title: 'Розробка дистанційних засобів безпеки',
            },
          },
          tab2: {
            aboutUs: {
              label: 'Соціальні підприємства',
              title: 'Пекарня у селі Вільча та соціальне СТО у Харкові',
              copy1: `Ми відновили підприємство, що майже рік виготовляє близько 50 кг хлібу щоденно та зменшили вартість готового продукту завдяки залученню інвестицій від іноземних партнерів і розумному розподілу прибутку виробництва.`,
              copy2: `У пекарні працюють люди, що не мають можливості покинути село. Більшість з них - люди похилого віку, які цінують якісно виготовлений хліб. Це створює сприятливі умови для розвитку культури праці та відновлює економічну стабільність у регіоні.`,
            },
            coordinator: {
              label: 'Керівник проєкту',
              title: 'Гнат Голик',
            },
            label: 'Cоціальні підприємства',
            mainSection: {
              buttonText: 'Підтримати',
              copy1: 'Відновлюємо підприємствау Харківській області.',
              copy2: `Тисячі людей щоденно повертаються у рідні міста та села з мрією про початок стабільного життя.`,
              copy3: `Ми допомагаємо підприємствам, що були вимушені припинити свою діяльність через повномасштабне вторгнення.`,
              copy4: `Це не тільки створення нових робочих місць, але й підтримка економіки у прифронтових громадах області.`,
              title: 'Cоціальні підприємства на деокупованих територіях',
            },
          },
          tab3: {
            aboutUs: {
              label: 'Годування пацієнтів у лікарнях',
              title: `Готуємо 1000+ комплексних обідів щодня для пацієнтів 8 лікарень Харкова`,
              copy1: `Варимо супи, готуємо каші з м’ясом та випікаємо хліб.`,
              copy2: `Потреба людей у поживних обідах не вщухає від початку повномасштабного вторгнення. У 2022 році «Пекельна Кухня» годувала 20’000 людей понад 400’000 разів, і це число росте до нині. Ми передали 10,5 тонн продуктів лікарням, що працювали під щоденними обстрілами влітку минулого року. Крім цього, ми створили гуманітарний штаб, що передає одяг, білизну, засоби індивідуальної гігієни та побутову хімію цивільним у прикордонних населених пунктах.`,
            },
            coordinator: {
              label: 'Координаторка проєкту',
              title: 'Люда Горошко',
            },
            label: 'Годування людей',
            mainSection: {
              buttonText: 'Підтримати',
              title: 'Годування пацієнтів у лікарнях',
            },
          },
        },
        joinusPage: {
          page: {
            title: 'Долучись до нашої діяльності',
            descriptionText:
              '  Для початку співпраці відправте заявку, заповнивши форму.',
          },
        },
        reportsPage: {
          page: {
            title: 'Звітність фонду',
            descriptionText:
              '  Тут ви можете ознайомитися з фінансовими звітами та звітами про діяльність фонду за відповідні роки.',
          },
          card: {
            year: 'рік',
            activity: 'Звіт про діяльність',
            financial: 'Фінансовий звіт',
            inProgress: 'В роботі',
            comingSoon: 'Зʼявиться найближчим часом',
          },
        },

        donatePage: {
          page: {
            title: 'Підтримати фонд',
            description: 'Ваш донат допомагає нам продовжувати роботу',
          },
          form: {
            title: 'Підтримати фонд',
            description: 'Ваш донат допомагає нам продовжувати роботу',
            amountLabel: 'Сума донату, грн',
            submit: 'Задонатити',
            helper: 'Безпечно. Оплата через платіжного провайдера',
            loading: 'Обробка...',
            redirecting: 'Перенаправлення...',
          },
          qr: {
            title: 'Qr коди для підтримки',
            mono: 'Зчитайте через mono для сплати',
            privat:
              'Зчитайте через Приват24 або "Приват24 для бізнесу" для сплати',
          },
        },
        footer: {
          publicOffer: 'Публічна оферта',
          privacyPolicy: 'Політика конфіденційності',
          refundPolicy: 'Умови повернення',
        },
        payment: {
          successTitle: 'Дякуємо за підтримку ❤️',
          pendingTitle: 'Оплата обробляється',
          errorTitle: 'Оплата не вдалася',

          successDesc: 'Ваш внесок успішно прийнято. Разом до перемоги!',
          pendingDesc:
            'Транзакція на перевірці банком. Це може зайняти кілька хвилин.',
          errorDesc: 'На жаль, сталася помилка. Гроші не були списані.',

          loading: 'Обробка...',
          redirecting: 'Перенаправлення...',

          btnMain: 'На головну',
          btnRetry: 'Спробувати ще раз',
          btnBack: 'До проекту',

          detailsTitle: 'Деталі транзакції:',
          statusLabel: 'Статус:',
          statusSuccess: 'Успішно',
          statusPending: 'Очікує',
          statusError: 'Відхилено',

          amountLabel: 'Сума:',
          reasonLabel: 'Причина:',
          orderLabel: 'ID замовлення:',
          copyTooltip: 'Копіювати ID',
          copied: 'Скопійовано!',

          reasons: {
            approved: 'Успішно',
            invalidCard: 'Невірний номер картки',
            bankDeclined: 'Відхилено банком',
            insufficientFunds: 'Недостатньо коштів',
            expiredCard: 'Термін дії картки закінчився',
            unknown: 'Сталася невідома помилка',
            onVerification: 'Транзакція на перевірці банком',
          },
        },
      },
    },
  },
  lng: 'uk',
  fallbackLng: 'uk',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
