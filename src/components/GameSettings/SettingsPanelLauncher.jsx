import SettingsPanelLauncherDesktop from "../../assets/SettingsPanelLauncher.svg?react";

export default function SettingsPanelLauncher({
  handleOpenSettingsPanel,
  handleContent,
}) {
  return (
    <SettingsPanelLauncherDesktop
      className="SettingsPanelLauncher"
      onClick={() => {
        handleOpenSettingsPanel();
        handleContent("type");
      }}
    />
  );
}
