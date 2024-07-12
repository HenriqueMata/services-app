import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import CardHome from "../../components/CardHome";

import styles from "./style";
import SearchInput from "../../components/SearchInput";
import CardOffer from "../../components/CardOffer";
import { offers, categories } from "../../../mockData";

const HomeScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CardHome>
        <Text style={styles.textName}>HELLO HENRIQUE 👋</Text>
        <Text style={styles.textWelcome}>What you are looking for today</Text>
        <SearchInput />
      </CardHome>
      <CardHome>
        <FlatList
          horizontal
          data={offers}
          ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
          renderItem={({
            item: { title, backgroundColor, offer, textColor },
          }) => (
            <CardOffer
              title={title}
              textColor={textColor}
              backgroundColor={backgroundColor}
              offer={offer}
            />
          )}
        />
      </CardHome>

      <CardHome></CardHome>
    </ScrollView>
  );
};

export default HomeScreen;
