import { RiHomeLine } from 'react-icons/ri';
import { BsChevronDown } from 'react-icons/bs';
import organiztionsIcon from '../assets/inno_organizations.png';
import membersIcon from '../assets/inno_group.png';
import { Company, UserProfile } from '../redux/types';

const SideMenu = ({ user, company }: { user: UserProfile; company: Company }) => {
    return (
        <div>
            <div className="flex justify-start items-center py-3">
                <img
                    src={user.profilePicture}
                    alt=""
                    className="rounded-full"
                    style={{ width: '70px', height: '70px' }}
                />
                <div className="px-2">
                    <h3 className="font-bold text-gray-800">
                        {user?.firstName} {user?.lastName}
                    </h3>
                    <h3 className="text-gray-800">{company?.name}</h3>
                </div>
            </div>
            <div className="flex justify-start items-center py-3">
                <RiHomeLine className="text-gray-500" />
                <p className="ml-3">Home</p>
            </div>
            <div className="flex justify-start items-center py-3">
                <img src={membersIcon} alt="" />
                <p className="ml-3">Members</p>
            </div>
            <div className="flex justify-between items-center mr-3 py-3">
                <div className="flex justify-start items-center">
                    <img src={organiztionsIcon} alt="" />
                    <p className="ml-3">Organizations</p>
                </div>

                <BsChevronDown />
            </div>
        </div>
    );
};

export default SideMenu;
