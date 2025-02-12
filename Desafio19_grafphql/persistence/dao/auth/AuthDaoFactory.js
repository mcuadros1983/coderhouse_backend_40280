import AuthDaoFirebase from './AuthDAOFirebase.js';
import parseArgs from 'minimist';
import argsConfig from '../../../argsConfig.js';
const { DAO_AUTH } = parseArgs(process.argv.slice(2), argsConfig.config)

const option = DAO_AUTH

let dao
switch (option) {
  case 'Firebase':
    dao = new AuthDaoFirebase()
    dao.init()
    break
  default:
    dao = new AuthDaoFirebase()
    dao.init()
}

export default class AuthDaoFactory {
  static instance

  constructor() {
    if (!AuthDaoFactory.instance) {
        AuthDaoFactory.instance = this;
    } else {
      return AuthDaoFactory.instance;
    }
  }

  getDao() {
    return dao
  }
}
