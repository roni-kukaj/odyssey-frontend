import {Box, Checkbox, Text, Button, Flex} from "@chakra-ui/react";
import {useEffect, useState} from "react";

const ActivityCheckbox = ({activity, selectedActivities, setSelectedActivities}) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setIsChecked(selectedActivities.includes(activity));
    }, [selectedActivities, activity]);

    const handleClick = () => {
        if (isChecked) {
            setSelectedActivities(selectedActivities.filter(act => act !== activity));
        } else {
            setSelectedActivities([...selectedActivities, activity]);
        }
        setIsChecked(!isChecked);
    };

    return (
        <Box
            bg="gray.100"
            py={2}
            px={3}
            my={2}
            w={'100%'}
            borderRadius="lg"
            as={Button}
            onClick={handleClick}
            _hover={{
                borderColor: 'blue.500',
                borderWidth: '1px',
                borderStyle: 'solid',
                '& .checkbox-hover': {
                    borderColor: 'blue.200',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                },
            }}
        >
            <Flex w="100%" justifyContent="space-between" alignItems="center">
                <Text fontSize={'lg'}>{activity.name}</Text>
                <Checkbox isChecked={isChecked} bg={'white'} className="checkbox-hover"  />
            </Flex>
        </Box>
    );
}

export default ActivityCheckbox;