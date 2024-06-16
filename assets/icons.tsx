import { AntDesign, Feather } from "@expo/vector-icons";

type IconProps = {
  color: string;
};

type IconFunction = (props: IconProps) => JSX.Element;

type Icons = {
  index: IconFunction;
  explore: IconFunction;
  create: IconFunction;
  profile: IconFunction;
};

export const icons: Icons = {
  index: ({ color }) => <AntDesign name="home" size={26} color={color} />,
  explore: ({ color }) => <Feather name="compass" size={26} color={color} />,
  create: ({ color }) => (
    <AntDesign name="pluscircleo" size={26} color={color} />
  ),
  profile: ({ color }) => <AntDesign name="user" size={26} color={color} />,
};
