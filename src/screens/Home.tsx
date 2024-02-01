// Core
import { useState } from "react";

// Libs
import { FlatList, HStack, Heading, Text, VStack } from "native-base";

// Components
import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";
import { ExerciseCard } from "@components/ExerciseCard";

// Contexts
import { usePrivateRoutesNavigation } from "@context/usePrivateRoutesNavigationContext copy";

export const Home = () => {
  // Hooks
  const { handleNavigate } = usePrivateRoutesNavigation();

  // States
  const [groups, setGroups] = useState(["costa", "peito", "perna", "ombro"]);
  const [groupSelected, setGroupSelected] = useState("costa");
  const [exercises, setExercises] = useState([
    { title: "Puxada frontal", description: "3 séries x 12 repetições" },
    { title: "Puxada frontal 2", description: "3 séries x 12 repetições" },
    { title: "Puxada frontal 3", description: "3 séries x 12 repetições" },
  ]);

  // Functions
  const handleOpenExerciseDetails = () => {
    handleNavigate("Exercise");
  };

  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            onPress={() => setGroupSelected(item)}
            isActive={groupSelected === item}
          />
        )}
        ListEmptyComponent={() => <Text>Empty...</Text>}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
        minH={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading fontFamily="heading" color="gray.200">
            Exercicios
          </Heading>

          <Text color="gray.200" fontSize="sm">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={({ title }) => title}
          renderItem={({ item: { title, description } }) => (
            <ExerciseCard
              title={title}
              description={description}
              onPress={handleOpenExerciseDetails}
            />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  );
};
