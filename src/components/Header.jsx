import classes from './Header.module.css'; 

const Header = () => {
  return (
    <h1 className={`${classes.header}  my-12 text-5xl w-full text-center lg:text-7xl`}>Tic Tac Toe</h1>
  )
}

export default Header;