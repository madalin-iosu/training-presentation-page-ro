// import { Link, useLocation } from "react-router-dom";
// import ihome from "../../icons/home.svg";
// import igreater from "../../icons/greater-than.svg";
// import "./breadcrumbs.css";


// export default function Breadcrumbs() {
//     const location = useLocation();

//     let currentLink = '';

//     const crumbs = location.pathname.split('/')

//         .filter(crumb => crumb !== '')

//         .map(crumb => {
//             currentLink =+ `/${crumb}`

//             let capitalCrumb = crumb.charAt(0).toUpperCase() + crumb.slice(1).toLowerCase()

//             return (
//                 <div className="crumb" key={capitalCrumb}>
//                     <Link to={currentLink}>
//                     {capitalCrumb}
//                     </Link>
//                 </div>
//             );
//         })

//     return (
//         <div className="breadcrumbs">
//             <img
//                 src={ihome}
//                 alt="home-icon"
//             />
//             <Link to="/" style={{ padding: 5, textDecoration: 'none' }}>
//                 Acasă
//             </Link>
//             <img
//                 src={igreater}
//                 style={{ paddingRight: 5 }}
//                 alt="greater-than-icon"
//             />
//             {crumbs}
//         </div>
//     )




// }

import { Link, useLocation } from "react-router-dom"
import "./breadcrumbs.css"
export default function Breadcrumbs () {
    const location = useLocation()

    let currentLink = ''
    console.log(location)

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`

            return(
                <div className="crumb" key={crumb}>
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            )
        }) 
    return(
        <div className="breadcrumbs">
            {crumbs}
        </div>
    )
}