const Container = ({children, mb}) => {
    return (
      <div className={`mt-10 mb-${mb}`}>
        {children}
      </div>
    )
  }
  
  export default Container
  