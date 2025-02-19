
import SearchResult from "./SearchResult";
import Categories from "./Categories";
import BlogPage from "./BlogPage"
import SingleProperty from "./SingleProperty"
import Home from "./Home";
import Contact from "./Contact";


let routes = [
    
   
    { path :'/' , element : <Home/>},
    { path :'/searchResult' , element:<SearchResult/>},
    { path :'/categories' , element:<Categories/>},
    { path :'/blog' , element:<BlogPage/>},
    { path :'/contact' , element:<Contact/>},
    { path :'/singleProperty' , element:<SingleProperty/>},
    { path :'/facebook' , element:'https://facebook.com'},

 

]
export default routes