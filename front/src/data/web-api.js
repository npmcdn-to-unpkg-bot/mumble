import {EventAggregator} from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework';

let latency = 200; //To mimic a real connection
let id = 0;

function getId() {
  return ++id;
}
let myAccount = {
    id: getId(),
    firstName: 'Jonathan',
    lastName: 'Philipos',
    email: 'jonathan@det.io',
    password: 'unencrypted',
    phone: '867-5309',
    status: 'online',
    icon: 'face5.ico'
}
let contacts = [
  {
    id: getId(),
    chatId: 1,
    isOpen: false,
    title: 'Back-End Engineer',
    about: 'Been really busy lately!',
    firstName: 'John',
    lastName: 'Tolkien',
    email: 'tolkien@mumble.com',
    phone: '04-dont-call-me',
    status: 'online',
    unreadMsgs: 0,
    icon: 'face2.ico'
  },
  {
    id: getId(),
    chatId: 2,
    isOpen: false,
    title: 'Front-End Developer',
    about: 'Progress, progress, we gotta finish this thing!',
    firstName: 'Borat',
    lastName: '',
    email: 'borat@mumble.com',
    phone: '0420-420-420',
    status: 'online',
    unreadMsgs: 4,
    icon: 'face.ico'
  },
  {
    id: getId(),
    chatId: 3,
    isOpen: false,
    firstName: 'Owen',
    title: 'Graphics Designer',
    about: 'Why do you guys pay me anyways?',
    lastName: 'Barfield',
    email: 'barfield@mumble.com',
    phone: '0410-410-410',
    status: 'offline',
    unreadMsgs: 0,
    icon: 'face3.ico'
  },
  {
    id: getId(),
    chatId: 4,
    isOpen: false,
    title: 'Sales Mgr.',
    about: 'Every bug makes my job harder!',
    firstName: 'Charles',
    lastName: 'Williams',
    email: 'williams@mumble.com',
    phone: '0400-400-400',
    status: 'away',
    unreadMsgs: 0,
    icon: 'face4.ico'
  },
  {
    id: getId(),
    chatId: 5,
    isOpen: false,
    title: 'C.E.O',
    about: 'I want mulla..',
    firstName: 'Roger',
    lastName: 'Green',
    email: 'green@mumble.com',
    phone: '1800-MULLA',
    status: 'offline',
    unreadMsgs: 1,
    icon: 'face5.ico'
  }
];
let channels = [
  {
    id: 1,
    chatId: 6,
    unreadMsgs: 15,
    channelName: 'General',
    users: [ 1, 2, 3, 4, 5 ],
    isOpen: false
  },
  {
    id: 2,
    chatId: 7,
    unreadMsgs: 0,
    channelName: 'Development',
    users: [ 1, 3, 4 ],
    isOpen: false,
  },
  {
    id: 3,
    chatId: 8,
    unreadMsgs: 0,
    channelName: 'Design',
    users: [ 1, 2, 5 ],
    isOpen: false,
  }
];

