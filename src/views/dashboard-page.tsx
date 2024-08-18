import { useContext } from "react";
import { AuthContext } from "../contexts";
import { Roles } from "../constants";
import "../App.css";
import { TeacherDashboard } from "./teacher";
import StudentDashboard from "./student/student-dashboard";

export const DashboardPage = () => {
  const { user, role } = useContext(AuthContext);

  if (role === Roles.TEACHER)
    return <TeacherDashboard user={user!} role={role!} />;
  if (role === Roles.STUDENT)
    return <StudentDashboard user={user!} role={role!} />;
};

// export const DashboardPage = () => {
//   const [createNewLabModal, setCreateNewLabModal] = useState(false);
//   const [isOpenShareModal, setIsOpenShareModal] = useState(false);
//   const [shareModalData, setShareModalData] = useState<any>(null);

//   const [userData] = useUser();
//   const [labSessions, loading] = useTableData("lab_sessions");
//   const [deleteRow] = useTableDelete(
//     "lab_sessions",
//     "Lab deleted Successfully"
//   );

//   const { role } = useContext(AuthContext);

//   if (!role) {
//     return <>hello</>;
//   }

//   if (role === Roles.TEACHER) {
//     return (
//       <div className="relative border-l-2 w-full rounded-xl font-mono p-4">
//         {createNewLabModal && (
//           <CreateLabView onClose={() => setCreateNewLabModal(false)} />
//         )}
//         {isOpenShareModal && (
//           <ShareModal
//             onClose={() => setIsOpenShareModal(false)}
//             labInfo={shareModalData}
//           />
//         )}

//         <div className="flex items-center justify-between border-b-2 pb-4">
//           <h4 className="text-lg">Welcome, {userData && userData[0].name}</h4>
//           <button
//             className=" bg-green-600 text-white py-2 px-4  rounded-md"
//             type="button"
//             onClick={() => setCreateNewLabModal(!createNewLabModal)}
//           >
//             Create New Lab
//           </button>
//         </div>
//         <div className="relative  z-10 flex my-6 gap-x-6">
//           {loading && (
//             <div
//               className={`flex-1 rounded-xl chatScrollBar max-h-[calc(100vh-8.9rem)] overflow-y-scroll bg-green-500/10 `}
//             >
//               <h4
//                 className={` sticky top-0 bg-green-300 text-lg py-4 px-4 font-semibold border-b-2 border-b-green-500/30`}
//               >
//                 Active Labs
//               </h4>
//               <ul className=" flex flex-col">
//                 {labSessions?.map(
//                   (
//                     lab_session: Database["public"]["Tables"]["lab_sessions"]["Row"]
//                   ) => {
//                     return (
//                       <li
//                         className={`group flex items-center justify-between px-4 py-2 hover:bg-green-500/50  transition-all `}
//                       >
//                         <Link
//                           className="w-full"
//                           key={lab_session.session_id}
//                           to={`${RoutesPathName.SESSION_PAGE}/${lab_session.session_id}`}
//                         >
//                           <div>
//                             <p className="font-semibold">{lab_session.name}</p>
//                             <p>{lab_session.description}</p>
//                           </div>
//                         </Link>
//                         <button
//                           onClick={() => {
//                             setShareModalData(lab_session);
//                             setIsOpenShareModal(true);
//                           }}
//                           className="ml-auto mr-2 hidden group-hover:block"
//                         >
//                           <FiShare2 className="hover:text-purple-700 text-xl" />
//                         </button>
//                         <button
//                           onClick={() =>
//                             deleteRow("session_id", lab_session.session_id)
//                           }
//                           className="hidden group-hover:block"
//                         >
//                           <FiTrash2 className="hover:text-red-600  text-xl" />
//                         </button>
//                       </li>
//                     );
//                   }
//                 )}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }

//   return <>Hello Student</>;
// };
