// import { CSidebar, CSidebarNav, CNavTitle, CNavItem } from '@coreui/react';
// function SideBar() {
//     const logoutFn=()=>{
//       localStorage.clear();
//         window.location.href ="/"
//     }
//     return (
//       <CSidebar unfoldable className='vh-100 bg-black' >
        
//         <CSidebarNav>
//         <CNavItem href="#" className="bg-dark">
//         <i className="bi bi-bar-chart-fill text-white m-2"></i>
//             <h5 className="text-white mx-3  my-1 fw-bolder">TETHERX</h5>
  
//           </CNavItem>
//           <CNavTitle className='text-light fw-normal'>
//             A CRM app for all your needs...
//           </CNavTitle>
          
//           <div onClick={logoutFn}>
//           <CNavItem href="/">
//             <i className="bi bi-box-arrow-left text-white m-2"></i>
//             <div  className='text-decoration-none text-white mx-3'>Logout</div>
//           </CNavItem>
//           </div>
//         </CSidebarNav>
//       </CSidebar>
  
//     )
//   }
  
//   export default SideBar;