import { User } from "@supabase/supabase-js";
import { Roles } from "../../constants";
import { FiChevronLeft } from "react-icons/fi";

import { useState } from "react";

import { Link } from "react-router-dom";

import TeacherEditor from "./teacher-editor";
import { TeacherSidePanel } from ".";

type TeacherSessionProps = {
  labId: string;
  user: User;
  role: Roles;
};

export const TeacherSession = ({ labId }: TeacherSessionProps) => {
  const [activeCodeId, setActiveCodeId] = useState<any>("");

  return (
    <div className="border-l-2 w-full flex flex-col rounded-xl font-mono ">
      <div className="flex h-full p-2   ">
        <div className="relative example flex flex-col justify-between h-full  flex-1">
          <div className="border-b-2 mx-2 flex items-center py-2 gap-x-4 font-sans">
            <span className="bg-zinc-400/20 transition-all hover:bg-zinc-700/20 p-2 rounded-lg">
              <Link to="/">
                <FiChevronLeft className=" text-sm text-zinc-700/60 " />
              </Link>
            </span>
            <div>
              <p className="font-semibold tracking-wider">Ada Lab</p>
              <span className="text-sm ">Secion: A Sem: 4</span>
            </div>
          </div>
          <TeacherEditor labId={labId} activeCodeId={activeCodeId} />
        </div>

        {/* message section */}
        <TeacherSidePanel
          activeCodeId={activeCodeId}
          setActiveCodeId={setActiveCodeId}
          labId={labId}
        />
      </div>
    </div>
  );
};

/**
 *   <div className="flex drop-shadow-sm flex-col h-full  font-roboto transition-all relative w-1/3  md:w-1/3 lg:w-1/4 max-h-full bg-slate-100 px-3 py-3 lg:pt-2 lg:pb-6 lg:ps-6 rounded-lg">
          {/* <div className="absolute bottom-2 -left-4 rounded-full bg-slate-100  p-2">
            <FiChevronRight className=" text-xl text-zinc-700/60 hover:text-zinc-700" />
          </div> 
          <div className="flex  h-full  items-center gap-x-3 justify-start max-h-14 border-b-2">
            <button
              type="button"
              className="text-xs font-semibold rounded-lg px-4 py-2 select-none"
            >
              Students
            </button>
            <button
              type="button"
              className="text-xs font-semibold rounded-lg px-4 py-2 select-none"
            >
              Message
            </button>
          </div>
          <div>
            <ul className="my-2">
              {labStudents &&
                labStudents.map((labStudent: any) => {
                  // no enought time for declaring types fix later
                  return (
                    <StudentListItem
                      setActiveCodeId={setActiveCodeId}
                      studentData={labStudent}
                    />
                  );
                })}
              {/* // <StudentListItem />
              // <StudentListItem /> 
            </ul>
          </div>
        </div>
 */
