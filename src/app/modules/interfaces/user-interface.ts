export interface User{
    id: string,
    username: string,
    nombre: string,
    correo: string,
    telefono: string,
    password: string,
    rol: 'user',
    activo?: true
}