import {Button, HStack, Text} from "@chakra-ui/react";
import {useAuth} from "../context/AuthContext.jsx";
import {useEffect, useState} from "react";
import {getFollowingByUserId, registerFollow} from "../../services/client.js";
import {errorNotification, successNotification} from "../../services/notification.js";

const UserFollowCard = ({userDto}) => {

    const {user, isUserAuthenticated} = useAuth();
    const [following, setFollowing] = useState([]);

    useEffect(() => {
        if (user.id !== userDto.id) {
            fetchFollowing()
        }
    }, [user])

    const fetchFollowing = () => {
        getFollowingByUserId(user.id).then(res => {
            setFollowing(res.data);
        }).catch(err => console.log(err));
    }

    const handleClick = () => {
        const data = {
            followerId: user.id,
            followingId: userDto.id,
        }
        registerFollow(data).then(res => {
            successNotification("Success", `You now follow ${userDto.username}`);
            fetchFollowing();
        }).catch(err => {
            console.log(err)
            errorNotification(err.code, err.message);
        })
    }
    console.log(following);

    const FollowButton = () => {
        if (user.id === userDto.id) {
            return <></>
        }
        else if (following.some(following => following.following.id === userDto.id)) {
            return <></>;
        }
        else {
            return (
                <Button
                    bg={'white'}
                    color={'blue'}
                    onClick={handleClick}
                >
                    Follow
                </Button>
            );
        }
    }

    return (
        <HStack>
            <Text fontWeight={'bold'} fontSize={'lg'}>@{userDto.username}</Text>
            <FollowButton />
        </HStack>
    );
}

export default UserFollowCard;