// Core
import { useState } from "react";

// Components
import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";

// Libs
import { Heading, VStack, SectionList, Text } from "native-base";

export const History = () => {
  // States
  const [exercisesHistory, setExercisesHistory] = useState([
    {
      title: "27.08.22",
      data: ["Puxada Frontal"],
    },
    {
      title: "27.08.22",
      data: ["Puxada Frontal"],
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        // Props
        sections={exercisesHistory}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        ListEmptyComponent={() => (
          <Text color="gray.300" textAlign={"center"}>
            Nao ha exercicio registrados ainda.
          </Text>
        )}
        // Styles
        px={8}
        contentContainerStyle={
          exercisesHistory.length === 0 && {
            flex: 1,
            justifyContent: "center",
          }
        }
      />
    </VStack>
  );
};
