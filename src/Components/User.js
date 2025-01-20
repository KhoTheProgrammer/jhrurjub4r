export class User {
  constructor(username, fname, lname, email, password) {
    this.username = username;
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.password = password;
  }
}

export class UserService {
  constructor() {
    this.users = [];
  }

  createUser(username, fname, lname, email, password) {
    const user = new User(username, fname, lname, email, password);
    return user;
  }

  authenticate(username, password) {
    const user = this.users.find((user) => user.username === username);
    if (user && user.password === password) {
      return user;
    } else {
      return null;
    }
  }

  countUsers() {
    return this.users.length;
  }

  getUsers() {
    return this.users;
  }

  
}
