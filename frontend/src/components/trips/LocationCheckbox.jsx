import {Box, Checkbox, Text, Button, Flex} from "@chakra-ui/react";
import {useEffect, useState} from "react";

const LocationCheckbox = ({location, selectedLocations, setSelectedLocations}) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setIsChecked(selectedLocations.includes(location));
    }, [selectedLocations, location]);

    const handleClick = () => {
        if (isChecked) {
            setSelectedLocations(selectedLocations.filter(loc => loc !== location));
        } else {
            setSelectedLocations([...selectedLocations, location]);
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
                <Text fontSize={'lg'}>{location.city}, {location.country}</Text>
                <Checkbox isChecked={isChecked} bg={'white'} className="checkbox-hover"  />
            </Flex>
        </Box>
    );
}

export default LocationCheckbox;