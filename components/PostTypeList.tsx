import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import ListItem from "./ListItem";
import { data } from "@/data";


const PostTypeList = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <View style={{ marginTop: 20 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 10 }}
      >
        {data.map((item) => {
          const isSelected = item.id === selectedId;
          return (
            <ListItem
              key={item.id}
              itemId={item.id}
              setSelectedId={setSelectedId}
              isSelected={isSelected}
              itemName={item.name}
              labelTagColor={item.tagColor}
              itemImage={item.image}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default PostTypeList;
