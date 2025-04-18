import conf from "../conf/conf";
import {Client, Account, ID} from 'appwrite';

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another methon
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService();//object

export default authService;