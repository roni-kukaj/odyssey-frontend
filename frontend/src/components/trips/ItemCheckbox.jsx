import {useEffect, useState} from "react";
import {Box, Button, Checkbox, Flex, Text} from "@chakra-ui/react";

const ItemCheckbox = ({item, selectedItems, setSelectedItems}) => {

    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setIsChecked(selectedItems.includes(item));
    }, [selectedItems, item]);

    const handleClick = () => {
        if (isChecked) {
            setSelectedItems(selectedItems.filter(it => it !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
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
                <Text fontSize={'lg'}>{item.name}</Text>
                <Checkbox isChecked={isChecked} bg={'white'} className="checkbox-hover"  />
            </Flex>
        </Box>
    );

}

export default ItemCheckbox;