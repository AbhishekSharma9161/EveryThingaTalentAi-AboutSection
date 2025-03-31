const Container = ({children, footer}) => {
    return (
      <div className={`mt-10 ${footer ? 'mb-0' : 'mb-30'}`}>
        {children}
      </div>
    )
  }
  
  export default Container
  