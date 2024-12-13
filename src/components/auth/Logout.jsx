import React from 'react'

const Logout = () => {
    const handleLogout = () =>{
      localStorage.removeItem('user');
      // setStoredUser(null);
    }
return (<form onSubmit={handleLogout}>
      <button type='submit'>Logout</button>
    </form>
  )
}
export default Logout