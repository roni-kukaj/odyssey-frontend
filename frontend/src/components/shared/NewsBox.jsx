import React from "react";
import {Box, Heading, Text, Link} from "@chakra-ui/react";

const NewsBox = ({ title, primaryText, secondaryText, linkText }) => {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box p="4">
                <Heading as="h2" size="md" mb="2">{ title }</Heading>
                <Text fontSize="sm" mb="2">{ primaryText }</Text>
                <Text fontSize="sm" color="gray.500">{ secondaryText }</Text>
                <Link isExternal color="blue.500">{ linkText }</Link>
            </Box>
        </Box>
    );
}
export default NewsBox;