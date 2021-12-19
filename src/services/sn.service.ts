import { Produto } from './../entities/index';
import axios from 'axios';

import { Post, User } from '../entities';

class SocialNetworkService {

    private readonly api = axios.create({
        baseURL: 'https://example-ecommerce.herokuapp.com'
    });

    public async login(login: string, password: string): Promise<string | null> {
        try {
            const response = await this.api.post('/user/login', { login, password });
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    public async getUser(token: string) {
        try {
            const config = this.createConfig(token);
            const response = await this.api.get<User>('/user/logged', config);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    public async createUser(user: User) {
        try {
            const response = await this.api.post<User>('/user/customer/add', user);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
     


    private createConfig(token: string) {
        return { headers: { Authorization: `Bearer ${token}` } };
    }


    public async getProduct() {
        try {        
            const response = await this.api.get<Produto>('/product/list');
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

}

export const snService = new SocialNetworkService();