const questions = [
  {
    question:
      '¿Consideras un sitio web seguro porque tiene https y un candado de seguridad a la izquierda?',
    img: 'https://www.pandasecurity.com/es/mediacenter/src/uploads/2016/02/web-segura.jpg',
    answers: [
      {
        text: 'Si',
        isCorrect: true
      },
      {
        text: 'No',
        isCorrect: false
      }
    ]
  },
  {
    question: '¿De que distribución esta basada Kali Linux?',
    img: 'https://gfsistemas.com/wp-content/uploads/2020/08/kali-linux-2020.png',
    answers: [
      {
        text: 'Ubuntu',
        isCorrect: false
      },
      {
        text: 'Debian',
        isCorrect: true
      },
      {
        text: 'Manjaro',
        isCorrect: false
      },
      {
        text: 'Arch',
        isCorrect: false
      }
    ]
  },
  {
    question: '¿Que técnica de phishing es la mas común?',
    img: '',
    answers: [
      {
        text: 'Phishing por SMS',
        isCorrect: false
      },
      {
        text: 'Phishing por correo electrónico',
        isCorrect: true
      },
      {
        text: 'Phishing por telefono',
        isCorrect: false
      },
      {
        text: 'Phishing por red social',
        isCorrect: false
      }
    ]
  },
  {
    question: '¿Que herramienta de Kali Linux es usada para escanear puertos?',
    img: '',
    answers: [
      {
        text: 'nmap',
        isCorrect: true
      },
      {
        text: 'Dmitry',
        isCorrect: false
      },
      {
        text: 'TheHarvester',
        isCorrect: false
      },
      {
        text: 'Nikto',
        isCorrect: false
      }
    ]
  },
  {
    question: '¿Que comando se usa para crear apps maliciosas?',
    img: '',
    answers: [
      {
        text: 'metasploit',
        isCorrect: false
      },
      {
        text: 'msfcreate',
        isCorrect: false
      },
      {
        text: 'msfconsole',
        isCorrect: false
      },
      {
        text: 'msfvenom',
        isCorrect: true
      }
    ]
  },
  {
    question:
      '¿Que tips de seguridad debemos tener en cuenta al usar redes wifi publicas?',
    img: '',
    answers: [
      {
        text: 'Usar redes wifi publicas para realizar transacciones bancarias',
        isCorrect: false
      },
      {
        text: 'Usar redes wifi publicas de confianza',
        isCorrect: true
      },
      {
        text: 'Usar redes wifi publicas sin ningun tipo de precaucion',
        isCorrect: false
      },
      {
        text: 'Usar redes wifi publicas con total confianza',
        isCorrect: false
      }
    ]
  },
  {
    question: '¿Que herramienta es usada para clonar paginas web?',
    img: 'https://www.cloudways.com/blog/wp-content/uploads/clone-website.jpg',
    answers: [
      {
        text: 'Wifite',
        isCorrect: false
      },
      {
        text: 'Wifiphisher',
        isCorrect: false
      },
      {
        text: 'Wifijammer',
        isCorrect: false
      },
      {
        text: 'Zphisher',
        isCorrect: true
      }
    ]
  },
  {
    question: '¿Que comando se usa para usar la herramienta Metasploit?',
    img: 'https://www.pchardwarepro.com/wp-content/uploads/2019/03/Metasploit.jpg',
    answers: [
      {
        text: 'msfconsole',
        isCorrect: true
      },
      {
        text: 'msfvenom',
        isCorrect: false
      },
      {
        text: 'msf',
        isCorrect: false
      },
      {
        text: 'msfupdate',
        isCorrect: false
      }
    ]
  },
  {
    question:
      'Usted recibe un email de su jefe en el que le pide el nombre, domicilio e información de tarjeta de crédito de los clientes más importantes de la compañía. El email dice que es urgente y que por favor lo responda de inmediato. Usted debería responder el mensaje de inmediato. ¿Verdadero o falso?',
    img: '',
    answers: [
      {
        text: 'Verdadero',
        isCorrect: false
      },
      {
        text: 'Falso',
        isCorrect: true
      }
    ]
  },
  {
    question: '¿Qué tipo de ataque es el phishing?',
    img: 'https://empresas.blogthinkbig.com/wp-content/uploads/2020/11/%C2%BFPor-que-el-sector-financiero-es-mas-vulnerable-a-los-ataques-de-phishing.jpg?fit=1200%2C675',
    answers: [
      {
        text: 'Es un ataque de denegación de servicio',
        isCorrect: false
      },
      {
        text: 'Es un ataque de ingeniería social',
        isCorrect: true
      },
      {
        text: 'Es un ataque de fuerza bruta',
        isCorrect: false
      },
      {
        text: 'Es un ataque de diccionario',
        isCorrect: false
      }
    ]
  },
  {
    question: '¿Qué comando se usa para ver nuestra ip?',
    img: '',
    answers: [
      {
        text: 'ifconfig',
        isCorrect: true
      },
      {
        text: 'ipconfig',
        isCorrect: false
      },
      {
        text: 'ip',
        isCorrect: false
      },
      {
        text: 'ifip',
        isCorrect: false
      }
    ]
  },
  {
    question: '¿Qué payload se usa para acceder a un dispositivo Android?',
    img: '',
    answers: [
      {
        text: 'android/meterpreter/reverse_tcp',
        isCorrect: true
      },
      {
        text: 'windows/meterpreter/reverse_tcp',
        isCorrect: false
      },
      {
        text: 'linux/meterpreter/reverse_tcp',
        isCorrect: false
      },
      {
        text: 'macos/meterpreter/reverse_tcp',
        isCorrect: false
      }
    ]
  }
];

export default questions;
