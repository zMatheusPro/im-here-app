import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const participants = [
    "John",
    "Mary",
    "Peter",
    "Matheus",
    "João",
    "Camila",
    "Ana",
    "Jaque",
    "Edilson",
    "Thiago",
    "Luiz",
  ];

  function handleParticipantAdd() {
    if (participants.includes("Matheus")) {
      return Alert.alert("Participante existe", "Matheus já está na lista");
    }

    console.log("Você clicou no botão de adicionar");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover participante", `Deseja remover ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Participante removido"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);

    console.log("Você removeu usuário " + name);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Nome do participante" />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant name={item} onRemove={handleParticipantRemove} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguem chegou no evento ainda? adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
