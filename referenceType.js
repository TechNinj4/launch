let user = {
    name: "John",
    hi() { console.log(this.name); },
    bye() { console.log("Bye"); }
  };
  
  user.hi(); // 正常运行
  
  // 现在让我们基于 name 来选择调用 user.hi 或 user.bye
  (user.name == "John" ? user.hi : user.bye)(); // Error