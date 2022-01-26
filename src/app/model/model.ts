export interface LoginRequest{
  email: String;
  password: String;
}

export interface LoginResponse{
  token: String;
}

export interface UserResponse{
  data: User[];
}

export interface User{
  id: Number;
  email: String;
  first_name: String;
  last_name: String;
  avatar: String;
}

export interface SingleUserResponse{
  data : User;
}

export interface Cancion{
  _id: String;
  nombre: String;
  artista: String;
  autor: String;
  year: String;
  duracion: number;
  enlace: String;
}
