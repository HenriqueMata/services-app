import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList, Image } from "react-native";
import api from "../../../api/axiosConfig";
import colors from "../../../assets/colors";
import CardDefault from "../../components/CardDefault";
import styles from "./style";

const Calendar: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/?limit=5 ");
        setData(response.data);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 16,
        }}
      >
        <ActivityIndicator size="large" color={colors.primaryColor} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CardDefault>
        <View>
          <View style={styles.containerHeader}>
            <View style={styles.lineVertical} />
            <Text style={styles.textHeader}>Movies</Text>
          </View>
          <FlatList
            contentContainerStyle={{ marginTop: 18 }}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  marginVertical: 10,
                  borderWidth: 0.5,
                  borderColor: colors.gray,
                }}
              />
            )}
            data={data}
            renderItem={({ item: { title, year, poster, genre, rating } }) => (
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={{ uri: poster }}
                  width={100}
                  height={100}
                  style={{ borderRadius: 12 }}
                />
                <View style={{ marginLeft: 12 }}>
                  <Text>{rating}</Text>
                  <Text>{title}</Text>
                  <Text>{genre}</Text>
                  <Text>{year}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </CardDefault>
    </View>
  );
};

export default Calendar;
