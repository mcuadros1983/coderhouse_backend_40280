class UserDto {
    constructor({ email, password }) {
      this.email = email;
      this.password = password;
    }
  }
  
  module.exports =  function formatDTO(users) {
    if (Array.isArray(users)) {
      return users.map(obj => new UserDto(obj));
    } else {
      return new UserDto(users);
    }
  }