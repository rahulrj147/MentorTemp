import { RiEditBoxLine } from "react-icons/ri"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { formattedDate } from "../../../utils/dateFormatter"
import IconBtn from "../../common/IconBtn"

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()

  return (
    <>
      <h1 className="mb-14 text-4xl  capitalize font-semibold italic  text-gray-50">
        My Profile
      </h1>
      <div className="boxi rounded-md  ">
      <div>
        <div className="flex items-center   justify-between rounded-md p-8 px-12 ">
        <div className="flex items-center gap-x-4">
          <img
            src={user?.image ? user?.image : ` https://api.dicebear.com/5.x/initials/svg?seed=${user?.firstName} ${user?.lastName}` }
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div className="space-y-1">
            <p className="text-lg font-semibold text-gray-50 capitalize">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-sm text-gray-50">{user?.email}</p>
          </div>
        </div>
        <IconBtn
          text="Edit"
          onclick={() => {
            navigate("/dashboard/settings")
          }}
        >
          <RiEditBoxLine />
        </IconBtn>
      </div>
      </div>
      </div>
      <div className="my-10 boxi flex flex-col gap-y-10 rounded-md p-8 px-12">
        <div className="flex  w-full items-center justify-between">
          <p className="text-lg font-semibold text-gray-50">About</p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <p
          className={`${
            user?.additionalDetails?.about
              ? "text-gray-50"
              : "text-gray-50"
          } text-sm font-medium `}
        >
          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
      </div>
      <div className="my-10 flex boxi flex-col gap-y-10 rounded-md p-8 px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-gray-50">
            Personal Details
          </p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <div className="flex max-w-[500px] justify-between">
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-gray-400">First Name</p>
              <p className="text-md text-gray-50 font-bold capitalize">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-gray-400">Email</p>
              <p className="text-md text-gray-50 font-bold ">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-gray-400">Gender</p>
              <p className="text-md text-gray-50 font-bold capitalize">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-gray-400">Last Name</p>
              <p className="text-md text-gray-50 font-bold capitalize">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-gray-400">Phone Number</p>
              <p className="text-md text-gray-50 font-bold capitalize">
                {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-gray-400">Date Of Birth</p>
              <p className="text-md text-gray-50 font-bold capitalize">
                {formattedDate(user?.additionalDetails?.dateOfBirth) ??
                  "Add Date Of Birth"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}