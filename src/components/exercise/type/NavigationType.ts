import { NavigatorScreenParams } from '@react-navigation/native';

export type RootDrawerParamList = {
  HomeTab: undefined;
  SettingsStack:  NavigatorScreenParams<SettingsStackParamList>;
};

export type HomeTabParamList = {
  Feed: { updatedAge?: number } | undefined;
  Messages: undefined;
};

export type SettingsStackParamList = {
  SettingsMain: undefined;
  Profile: {
    user: string;
    age: number;
    onUpdateAge: (newAge: number) => void;
  };
};
