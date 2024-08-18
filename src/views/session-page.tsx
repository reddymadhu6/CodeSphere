import { useContext } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import { AuthContext } from "../contexts";
import { Roles } from "../constants";
import { StudentSession } from "./student";
import { TeacherSession } from "./teacher";

export const Session = () => {
  const { labId } = useParams();
  const { user, role } = useContext(AuthContext);

  if (role === Roles.STUDENT)
    return <StudentSession labId={labId!} user={user!} role={role!} />;

  if (role === Roles.TEACHER)
    return <TeacherSession labId={labId!} user={user!} role={role!} />;
};

// export const Session = () => {
//   const [isOpenChatSection, setIsOpenChatSection] = useState(false);
//   const [isOpenCompileSection, setIsOpenCompileSection] = useState(false);
//   const { labId } = useParams();

//   const [activeCodeId, setActiveCodeId] = useState<string>("");

//   const { user, role } = useContext(AuthContext);
//   const [participantData] = useTableDataOnce("lab_participants", [
//     {
//       columnName: "session_id",
//       operator: "eq",
//       value: labId,
//     },
//     {
//       columnName: "student_id",
//       operator: "eq",
//       value: user?.id,
//     },
//   ]);

//   return (
//     <div className="border-l-2 w-full flex flex-col rounded-xl font-mono ">
//       {!isOpenChatSection && (
//         <div
//           onClick={() => setIsOpenChatSection(true)}
//           className="absolute z-10 bottom-4 right-0 bg-zinc-400/20 p-2 rounded-s-full "
//         >
//           <RiQuestionAnswerFill className="text-xl text-zinc-700/60 hover:text-zinc-700" />
//         </div>
//       )}
//       <div className="flex h-full p-2   ">
//         <div className="relative example flex flex-col justify-between h-full  flex-1">
//           {!isOpenCompileSection && (
//             <button
//               onClick={() => setIsOpenCompileSection(true)}
//               className="absolute -bottom-2 left-1/2 p-1 hover:bg-zinc-300 bg-zinc-200  rounded-t-full text-lg"
//             >
//               <FiChevronUp className=" text-zinc-400" />
//             </button>
//           )}
//           <div className="border-b-2 mx-2 flex items-center py-2 gap-x-4 font-sans">
//             <span className="bg-zinc-400/20 transition-all hover:bg-zinc-700/20 p-2 rounded-lg">
//               <FiChevronLeft className=" text-sm text-zinc-700/60 " />
//             </span>
//             <div>
//               <p className="font-semibold tracking-wider">Ada Lab</p>
//               <span className="text-sm ">Secion: A Sem: 4</span>
//             </div>
//           </div>
//           <div className="h-full mx-2 ">
//             {participantData && (
//               <CodeEditorView
//                 labId={labId!}
//                 participantId={participantData[0].participant_id}
//                 userId={user!.id}
//                 activeCodeId={activeCodeId}
//               />
//             )}
//           </div>

//           {isOpenCompileSection && (
//             <CodeActionView onClose={() => setIsOpenCompileSection(false)} />
//           )}
//         </div>

//         {/* message section */}
//         {isOpenChatSection && participantData && (
//           <MessageSection
//             onClose={() => setIsOpenChatSection(false)}
//             roles={role!}
//             labId={labId}
//             participantId={participantData[0].participant_id}
//             setActiveCodeId={setActiveCodeId}
//             activeCodeId={activeCodeId}
//           />
//         )}
//       </div>
//     </div>
//   );
// };
