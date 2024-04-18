import type IUser from '@/interface/IUser'
import { ref } from 'vue'
import type { Ref } from 'vue'

const API_BASE_URL = "https://utcancun.a.pinggy.online";

export default class AuthService{
    private users: Ref<IUser[]>
    private user: Ref<IUser>
    private token: Ref<string>
    

    constructor(){
        this.users = ref([]) 
        this.user = ref ({}) as Ref<IUser>
        this.token = ref('')
    }

    getUsers(): Ref<IUser[]>{
        return this.users
    }

    getUser(): Ref<IUser>{
        return this.user
    }

    getToken(): Ref<string> {
        return this.token
    }

    static isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        return !!token; 
    }

    async login(email: string, password: string): Promise<boolean> {
        if (!email || !password) {
            console.error('Email y contraseña son requeridos.');
            return false;
        }
        const data = { email, password };
        try {
            const response = await fetch(`${API_BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const json = await response.json();
            if (response.ok) {
                const token = json.token;
                this.token.value = token;
                localStorage.setItem('token', token);
                return true;
            } else {
                console.error('Error al iniciar sesión:', json.error);
                return false;
            }
        } catch (error) {
            console.error('Error de red:', error);
            return false;
        }
    }

    
    async fetchUsers(): Promise<void> {
        try {
            const response = await fetch(`${API_BASE_URL}/users`);
            const json = await response.json();
            this.users.value = json;
        } catch (error) {
            console.error('Error al obtener la lista de usuarios:', error);
        }
    }

    
    async fetchUser(email: string, name: string, group: string): Promise<void> {
        try {
            const response = await fetch(`${API_BASE_URL}/user?email=${email}&name=${name}&group=${group}`);
            const json = await response.json();
            this.user.value = json;
        } catch (error) {
            console.error('Error al obtener el usuario:', error);
        }
    }

    
    async fetchRegister(name: string, email: string, password:string, group:string): Promise<void> {
        try {
            const data = {
                'name': name,
                'email': email,
                'password': password,
                'group': group
            };
            const response = await fetch(`${API_BASE_URL}/register`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if(response.ok){
                alert("Usuario registrado");
            } else {
                console.error("Error al registrar usuario:", response.status);
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    }
}
