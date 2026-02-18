// import "./styles.css"
export default function App(){
  
  const callback = (e) => {
      console.log(e);
      console.log("location Hash Changed");
      console.log(window.location.href);      
      console.log(window.location.pathname);  
      console.log(window.location.hash);  
        
    }
   
   window.addEventListener('hashchange', callback);
  return(
   <>
   <div class="anchor">Internal Links: Linking to an element on the same page</div>
  <p>
    <a href="#about">About</a><br />
    <a href="#mission">Mission</a><br />
    <a href="#history">History</a><br />
  </p>

  
  

   </>

  )
}
