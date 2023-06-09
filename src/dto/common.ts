export interface Task {
    Title: string;
    Date: string;
    Time: string,
    Location: string;
    Id: string
}

export interface UserDto {
    Id: string;
    Name: string;
    Email: string,
    Password: string
}

export interface LoginDto {
    Email: string,
    Password: string
}

export interface UserInfoMapDto {
    UserKey: string,
    Data: Task[]
}
