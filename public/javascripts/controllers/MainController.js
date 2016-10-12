function MainController(userService) {
  const vm = this

  userService.getLoggedInUser().then(user => {
    if (!user) vm.user = false
    else vm.user = user
  })
}
