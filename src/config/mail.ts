interface IMAilConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'rodrigo@pastelariadev.com.br',
      name: 'Rodrigo Yoshioka',
    },
  },
} as IMAilConfig;