id = 0;
let activeChats = [
  {
    id: 1,
    type: 'message', //message or channel
    from: 2, //What channel or user it is from
    messages: [ //array of messages (store only upto 100 messages locally, rest should be archived.)
      {
        from: 2, //user who sent this message
        data: 'Hey bro, I really need your help on some stuff..', //message contents
        date: '1471129731354' //the timestamp utilizes JS Date.getTime() method which returns the number of milliseconds since 1970
      },
      {
        from: 1,
        data: 'What do you need?',
        date: '1471125331354'
      },
      {
        from: 2,
        data: 'Im stuck on this issue, and cannot debug it.. Can you help?',
        date: '1471129323354',
        attachments: [
          {
            type: 'image',
            id: 'error.png'
          }
        ],
      },
      {
        from: 1,
        data: 'That means that you are breaking the syntax rules, you need to check the documentation and follow their parameters.',
        date: '1471129723354'
      }
    ]
  },
  {
    id: 2,
    type: 'message',
    from: 3,
    messages: [
      {
        from: 1,
        data: 'Haha dude, have you seen the project we had to review?', //message contents
        date: '1471121731354' //the date & time this was sent on
      },
      {
        from: 3,
        data: 'What about it??',
        date: '1471122731354'
      },
      {
        from: 1,
        data: 'It\'s horrible! Ours is like 5 times better and is a real usecase!',
        date: '1471123731354'
      },
      {
        from: 3,
        data: 'Good! I hope our marks reflect that...',
        date: '1471129321354'
      },
      {
        from: 3,
        data: 'oi man i need help...',
        date: '1471129421354'
      },
      {
        from: 3,
        data: 'r u there???',
        date: '1471129521354'
      },
      {
        from: 3,
        data: 'seriously!',
        date: '1471129611354'
      },
      {
        from: 3,
        data: 'hellloooo',
        date: '1471129811354'
      }
    ]
  },
  {
    id: 3,
    type: 'message',
    from: 4,
    messages: [
      {
        from: 4,
        data: 'The weather is crazy! Can you pick me up!', //message contents
        date: '1471129731354' //the date & time this was sent on
      },
      {
        from: 1,
        data: 'My cars in the repair shop man, Im sorry. Maybe angela can pick you up.',
        date: '1471129731354'
      },
      {
        from: 4,
        data: 'She\'s stuck up! I doubt it',
        date: '1471129731354'
      },
      {
        from: 1,
        data: 'I can tell her for you if you want??.',
        date: '1471129731354'
      },
      {
        from: 4,
        data: 'Please do asap im waiting in the rain... this is horrible',
        date: '1471129731354'
      },
      {
        from: 1,
        data: 'ok one sec brb',
        date: '1471129731354'
      },
      {
        from: 4,
        data: 'what did sshe say???',
        date: '1471129731354'
      },
      {
        from: 1,
        data: 'shes on her way now, see not so bad.',
        date: '1471129731354'
      }
    ]
  },
  {
    id: 4,
    type: 'message',
    from: 5,
    messages: [
      {
        from: 5,
        data: 'lololol so bored wanna play league of legends??', //message contents
        date: '1471129731354' //the date & time this was sent on
      },
      {
        from: 1,
        data: 'yee lets go ranked!',
        date: '1471129731354'
      },
      {
        from: 5,
        data: 'pls carry me ye?',
        date: '1471129731354'
      },
      {
        from: 1,
        data: 'im the man for that job :D',
        date: '1471129731354'
      },
      {
        from: 1,
        data: 'yee lets go ranked!',
        date: '1471129731354'
      },
      {
        from: 5,
        data: 'pls carry me ye?',
        date: '1471129731354'
      },
      {
        from: 1,
        data: 'im the man for that job :D',
        date: '1471129731354'
      },
      {
        from: 1,
        data: 'yee lets go ranked!',
        date: '1471129731354'
      },
      {
        from: 5,
        data: 'Im bored, lets do something?',
        date: '1471129731354'
      },
      {
        from: 1,
        data: '',
        date: '1471129731354'
      },
      {
        from: 1,
        data: 'yee lets go ranked!',
        date: '1471129731354'
      },
      {
        from: 5,
        data: 'Im bored, lets do something?',
        date: '1471129731354'
      },
      {
        from: 1,
        data: 'ummmm....',
        date: '1471129731354'
      },
      {
        from: 1,
        data: 'How about a game of league??',
        date: '1471129731354'
      },
      {
        from: 5,
        data: 'Why the hell not?',
        date: '1471129731354'
      },
      {
        from: 1,
        data: 'Sounds like a plan, ranked or normals?',
        date: '1471129731354'
      },
      {
        from: 1,
        data: 'I wanna rank tbh',
        date: '1471129731354'
      },
      {
        from: 5,
        data: 'pls carry me ye?',
        date: '1471129731354'
      },
      {
        from: 1,
        data: 'im the man for that job :D',
        date: '1471129731354'
      },
      {
        from: 1,
        data: 'yee lets go ranked!',
        date: '1471129731354'
      },
      {
        from: 5,
        data: 'now that\'s what im talking about!',
        date: '1471129731354'
      },
      {
        from: 1,
        data: 'cool stuff',
        date: '1471129731354'
      }
    ]
  },
  {
    id: 5,
    type: 'message', 
    from: 6, 
    messages: [ 
      {
        from: 1,
        data: 'Oi do you have task4 ready so we can submit the assignment?',
        date: '1471129731354'
      },
      {
        from: 6,
        data: 'No you do it, I dont like working on this assignment',
        date: '1471129731354'
      },
      {
        from: 1,
        data: 'That\s unsportsmanlike man!',
        date: '1471129731354'
      },
      {
        from: 6,
        data: 'IDC ! I got better things to worry about!',
        date: '1471129731354'
      }
    ]
  },
  {
    id: 6,
    type: 'channel', 
    from: 1, 
    messages: [ 
      {
        from: 5,
        data: 'Can someone give me the docs of the framework Aurelia we are using?!',
        date: '1471129731354'
      },
      {
        from: 1,
        data: 'Here you go!',
        date: '1471129731354',
        attachments: [
          {
            type: 'web',
            id: 'http://aurelia.io/hub.html#/doc/persona/developer'
          }
        ]
      },
      {
        from: 4,
        data: 'I\'s im learning it quickly! :)',
        date: '1471129731354'
      },
      {
        from: 2,
        data: 'Yeah, and its simple and effective.',
        date: '1471129731354'
      },
      {
        from: 3,
        data: 'Dont forget the backend',
        date: '1471129731354'
      }
    ]
  },
    {
    id: 7,
    type: 'channel', 
    from: 2, 
    messages: [ 
      {
        from: 5,
        data: 'Can someone link me with a good Ember tutorial?',
        date: '1471129731354'
      },
      {
        from: 1,
        data: '',
        date: '1471129731354',
        attachments: [
          {
            type: 'video',
            id: 'T1SC44NJA_A'
          }
        ]
      },
      {
        from: 4,
        data: 'Very informative.',
        date: '1471129731354'
      },
      {
        from: 3,
        data: 'Who can link me with a borat movie!',
        date: '1471129731354'
      }
    ]
  },
    {
    id: 8,
    type: 'channel', 
    from: 3, 
    messages: [ 
      {
        from: 5,
        data: 'What does the current logo look like?',
        date: '1471129731354'
      },
      {
        from: 1,
        data: 'This is the temporary logo, just waiting on Morgan to get the logo done.',
        date: '1471129731354',
        attachments: [
          {
            type: 'image',
            id: 'logo-attachment.png'
          }
        ]
      },
      {
        from: 3,
        data: 'I think we should just keep this tbh.',
        date: '1471129731354'
      },
      {
        from: 2,
        data: 'Looks good enough, but any imrpovement is acceptable!',
        date: '1471129731354'
      }
    ]
  }
]

