import { PropsWithChildren } from "react";
import { render, RenderOptions } from "@testing-library/react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { CityProvider } from "@contexts/CityContext";

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <CityProvider>{children}</CityProvider>
    </SafeAreaProvider>
  );
};

export function customTestRender(
  component: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) {
  return render(component, {
    wrapper: Providers,
    ...options,
  });
}
