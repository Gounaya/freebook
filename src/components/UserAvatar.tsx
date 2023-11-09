import { Avatar } from "@radix-ui/react-avatar"
import { User } from "next-auth"
import { FC } from "react"

interface UserAvatarProps {
    user: Pick<User, 'name' | 'image'>
}

const UserAvatar: FC<UserAvatarProps> = ({ user }) => {
    return <Avatar><Avatar />
}

        export default UserAvatar