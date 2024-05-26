import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Box, Heading, Grid, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Image, Text, Link } from '@chakra-ui/react';
import NewsBox from "../shared/NewsBox";

const news = [
    {
        title: "The US Senate AI Gang Says ‘Spend Heavy, Regulate Light’ ",
        primaryText: "Politics",
        secondaryText: "A relentless heat wave persisted across large parts of the country for the seventh consecutive day on Thursday, with temperatures soaring to 48.8 degrees Celsius in Rajasthan's Barmer, marking the highest recorded temperature in the country so far this year.",
        fullText: "The bipartisan Senate AI Work Group, known as the AI Gang, held months of discussion, hundreds of meetings, and nine forums. This week, it produced 19 pages of recommendations, launching a roadmap for US AI policy that called for $32 billion in public spending — but no concrete regulation. Unsurprisingly, large AI firms are pleased. Consumer groups and others are disappointed. Above all, the Senate action demonstrates the deep difference between the US and EU approaches to tech policy. US lawmakers believe it is premature to restrain fast-moving AI innovation. In contrast, the EU’s AI Act bans facial recognition applications and tools that exhibit racial or other discrimination. Both sides could learn from each other. Outside of recent legislation mandating the sale or ban of the social media app TikTok, the US has failed to pass major tech legislation in years. The EU is filling the gap, setting global regulatory standards. But the US is pouring money into research and development of new technologies, while the EU falls behind in productivity and competitiveness. For the US Senate AI Gang, money is the priority, with specific suggestions on how and where to spend federal funds on AI development. Some Gang members wanted a figure even higher than $32 billion per year. The plan’s formal title Driving Innovation in Artificial Intelligence points to US leadership in AI both as an opportunity and as essential to maintain competitiveness. ",
        picture: "https://cepa.org/wp-content/uploads/2024/05/2023-11-08T000000Z_1983126113_MT1IMGOST000WOXILA_RTRMADP_3_IMAGO-IMAGES-1400x933.jpg",
    },
    {
        title: "How ‘introverted’ Iga Świątek became a four-time grand slam champion and the world’s highest-paid female athlete",
        primaryText: "Sport",
        secondaryText: "Calm and understated, Iga Świątek rarely appears flustered by the triumphant highs and heart-breaking lows of professional tennis, but discovering that she would be crowned world No. 1 for the first time was an exception.",
        fullText: "I'm often jealous of London tourists. They’re able to see my home city through joy-filled, unjaded eyes: to truly be awestruck by the grandeur of the Houses of Parliament and St Paul’s; to stop on the Millennium Bridge and stare in wonder at a capital split in two by the mighty Thames; to look upon the heaving streets around Leicester Square without scorn. Lift 109 offers a unique perspective of the city, combining history and modern innovation.",
        picture: "https://media.cnn.com/api/v1/images/stellar/prod/2024-05-04t203121z-2005211522-up1ek541k6h0x-rtrmadp-3-tennis-madrid.JPG?q=w_1110,c_fill/f_webp",
    },
    {
        title: "Brooklyn's Prospect Park Zoo reopens after 8-month flood closure",
        primaryText: "Culture",
        secondaryText: "Brooklyn's Prospect Park Zoo is welcoming its first guests since devastating flooding back in September. The zoo has been closed for 239 days, as crews worked to repair exhibits and other infrastructure.",
        fullText: "Brooklyn's Prospect Park Zoo is welcoming its first guests since devastating flooding back in September. The zoo has been closed for 239 days, as crews worked to repair exhibits and other infrastructure. The reopening includes several new exhibits and improvements to the existing facilities, providing a better experience for visitors.",
        picture: "https://www.prospectpark.org/wp-content/uploads/filer_public/8b/e4/8be4d0a2-315e-4fe1-a69b-3cb29343a09f/julie_larsen_maher_3273_sea_lion_pool_with_visitors_ppz_08_20_14.jpg",
    },
    {
        title: "New tech innovation changing the world",
        primaryText: "Technology",
        secondaryText: "A new technological breakthrough is set to revolutionize the industry, bringing new advancements and opportunities.",
        fullText: "A new technological breakthrough is set to revolutionize the industry, bringing new advancements and opportunities. This innovation promises to enhance productivity, improve quality of life, and drive economic growth on a global scale.",
        picture: "https://wiipa.org/wp-content/uploads/2023/03/photo_2023-03-25_23-12-23.jpg",
    }
];

const News = () => {
    const [selectedNews, setSelectedNews] = useState(null);

    const openModal = (newsItem) => {
        setSelectedNews(newsItem);
    };

    const closeModal = () => {
        setSelectedNews(null);
    };

    return (
        <div>
            <Navbar />
            <Box p="4">
                <Heading as="h1" mb="4" textAlign="center">Latest News</Heading>
                <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap="4">
                    {news.map((newsItem, index) => (
                        <NewsBox
                            key={index}
                            title={newsItem.title}
                            primaryText={newsItem.primaryText}
                            secondaryText={newsItem.secondaryText}
                            linkText="Read more..."
                            onClick={() => openModal(newsItem)}
                        />
                    ))}
                </Grid>
            </Box>
            {selectedNews && (
                <Modal isOpen={true} onClose={closeModal}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{selectedNews.title}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Image src={selectedNews.picture} alt={`Image of ${selectedNews.title}`} mb={4} />
                            <Text>{selectedNews.fullText}</Text>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="blue" onClick={closeModal}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            )}
            <Footer />
        </div>
    );
}

export default News;
