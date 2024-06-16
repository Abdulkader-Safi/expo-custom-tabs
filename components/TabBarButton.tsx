import { icons } from "@/assets/icons";
import { Pressable, StyleSheet, Text } from "react-native";

const TabBarButton = (props: any) => {
  const { isFocused, label, routeName, color } = props;

  return (
    <Pressable {...props} style={styles.container}>
      {icons[routeName]({
        color,
      })}

      <Text
        style={[
          {
            color,
            fontSize: 11,
          },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});

export default TabBarButton;
