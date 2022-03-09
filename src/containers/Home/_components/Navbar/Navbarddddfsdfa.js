//   <>
//     <li style={{ marginLeft: "5px" }} className="nav-item ">
//       <Popover
//         placement="bottomRight"
//         content={
//           <Tabs
//             type="card"
//             style={{ width: "400px", height: "400px" }}
//           >
//             <TabPane
//               tab={
//                 <span>
//                   <NotificationFilled /> Notification (0)
//                 </span>
//               }
//               key="1"
//             >
//               <div className="popper__footer">
//                 <footer className="drawer-footer">
//                   <button className="btn-toggle-sound on">
//                     <i />
//                   </button>
//                   <a href="#/" className="btn-settings" />
//                 </footer>
//               </div>
//             </TabPane>
//             <TabPane
//               tab={
//                 <span>
//                   <MessageFilled />
//                   Inbox (0)
//                 </span>
//               }
//               key="2"
//             >
//               <div className="drawer-empty">
//                 <strong>No Notifications</strong>
//                 <p>
//                   Browse our amazing catalog of Gigs or offer your
//                   talent on Fiverr.
//                 </p>
//               </div>
//               <div className="popper__footer">
//                 <footer className="drawer-footer">
//                   <button className="btn-toggle-sound on">
//                     <i />
//                   </button>
//                   <a href="#/" className="btn-settings" />
//                   <a href="/inbox" className="view-all">
//                     See All in Inbox
//                   </a>
//                 </footer>
//               </div>
//             </TabPane>
//           </Tabs>
//         }
//         trigger="click"
//       >
//         <NavLink
//           activeClassName="active_navbar"
//           className="nav-link"
//           to="/list-job"
//         >
//           Messages
//           <span className="sr-only">(current)</span>
//         </NavLink>
//       </Popover>
//     </li>

//     <li style={{ marginLeft: "5px" }} className="nav-item ">
//       <PopoverComponent styles={"30px"} data={data}>
//         {content}
//       </PopoverComponent>
//     </li>
//   </>
// )
//   const content = (
//     <ul
//       className="nav-popover-items-content"
//       style={{ width: "auto", padding: "12px 16px" }}
//     >
//       <li>
//         <NavLink to={`/profile/${data?.name}`} className="nav-link" exact>
//           Profile
//         </NavLink>
//       </li>
//       <li>
//         <a href="#/" className="nav-link">
//           Dashboard
//         </a>
//       </li>
//       <li>
//         <a href="#/" className="nav-link">
//           Manage Requests
//         </a>
//       </li>
//       <li>
//         <a href="#/" className="nav-link">
//           Post a Request
//         </a>
//       </li>
//       <li className="divider" />
//       <li>
//         <a href="#/" className="nav-link">
//           Become a Seller
//         </a>
//       </li>
//       <li>
//         <a href="#/" className="nav-link">
//           Settings
//         </a>
//       </li>
//       <li>
//         <a href="#/" target="_blank" className="nav-link">
//           Help &amp; support
//         </a>
//       </li>
//       <li className="divider" />
//       <li>
//         <NavLink
//           onClick={() => {
//             dispatch(actLogout(history));
//           }}
//           to="/"
//           className="js-log-out nav-link"
//         >
//           Logout
//         </NavLink>
//       </li>
//     </ul>
//   )
