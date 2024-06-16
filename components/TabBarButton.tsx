import { icons } from "@/assets/icons";
import { Pressable, StyleSheet, Text } from "react-native";

const TabBarButton = (props: any) => {
  return (
    <Pressable {...props} style={styles.container}>
      {icons[props.routeName]({
        color: props.color,
      })}
      <Text
        style={{
          color: props.color,
          fontSize: 11,
        }}
      >
        {props.label}
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
