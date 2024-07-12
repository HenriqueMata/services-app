import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import CardHome from "../../components/CardHome";

import styles from "./style";
import SearchInput from "../../components/SearchInput";
import CardOffer from "../../components/CardOffer";
import { offers, categories } from "../../../mockData";
import CardCategories from "../../components/CardCategories";
import colors from "../../../assets/colors";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "..";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CardHome>
        <Text style={styles.textName}>HELLO HENRIQUE 👋</Text>
        <Text style={styles.textWelcome}>What you are looking for today</Text>
        <SearchInput placeholder="Search what you need..." />
      </CardHome>
      <CardHome>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
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

      <CardHome>
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          horizontal
          data={categories.slice(0, 4)}
          maxToRenderPerBatch={4}
          ItemSeparatorComponent={() => <View style={{ width: 28 }} />}
          renderItem={({
            item: { iconName, label, backgroundColor },
            index,
          }) => {
            if (index === 3) {
              return (
                <CardCategories
                  index={index}
                  iconName="default"
                  label="See all"
                  backgroundColor={colors.white2}
                  onPress={() => navigation.navigate("AllCategories")}
                />
              );
            }

            return (
              <CardCategories
                iconName={iconName}
                label={label}
                backgroundColor={backgroundColor}
              />
            );
          }}
        />
      </CardHome>
    </ScrollView>
  );
};

export default HomeScreen;
