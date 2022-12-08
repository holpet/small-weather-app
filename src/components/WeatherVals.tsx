interface Props {
  onIsVisible: Boolean;
  temp: string;
  icon: string;
}

export default function WeatherVals({ onIsVisible, temp, icon }: Props) {
  if (onIsVisible) {
    return (
      <>
        <h3 className="tempTitle">{temp} °C.</h3>
        <img src={icon} />
      </>
    );
  } else return <></>;
}