let mySettings = {
    id: 1,
    layout: { 
      id: 3,
      name: 'Full Height, 3 Chats per row, 1 row',
      rows: 1, 
      maximumChats: 3,
      chatsPerRow: 3
    },
    navigation: 1,
    appName: 'mumble',
    theme: 'Blue',
    mnumber: 0
}

@inject(EventAggregator)
export class WebAPI {
  isRequesting = false;

  constructor(ea) {
    ea.subscribe('saveTheme', theme => this.updateTheme(theme));
    ea.subscribe('saveLayout', layout => this.updateLayout(layout));
  }
  updateTheme(theme) {
    mySettings.theme = theme;
  }
  updateLayout(layout) {
    mySettings.layout = layout;
  }
  getContactList() {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
          let results = contacts.map(x => {
              return {
                  id: x.id,
                  chatId: x.chatId,
                  title: x.title,
                  firstName: x.firstName,
                  isOpen: x.isOpen,
                  lastName: x.lastName,
                  email: x.email,
                  status: x.status,
                  phone: x.phone,
                  about: x.about,
                  icon: x.icon,
                  alert: 1,
                  unreadMsgs: x.unreadMsgs
                };
            });
          resolve(results);
          this.isRequesting = false;
        }, latency);
    });
  }
  getMsgs() {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
          let results = activeChats.map(x => {
              return {
                  id: x.id,
                  chatId: x.chatId,
                  type: x.type,
                  from: x.from,
                  messages: x.messages
                };
            });
          resolve(results);
          this.isRequesting = false;
        }, latency);
    });
  }
  getChannelList() {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
          let results = channels.map(x => {
              return {
                  id: x.id,
                  chatId: x.chatId,
                  isOpen: x.isOpen,
                  unreadMsgs: x.unreadMsgs,
                  channelName: x.channelName,
                  users: x.users
                };
            });
          resolve(results);
          this.isRequesting = false;
        }, latency);
    });
  }
  getChannels() {
    return channels;
  }
   getMessageDetails(id) {
     let found = activeChats.filter(x => x.id === id)[0];
     return found;
   }
  getContactDetails(id) {
    let found = contacts.filter(x => x.id === id)[0];
    return found;
  }
  getContactbyChatId(id) {
    let found = contacts.filter(x => x.chatId === id)[0];
    return found;
  }
  findChatId(id) {
    let foundContact = contacts.filter(x => x.chatId === id)[0];
    let foundChannel = channels.filter(x => x.chatId === id)[0];
    if (typeof foundContact !== "undefined") {
      return foundContact;
    }
    else if (typeof foundChannel !== "unfedined") {
      return foundChannel;
    }
    else {
      return false;
    }
  }
  getChannelDetails(id) {
    let found = channels.filter(x => x.id === id)[0];
    return found;
  }
  getChatIdDetails(chatId) {
    let found = activeChats.filter(x => x.id === chatId)[0];
    return found;
  }
  getProfile() {
    return myAccount;
  }
  saveContact(contact) {
    this.isRequesting = true;
    return new Promise(resolve => {
        setTimeout(() => {
            let instance = JSON.parse(JSON.stringify(contact));
            let found = contacts.filter(x => x.id == contact.id)[0];

            if (found) {
                let index = contacts.indexOf(found);
                contacts[index] = instance;
              } else {
                instance.id = getId();
                contacts.push(instance);
              }

            this.isRequesting = false;
            resolve(instance);
          }, latency);
      });
  }
  
  getSettings() {
    return mySettings;
  }

  saveSettings(settings) {
    this.isRequesting = true;
    return new Promise(resolve => {
        setTimeout(() => {
            let instance = JSON.parse(JSON.stringify(settings));
            mySettings = instance;
            this.isRequesting = false;
            resolve(instance);
          }, latency);
      });
  }

  getNavigationState() {
      return mySettings.navigation;
  }
  saveNavigationState(navId) {
      mySettings.navigation = navId;
  }
}
