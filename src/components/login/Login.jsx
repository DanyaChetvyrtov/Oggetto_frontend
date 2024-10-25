const isAuth = () => {
  if(localStorage.getItem('tokenA'))
    return true
  return false
}